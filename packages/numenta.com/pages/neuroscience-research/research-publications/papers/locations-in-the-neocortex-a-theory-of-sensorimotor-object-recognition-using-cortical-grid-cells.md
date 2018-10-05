---
author: "Jeff Hawkins, Subutai Ahmad & Yuwei Cui"
description: "This paper proposes a network model composed of columns and layers that performs robust object learning and recognition. The model introduces a new feature to cortical columns, location information, which is represented relative to the object being sensed."
keywords: sensorimotor inference, object recognition
category: neuroscience, sensorimotor
date: 2018/10/05
hideImage: true
image: ../images/network-diagram.svg
link:
org: "Preprint of journal submission"
sort: a
title: " Locations in the Neocortex: A Theory of Sensorimotor Object Recognition Using Cortical Grid Cells"
type: post

---

| | |
|-|-|
| **Authors** | Marcus Lewis, Scott Purdy, Subutai Ahmad, and Jeff Hawkins|
| **Journal** | Submitted |
| **Online** | [Read or Download the Preprint][1] |
| **Published** | October 5, 2018 |

Our October 2017 paper, “[A Theory of How Columns in the Neocortex Enable Learning the Structure of the World](/neuroscience-research/research-publications/papers/a-theory-of-how-columns-in-the-neocortex-enable-learning-the-structure-of-the-world/),” proposed a model for learning objects by using object-specific location signals. This new paper explains how these signals can be generated with a location layer that utilizes grid-cell-like neurons. This paper includes:

1.	A location layer implementation that has multiple grid-like modules that can uniquely encode locations on many complex objects. The layer uses sensory-derived and motor signals to infer the object and location over several sensations and movements.
2.	A model that includes the location layer and an input layer that combines sensory inputs and the location signal to determine an object-specific representation for the current sensory input.
3.	Simulations showing the model’s convergence and capacity scaling as the number of objects increases and the parameters of the models are varied.


![Network diagram](../images/network-diagram.svg)
> *Two-layer network diagram showing a sensory and location layer*

## Frequently asked questions about this research

### Q. What was the purpose of this study?

This work explores methods for deriving object-specific location signals from sensory and motor inputs. Our [October 2017 paper](/neuroscience-research/research-publications/papers/a-theory-of-how-columns-in-the-neocortex-enable-learning-the-structure-of-the-world/) proposed that this type of representation was necessary for recognizing objects and we can now show how to generate them through integration of sensory and motor inputs over time. The simulations show that many complex objects can be learned and distinguished in a single cortical columns.

### Q. What are the key takeaways?

* A location layer with multiple grid modules with varying scales and orientations can uniquely encode locations over very large areas.
* Choosing a random initial location in each module when learning objects provides object-specific location codes.
* Combining the location layer with an input layer provides a model that can learn and distinguish many complex objects.
* The number of objects that can be learned scales with the number of cells per location module and the distribution of unique sensory features across objects.


### Q. How does this research differ from other studies?

The standard view of object recognition in the neocortex involves a passive processing of sensory data through a hierarchy of regions, where each region extracts increasingly complex features, until the object is eventually recognized. Our previous research suggested a much more dynamic view in which every region learns complete models of objects. This new work provides a complete implementation that performs this task and simulations to show the ability for a single cortical column to learn many complex objects.

### Q. How were the simulations conducted?

Simulations were implemented in Python and leverage the reference HTM implementation in our open source project [NuPIC]( https://www.numenta.org/). The simulations use a new implementation for the location layer. The input layer is the same Temporal Memory algorithm described in our March 2016 paper, “[Why Neurons Have Thousands of Synapses, A Theory of Sequence Memory in Neocortex](neuroscience-research/research-publications/papers/why-neurons-have-thousands-of-synapses-theory-of-sequence-memory-in-neocortex/).”  

### Q. Can I replicate these simulations?

Yes! In keeping with Numenta’s [open research philosophy](/blog/2014/09/17/increasing-research-transparency/), you can access the source code and data for all scripts in this [HTM papers repository](https://github.com/numenta/htmpapers). We also welcome questions and discussion about the paper on the [HTM Forum](https://discourse.numenta.org/).

### Q. How will this paper make contributions in neuroscience?

This paper proposes a circuit between layers 4 and 6a in the neocortex and several testable hypotheses. We hope these will help direct neuroscience experiments that shed more light on the neural circuits that underlie object learning and inference in the neocortex.

### Q. How does this paper make contributions in machine learning?

This paper provides a complete implementation for learning and recognizing objects. Our [October 2017 paper](/neuroscience-research/research-publications/papers/a-theory-of-how-columns-in-the-neocortex-enable-learning-the-structure-of-the-world/) proposed the need for object-specific location signals and this new paper shows how these signals can be generated through the integration of sensory and motor inputs. The algorithm can be used to learn complex objects through movement.

### Q. Where can I find out more?

The [HTM Forum](https://discourse.numenta.org/) is a great resource for further questions and discussion on HTM theory. The authors of this paper are active participants in the forum.

In addition to this paper, we are publishing a higher level paper on the location-based framework for understanding the neocortex (LINK NEEDED) that will cover the relationship between learning environments and learning objects as well as emerging topics like object compositionality.


### Q. What is next for this research?

As mentioned in the paper, there are numerous avenues for further research. We are still trying to understand how locations are encoded in the neocortex. We need to extend the model to recognize learned objects at novel orientations to the sensor and to efficiently handle 3D objects. And we need to figure out how multiple cortical columns collaborate to learn and recognize objects.

[1]:
