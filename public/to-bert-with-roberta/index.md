---
title: "To BERT, with RoBERTa: Part I"
date: '2024-08-26 '
spoiler: "Basic understanding of the two models."
image: "/to-bert-with-roberta/bert.png"
---

![Slide from the talk](bert.png)
<div style={{ textAlign: 'center', fontSize: '12px', marginTop: '-20px' }}>
  *Illustration generated using GPT-4o*
</div>
### Introduction
Both BERT<sup>[1]</sup> and RoBERTa<sup>[2]</sup> are encoder-only transformer models that transform an input sequence into a set of continuous representations (vectors) to capture the information and context of the input. These models can be applied to tasks listed below, by adding a classification layer on top of the model.

<ol style={{ marginTop: '-15px' }}>
  <li>
    <strong>1. Text Classification:</strong> 
    <div style={{ marginLeft: '20px', marginTop: '5px' }}>
      Example: <em>Sentiment Analysis</em> - Determining whether a review is positive, negative, or neutral.
    </div>
  </li>
  <li style={{ marginTop: '-30px' }}>
    <strong>2. Token Classification:</strong> 
    <div style={{ marginLeft: '20px', marginTop: '5px' }}>
      Example: <em>Named Entity Recognition (NER)</em> - Identifying and classifying each token in a sentence, such as names of people, organizations, or locations.
    </div>
  </li>
  <li style={{ marginTop: '-30px' }}>
    <strong>3. Masked Word Prediction:</strong> 
    <div style={{ marginLeft: '20px', marginTop: '5px' }}>
      Example: <em>Text Completion</em> - Predicting missing words in a sentence like "Pair the [MASK] with spicy ramen and chilli oil."
    </div>
  </li>
</ol>

### Model Architecture
![Slide from the talk](architecture.svg)
#### 1. Input Embeddings
Each word in the input sequence is first converted into tokens. BERT and RoBERTa use a WordPiece<sup>[3]</sup> tokenizer, which splits words into subwords or characters for rare or out-of-vocabulary words.

<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '0px' }}>
  <span style={{ fontWeight: 'bold', marginRight: '10px' }}>Dumplings</span>
  <span style={{ fontSize: '24px' }}>&#x27A1;</span>
  <div style={{ display: 'flex', alignItems: 'center', marginLeft: '10px' }}>
    <span style={{ color: 'black', backgroundColor: '#FECB6F', padding: '5px 5px', borderRadius: '5px', marginRight: '5px', fontSize: '12px' }}>Dump</span>
    <span style={{ color: 'black', backgroundColor: '#FECB6F', padding: '5px 5px', borderRadius: '5px', marginRight: '5px', fontSize: '12px' }}>##lings</span>
  </div>
</div>
<p style={{ textAlign: 'center', marginTop: '5px', fontSize: '12px', marginBottom: '-10px' }}><em>The ## indicates that the token is a continuation of the previous token.</em></p>

In addition to word and subword tokens, the vocabulary includes special tokens like:

<div style={{ display: 'flex', alignItems: 'center', marginTop: '-5px' }}>
  <span style={{ color: 'black', backgroundColor: '#FFD1DC', padding: '2px', borderRadius: '5px', marginRight: '10px', width: '60px', textAlign: 'center', fontSize: '12px' }}>[CLS]</span>
  <span style={{ fontSize: '14px' }}>Indicates the start of the sequence.</span>
</div>

<div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
  <span style={{ color: 'black', backgroundColor: '#AEC6CF', padding: '2px', borderRadius: '5px', marginRight: '10px', width: '60px', textAlign: 'center', fontSize: '12px' }}>[SEP]</span>
  <span style={{ fontSize: '14px' }}>Used to separate different segments in a sequence.</span>
</div>

<div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
  <span style={{ color: 'black', backgroundColor: '#FFB347', padding: '2px', borderRadius: '5px', marginRight: '10px', width: '60px', textAlign: 'center', fontSize: '12px' }}>[MASK]</span>
  <span style={{ fontSize: '14px' }}>Represents masked tokens that the model attempts to predict.</span>
</div>

<div style={{ display: 'flex', alignItems: 'center', marginTop: '10px',  marginBottom: '15px' }}>
  <span style={{ color: 'black', backgroundColor: '#CFCFC4', padding: '2px', borderRadius: '5px', marginRight: '10px', width: '60px', textAlign: 'center', fontSize: '12px' }}>[PAD]</span>
  <span style={{ fontSize: '14px' }}>Used for padding multiple sequences to the same length.</span>
