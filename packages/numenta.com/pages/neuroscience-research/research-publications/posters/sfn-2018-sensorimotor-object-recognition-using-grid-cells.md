---
author: Numenta
title: "SfN 2018: A mechanism for sensorimotor object recognition using cortical grid cells"
header: "A mechanism for sensorimotor object recognition using cortical grid cells"
description: "This poster describes a two-layer network model that uses cortical grid cells and path integration to learn and recognize objects through movement. In our model, one layer contains several grid cell-like modules and provides a location signal for each learned object such that features can be associated with a specific location in the reference frame of that object. A second layer, a sensory input layer, receives the location representation as context, and uses it to encode the sensory input in the context of a location in the object’s reference frame."
keywords: "SfN 2018 Sensorimotor object recognition using grid cells poster"
date: 2018/11/07
image: ../images/sfn-2018-sensorimotor-object-recognition-using-grid-cells.png
link: /assets/pdf/posters/sfn-2018-sensorimotor-object-recognition-using-grid-cells.pdf
media: poster
org: Marcus Lewis, Scott Purdy, Subutai Ahmad, Mirko Klukas, Jeff Hawkins
section: archive
sort: b
type: post
---

## Abstract:
The neocortex is capable of modeling complex objects through sensorimotor interaction but the neural mechanisms are poorly understood. Previously we have proposed that grid cell-like neurons exist in every cortical column. In this paper, we expand on this idea and describe a two-layer network model that uses cortical grid cells and path integration to learn and recognize objects through movement. Grid cells exhibit regular tiling over environments and are organized into modules, each with a common scale and orientation. A single module encodes position within the spatial scale of the module but is ambiguous over larger spaces. A set of modules can uniquely encode many large spaces. In our model, one layer contains several grid cell-like modules. This layer provides a location signal for each learned object such that features can be associated with a specific location in the reference frame of that object. A second layer, a sensory input layer, receives the location representation as context, and uses it to encode the sensory input in the context of a location in the object’s reference frame. Projections from the input layer to the location layer invoke possible locations that are consistent with the current input. Movement of the sensor updates the locations via path integration. Projections from the location layer back to the input layer predict the next input. A series of sensations followed by movements quickly results in the unique object identity that is consistent with the series of sensations and movements. Simulations show that the model can learn thousands of objects with high noise tolerance. We characterize the convergence time for object recognition, which is dependent on the number of unique features, the number of unique locations, and the total number of objects stored in the network. We compare our model to experimental data and propose testable predictions made by the model. We discuss the relationship to cortical circuitry and suggest that the reciprocal connections between layers 4 and 6 fit the requirements of the model.
