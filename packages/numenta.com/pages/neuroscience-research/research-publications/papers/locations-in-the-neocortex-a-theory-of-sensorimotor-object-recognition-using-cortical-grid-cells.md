---
author: "Marcus Lewis, Scott Purdy, Subutai Ahmad, & Jeff Hawkins"
description: "This paper explains how location signals can be generated with a location layer that utilizes grid-cell-like neurons. It builds on our previous paper, A Theory of How Columns in the Neocortex Enable Learning the Structure of the World."
keywords: location signals in the neocortex
category: neuroscience, sensorimotor, grid cells
date: 2019/03/19
hideImage: true
image: ../images/network-diagram.svg
link: https://www.frontiersin.org/articles/10.3389/fncir.2019.00022/abstract
org: "Published in Frontiers in Neural Circuits Journal (Peer-reviewed)"
sort: c
title: "Locations in the Neocortex: A Theory of Sensorimotor Object Recognition Using Cortical Grid Cells"
type: post

---

| | |
|-|-|
| **Authors** | Marcus Lewis, Scott Purdy, Subutai Ahmad, & Jeff Hawkins|
| **Journal** | Submitted |
| **Online** | [Read or Download the Paper][1] |
| **Published** | March 19, 2019 |

The neocortex aggregates information obtained via sensation and movement, but the underlying neural mechanisms are poorly understood. Our October 2017 paper, “[A Theory of How Columns in the Neocortex Enable Learning the Structure of the World](/neuroscience-research/research-publications/papers/a-theory-of-how-columns-in-the-neocortex-enable-learning-the-structure-of-the-world/),” proposed that the cortex processes a sensorimotor sequence by converting it into a sequence of sensory features at object-centric locations. It then learns objects by learning sets of sensory features at locations. However that paper did not provide a neural mechanism for computing object-centric locations. This new paper provides such a neural mechanism. With this missing piece filled in, we present a neural network model that learns to recognize static objects, receiving only a sensorimotor sequence as input.

This mechanism relies on grid-cell-like neurons that represent the location of sensor patches (for example, the tip of a finger) relative to objects. Similar to entorhinal grid cells, these cortical grid cells are arranged into multiple modules. Each module independently uses motor input to update its active grid cells, and the population activity across modules can represent an enormous number of possible locations. By activating random cells in each module and then updating activity with movement, the network can generate a set of object-specific location representations. It learns objects by associating these representations with sensory features. It can then recognize objects by using sensory input to recall locations, using movement to update this set of possible locations, and using subsequent sensory input to disambiguate. Receiving contextual input from these cortical grid cells, a second population of cells represents a conjunctive sensory feature at location. The network learns by forming reciprocal connections between these two populations.

We show how this network operates by using sensory input to invoke dense cell activity, then using subsequent movement and sensation to narrow the activity until it converges to a sparse code. Using simulations, we characterize how the network's performance scales as it learns more objects.

Building on the theoretical framework of the October 2017 paper, we map this neural network model to cell populations in Layer 4 and Layer 6 of the neocortex.

![Network diagram](../images/network-diagram.svg)
> *Two-layer network diagram showing a sensory and location layer*

## Frequently asked questions about this research

### Q. What was the purpose of this study?

One of our main areas of research is how the brain processes input over time. We first focused on purely sensory sequences, studying how the neocortex learns extrinsic sequences through passive observation. We then shifted our focus to sensorimotor sequences, studying how the neocortex uses sensory and motor sequences to learn about the outside world. In the [October 2017 paper](/neuroscience-research/research-publications/papers/a-theory-of-how-columns-in-the-neocortex-enable-learning-the-structure-of-the-world/), we hypothesized that the neocortex learns and recognizes objects via sensations and movement by computing an object-centric location and associating sensory inputs with those locations. This study provides a neural network model that does exactly this.

  ## Q. What are the key takeaways?

