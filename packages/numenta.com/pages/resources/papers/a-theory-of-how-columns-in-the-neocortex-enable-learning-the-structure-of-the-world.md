---
author: "Jeff Hawkins, Subutai Ahmad & Yuwei Cui"
brief: "This paper proposes a network model composed of columns and layers that performs robust object learning and recognition. The model introduces a new feature to cortical columns, location information, which is represented relative to the object being sensed. Pairing sensory features with locations is a requirement for modeling objects and therefore must occur somewhere in the neocortex. We propose it occurs in every column in every region."
category: neuroscience, sensorimotor
date: 2017/10/25
hideImage: true
image: ../images/sensorimotor.png
link: https://doi.org/10.3389/fncir.2017.00081
org: "Published in Frontiers in Neural Circuits Journal"
sort: a
title: "A Theory of How Columns in the Neocortex Enable Learning the Structure of the World"
type: post
---

| | |
|-|-|
| **Authors** | J. Hawkins, S. Ahmad & Yuwei Cui |
| **Journal** | Frontiers in Neural Circuits 11, 81. `doi:10.3389/FNCIR.2017.00081` |
| **Online** | [Read or Download this Paper][1] |
| **Published** | October 25, 2017 |


It is widely observed that movement affects how we sense objects in the world, but how this happens in the brain has remained a mystery.  In this paper, we propose a network model that learns the structure of objects through movement. Our model is based on the known biology of cortical columns and layers, and helps explain their function.
 Object recognition in our model can be achieved in two ways:
1.	Over time, as individual columns integrate changing inputs to recognize complete objects
2.	Through existing lateral connections, as multiple columns integrate inputs over space, allowing the network to infer more quickly, based on shared partial knowledge among adjacent columns

We also propose a new feature of cortical columns that helps explain how sensorimotor inference occurs: allocentric location. We propose that within each column, the neocortex is calculating a location representation and assigning features of an object to a location in the external world.  These object features are always relative to each other, as opposed to relative to you.  The pairing of sensory and location information is happening everywhere in the brain, in every region, all at once.

We demonstrate through simulations that even a single-column network can learn to recognize hundreds of complex objects. Multiple columns can share information to more rapidly recognize objects. This suggests that single regions have the ability to recognize and model objects much more robustly than previously assumed.    

<iframe width="560" height="315" src="https://www.youtube.com/embed/BvJJn9VS4rk" frameborder="0" allowfullscreen></iframe>
<br/> <p align="center">This video demonstrates how cortical columns can use location information to form robust predictive models of objects.
Although the video uses touch, the same mechanism can be applied to all sensory modalities.</p>

## Frequently asked questions about this research

### Q. What was the purpose of this study?

The purpose of this paper was to explore how the brain learns through movement and builds a 3D model of the world. This study is part of our larger effort to reverse engineer the neocortex, and improve our overall understanding of how the brain learns.  It builds on our existing research, and incorporates the same neural network which we introduced in our [theory of sequence memory in the neocortex](/resources/papers/why-neurons-have-thousands-of-synapses-theory-of-sequence-memory-in-neocortex/).

### Q. What are the key takeaways?

* The brain calculates an allocentric location for features of any given object. It is allocentric because the location of features on an object are relative to that object as opposed to relative to you.

* Specific layers in every region receive as input sensory features and allocentric locations, and compute feature-location pairs. Those pairs are fed up to an output layer, which forms stable representations of objects.

* Lateral connections between cortical columns in the output layer allow them to share partial information to more rapidly recognize objects.

* These computations are happening everywhere in the brain, in every region, all at once, meaning that columns and regions have more powerful recognition and modeling capabilities than previously assumed.

### Q. How does this research differ from other studies?

The standard view of object recognition in the neocortex involves a passive processing of sensory data through a hierarchy of regions, where each region extracts increasingly complex features, until the object is eventually recognized.  Our research suggests a much more dynamic view. We propose that every region incorporates motion and is much more sophisticated than normally assumed.

### Q. How were the simulations conducted?

For this paper, we wrote simulation code in Python and used the reference HTM implementation available in the open source project [NuPIC](https://www.numenta.org). The algorithm code for forming sensorimotor predictions (the input layer) can also be used for sequence learning and to demonstrate all the properties described in [Why Neurons Have Thousands of Synapses, A Theory of Sequence Memory in Neocortex](/resources/papers/why-neurons-have-thousands-of-synapses-theory-of-sequence-memory-in-neocortex/).  They both use the same HTM neuron model – the primary difference being the contextual input sent to the active dendrites.

### Q. Can I replicate these simulations?

Yes! In keeping with Numenta’s [open research philosophy](/blog/2014/09/17/increasing-research-transparency/), you can access the source code and data for all scripts in this [HTM papers repository](https://github.com/numenta/htmpapers). We also welcome questions and discussion about the paper on the [HTM Forum](https://discourse.numenta.org/).

### Q. How will this paper make contributions in neuroscience?

We believe this paper will have an impact on how neuroscientists think about the neocortex.  Because each region and column is more powerful than most neuroscientists have understood, our discovery opens up new possibilities across the field for understanding the brain more fully. We outline specific predictions that could be used by experimental neuroscientists to test the theory.

### Q. How does this paper make contributions in machine intelligence?

The sensorimotor inference theory introduced in this paper will enable the building of machines that learn about their world the same way our brains learn about ours – via movement.

### Q. Where can I find out more?

The [HTM Forum](https://discourse.numenta.org/) is a great resource for further questions and discussion on
HTM theory. The authors of this paper are active participants in the forum.

### Q. What is next for this research?

Our sensorimotor inference theory is an important piece of our overall goal of reverse-engineering the neocortex.  Our current research is focused on understanding all the functions of cortical columns and on hierarchy.

[1]: https://doi.org/10.3389/fncir.2017.00081
