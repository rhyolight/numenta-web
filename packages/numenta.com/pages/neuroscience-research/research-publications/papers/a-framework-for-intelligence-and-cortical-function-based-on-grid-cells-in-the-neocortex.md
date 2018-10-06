---
author: "Jeff Hawkins, Marcus Lewis, Scott Purdy, Mirko Klukas, and Subutai Ahmad"
description: "In this research paper, Numenta proposes a novel theoretical framework for understanding what the neocortex does and how it does it. The framework is based on grid cells and has significant implications for neuroscience and machine intelligence."
keywords: location-based framework, cortical grid cells
category: neuroscience, sensorimotor
date: 2018/10/10
hideImage: true
image: ../images/thousand-brains-theory-of-intelligence.jpg
link:
org: "Preprint of journal submission"
sort: a
title: "A Framework for Intelligence and Cortical Function Based on Grid Cells in the Neocortex"
type: post

---

| | |
|-|-|
| **Authors** | Jeff Hawkins, Marcus Lewis, Scott Purdy, Mirko Klukas, and Subutai Ahmad |
| **Journal** | Submitted |
| **Online** | [Read or Download the Preprint][1] |
| **Published** | October 10, 2018 |


Despite the massive amount of detail neuroscientists have amassed about the neocortex, how it works is still a mystery.  In this paper, we propose a **novel theoretical framework for understanding what the neocortex does and how it does it.**