* We propose that the neocortex processes input from moving sensors using a location-based framework. It associates sensory features with locations relative to various objects.
* We propose that the neocortex represents these locations using grid-cell-like neurons which we call "cortical grid cells".
* Cortical grid cells are arranged into multiple modules with different grid spacings and orientations. The population activity of multiple modules can uniquely encode locations over very large areas. Choosing a random initial location in each module when learning objects provides object-specific location representations.
* In this model, the neocortex recognizes familiar objects by using its sensory input to recall a set of locations, using motor input to update that set of locations, then using subsequent sensory input to decide which of those locations are correct. After it has received enough information to disambiguate the object, it activates a single object-specific location. Using this strategy, the neocortex approximates the ideal computational algorithm for identifying an object by observing the relative locations of the object's features.
* The model's ability to quickly recognize objects depends on how many locations each sensory input causes the network to recall. The model needs a sufficiently large number of cells per grid cell module to represent these "unions" of locations. The size of these unions depends on the statistics of the learned objects, and we can tune the model to handle arbitrarily large unions by giving it more cells per module.

### Q. How does this research differ from other studies?

The standard view of object recognition in the neocortex involves a passive processing of sensory data through a hierarchy of regions, where each region extracts increasingly complex features, until the object is eventually recognized. Our previous research suggested a much more dynamic view in which every region learns complete models of objects. This new work provides a complete implementation that performs this task and simulations to show the ability for a single cortical column to learn many complex objects.

### Q. How were the simulations conducted?

We implemented the simulations in Python and used data structures from our open source project [NuPIC]( https://www.numenta.org/). The input layer is the same implementation used in our October 2017 paper. The location layer implementation is new. We've posted all of this code to our [htmresearch](https://github.com/numenta/htmresearch) repository on Github, and you can view the simulations in our [htmpapers](https://github.com/numenta/htmpapers) repository.  

### Q. Can I replicate these simulations?

Yes! In keeping with Numenta’s [open research philosophy](/blog/2014/09/17/increasing-research-transparency/), you can access the source code and data for all scripts in this [HTM papers repository](https://github.com/numenta/htmpapers). We also welcome questions and discussion about the paper on the [HTM Forum](https://discourse.numenta.org/).

### Q. How will this paper make contributions in neuroscience?

The paper advances the theory of the neocortex as a location processing machine. It offers an explanation for recent neuroscience results, and it provides a set of testable predictions. It proposes a specific circuit involving layers 4 and 6 of the neocortex. We hope that this theory will help neuroscientists interpret existing data, and we hope that it it will help direct experiments that shed more light on the neural circuits that underlie object learning and recognition in the neocortex.

### Q. How does this paper make contributions in machine learning?

This paper provides a neural implementation for learning and recognizing objects. Our [October 2017 paper](/neuroscience-research/research-publications/papers/a-theory-of-how-columns-in-the-neocortex-enable-learning-the-structure-of-the-world/) proposed the need for object-centric location signals and this new paper shows how these signals can be generated through the integration of sensory and motor inputs. The algorithm can be used to learn complex objects through movement.

### Q. Where can I find out more?

The [HTM Forum](https://discourse.numenta.org/) is a great resource for further questions and discussion on HTM theory. The authors of this paper are active participants in the forum.

In addition to this paper, we are publishing a higher level paper on the [location-based framework for understanding the neocortex](/neuroscience-research/research-publications/papers/thousand-brains-theory-of-intelligence-companion-paper/). It discusses the idea of locations representations throughout the neocortex, and it proposes a mechanism for object compositionality by calculating "displacements" between grid cell representations.


### Q. What is next for this research?

As mentioned in the paper, there are numerous avenues for further research. We are still trying to understand how locations are encoded in the neocortex. We need to extend the model to recognize learned objects at novel orientations to the sensor and to handle 3D objects in a way that is consistent with the biology. We're also considering how the neocortex combines these learned objects into novel compositional objects, and how the brain integrates input from multiple independent moving sensors.

[1]: https://www.frontiersin.org/articles/10.3389/fncir.2019.00022/abstract