</div>

This vocabulary is created by tokenizing the pre-training dataset, where tokens are ranked by their frequency in the corpus—more common tokens are assigned lower integer identifier ID numbers, while less common tokens receive higher ID numbers. Once the input text is tokenized, each token is mapped to a unique ID based on a predefined vocabulary. 
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '0px' }}>
  <div style={{ display: 'flex', alignItems: 'center', marginLeft: '10px' }}>
    <span style={{ color: 'black', backgroundColor: '#FECB6F', padding: '5px 5px', borderRadius: '5px', marginRight: '5px', fontSize: '12px' }}>Dump</span>
    <span style={{ color: 'black', backgroundColor: '#FECB6F', padding: '5px 5px', borderRadius: '5px', marginRight: '5px', fontSize: '12px' }}>##lings</span>
  </div>
  <span style={{ fontSize: '24px' }}>&#x27A1;</span>
  <div style={{ display: 'flex', alignItems: 'center', marginLeft: '10px' }}>
    <span style={{ color: 'black', backgroundColor: '#FFB0C1', padding: '5px 5px', borderRadius: '5px', marginRight: '5px', fontSize: '12px' }}>15653</span>
    <span style={{ color: 'black', backgroundColor: '#FFB0C1', padding: '5px 5px', borderRadius: '5px', marginRight: '5px', fontSize: '12px' }}>11227</span>
  </div>
</div>
<p style={{ textAlign: 'center', marginTop: '5px', fontSize: '12px', marginBottom: '-10px' }}><em>Each token has a unique ID.</em></p>

These token IDs are then used to look up corresponding vectors in a large matrix called the **embedding matrix**. The embedding matrix is a learned parameter of the model and is initialized randomly before training. If the model’s hidden size is *k*, and the vocabulary size is *n*, the embedding matrix will have dimensions *n* x *k*. Each row in this matrix corresponds to the embedding of a particular token ID. For each token ID, the corresponding row from the embedding matrix is retrieved. 

<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '0px' }}>
  <table style={{ borderCollapse: 'collapse', fontSize: '12px', textAlign: 'center' }}>
    <thead>
      <tr>
        <th style={{ border: '1px solid white', padding: '8px' }}>Token</th>
        <th style={{ border: '1px solid white', padding: '8px' }}>Embedding Dimension 1</th>
        <th style={{ border: '1px solid white', padding: '8px' }}>Embedding Dimension 2</th>
        <th style={{ border: '1px solid white', padding: '8px' }}>...</th>
        <th style={{ border: '1px solid white', padding: '8px' }}>Embedding Dimension k</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style={{ border: '1px solid white', padding: '8px' }}>Dump</td>
        <td style={{ border: '1px solid white', padding: '8px' }}>0.025</td>
        <td style={{ border: '1px solid white', padding: '8px' }}>-0.034</td>
        <td style={{ border: '1px solid white', padding: '8px' }}>...</td>
        <td style={{ border: '1px solid white', padding: '8px' }}>0.112</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid white', padding: '8px' }}>##lings</td>
        <td style={{ border: '1px solid white', padding: '8px' }}>-0.045</td>
        <td style={{ border: '1px solid white', padding: '8px' }}>0.081</td>
        <td style={{ border: '1px solid white', padding: '8px' }}>...</td>
        <td style={{ border: '1px solid white', padding: '8px' }}>0.067</td>
      </tr>
    </tbody>
  </table>
</div>
<p style={{ textAlign: 'center', marginTop: '2px', fontSize: '12px', marginBottom: '-10px' }}><em>These values are random and not the actual values.</em></p>

#### 2. Positional Embeddings
Since Transformers do not have a built-in notion of sequence order, positional embeddings are added to the token embeddings. These embeddings encode the position of each token in the sequence, allowing the model to understand the order of words.


### References
<div style={{ fontSize: '14px', lineHeight: '0', marginTop: '0px' }}>
  [1] <a href="https://aclanthology.org/N19-1423/" target="_blank">BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding</a>
</div>
<div style={{ fontSize: '14px', lineHeight: '0', marginTop: '0px' }}>
  [2] <a href="https://arxiv.org/abs/1907.11692" target="_blank">RoBERTa: A Robustly Optimized BERT Pretraining Approach</a>
</div>
<div style={{ fontSize: '14px', lineHeight: '0', marginTop: '0px' }}>
  [3] <a href="https://aclanthology.org/2021.emnlp-main.160/" target="_blank">Fast WordPiece Tokenization</a>
</div>
