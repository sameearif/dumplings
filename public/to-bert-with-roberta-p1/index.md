---
title: "To BERT, with RoBERTa: Part I"
date: '2024-08-26'
spoiler: "Basic understanding of the encoder-only models."
image: "/to-bert-with-roberta-p1/bert.png"
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

<div style={{ display: 'flex', alignItems: 'center', marginTop: '-20px' }}>
  <span style={{ color: 'black', backgroundColor: '#FFD1DC', padding: '2px', borderRadius: '5px', marginRight: '10px', width: '60px', textAlign: 'center', fontSize: '12px', flexShrink: 0 }}>[CLS]</span>
  <span style={{ fontSize: '14px' }}>Indicates the start of the sequence.</span>
</div>

<div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
  <span style={{ color: 'black', backgroundColor: '#AEC6CF', padding: '2px', borderRadius: '5px', marginRight: '10px', width: '60px', textAlign: 'center', fontSize: '12px', flexShrink: 0 }}>[SEP]</span>
  <span style={{ fontSize: '14px' }}>Used to separate different segments in a sequence.</span>
</div>

<div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
  <span style={{ color: 'black', backgroundColor: '#FFB347', padding: '2px', borderRadius: '5px', marginRight: '10px', width: '60px', textAlign: 'center', fontSize: '12px', flexShrink: 0 }}>[MASK]</span>
  <span style={{ fontSize: '14px' }}>Represents masked tokens that the model attempts to predict.</span>
</div>

<div style={{ display: 'flex', alignItems: 'center', marginTop: '10px', marginBottom: '15px' }}>
  <span style={{ color: 'black', backgroundColor: '#CFCFC4', padding: '2px', borderRadius: '5px', marginRight: '10px', width: '60px', textAlign: 'center', fontSize: '12px', flexShrink: 0 }}>[PAD]</span>
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

These token IDs are then used to look up corresponding vectors in a large matrix called the **embedding matrix**. The embedding matrix is a learned parameter of the model and is initialized randomly before training. If the model’s dimensionality is `h`, and the vocabulary size is `n`, the embedding matrix will have dimensions `(n x h)`. Each row in this matrix corresponds to the embedding of a particular token ID. For each token ID, the corresponding row from the embedding matrix is retrieved. 

<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '0px' }}>
  <table style={{ borderCollapse: 'collapse', fontSize: '12px', textAlign: 'center' }}>
    <thead>
      <tr>
        <th style={{ border: '1px solid white', padding: '8px' }}>Token</th>
        <th style={{ border: '1px solid white', padding: '8px' }}>Embedding Dimension 1</th>
        <th style={{ border: '1px solid white', padding: '8px' }}>Embedding Dimension 2</th>
        <th style={{ border: '1px solid white', padding: '8px' }}>...</th>
        <th style={{ border: '1px solid white', padding: '8px' }}>Embedding Dimension h</th>
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
      <tr>
        <td style={{ border: '1px solid white', padding: '8px' }}>...</td>
        <td style={{ border: '1px solid white', padding: '8px' }}>...</td>
        <td style={{ border: '1px solid white', padding: '8px' }}>...</td>
        <td style={{ border: '1px solid white', padding: '8px' }}>...</td>
        <td style={{ border: '1px solid white', padding: '8px' }}>...</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid white', padding: '8px' }}>Token<sub>n</sub></td>
        <td style={{ border: '1px solid white', padding: '8px' }}>...</td>
        <td style={{ border: '1px solid white', padding: '8px' }}>...</td>
        <td style={{ border: '1px solid white', padding: '8px' }}>...</td>
        <td style={{ border: '1px solid white', padding: '8px' }}>...</td>
      </tr>
    </tbody>
  </table>
</div>
<p style={{ textAlign: 'center', marginTop: '2px', fontSize: '12px', marginBottom: '-10px' }}><em>These values are random and not the actual values.</em></p>

#### 2. Positional Embeddings
The positional embeddings are learnable parameters, just like the token embeddings. During the initialization phase of the model, the positional embedding vectors is initalized with random values. For example, if the model is designed to handle sequences of up to `s` tokens, there will be `s` positional embedding vectors, one for each possible position in the input sequence. Since Transformers do not have a built-in notion of sequence order, positional embeddings are added to the token embeddings. These embeddings encode the position of each token in the sequence, allowing the model to understand the order of words. In the case of Dumplings, 1st postition vector will be added the the input embedding of "Dump" and 2nd position vector will be added to the input embedding of "##lings".

#### 3. Encoder Block
#### a. Multi-Head Attention
Multi-head attention, allows the model to focus on different parts of the sequence simultaneously. This mechanism helps the model capture complex relationships between words, regardless of their distance in the sequence.

