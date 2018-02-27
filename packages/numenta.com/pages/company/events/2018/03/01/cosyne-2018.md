---
author: Numenta
brief:
date: 2018/03/01
event:
  what: "A Neural Mechanism for Determining Allocentric Locations of Sensed Features, Robust dendritic Computations with Sparse Distributed Representations"
  when:
    begin: 2018/03/01
    end: 2018/03/06
  where:
    desc: "Denver Hilton City Center, 1701 California Street"
    city: Denver
    state: CO
    country: USA
    web: http://www.cosyne.org/c/index.php?title=Cosyne_18
  who: Jeff Hawkins, Subutai Ahmad, Marcus Lewis, and Max Schwarzer
  why: Workshop and Poster Presentations
image: ../images/cosyne.png
org: Research Team
tags: strong ai artificial intelligence biological htm hierarchical temporal memory computing brain neuroscience
title: "Computational and Systems Neuroscience Meeting (Cosyne) 2018"
type: post
---

The annual Cosyne meeting provides an inclusive forum for the exchange of experimental and theoretical/computational approaches to problems in systems neuroscience.

## Workshop:

**Speaker:** Subutai Ahmad

**Title:** Could a Model of Predictive Voting Explain Many Long-Range Connections?

**About:** <br/>
This workshop will focus on our most recent peer-reviewed paper, “[A Theory of How Columns in the Neocortex Enable Learning the Structure of the World](https://numenta.com/resources/papers/a-theory-of-how-columns-in-the-neocortex-enable-learning-the-structure-of-the-world/).” He will discuss the inference mechanism introduced in the paper, our theory of location information, and how long-range connections allow columns to integrate inputs over space to perform object recognition.

<hr>

## Posters:

**Title:** A Neural Mechanism for Determining Allocentric Locations of Sensed Features

**Authors:** Marcus Lewis and Jeff Hawkins 

**Abstract:** <br/>
The neocortex can learn and recognize objects using input from independently moving sensors but the underlying neural mechanisms are not obvious. We posit that the neocortex accomplishes this by detecting each sensed feature’s location relative to the object – the allocentric location – and by learning objects as sets of features-at-allocentric-locations (Hawkins et al, 2017). In this new work, we describe a model inspired by grid cell modules that can efficiently compute the egocentric-allocentric transform. The network consists of multiple cortical columns, each receiving independent sensory input. The key is to represent the allocentric location of each sensed feature as the vector sum of the “location of the feature relative to the body” and a global “location of body relative to the object”. During inference, when a column senses a feature, it recalls all allocentric locations where it has previously sensed this feature on objects. The columns then collaborate to iteratively narrow down the unknown (but global) body location and the individual allocentric locations of each sensed feature. The locations can be initially ambiguous; in this case multiple movements and sensations are required to converge to a unique interpretation. Locations in the model are represented using modules similar to grid cell modules. We show a circuit that takes advantage of grid cell properties to perform the required metric computations. We discuss the learning rules, and propose a mapping to the known anatomy of cortical columns. This work shows how cortical columns can use multiple independent moving sensors to identify and locate objects.

<hr>

**Title:** Robust dendritic Computations with Sparse Distributed Representations

**Authors:** Subutai Ahmad, Max Schwarzer, and Jeff Hawkins

**Abstract:** <br/>
Empirical evidence suggests that the neocortex represents information using sparse distributed patterns of activity. There exist a variety of sparse coding algorithms demonstrating how to compute sparse representations, and a number of mathematical results on the capacity of sparse representations. Here we focus on dendritic computations and analyze properties of sparse representations from a machine learning viewpoint. Are sparse representations useful for neuronal pattern recognition, and under what conditions? We propose a formal mathematical model for recognition accuracy of binary sparse representations using active dendrites. We derive scaling laws that characterize the chance of false positives and false negatives when detecting patterns under adverse conditions. We describe three primary results. First, we show that using very high dimensional sparse representations, a network of neurons can reliably classify a massive number of patterns under extremely noisy conditions. The results hold even when synapses subsample a tiny subset of the target patterns or when individual neurons themselves are unreliable.  Second, the equations predict optimal dendritic NMDA spiking thresholds that closely match experimental findings. Finally, we consider two existing computational models of active dendrites: the Poirazi/Mel neuron and the HTM neuron. Through simulations we show that the scaling behavior of these two models closely matches the theory. We show dramatically improved recognition accuracy over published results when “good parameters” (as predicted by the theory) for sparsity and dimensionality are applied. The theory presented here complements existing work and represents a practical mathematical framework for understanding the accuracy and robustness of sparse representations in cortical networks.
