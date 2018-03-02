---
author: Jeff Hawkins
description:
date: 2017/11/03
event:
  what: "Hierarchical Temporal Memory"
  when:
    begin: 2017/11/03 19:00
    end: 2017/11/03 21:00
  where:
    desc: Crowne Plaza San Francisco Airport (Bayside Rooms)
    city: Burlingame
    state: CA
    country: USA
    web: https://www.meetup.com/numenta/events/243501858/
  who: Jeff Hawkins, Marcus Lewis and Jason Toy
  why: Speaking
image: ../images/jeff-speaking.jpg
org: Numenta Co-Founder
tags: artificial intelligence biological htm hierarchical temporal memory computing brain
title: "HTM Meetup"
type: post
---
**Video:**
------

<iframe width="504" height="283.5" src="https://www.youtube.com/embed/c6U4yBfELpU" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>


**About:**
------

This meetup will take place on the same day that Matt is speaking at [ODSC West](https://www.odsc.com/california).
Even if you are not attending ODSC West, this meetup will be open to all. We will have food and drinks. Please RSVP on the [meetup page](https://www.meetup.com/numenta/events/243501858/).

We have three talks planned for this event:

**Talk 1: TouchNet - Training AIs to touch, move, and interact with their environment** <br/>
**Speaker:** Jason Toy, Somatic Founder / CEO

In this talk, Jason Toy will walk you through a preview of TouchNet, a project he has been working on to enable training of AIs to interact with their environment via touch and movement . TouchNet is a dataset of 3D objects and a simulator to interact with those objects. Jason will show how you could implement your own AI using HTM or other algorithms to learn through the simulator.

**Talk 2: Numenta brain theory discoveries of 2016/2017**<br/>
**Speaker:** Jeff Hawkins, Numenta Co-Founder

In this talk, Numenta Co-Founder Jeff Hawkins will discuss recent advances in cortical theory made by Numenta.
These discoveries are described in the recently published peer-reviewed paper, “A Theory of How Columns in the Neocortex Enable Learning the Structure of the World”
Jeff will walk through the text and discuss the figures.  He will discuss the significance of these advances and the importance they will play in AI and cortical theory.  

The full paper will be available in the journal *Frontiers in Neural Circuits,* but the link to the pre-print version and abstract are provided below for attendees who would like to read it before the meetup.  

[A Theory of How Columns in the Neocortex Enable Learning the Structure of the World](https://doi.org/10.1101/162263)<br/>
Neocortical regions are organized into columns and layers. Connections between layers run mostly perpendicular to the surface suggesting a columnar functional organization.
Some layers have long-range excitatory lateral connections suggesting interactions between columns.
Similar patterns of connectivity exist in all regions but their exact role remain a mystery. In this paper,
we propose a network model composed of columns and layers that performs robust object learning and recognition.
Each column integrates its changing input over time to learn complete predictive models of observed objects.
Excitatory lateral connections across columns allow the network to more rapidly infer objects based on the partial knowledge of adjacent columns.
Because columns integrate input over time and space, the network learns models of complex objects that extend well beyond the receptive field of individual cells.
Our network model introduces a new feature to cortical columns. We propose that a representation of location relative to the object being sensed
is calculated within the sub-granular layers of each column. The location signal is provided as an input to the network, where it is combined with sensory data.
Our model contains two layers and one or more columns. Simulations show that using Hebbian-like learning rules small single-column networks can learn to
recognize hundreds of objects, with each object containing tens of features. Multi-column networks recognize objects with significantly fewer movements of the sensory receptors.
Given the ubiquity of columnar and laminar connectivity patterns throughout the neocortex, we propose that columns and regions have more powerful recognition
and modeling capabilities than previously assumed.

**Talk 3: Recognizing Locations on Objects** <br/>
**Speaker:** Marcus Lewis, Numenta Research Engineer

The brain learns and recognizes objects with independent moving sensors. It’s not obvious how a network of neurons would do this. Numenta has suggested that the brain solves this by computing each sensor’s location relative to the object, and learning the object as a set of features-at-locations. In this talk, Marcus will show how the brain might determine this “location relative to the object.” He’ll extend the model from Numenta’s recent paper so that it computes this location. This extended model takes two inputs: each sensor’s input, and each sensor’s “location relative to the body.” The model connects the columns in such a way that a column can compute its “location relative to the object” from another column’s “location relative to object.” When a column senses a feature, it recalls a union of all locations where it has sensed this feature, then the columns work together to narrow their unions. This extended model essentially takes its sensory input and asks, “Do I know any objects that contain this spatial arrangement of features?”



**Agenda:**
------
7:00–7:30 Talk 1: Jason <br/>
7:30–8:00 Talk 2: Jeff<br/>
8:00–8:30 Talk 3: Marcus<br/>
8:30–9:00 Q&A with Jeff & Networking<br/>


See our forum for [discussion](https://discourse.numenta.org/t/htm-meetup-planning-november-3-in-sf/2830) about this event.
