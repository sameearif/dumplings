---
title: "To BERT, with RoBERTa: Part II"
date: '2024-08-27'
spoiler: "Fine-tuning the models for question-answering."
image: "/to-bert-with-roberta-p2/bert.png"
---

![Slide from the talk](bert.png)
<div style={{ textAlign: 'center', fontSize: '12px', marginTop: '-20px' }}>
  Figure 1: *Illustration generated using GPT-4o*
</div>

```shell
pip install transformers
pip install accelerate
pip install datasets
pip install evaluate
```

```python
MODEL = "xlm-roberta-base"
REPO = "xlm-roberta-base-uqa"

MAX_LENGTH = 384
STRIDE = 128

LEARNING_RATE = 2e-5
EPOCHS = 6
```

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

```python
from transformers import AutoTokenizer, AutoModelForQuestionAnswering

tokenizer = AutoTokenizer.from_pretrained(MODEL)
model = AutoModelForQuestionAnswering.from_pretrained(MODEL)
```

```python
def preprocess_training_examples(examples):
    questions = [q.strip() for q in examples["question"]]
    inputs = tokenizer(
        questions,
        examples["context"],
        max_length=MAX_LENGTH,
        truncation="only_second",
        stride=STRIDE,
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
    preprocess_training_examples,
    batched=True,
    remove_columns=raw_datasets["train"].column_names,
)
len(raw_datasets["train"]), len(train_dataset)
```

```python
validation_dataset = raw_datasets["validation"].map(
    preprocess_training_examples,
    batched=True,
    remove_columns=raw_datasets["validation"].column_names,
)
len(raw_datasets["validation"]), len(validation_dataset)
```

```python
from transformers import default_data_collator, TrainingArguments, Trainer

args = TrainingArguments(
    output_dir=REPO,
    num_train_epochs=EPOCHS,
    learning_rate=LEARNING_RATE,
    evaluation_strategy = "epoch",
    save_strategy = "epoch",
    gradient_accumulation_steps=8,
    per_device_train_batch_size=16,
    per_device_eval_batch_size=16,
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

```python
trainer.train()
```
