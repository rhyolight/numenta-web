---
author: Marcus Lewis
title: "Grid Cell Meeting 2018: Using Grid Cells for Coordinate Transforms"
header: "Using Grid Cells for Coordinate Transforms"
description: "In this poster, we show how the brain might use a grid cell code to represent 1) sensed structures at locations in viewer-centric coordinates and 2) sensed features and locations in object-centric coordinates. We lay out a mechanism that shows the transform routes between grid cells that enable object recognition."
keywords: "grid cells object recognition"
date: 2018/05/21
image: ../images/2018-Lewis-Grid-Transforms.png
link: /assets/pdf/posters/2018-Lewis-Grid-Transforms.pdf
media: poster
org: Numenta Research Engineer
section: archive
sort: b
type: post
---

In this poster, we draw a connection from grid cells to object recognition. We show how the brain might use a grid cell code to represent sensed structures at locations in viewer-centric coordinates. This grid cell code would make it possible for the brain to detect the location of each structure relative to some higher structure, enabling object recognition.

Consider an "object" to be "a spatial arrangement of components." The brain could represent an object by representing its components and their locations / orientations. As the brain detects features in sensory input, those features will naturally be sensed and represented at viewer-centric locations and orientations. But if the brain is going to memorize a spatial arrangement of features, it ought to represent the arrangement in a viewer-invariant way – the locations and orientations should be object-centric, not viewer-centric. It needs to perform a transform from viewer-centric to object-centric coordinates so that it doesn't have to relearn the object at every viewer-centric location.

We propose that just as the entorhinal cortex uses grid cells and head-direction cells to represent an animal’s location in an environment, the neocortex could use analogs of grid cells and head-direction cells to represent the animal’s location and orientation relative to a sensed feature or object. Equivalently, these cells would represent the viewer-centric location and orientation of the sensed feature/object.

If the brain represents viewer-centric objects and their components using this grid cell code, another population of cells could detect the "transform" between the two grid cell reference frames. Equivalently, these cells would represent the object-centric location and orientation of the component.

We lay out a detailed mechanism for detecting and representing transforms between two populations of grid cells. The mechanism takes advantage of grid cells' periodic firing patterns to accomplish the transform in a very computationally simple (and somewhat limited) way. This mechanism supports any translational transform and a limited set of rotations. We show how grid cell modules could perform more rotations if the modules have a distribution of orientations.
