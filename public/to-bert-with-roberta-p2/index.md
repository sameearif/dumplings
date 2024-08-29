---
title: "To BERT, with RoBERTa: Part II"
date: '2024-08-29'
spoiler: "Fine-tuning the models for question-answering."
image: "/to-bert-with-roberta-p2/bert.png"
---

![Slide from the talk](bert.png)
<div style={{ textAlign: 'center', fontSize: '12px', marginTop: '-20px' }}>
  Figure 1: *Illustration generated using GPT-4o*
</div>

### Introduction
In this blog, we will look at the fine-tuning of BERT<sup>[1]</sup> and RoBERTa <sup>[2]</sup>for Question-Answering on the UQA Corpus<sup>[3]</sup> from my paper, UQA: A Corpus for Urdu Question Answering<sup>[4]</sup>. Closed-ended question-answering can be treated as a classification task, where the model predicts the start token and the end token from the given context. The answer for `Q: What are we about to do with the model?` using the tokenized context in Figure 1 is `A: Fine-tune`. Therefore the task of the encoder-only model is to predict the `start_token = 2` and `end_token = 4`.
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', marginTop: '-20px', marginBottom: '30px', fontSize: '12px' }}>
    <span style={{ backgroundColor: '#e6e6fa', padding: '10px', margin: '4px', borderRadius: '8px', color: '#000', width: '50px', height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>[CLS]</span>
    <span style={{ backgroundColor: '#f0fff0', padding: '10px', margin: '4px', borderRadius: '8px', color: '#000', width: '50px', height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Let's</span>
    <span style={{ backgroundColor: '#fffacd', padding: '10px', margin: '4px', borderRadius: '8px', color: '#000', width: '50px', height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>fine</span>
    <span style={{ backgroundColor: '#e6e6fa', padding: '10px', margin: '4px', borderRadius: '8px', color: '#000', width: '50px', height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>-</span>
    <span style={{ backgroundColor: '#f0fff0', padding: '10px', margin: '4px', borderRadius: '8px', color: '#000', width: '50px', height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>tune</span>
    <span style={{ backgroundColor: '#fffacd', padding: '10px', margin: '4px', borderRadius: '8px', color: '#000', width: '50px', height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>the</span>
    <span style={{ backgroundColor: '#ffdab9', padding: '10px', margin: '4px', borderRadius: '8px', color: '#000', width: '50px', height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>model</span>
    <span style={{ backgroundColor: '#add8e6', padding: '10px', margin: '4px', borderRadius: '8px', color: '#000', width: '50px', height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>!</span>
    <span style={{ backgroundColor: '#e6e6fa', padding: '10px', margin: '4px', borderRadius: '8px', color: '#000', width: '50px', height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>[SEP]</span>
</div>
<div style={{ textAlign: 'center', fontSize: '12px', marginTop: '-20px' }}>
  Figure 1: *Tokenized context for closed-ended question-answering*
</div>

### Fine-tuning
#### 1. Setup Environment
We will use the `transformers`<sup>[5]</sup> and `accelerate`<sup>[6]</sup> library for fine-tuning, and the `datasets`<sup>[7]</sup> library to load the UQA dataset from Hugging Face<sup>[9]</sup>.
```shell
pip install transformers
pip install accelerate
pip install datasets
```

#### 2. Setup Parameters
You can choose from the multilingual (because we are training for Urdu) BERT and RoBERTa family and within each family of models, you can choose the size of the model.
```python
MODEL = "xlm-roberta-base" # or "bert-base-multilingual-cased"
SAVE_DIR = "xlm-roberta-base-uqa"

LEARNING_RATE = 2e-5
EPOCHS = 6
TRAIN_BATCH_SIZE = 8
EVAL_BATCH_SIZE = 8
```

#### 3. Load and Filter the Dataset
The UQA corpus has two types of question, (1) Answerable questions: These are questions for which a clear, definite answer can be extracted directly from the provided context (2) Unanswerable questions: These are questions for which the answer cannot be found in the provided context but they look similar to answerable questions. We will fine-tune our model on only the answerable questions so we need to filter out the unanswerable ones.
```python
def filter_function(example):
    return not example['is_impossible']
```

```python
from datasets import load_dataset

raw_datasets = load_dataset("UQA")
raw_datasets["train"] = raw_datasets["train"].filter(filter_function)
raw_datasets["validation"] = raw_datasets["validation"].filter(filter_function)
```

#### 4. Load the Model and Tokenizer
```python
from transformers import AutoTokenizer, AutoModelForQuestionAnswering

tokenizer = AutoTokenizer.from_pretrained(MODEL)
model = AutoModelForQuestionAnswering.from_pretrained(MODEL)
```

#### 5. Data Pre-processing
Both BERT and RoBERTa can process texts of the maximal length of 512 tokens. However as the size of the input tokens increase, the VRAM (GPU memory) required to train the model increases. Therefore, depending the the dataset, we can check if the the required maximum sequence length is less than 512 using the code below.

```python
max_seq_length = 0
for item in raw_dataset["train"]:
  tokens = tokenizer.encode(item["question"] + "\n\n" + item["context"])
  if len(tokens) > max_seq_length:
    max_seq_length = len(tokens)

for item in raw_dataset["validation"]:
  tokens = tokenizer.encode(item["question"] + "\n\n" + item["context"])
  if len(tokens) > max_seq_length:
    max_seq_length = len(tokens)

if max_seq_length > 512:
  max_seq_length = 512

stride = 128
```

The preprocessing function tokenizes the inputs with specific parameters. First, it applies tokenization to the question and context pairs, with the `max_length` parameter defining the maximum sequence length for the tokenized output. If the combined length of the question and context exceeds this limit, the `truncation="only_second"` option ensures that only the context is truncated, not the question. The `stride` parameter allows for the creation of overlapping chunks when the context is too long to fit within the `max_length`, which is particularly useful for long passages. Additionally, the function is configured with `return_overflowing_tokens=True`, which ensures that when the context is split into multiple chunks due to its length, these extra chunks (overflowing tokens) are returned instead of being discarded. The `return_offsets_mapping=True` option provides a mapping between token positions and their corresponding characters in the original context. Finally, the `padding="max_length"` parameter ensures that all sequences in a batch are padded to the same length.

After tokenization, we extract the `offset_mapping`, which links token positions to their corresponding characters in the original context, and the `overflow_to_sample_mapping`, which connects each tokenized chunk back to its original sample. We then align the answer's character positions with the corresponding token positions by identifying the boundaries of the context within each tokenized sequence. It checks whether the answer lies within each chunk and, if so, calculates the start and end token positions based on the character positions of the answer. These calculated start and end positions are then incorporated into the `inputs` dictionary, along with the tokenized sequences.

```python
def preprocess_examples(examples):
    questions = [q.strip() for q in examples["question"]]
    inputs = tokenizer(
        questions,
        examples["context"],
        max_length=max_seq_length,
        truncation="only_second",
        stride=stride,
        return_overflowing_tokens=True,
        return_offsets_mapping=True,
        padding="max_length",
    )

    offset_mapping = inputs.pop("offset_mapping")
    sample_map = inputs.pop("overflow_to_sample_mapping")
    answers = examples["answer"]
    answer_starts = examples["answer_start"]
    start_positions = []
    end_positions = []

    for i, offset in enumerate(offset_mapping):
        sample_idx = sample_map[i]
        answer = answers[sample_idx]
        start_char = answer_starts[sample_idx]
        end_char = answer_starts[sample_idx] + len(answer)
        sequence_ids = inputs.sequence_ids(i)

        idx = 0
        while sequence_ids[idx] != 1:
            idx += 1
        context_start = idx
        while sequence_ids[idx] == 1:
            idx += 1
        context_end = idx - 1

        if offset[context_start][0] > start_char or offset[context_end][1] < end_char:
            start_positions.append(0)
            end_positions.append(0)
        else:
            idx = context_start
            while idx <= context_end and offset[idx][0] <= start_char:
                idx += 1
            start_positions.append(idx - 1)

            idx = context_end
            while idx >= context_start and offset[idx][1] >= end_char:
                idx -= 1
            end_positions.append(idx + 1)

    inputs["start_positions"] = start_positions
    inputs["end_positions"] = end_positions
    return inputs
```

```python
train_dataset = raw_datasets["train"].map(
    preprocess_examples,
    batched=True,
    remove_columns=raw_datasets["train"].column_names,
)
len(raw_datasets["train"]), len(train_dataset)
```

```python
validation_dataset = raw_datasets["validation"].map(
    preprocess_examples,
    batched=True,
    remove_columns=raw_datasets["validation"].column_names,
)
len(raw_datasets["validation"]), len(validation_dataset)
```

#### 6. Training Arguments
Gradient accumulation is a technique that simulates a larger batch size by accumulating gradients from multiple small batches before performing a weight update. It can be helpful in scenarios where the available memory is limited, and the batch size that can fit in memory is small. So you can adjust `gradient_accumulation_steps` accordingly. Data collator handles the task of preparing batches of data before they are fed into the model during training or evaluation.
```python
from transformers import default_data_collator, TrainingArguments, Trainer

args = TrainingArguments(
    output_dir=REPO,
    num_train_epochs=EPOCHS,
    learning_rate=LEARNING_RATE,
    evaluation_strategy = "epoch",
    save_strategy = "epoch",
    gradient_accumulation_steps=8,
    per_device_train_batch_size=TRAIN_BATCH_SIZE,
    per_device_eval_batch_size=EVAL_BATCH_SIZE,
    weight_decay=0.01,
    fp16=True,
    push_to_hub=True
)

data_collator = default_data_collator
```

```python
trainer = Trainer(
    model,
    args,
    train_dataset=train_dataset,
    eval_dataset=validation_dataset,
    data_collator=data_collator,
    tokenizer=tokenizer
)
```

#### 7. Start Training
```python
trainer.train()
```

### Inference
#### 1. Setup Environment
```python
import torch
from transformers import AutoTokenizer, AutoModelForQuestionAnswering
```

```python
DEVICE = "cuda" if torch.cuda.is_available() else "cpu"
```

#### 2. Load the Model and Tokenizer
```python
tokenizer = AutoTokenizer.from_pretrained("SAVE_DIR\checkpoint-XYZ") # Replace XYZ with the best checkpoint from training
model = AutoModelForQuestionAnswering.from_pretrained("SAVE_DIR\checkpoint-XYZ")
```

#### 3. Run Inference
```python
context = "ہم اپنے فائن ٹیونڈ سوال و جواب ماڈل پر جلد ہی انفریئنس چلانے والے ہیں!"
question = "ہم کیا کرنے والے ہیں؟"
inputs = tokenizer(question, context, truncation="only_second", padding="max_length", truncation=True, max_length=512, return_tensors="pt").to("cuda")
with torch.no_grad():
  output = model(**inputs)
  start_logits, end_logits = output.start_logits, output.end_logits
  start_idx = torch.argmax(start_logits[0])
  end_idx = torch.argmax(end_logits[0])
  answer = tokenizer.decode(inputs["input_ids"][0][start_idx:end_idx+1])
```

```python
print(f"Context": {context})
print(f"Question": {question})
print(f"Answer": {answer})
```
```
Context: ہم اپنے فائن ٹیونڈ سوال و جواب ماڈل پر جلد ہی انفریئنس چلانے والے ہیں!
Question: ہم کیا کرنے والے ہیں؟
Answer: انفریئنس
```

### References
<div style={{ fontSize: '14px', marginTop: '-10px' }}>
  [1] <a href="https://aclanthology.org/N19-1423/" target="_blank">BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding</a>
</div>
<div style={{ fontSize: '14px', marginTop: '-10px' }}>
  [2] <a href="https://arxiv.org/abs/1907.11692" target="_blank">RoBERTa: A Robustly Optimized BERT Pretraining Approach</a>
</div>
<div style={{ fontSize: '14px', marginTop: '-10px' }}>
  [3] <a href="https://huggingface.co/datasets/uqa/UQA" target="_blank">UQA Corpus</a>
</div>
<div style={{ fontSize: '14px', marginTop: '-10px' }}>
  [4] <a href="https://aclanthology.org/2024.lrec-main.1497/" target="_blank">UQA: Corpus for Urdu Question Answering</a>
</div>
<div style={{ fontSize: '14px', marginTop: '-10px' }}>
  [5] <a href="https://huggingface.co/docs/transformers/en/index" target="_blank">Transformers Library</a>
</div>
<div style={{ fontSize: '14px', marginTop: '-10px' }}>
  [6] <a href="https://huggingface.co/docs/accelerate/en/index" target="_blank">Accelerate Library</a>
</div>
<div style={{ fontSize: '14px', marginTop: '-10px' }}>
  [7] <a href="https://huggingface.co/docs/datasets/en/index" target="_blank">Datasets Library</a>
</div>
<div style={{ fontSize: '14px', marginTop: '-10px' }}>
  [8] <a href="https://huggingface.co/" target="_blank">Hugging Face</a>
</div>
