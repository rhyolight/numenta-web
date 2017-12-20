---
author: Christy Maver
brief: "For the near thirteen years that Numenta has existed, we have had two missions:  1)	Reverse-engineer the neocortex to understand how we learn and behave, 2)	Enable technology based on brain theory. While we sometimes refer to them as dual missions, the order matters. We’ve gone through different business models over the years-from focusing on a single product to building example applications to now focusing solely on neuroscience research and theory. Yet our primary mission has always been a scientific one."
date: 2017/12/20
hideImage: false
image: ../images/paper-notebooks.png
org: VP of Marketing
tags: numenta hierarchical temporal memory htm blog
title: "Navigating Numenta’s Brain Theory through a Progression of Papers"
type: post
---

For the near thirteen years that Numenta has existed, we have had two missions:  
1.	Reverse-engineer the neocortex to understand how we learn and behave
2.	Enable technology based on brain theory

While we sometimes refer to them as dual missions, the order matters. We’ve gone through different business models over the years-from focusing on a single product to building example applications to now focusing solely on neuroscience research and theory. Yet our primary mission has always been a scientific one.

**The Balancing Act: Scientific Research vs. Scientific Publishing**

As Jeff explained in a [blog post this summer](https://numenta.com/blog/2017/07/18/Numenta-Research-FY-2018/), the past two years have put us on an accelerated scientific course. In early 2016, we had a major insight related to brain theory. That insight has unlocked additional discoveries and set the stage for tackling new challenges that were previously unsolvable. Just as important as progressing the research, however, is documenting it.  While that demands a balance of focusing on the future and parsing the past, we’ve made it a goal to document all of our discoveries in scientific journals.

Coincidentally, early 2016 brought milestones on the publishing front as well as the research, as we published our first peer-reviewed paper in March 2016.  Since then, we have published a total of 5, with more in the works, in addition to supplemental white papers and research manuscripts. As we continue to build out a library articulating our brain theory, questions may arise like: How do the papers relate to each other? What’s the significance of each one?  How do they contribute to the overall theory?

**Mapping our Progress through Papers**

If you had to summarize our research hypothesis in one high-level statement it would be, “How does the brain learn predictive models of the world?”  Our progress to date can be summarized by two important discoveries, each one marked by a fundamental paper:

1)	How the brain learns predictive models of extrinsic sequences  
***[Why Neurons Have Thousands of Synapses, a Theory of Sequence Memory in the Neocortex](https://numenta.com/papers/why-neurons-have-thousands-of-synapses-theory-of-sequence-memory-in-neocortex/)*** (Frontiers in Neural Circuits, 2016)

2)	How the brain learns predictive models of sensorimotor sequences  
***[A Theory of How Columns in the Neocortex Learn the Structure of the World](https://numenta.com/papers/a-theory-of-how-columns-in-the-neocortex-enable-learning-the-structure-of-the-world/)*** (Frontiers in Neural Circuits, 2017)

Extrinsic sequences are those where sensory inputs change due to external factors. For example, when you hear a song, the melody changes regardless of where you are or what you’re doing as you listen.  Sensorimotor sequences are those where inputs change due to your own behavior.  When you turn your head, for example, you see an entirely different view of the world, but not because the world is moving. Your movement changes the input to your retina.  

As you can see in the diagram below, most of our existing papers relate to the first discovery.  In addition to the keystone “*[Why Neurons Have Thousands of Synapses, a Theory of Sequence Memory in the Neocortex](https://numenta.com/papers/why-neurons-have-thousands-of-synapses-theory-of-sequence-memory-in-neocortex/)*,” we’ve produced papers that focus on one particular aspect of the theory or related applications.  Going forward, we plan to do the same for the sensorimotor work.  “*[A Theory of How Columns in the Neocortex Learn the Structure of the World](https://numenta.com/papers/a-theory-of-how-columns-in-the-neocortex-enable-learning-the-structure-of-the-world/)*” is the first of many we hope to publish on the new research.  

|   | *How the brain learns predictive models of extrinsic sequences* | *How the brain learns predictive models of sensorimotor sequences* |
| - |------------------------------------------ | ------------------------------------------ |
| **Key Paper** | *[Why Neurons Have Thousands of Synapses, a Theory of Sequence Memory in the Neocortex](https://numenta.com/papers/why-neurons-have-thousands-of-synapses-theory-of-sequence-memory-in-neocortex/)* <br/><br/> •	**New pyramidal neuron model** – how most of a neuron’s activity is dedicated to predicting <br/> •	**Sequence memory model** – how a layer of neurons learns sequences of patterns <br/> •	**Sparse distributed representations (SDRS)** – how the brain represents uncertainty |	*[A Theory of How Columns in the Neocortex Learn the Structure of the World](https://numenta.com/papers/a-theory-of-how-columns-in-the-neocortex-enable-learning-the-structure-of-the-world/)* <br/><br/> •	**Extension of sequence memory model** – how multiple layers of neurons learn to recognize objects through movement <br/> •	**Location signal** – key feature of cortical function that every column computes for all input <br/> •	**Every column can learn complete objects** – through movement |
| **Supporting Papers** | **Sequence memory model:** <br/><br/> *[Continuous Online Sequence Learning with an Unsupervised Neural Network Model](https://numenta.com/papers/continuous-online-sequence-learning-with-an-unsupervised-neural-network-model/)*	<br/><br/> **SDRs:** <br/><br/> *[The HTM Spatial Pooler: A Neocortical Algorithm for Online Sparse Distributed Coding](http://bit.ly/theHTMSP)* <br/><br/> *[How Do Neurons Operate on Sparse Distributed Representations? A Mathematical Theory of Sparsity, Neurons and Active Dendrites](http://arxiv.org/abs/1601.00720)* <br/><br/> *[Properties of Sparse Distributed Representations and their Application To Hierarchical Temporal Memory](http://arxiv.org/abs/1503.07469)* |      |
| <td colspan=2 align=center> *[Untangling Sequences: Behavior vs. External Causes](https://doi.org/10.1101/190678)* |
| **Machine Learning Applications** | *[Unsupervised Real-Time Anomaly Detection for Streaming Data](https://numenta.com/papers/unsupervised-real-time-anomaly-detection-for-streaming-data/)*	<br/><br/> *[Evaluating Real-time Anomaly Detection Algorithms - the Numenta Anomaly Benchmark](http://arxiv.org/abs/1510.03336)* <br/><br/> *[Encoding Data for HTM Systems](http://arxiv.org/abs/1602.05925)* |     |
| **Neuromorphic Applications** | *[Porting HTM Models to the Heidelberg Neuromorphic Computing Platform](http://arxiv.org/abs/1505.02142)* |    |   |

Though the publishing process can take more than a year for a single paper, we’ll share our work as we go, along with any pre-print manuscripts, until eventually our cortical theory and its associated papers are complete.  Until then, we invite you to catch up on what’s available so far, [including this video presentation at MIT on December 15](https://cbmm.mit.edu/video/have-we-missed-half-what-neocortex-does-allocentric-location-basis-perception) where Jeff discussed the content from our two fundamental papers, as well as new material that we have yet to document.
