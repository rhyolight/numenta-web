---
author: "Yuwei Cui, Subutai Ahmad & Jeff Hawkins"
description: "This paper describes an important component of HTM, the HTM spatial pooler, which is a neurally inspired algorithm that learns sparse distributed representations online. Written from a neuroscience perspective, the paper demonstrates key computational properties of the HTM spatial pooler."
category: neuroscience, sparse-distributed-representations
date: 2017/11/29
hideImage: true
image: ../images/spatialpooler.png
link: https://doi.org/10.3389/fncom.2017.00111
org: "Published in Frontiers in Neuroscience (Peer-reviewed)"
sort: e
title: "The HTM Spatial Pooler—A Neocortical Algorithm for Online Sparse Distributed Coding"
header: "The HTM Spatial Pooler—A Neocortical Algorithm for Online Sparse Distributed Coding"
keywords: "HTM Spatial Pooler"
type: post
---
 
| | |
|-|-|
| **Authors** | Y. Cui, S. Ahmad & J. Hawkins |
| **Journal** | Frontiers in Neuroscience, 11 `doi:10.3389/fncom.2017.00111` |
| **Online** | [Read or Download this Paper][1] |
| **Published** | November 29, 2017 |


Hierarchical temporal memory (HTM) provides a theoretical framework that models several key computational principles of the neocortex. This paper analyzes an important component of HTM, the HTM spatial pooler (SP). The HTM spatial pooler represents a neurally inspired learning algorithm for creating sparse representations from noisy data streams in an online fashion. It models how neurons learn feedforward connections and form efficient representations of the input. It converts arbitrary binary input patterns into sparse distributed representations (SDRs) using a combination of competitive Hebbian learning rules and homeostatic excitability control.

 ![HTM Spatial Pooler](../images/spatialpooler.png)

<center><i>
HTM Spatial pooler. A. An end-to-end HTM system consists of an encoder, the HTM spatial pooler, the HTM temporal memory, and an SDR classifier. B. The HTM spatial pooler converts inputs (bottom) to SDRs (top). C. An HTM neuron (left) has three distinct dendritic integration zones, corresponding to different parts of the dendritic tree of pyramidal neurons (right). The SP models the feedforward connections onto the proximal dendrite.
</center></i>

## Frequently asked questions about this research

### Q. What was the purpose of this study?

The purpose of this paper was to analyze the computational properties of the HTM spatial pooler and demonstrate its value in end-to-end HTM systems.  Inspired by computational principles of the neocortex, the goal of the HTM spatial pooler is to create SDRs and support essential neural computations such as sequence learning and memory. This is a supporting paper to [Why Neurons Have Thousands of Synapses, A Theory of Sequence Memory in Neocortex](https://doi.org/10.3389/fncir.2016.00023), which appeared in Frontiers in Neural Circuits, March 2016.

### Q. What are the key takeaways?

This paper highlights the key properties of the spatial pooler:

* Preserving the semantic similarity of the input space by mapping similar inputs to similar outputs

* Fast adaptation to changing input statistics

* Forming fixed sparsity representations

* Improved noise robustness through learning

* Efficient use of cells and robustness to cell death

* Maximizing the entropy of individual neurons

The paper demonstrates that the HTM spatial pooler achieves these properties and that these properties contribute to improved performance in an end-to end system. It is important to consider all of the above properties together. No single property is sufficient to ensure the SP is behaving properly.


### Q. How does this research differ from other studies?

Most previous studies of spare coding propose goals such as avoiding information loss and reducing energy consumption. This paper looks beyond preserving information and takes a different perspective; it asks how computational properties sparse coding contribute to downstream cortical processing in the context of a larger end to end system.

### Q. How were the simulations conducted?

For this paper, we wrote simulation code in Python to demonstrate various properties of the spatial pooler. We used the reference HTM implementation available in the open source project [NuPIC](https://github.com/numenta/nupic).

### Q. Can I replicate these simulations?

Yes! In keeping with Numenta’s [open research philosophy](/blog/2014/09/17/increasing-research-transparency/), you can access the source code and data for all scripts in this [HTM papers repository](https://github.com/numenta/htmpapers). We also welcome questions and discussion about the paper on the [HTM Forum](https://discourse.numenta.org/).

### Q. How will this paper make contributions in neuroscience?

A central problem in neuroscience is to understand how individual cortical neurons learn to respond to specific input spike patterns, and how a population of neurons collectively represents features of the inputs in a flexible, dynamic, yet robust way. HTM networks can learn time-based sequences in a continuous online fashion by using Sparse Distributed Representations (SDRs). HTM spatial pooler (SP) is a key component of HTM networks that continuously encodes streams of sensory inputs into SDRs.

### Q. How does this paper make contributions in machine learning?

The HTM spatial pooler leads to a flexible sparse coding scheme that can be used in practical machine learning applications.  By exploring functional properties of the HTM spatial pooler that have not yet been systematically analyzed, this paper enables new SP-based machine learning applications.

### Q. Where can I find out more?

The [HTM Forum](https://discourse.numenta.org/) is a great resource for further questions and discussion on
HTM theory. The authors of this paper are active participants in the forum.

### Q. What is next for this research?

This research is part of our foundation of papers detailing our overall goal of reverse-engineering the neocortex. Our current research focuses on sensorimotor inference theory, (how the neocortex learns and builds a model of the world through movement), and hierarchy.

[1]: https://doi.org/10.3389/fncom.2017.00111