After adding the Input Embeddings and Positional Embeddings, we'll get final embeddings `X`. Therefore our matrix `X` would be:
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '-10px' }}>
  <table style={{ borderCollapse: 'collapse', fontSize: '12px', textAlign: 'center' }}>
    <tbody>
      <tr>
        <td style={{ border: '1px solid white', padding: '8px' }}>Dump</td>
        <td style={{ border: '1px solid white', padding: '8px' }}>e<sub>11</sub></td>
        <td style={{ border: '1px solid white', padding: '8px' }}>e<sub>12</sub></td>
        <td style={{ border: '1px solid white', padding: '8px' }}>...</td>
        <td style={{ border: '1px solid white', padding: '8px' }}>e<sub>1k</sub></td>
      </tr>
      <tr>
        <td style={{ border: '1px solid white', padding: '8px' }}>##lings</td>
        <td style={{ border: '1px solid white', padding: '8px' }}>e<sub>21</sub></td>
        <td style={{ border: '1px solid white', padding: '8px' }}>e<sub>22</sub></td>
        <td style={{ border: '1px solid white', padding: '8px' }}>...</td>
        <td style={{ border: '1px solid white', padding: '8px' }}>e<sub>2k</sub></td>
      </tr>
      <tr>
        <td style={{ border: '1px solid white', padding: '8px' }}>are</td>
        <td style={{ border: '1px solid white', padding: '8px' }}>e<sub>31</sub></td>
        <td style={{ border: '1px solid white', padding: '8px' }}>e<sub>32</sub></td>
        <td style={{ border: '1px solid white', padding: '8px' }}>...</td>
        <td style={{ border: '1px solid white', padding: '8px' }}>e<sub>3k</sub></td>
      </tr>
      <tr>
        <td style={{ border: '1px solid white', padding: '8px' }}>ta</td>
        <td style={{ border: '1px solid white', padding: '8px' }}>e<sub>41</sub></td>
        <td style={{ border: '1px solid white', padding: '8px' }}>e<sub>42</sub></td>
        <td style={{ border: '1px solid white', padding: '8px' }}>...</td>
        <td style={{ border: '1px solid white', padding: '8px' }}>e<sub>4k</sub></td>
      </tr>
      <tr>
        <td style={{ border: '1px solid white', padding: '8px' }}>##sty</td>
        <td style={{ border: '1px solid white', padding: '8px' }}>e<sub>51</sub></td>
        <td style={{ border: '1px solid white', padding: '8px' }}>e<sub>52</sub></td>
        <td style={{ border: '1px solid white', padding: '8px' }}>...</td>
        <td style={{ border: '1px solid white', padding: '8px' }}>e<sub>5k</sub></td>
      </tr>
    </tbody>
  </table>
</div>
<p style={{ textAlign: 'center', marginTop: '10px', lineHeight: '15px', fontSize: '12px', marginBottom: '-10px' }}>
  <em>The shape of `X` is `(s, h)` where `h` is the model's dimensionality (embedding vector size) and `s` is the input sequence length (number of input tokens).</em>
</p>

<div>
  <span>
    The input embedding <code>X</code> is linearly transformed into three different matrices: 
    <code>Query (Q)</code>, <code>Key (K)</code>, and <code>Value (V)</code>. This is done by 
    multiplying <code>X</code> by three different weight matrices: 
    <code>W<sub>Q</sub></code>, <code>W<sub>K</sub></code>, and <code>W<sub>V</sub></code>. 
    The shape of these weight matrices is <code>(h<sub>head</sub>, h<sub>head</sub>)</code>, where <code>h<sub>head</sub> = h/n<sub>heads</sub></code>, and <code>n<sub>heads</sub></code> is the number of attention heads. The resulting <code>Q</code>, <code>K</code>, and <code>V</code> matrices have the shape <code>(s, h<sub>head</sub>)</code>.
  </span>
</div>

<div style={{ marginBottom: '-25px' }}>
  <span>
    After this, the attention scores are calculated by multiplying the Query matrix 
    <code>Q</code> with the transpose of Key matrix <code>K<sup>T</sup></code>. 
    The result of dot products is an attention score matrix with a shape of 
    <code>(s, s)</code> that indicates the similarity between each token. 
    This shows how much each token (represented by a query) "attends" to every other token 
    (represented by a key). The attention scores are divided by the square root of <code>h<sub>head</sub></code> (to prevent the scores from becoming too large as the dimension increases) 
    and then the scaled attention scores are passed through a softmax function to obtain the attention weights. 
    The attention weights below, <code>s21</code> gives the importance of "Dump" while processing "##lings".
  </span>
</div>

