---
author: Numenta
description: 'Numenta will be at CNS 2018 presenting two workshop talks and two posters about active dendrites, sparse distributed representations, and grid cells. CNS 2018 will be held at the Allen Institute and the University of Washington in Seattle, WA.'
date: 2018/07/18
event:
  what: "Active dendrites, sparse distributed representations, and grid cells"
  when:
    begin: 2018/07/18
    end: 2018/07/18
  where:
    desc: "Allen Institute and University of Washington"
    city: Seattle
    state: WA
    country: USA
    web: http://www.cnsorg.org/cns-2018-workshops
  who: Research Team
  why: Workshop Talks and Posters
image: ../images/cns-2018-event.png
org: Numenta Research Team
keywords: "Numenta CNS 2018"
title: "CNS 2018"
header: "CNS 2018"
type: post
dropcap: false
---

### Workshop talk 1: The Predictive Neuron: How Active Dendrites Enable Spatiotemporal Computation in the Neocortex

**Author:** Subutai Ahmad

**Abstract:** Pyramidal neurons receive input from thousands of synapses spread throughout dendritic branches with diverse integration properties. The majority of these synapses have negligible impact on the soma. It is therefore a mystery how pyramidal neurons integrate the input from all these synapses and what kind of network behavior this enables in cortical tissue. It has been previously proposed that active dendrites enable neurons to recognize multiple independent patterns. In this talk, we extend this idea. We propose a model where patterns detected on active basal dendrites act as predictions by slightly depolarizing the soma without generating an action potential. A single neuron can then predict its activation in hundreds of independent contexts. We then show how a network of pyramidal neurons, combined with fast local inhibition and branch specific plasticity mechanisms, can learn complex time-based sequences and form precise predictive codes. Given the prevalence of pyramidal neurons throughout the neocortex and the importance of prediction in inference and behavior, we propose that this form of sequence memory may be a universal property of neocortical tissue.

<hr>

### Workshop talk 2: Locations in the Neocortex: A Theory of Sensorimotor Prediction Using Cortical Grid Cells

**Author:** Subutai Ahmad

**Abstract:** The neocortex is capable of modeling complex objects through sensorimotor interaction but the neural mechanisms are poorly understood. In the entorhinal cortex grid cells represent the location of an animal in its environment, and this location is updated through movement and path integration. In this talk, we propose that grid-like cells in the neocortex represent the location of sensors on an object. We describe a two-layer model that uses cortical grid cells and path integration to robustly learn and recognize objects through movement. In our model, a layer of grid-like cells provide a location signal such that features can be associated with a specific location in the reference frame of each object. Reciprocal feedback connections to a sensory layer invoke previously learned locations consistent with recent sensory input, and form predictions for future sensory input based on upcoming movements. Simulations show that the model can learn thousands of objects with high noise tolerance. We discuss the relationship to cortical circuitry, and suggest that the reciprocal connections between layers 4 and 6 fit the requirements of the model. We propose that the subgranular layers of cortical columns employ grid cell like mechanisms to represent object specific locations that are updated through movement.

<hr>

### Poster 1: Robust Dendritic Computations with Sparse Distributed Representations

**Authors:** Subutai Ahmad, Max Schwarzer, and Jeff Hawkins

**Abstract:** Empirical evidence suggests that the neocortex represents information using sparse distributed patterns of activity. There exist a variety of sparse coding algorithms demonstrating how to compute sparse representations, and a number of mathematical results on the capacity of sparse representations. Here we focus on dendritic computations and analyze properties of sparse representations from a pattern recognition viewpoint. Are sparse representations useful for neuronal pattern recognition, and under what conditions? The literature on active dendrites and NMDA spikes suggest that a large portion of the dendrites on pyramidal neurons recognize patterns with a small number of synapses. As few as 8-10 active synapses out of 20-30 can initiate dendritic spikes. Given the presence of noisy and unreliable neural inputs, can such a small number of synapses reliably detect patterns? We propose a formal mathematical model for recognition accuracy of binary sparse representations using active dendrites. We derive scaling laws that characterize the chance of false positives and false negatives when detecting patterns under adverse conditions. We describe three primary results. First, we show that using high dimensional sparse representations, a network of neurons can reliably classify a massive number of patterns under extremely noisy conditions. The results hold even when synapses subsample a tiny subset of the target patterns or when individual neurons themselves are unreliable. Second, the equations predict dendritic NMDA spiking thresholds that closely match experimental findings. Finally, we consider two existing computational models of active dendrites: the Poirazi/Mel neuron and the HTM neuron. Through simulations we show that the scaling behavior of these two models closely matches the theory. We show dramatically improved recognition accuracy over published results when “good parameters” (as predicted by the theory) for sparsity and dimensionality are applied, even when the total number of synapses are held constant. The equations assume uncorrelated inputs. Using simulations we also show that the overall trends hold with correlated inputs, although the absolute errors are higher. In summary, the theory presented here complements existing work and represents a practical mathematical framework for understanding the accuracy and robustness of sparse representations in cortical networks.

<hr>

### Poster 2: Unsupervised Learning of Relative Landmark Locations Using Grid Cells

**Authors:** Subutai Ahmad and Scott Purdy

**Abstract:** The ability to rapidly learn new objects and environments is a critical task for the brain and the locations of landmarks is crucial to learning new environments. Grid cells encode local position information through regular, tiled firing fields that are anchored to each learned environment (Hafting, et. al, 2005). Grid cells are organized in modules of cells that share the same scale and orientation. Individual modules are ambiguous over larger spaces but sets of grid cell modules with varied scale and orientation accurately and unambiguously encode locations over many large environments (Sreenivasan and Fiete, 2011). Experimental results show that landmarks and sensory cues are critical for anchoring grid cells and learning new environments, but the exact mechanisms are unclear.

It has been proposed that each grid cell module operates like a residue number system (Fiete, et. al., 2008) and can encode relationships between layers (Lewis & Hawkins, 2018). In this paper we exploit a core property of residue number systems that allows a small, fixed set of connections to perform arithmetic operations. We propose a biologically-plausible model with two grid cell layers that encodes the relative locations of landmarks in environments and show that it reliably encodes environments in the presence of noise. Grid cells in each layer are organized into modules, where each module represents different relative scales and orientations. The “location layer” encodes the location of each sensed landmark. Grid cell modules in the “relative location layer” are paired with a corresponding module in the location layer. Relative location operations are performed only between these paired modules without access to other modules in the layers. The difference (subtraction) between the phase of currently active neurons and the neurons corresponding to landmarks seen in a recent period is encoded in the relative location layer. Locations for recently active landmarks are updated at each step in the location layer with a motor command. However, the relative location layer always represents the relative positions of each landmark pair and is invariant to absolute position within the environment. The model thus learns a set of representations of relative positions of landmarks that is stable for a given environment, and enables efficient disambiguation of previously seen environments.

Our model is compared with two other models: 1) a bag-of-features model that only compares landmarks without locations and, 2) an ideal model that exhaustively examines all environments to find the best match. Using the relative positions of landmarks, our model is able to achieve perfect accuracy when there is little noise and lags the ideal model slightly for very noisy test cases. The bag-of-features model is no better than chance when a small pool of five landmarks is used.

Further research will explore the generalization ability of the model and the addition of an unsupervised temporal clustering layer that can reinstate learned relative location representations in order to predict input sensations that have not recently been seen.
