---
author: Marcus Lewis
description:
date: 2018/05/21
event:
  what: Using Grid Cells for Coordinate Transforms
  when:
    begin: 2018/05/21
    end: 2018/05/22
  where:
    desc: "Sainsbury Wellcome Centre, University College London"
    city: London
    state: England
    country:
    web: http://www.cognitive-map.com/
  who: Marcus Lewis
  why: Poster Presentation
image: ../images/ucl.png
org: Numenta Research Engineer
tags: strong ai artificial intelligence biological htm hierarchical temporal memory computing brain neuroscience
title: "Grid Cell Meeting"
type: post
---

## Abstract:

The cortex and hippocampus have multiple cell populations that track locations. Many of these represent different reference frames, but it’s not clear how these populations interact and work together. In this work, we show how grid cells can compute flexible coordinate transformations between two maps. Suppose a pair of grid cell populations track two locations: the animal's location in the environment, and its location relative to a source of food. A third cell population could detect the spatial relationship -- the "transform" -- between these two maps. Recalling this transform, the animal could detect its location relative to food by recognizing its location in the environment. This "transform" represents a 1-to-1 mapping between the firing fields of individual grid cells of the two populations. These mappings exist for all translations and for many rotations, so grid cells can perform any translational transform and many transforms in which the maps are rotated. Each grid cell "module" can compute this transform locally, independent of other modules, so the circuit can transform novel multi-module representations. The brain may use this grid cell transform to represent the spatial relationship between environments and goals, between scenes and objects, and between objects and features.