Our proposal is based upon grid cells. The [study of grid cells](https://en.wikipedia.org/wiki/Grid_cell) has been one of the most exciting areas of neuroscience over the past decade. Found in the entorhinal cortex, grid cells are used in navigation and are a powerful neural mechanism for representing the location of a body in the environment.  We propose that the same mechanisms in the entorhinal cortex and hippocampus that originally evolved for learning the structure of environments are now used by the neocortex to learn the structure of objects.  The mechanism involves **pairing location signals with sensory input** over time.

The framework suggests mechanisms for how the cortex represents object compositionality, object behaviors and even high-level concepts.  It leads to the hypothesis that every part of the neocortex learns complete models of objects. Unlike traditional hierarchical ideas where objects are learned only at the top, the paper proposes that there are many models of each object distributed throughout the neocortex. We call this hypothesis the **Thousand Brains Theory of Intelligence.**

![Thousand Brains Theory of Intelligence](../images/thousand-brains-theory-of-intelligence.jpg)
> *Thousand Brains Theory of Intelligence – Rather than creating one model of the world, where complete objects are recognized only at the top of the hierarchy (as illustrated on the left), the Thousand Brains Theory (as illustrated on the right) suggests that every level and every column learns complete models of objects.*

## Frequently asked questions about this research

### Q. What was the purpose of this study?

In two other papers, “[A Theory of How Columns in the Neocortex Enable Learning the Structure of the World](/neuroscience-research/research-publications/papers/a-theory-of-how-columns-in-the-neocortex-enable-learning-the-structure-of-the-world/),” and “[Locations in the Neocortex: A Theory of Sensorimotor Object Recognition Using Cortical Grid Cells](/neuroscience-research/research-publications/papers/locations-in-the-neocortex-a-theory-of-sensorimotor-object-recognition-using-cortical-grid-cells/),” we proposed that every cortical column generates a **location signal** based on grid cells, and that when sensory input comes in, the column knows where that sensory information is relative to the input. Those papers contained detailed network models. This paper walks through the key components and implications of those ideas, and shows how they lead to a complete framework for how the cortex works.

### Q. What are the key takeaways?

* Every cortical column has a **location signal** that we propose is implemented by grid cells.
* We propose an extension of grid cells, called “displacement cells”. Displacement cells enable us to learn how objects are composed of other objects, also known as **object compositionality**.
* Learning an **object’s behavior** is simply learning the sequence of movements tracked by displacement cells.
* A location-based framework can be applied to **concepts and high-level thought** in the same way it can to physical objects.
* We discuss how the “what” and “where” pathways of the brain can be thought of as performing the same computations, but modeling different object centered and body centered location spaces.
* Our hypothesis that every cortical column can learn complete models and the brain creates thousands of models simultaneously, rather than one big model of the world, leads to a rethinking of hierarchy in the cortex.  We refer to this idea as the **Thousand Brains Theory of Intelligence**.



### Q. How does this research differ from other studies?

The proposal of a framework for how the cortex works is itself novel, and within the framework are many new ideas:
* The idea that grid cells are present everywhere in the neocortex.
* The proposal that cortical grid cells track the location of inputs to the neocortex in the location space of objects being observed.
* The proposal of a new type of neuron in the brain called displacement cells, which complement grid cells and are also present throughout the neocortex.  
* The proposal for representing and learning morphology, composition and behaviors of objects.
* The hypothesis that the neocortex consists of thousands of models operating in parallel as well as hierarchically, which we refer to as the Thousand Brains Theory of Intelligence.


### Q. Can I replicate these results?
There is no code or simulations associated with this paper so there is nothing to replicate. We welcome questions and discussion about the paper on the [HTM Forum](https://discourse.numenta.org/). The source code for “[Locations in the Neocortex: A Theory of Sensorimotor Object Recognition Using Cortical Grid Cells](/neuroscience-research/research-publications/papers/locations-in-the-neocortex-a-theory-of-sensorimotor-object-recognition-using-cortical-grid-cells/) and many of our other papers is available in our [Numenta Research papers code and data]( https://github.com/numenta/htmpapers) repository.

### Q. How does this paper make contributions in neuroscience?
Understanding the complex circuitry in the neocortex is one of the key goals of neuroscientists, and our framework may provide a useful map with guideposts, that fits within the known biological constraints.  In the paper, we explain how the framework lays on top of the anatomy of the neocortex, and we propose where grid cells and displacement cells are.  Experimental neuroscientists will be able to validate these hypotheses, fill in more details, and ultimately move to a far more complete understanding of how the brain is intelligent.

### Q. How does this paper make contributions in machine intelligence?
Current AI systems have limitations that many leading researchers are acknowledging while calling out the need to look at the brain.  Most neural nets today are based on the classic view of hierarchy.  Some of these networks have very deep hierarchies with dozens of levels, require millions of examples to train, and yet often fail catastrophically with simple changes to the input.

In order to create truly intelligent systems, we need models that are far more general and can understand compositional structure, learn through movement, and learn new concepts with very few examples. We’ll need models that can apply learning in one modality, such as touch, and integrate it with another, such as vision. The Thousand Brains Theory, which is built on the common cortical algorithm, provides the framework for a single architecture that can learn anything – from objects to behaviors of objects to concepts. Our hope is that eventually these neuroscience based ideas can be translated into powerful learning systems for machine intelligence.

### Q. Where can I find out more?
We have several additional resources for people who want to learn more:
* [Companion paper](/neuroscience-research/research-publications/papers/thousand-brains-theory-of-intelligence-companion-paper/) – We have created a companion paper that explains the key findings of the new research paper to people who may not be familiar with neuroscience concepts and terms.
* “[Locations in the Neocortex: A Theory of Sensorimotor Object Recognition Using Cortical Grid Cells](/neuroscience-research/research-publications/papers/locations-in-the-neocortex-a-theory-of-sensorimotor-object-recognition-using-cortical-grid-cells/) and [A Theory of How Columns in the Neocortex Enable Learning the Structure of the World](/neuroscience-research/research-publications/papers/a-theory-of-how-columns-in-the-neocortex-enable-learning-the-structure-of-the-world/) – These two supplemental papers describe detailed network models for components of the framework.
* [Numenta On Intelligence Podcast: Research Update with Jeff Hawkins – Parts 1 and 2](/resources/numenta-on-intelligence-podcast/episode-1-research-update-with-Jeff-Hawkins-part-1/) – Jeff discusses many of the core concepts in the paper, including location and location spaces; object representation, compositionality & behavior; and movement and learning.
* [HTM School episode]( https://www.youtube.com/channel/UC8-ttzWLgXZOGuhUyrPlUuA) – Host Matt Taylor breaks down some of the key ideas introduced in the paper in this video that’s part of our educational series.
* [HTM Forum]( https://discourse.numenta.org/) – a great resource for further questions and discussion on the paper.  The authors are active participants in the forum.

### Q. What is next for this research?
We are currently focused on filling in some of the pieces of the framework, like attention.  We will continue to publish papers on various components of the framework with more details as well.

[1]:
