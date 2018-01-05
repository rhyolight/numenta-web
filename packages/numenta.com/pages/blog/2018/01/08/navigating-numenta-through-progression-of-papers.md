---
author: Christy Maver
brief: "For the near thirteen years that Numenta has existed, we have had two missions: reverse-engineer the neocortex to understand how we learn and behave and enable technology based on brain theory. While we sometimes refer to them as dual missions, the order matters. We’ve gone through different business models over the years-from focusing on a single product to building example applications to now focusing solely on neuroscience research and theory. Yet our primary mission has always been a scientific one."
date: 2018/01/08
hideImage: false
image: ../images/research-papers.png
org: VP of Marketing
tags: numenta hierarchical temporal memory htm blog
title: "Navigating Numenta’s Brain Theory through a Progression of Papers"
type: post
---
<br>
<p style="margin-left: 0pt; display: inline">For the near thirteen years that Numenta has existed, we have had two missions: </p>

1.	Reverse-engineer the neocortex to understand how we learn and behave
2.	Enable technology based on brain theory

While we sometimes refer to them as dual missions, the order matters. We’ve gone through different business models over the years-from focusing on a single product to building example applications to now focusing solely on neuroscience research and theory. Yet our primary mission has always been a scientific one.

### The Balancing Act: Scientific Research vs. Scientific Publishing

As Jeff explained in a [blog post this summer](https://numenta.com/blog/2017/07/18/Numenta-Research-FY-2018/), the past two years have put us on an accelerated scientific course. In early 2016, we had a major insight related to brain theory. That insight has unlocked additional discoveries and set the stage for tackling new challenges that were previously unsolvable. Just as important as progressing the research, however, is documenting it.  While that demands a balance of focusing on the future and parsing the past, we’ve made it a goal to document all of our discoveries in scientific journals.

Coincidentally, early 2016 brought milestones on the publishing front as well as the research, as we published our first peer-reviewed paper in March 2016.  Since then, we have published a total of 5, with more in the works, in addition to supplemental white papers and research manuscripts. As we continue to build out a library articulating our brain theory, questions may arise like: How do the papers relate to each other? What’s the significance of each one?  How do they contribute to the overall theory?

### Mapping our Progress through Papers

If you had to summarize our research hypothesis in one high-level statement it would be, “How does the brain learn predictive models of the world?”  Our progress to date can be summarized by two important discoveries, each one marked by a fundamental paper:

1.	**How the brain learns predictive models of extrinsic sequences**  
*[Why Neurons Have Thousands of Synapses, a Theory of Sequence Memory in the Neocortex](https://numenta.com/papers/why-neurons-have-thousands-of-synapses-theory-of-sequence-memory-in-neocortex/)* (Frontiers in Neural Circuits, 2016)

2.	**How the brain learns predictive models of sensorimotor sequences**  
*[A Theory of How Columns in the Neocortex Learn the Structure of the World](https://numenta.com/papers/a-theory-of-how-columns-in-the-neocortex-enable-learning-the-structure-of-the-world/)* (Frontiers in Neural Circuits, 2017)

Extrinsic sequences are those where sensory inputs change due to external factors. For example, when you hear a song, the melody changes regardless of where you are or what you’re doing as you listen.  Sensorimotor sequences are those where inputs change due to your own behavior.  When you turn your head, for example, you see an entirely different view of the world, but not because the world is moving. Your movement changes the input to your retina.

As you can see in the diagram below, most of our existing papers relate to the first discovery.  In addition to the keystone “*[Why Neurons Have Thousands of Synapses, a Theory of Sequence Memory in the Neocortex](https://numenta.com/papers/why-neurons-have-thousands-of-synapses-theory-of-sequence-memory-in-neocortex/)*,” we’ve produced papers that focus on one particular aspect of the theory or related applications.  Going forward, we plan to do the same for the sensorimotor work.  “*[A Theory of How Columns in the Neocortex Learn the Structure of the World](https://numenta.com/papers/a-theory-of-how-columns-in-the-neocortex-enable-learning-the-structure-of-the-world/)*” is the first of many we hope to publish on the new research.

### Numenta Research Papers

<head>
<style>
table, th,  td {
    border: 1px solid black;
    font-size:	13px;
}
</style>
</head>
<body>

<table style="border-collapse: collapse;">
<thead>
<tr>
  <th><b><font size="3">Discovery 1: How the brain learns predictive models of extrinsic sequences</font></b></th>
</tr>
</thead>
<tbody>
<tr>
<td><b><font size="3">Key Paper:</font><br><br></b><i><a href="https://numenta.com/papers/why-neurons-have-thousands-of-synapses-theory-of-sequence-memory-in-neocortex/">Why Neurons Have Thousands of Synapses, a Theory of Sequence Memory in the Neocortex</a></i>
<ul><li><b>New pyramidal neuron model</b> – how most of a neuron’s activity is dedicated to predicting</li><li><b>Sequence memory model</b> – how a layer of neurons learns sequences of patterns</li>
<li><b>Sparse distributed representations (SDRS)</b> – how the brain represents uncertainty</li></ul>
<br>
<b><u>Supporting Papers:</b></u>
<br><br>
<b>Sequence memory model:</b><br><a href="https://numenta.com/papers/continuous-online-sequence-learning-with-an-unsupervised-neural-network-model/"><i>Continuous Online Sequence Learning with an Unsupervised Neural Network Model</i></a>
<ul>
<li>Analysis of HTM sequence memory applied to various sequence learning and prediction problems
<br>
<li>Compares HTM to statistical and Deep Learning techniques</li></ul>
<br>
<b>SDRs:</b><br><i><a href="http://bit.ly/theHTMSP">The HTM Spatial Pooler: A Neocortical Algorithm for Online Sparse Distributed Coding</a></i>
<ul>
<li>Introduces Spatial Pooler and explains how it models how neurons learn feedforward connections<br><li>Shows how the Spatial Pooler creates SDRs and supports essential neural computations such as sequence learning and memory</li><br></ul>
<a href="http://arxiv.org/abs/1601.00720"><i>How Do Neurons Operate on Sparse Distributed Representations? A Mathematical Theory of Sparsity, Neurons and Active Dendrites</i></a><ul>
<li>Proposes a formal mathematical model for sparse representations and active dendrites in the cortex<br><li>Quantifies the benefits and limitations of sparse representations in neurons and cortical networks</li></ul>
<br>
<a href="http://arxiv.org/abs/1503.07469"><i>Properties of Sparse Distributed Representations and their Application To Hierarchical Temporal Memory</i></a></i><ul><li>Applies sparse representations to practical HTM systems<br><li>Earlier version of the above paper</li></ul>
<tr>
  <td>
  <b><font size="3">Applications of Discovery 1:</font>
<br><br>
Machine Learning Applications</b>
<br>
<a href="https://numenta.com/papers/unsupervised-real-time-anomaly-detection-for-streaming-data/"><i>Unsupervised Real-Time Anomaly Detection for Streaming Data</i></a><ul><li>Demonstrates how HTM meets the requirements necessary for real-time anomaly detection in streaming data<br><li>Presents results using the Numenta Anomaly Benchmark (NAB), the first open-source benchmark designed for testing anomaly detection algorithms on streaming data </li></ul><br>
<a href="http://arxiv.org/abs/1510.03336"><i>Evaluating Real-time Anomaly Detection Algorithms-the Numenta Anomaly Benchmark</i></a><ul><li>Discusses how we should think about anomaly detection for streaming applications</li><li>Introduces a new open-source benchmark for detecting anomalies in real-time, time-series data</ul><br>
<a href="http://arxiv.org/abs/1602.05925"><i>Encoding Data for HTM Systems</i></a><br><ul><li>Describes how to encode data as Sparse Distributed Representations (SDRs) for use in HTM systems<br><li>Explains several existing encoders and discusses requirements for creating encoders for new types of data</li></ul>
<br>
  <b>Neuromorphic Applications</b>
  <br>
<a href="http://arxiv.org/abs/1505.02142"><i>Porting HTM Models to the Heidelberg Neuromorphic Computing Platform</i></a><br><ul><li>Provides an example of how to port HTM algorithms to analog hardware platforms</li></ul>
</tbody>
</table>

<head>
<style>
table, th,  td {
    border: 1px solid black;
    font-size:	13px;
}
</style>
</head>
<body>

<table style="border-collapse: collapse;">
<thead>
<tr>
  <th><b><font size="3">Discovery 2: How the brain learns predictive models of sensorimotor sequences</font></b></th>
</tr>
</thead>
<tbody>
<tr>
<td><b><font size="3">Key Paper:</font></b><br><br>
<i><a href="https://numenta.com/papers/a-theory-of-how-columns-in-the-neocortex-enable-learning-the-structure-of-the-world/">A Theory of How Columns in the Neocortex Learn the Structure of the World</a></i><ul><li><b>Extension of sequence memory model</b> – how multiple layers of neurons learn to recognize objects through movement</li><li><b>Location signal</b> – key feature of cortical function that every column computes for all input</li><li><b>Every column can learn complete objects</b> – through movement</li></ul>
<br>
<b><u>Supporting Paper:</b></u><br><br>
  <a href="https://doi.org/10.1101/190678"><i>Untangling Sequences: Behavior vs. External Causes</a></i><ul><li>Describes a cortical model for untangling sensorimotor from external sequences<br><li>Shows how a single neural mechanism can learn and recognize these two types of sequences</li></ul></td>

</tbody>
</table>

Though the publishing process can take more than a year for a single paper, we’ll share our work as we go, along with any pre-print manuscripts, until eventually our cortical theory and its associated papers are complete.  Until then, we invite you to catch up on what’s available so far, [including this video presentation at MIT on December 15](https://cbmm.mit.edu/video/have-we-missed-half-what-neocortex-does-allocentric-location-basis-perception) where Jeff discussed the content from our two fundamental papers, as well as new material that we have yet to document.