<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px', marginBottom: '20px' }}>
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <table style={{ borderCollapse: 'collapse', fontSize: '12px', textAlign: 'center' }}>
      <tbody>
        <tr>
          <td style={{ border: '1px solid white', padding: '8px' }}></td>
          <td style={{ border: '1px solid white', padding: '8px' }}>Dump</td>
          <td style={{ border: '1px solid white', padding: '8px' }}>##lings</td>
          <td style={{ border: '1px solid white', padding: '8px' }}>are</td>
          <td style={{ border: '1px solid white', padding: '8px' }}>ta</td>
          <td style={{ border: '1px solid white', padding: '8px' }}>##sty</td>
        </tr>
        <tr>
          <td style={{ border: '1px solid white', padding: '8px' }}>Dump</td>
          <td style={{ border: '1px solid white', padding: '8px' }}>s<sub>11</sub></td>
          <td style={{ border: '1px solid white', padding: '8px' }}>s<sub>12</sub></td>
          <td style={{ border: '1px solid white', padding: '8px' }}>s<sub>13</sub></td>
          <td style={{ border: '1px solid white', padding: '8px' }}>s<sub>14</sub></td>
          <td style={{ border: '1px solid white', padding: '8px' }}>s<sub>15</sub></td>
        </tr>
        <tr>
          <td style={{ border: '1px solid white', padding: '8px' }}>##lings</td>
          <td style={{ border: '1px solid white', padding: '8px' }}>s<sub>21</sub></td>
          <td style={{ border: '1px solid white', padding: '8px' }}>s<sub>22</sub></td>
          <td style={{ border: '1px solid white', padding: '8px' }}>s<sub>23</sub></td>
          <td style={{ border: '1px solid white', padding: '8px' }}>s<sub>24</sub></td>
          <td style={{ border: '1px solid white', padding: '8px' }}>s<sub>25</sub></td>
        </tr>
        <tr>
          <td style={{ border: '1px solid white', padding: '8px' }}>are</td>
          <td style={{ border: '1px solid white', padding: '8px' }}>s<sub>31</sub></td>
          <td style={{ border: '1px solid white', padding: '8px' }}>s<sub>32</sub></td>
          <td style={{ border: '1px solid white', padding: '8px' }}>s<sub>33</sub></td>
          <td style={{ border: '1px solid white', padding: '8px' }}>s<sub>34</sub></td>
          <td style={{ border: '1px solid white', padding: '8px' }}>s<sub>35</sub></td>
        </tr>
        <tr>
          <td style={{ border: '1px solid white', padding: '8px' }}>ta</td>
          <td style={{ border: '1px solid white', padding: '8px' }}>s<sub>41</sub></td>
          <td style={{ border: '1px solid white', padding: '8px' }}>s<sub>42</sub></td>
          <td style={{ border: '1px solid white', padding: '8px' }}>s<sub>43</sub></td>
          <td style={{ border: '1px solid white', padding: '8px' }}>s<sub>44</sub></td>
          <td style={{ border: '1px solid white', padding: '8px' }}>s<sub>45</sub></td>
        </tr>
        <tr>
          <td style={{ border: '1px solid white', padding: '8px' }}>##sty</td>
          <td style={{ border: '1px solid white', padding: '8px' }}>s<sub>51</sub></td>
          <td style={{ border: '1px solid white', padding: '8px' }}>s<sub>52</sub></td>
          <td style={{ border: '1px solid white', padding: '8px' }}>s<sub>53</sub></td>
          <td style={{ border: '1px solid white', padding: '8px' }}>s<sub>54</sub></td>
          <td style={{ border: '1px solid white', padding: '8px' }}>s<sub>55</sub></td>
        </tr>
      </tbody>
    </table>
    <div style={{ textAlign: 'center', marginTop: '10px', lineHeight: '15px', fontSize: '11px' }}>
      <em>Attention Weight Matrix `W` with the shape `(s, s)`: Softmax</em>
      <span style={{ display: 'inline-flex', alignItems: 'center' }}>
        <span style={{ marginLeft: '2px', marginRight: '2px' }}>(</span>
        <span style={{ display: 'inline-block', textAlign: 'center' }}>
          <span style={{ borderBottom: '1px solid', display: 'block' }}>Q × K<sup>T</sup></span>
          <span>&radic;h</span>
        </span>
        <span style={{ marginLeft: '2px', marginRight: '2px' }}>)</span>
      </span>
    </div>
  </div>
</div>


After we have the attention weight matrix `W`, we calcuate the output of the attention head using the equation `A = W x V`. We get `A` of shape <code>(s, h<sub>head</sub>)</code> and it is a context-aware representations for each token in the sequence, allowing the model to focus on the most important parts of the input when generating its final output.

<div>
  <span>
    In multi-head attention, this process is repeated for several heads (each with different 
    weight matrices <code>W<sub>Q</sub></code>, <code>W<sub>K</sub></code>, and <code>W<sub>V</sub></code>). 
    This allows the model to focus on different parts of the sequence. The output matrices 
    <code>A</code> from each head are concatenated to get the final output <code>A<sub>atten</sub></code> of multi-head attention. After concatenation, the shape of <code>A<sub>atten</sub></code> will be <code>(s, n<sub>head</sub>xh<sub>head</sub>) = (s, h)</code>.
  </span>
</div>


### References
<div style={{ fontSize: '14px', marginTop: '-10px' }}>
  [1] <a href="https://aclanthology.org/N19-1423/" target="_blank">BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding</a>
</div>
<div style={{ fontSize: '14px', marginTop: '-10px' }}>
  [2] <a href="https://arxiv.org/abs/1907.11692" target="_blank">RoBERTa: A Robustly Optimized BERT Pretraining Approach</a>
</div>
<div style={{ fontSize: '14px', marginTop: '-10px' }}>
  [3] <a href="https://aclanthology.org/2021.emnlp-main.160/" target="_blank">Fast WordPiece Tokenization</a>
</div>
