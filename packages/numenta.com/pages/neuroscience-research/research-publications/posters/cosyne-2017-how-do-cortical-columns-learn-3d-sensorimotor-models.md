---
author: Jeff Hawkins, Yuwei Cui, Subutai Ahmad, Nathanael Romano, and Marcus Lewis
title: "Cosyne 2017: How Do Cortical Columns Learn 3D Sensorimotor Models?"
header: "How Do Cortical Columns Learn 3D Sensorimotor Models of The World?"
description: "We propose that cortical columns learn 3D sensorimotor models of the world by combining sensory inputs with allocentric location. We found that a simulated robot hand can grasp and recognize any object, and that each cortical column can store more objects, and recognize them faster, by using cross-column connections."
keywords: "cortical column"
date: 2017/02/24
image: ../images/CosynePoster_2017.png
link: /assets/pdf/posters/CosynePoster_2017.pdf
media: poster
org: Numenta
section: archive
sort: b
type: post
---

Since features can be shared among multiple objects, information received by a single cortical column is often ambiguous. In this poster, we propose that cortical columns learn 3D sensorimotor models of the world by combining sensory inputs with allocentric location.

**The predictions of the theory are:**

- Each region contains cells stable over movement of the sensor.
- The activity of these stable cells are specific to object identity.
- The output layers (those with long-range lateral connections) form these stable representations.
Their activity will be more stable than input layers.
- Object representations within each column will converge on stable representation quicker with
lateral connections.
- Object representations within each column will quickly become sparser as more evidence is
accumulated for an object. Cell activity in output layer is denser for ambiguous objects.
- Each region contains cells tuned to location of features in object's reference frame (invariant to
ego-position, e.g. border ownership).
- We expect to see these representations in the input layer.

We tested this on a simulated robot hand and found that it can grasp any object and recognize it. We also found that each cortical column can store more objects and that objects can be recognized faster by using cross-column connections.
