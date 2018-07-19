---
author: Scott Purdy, Subutai Ahmad
title: "CNS 2018: Learning Relative Landmark Locations"
header: "Unsupervised Learning of Relative Landmark Locations Using Grid Cells"
description: "This poster introduces a proposal that the brain uses grid cells to perform unsupervised learning of landmark locations. It shows the results of a network model trained on 1000 environments, compared to a bag-of-features model. It also lays out discussion topics for future extensions of this work."
keywords: "CNS 2018 grid cells poster"
date: 2018/07/18
image: ../images/CNS_2018_Landmark_Locations_Using_Grid_Cells.png
link: /assets/pdf/posters/CNS_2018_Landmark_Locations_Using_Grid_Cells_Poster.pdf
media: poster
org: Numenta
section: archive
sort: a
type: post
---

This poster walks through a proposal of how the brain uses grid cells to perform unsupervised learning of landmark locations. It shows results of a network model trained on 1000 environments, each with 16 locations containing random landmarks from a pool of 5 unique landmarks.  The network is able to distinguish between environments with substantial noise, while a bag-of-features model is not.

**Background**
* Grid cells provide location codes, spatially related through path integration
* Multiple grid cell modules provide unique location codes for many large environments
* We have shown that displacement modules encode spatial relationships between grid cell reference frames

**Contributions**
* We propose that displacement cells encode the relative position of pairs of landmarks and that sets of displacement cells provide robust representations of environments
* Simulations show the model’s ability to learn and distinguish among many complex environments with high noise tolerance
