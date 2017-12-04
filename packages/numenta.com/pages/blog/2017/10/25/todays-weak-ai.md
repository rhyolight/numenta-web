---
author: Matthew Taylor
brief: "While Deep Learning and other ANN-based methods of machine learning have produced some amazing capabilities over the past decade, they still leave me wanting more intelligence than they can deliver. The “point neuron” used in ANN is based on an understanding of neuroscience we had back in the 1970s. Just in the past couple of decades, we have learned more about the pyramidal neuron in the neocortex than we have ever known before. This knowledge has never been applied to the old ANN point neuron."
date: 2017/10/25
hideImage: false
image: ../images/broken-robot.jpg
org: Open Source Community Manager
tags: numenta hierarchical temporal memory htm blog
title: "Today’s Weak AI Lacks Intelligence"
type: post
---

<p style="margin-left: 0pt; display: inline">
<i>Our Open Source Community Manger Matt Taylor recently published a blog in advance of a presentation he is delivering on November 3
for Open Data Science Conference (ODSC) West.  ODSC is a data science conference that fosters the exchange of the latest advances in
AI and data science and encourages the growth of open source applications. Matt’s presentation is titled, “The Biological Path to Strong AI.” <br/>
<br/>
His blog is reposted below, with permission from ODSC.</i></p>
<br/><br/>
While Deep Learning and other ANN-based methods of machine learning have produced some amazing capabilities over the past decade, they still leave me wanting more intelligence than they can deliver.

The “point neuron” used in ANN is based on an understanding of neuroscience we had back in the 1970s. Just in the past couple of decades,
we have learned more about the pyramidal neuron in the neocortex than we have ever known before. This knowledge has never been applied to the old ANN point neuron.

In fact, even some Deep Learning experts like Oriol Vinyals of DeepMind says that [Deep Learning is not AI](https://youtu.be/UAq961jQjYg?t=58m45s).
Combine that with the recent drastic change of position from Geoff Hinton about [back propagation](https://www.axios.com/ai-pioneer-advocates-starting-over-2485537027.html),
evidence of [Deep Learning hype](https://twitter.com/lxbrun/status/908712249379966977/photo/1), and DeepMind commenting about [how important neuroscience is to artificial
intelligence](https://deepmind.com/blog/ai-and-neuroscience-virtuous-circle/), and you have the possibility of an upcoming sea change in the Machine Learning community.

# Go To the Source <br/>
Some might tell you that AI is here today! I guess I have a stricter definition of “intelligence” than those people. I expect a truly intelligent thing to be able to reason, strategize, solve puzzles,
represent knowledge, plan, learn, communicate… as well as integrate all those skills toward a common goal. What fills this definition in our world today? Nothing man-made!

You will find it hard to get 10 people to agree about what intelligence is and what living things in the world are intelligent. But, everyone seems to agree that the human neocortex is intelligent, so
that’s where we’ve been focusing our research for well over 10 years.

We at [Numenta](/) believe that the keys to intelligence are in the mammalian neocortex, which is the newest and smartest part of your brain. Our mission is to understand how intelligence works in the cortex and create new intelligent systems using those principles.

# Weak AI Won’t Evolve into AGI <br/>
The neuronal behavior within the brain is complex. An individual pyramidal neuron is an exquisite computation machine. Understanding the principles of how these neurons communicate in the brain clearly
highlights the inadequacy of the ANN point neuron to capture the complexities of brain activity. It is just too simple and static. The biological neuron is a very plastic thing– it grows new dendrites
constantly, its old connections degrade and disappear as things are forgotten, and it creates new patterns as new connections form.

In order for our simulations of neurons to bear intelligent fruit, I posit that two things must happen.

## 1: Realistic Neurons <br/>
In order to do the basic calculations we believe are necessary for intelligent processing in the cortex, the neuron must have two attributes. First, it must have *integration zones*, specifically
***proximal***, ***distal***, and ***apical*** zones. In the brain, neurons get different signals in these areas, and they mean different things.

Second, it must have a *predictive* state. The ANN neuron model is missing a crucial state. Rather than only having the choice between **active** and **inactive**, we must add another ***predictive***
state. This means the neuron, given its current connections, predicts that it will fire next. This is a crucial component of biological intelligence.

## 2: Movement <br/>
Can you imagine an intelligent thing that cannot move? There’s a reason you can’t. **There is *nothing* intelligent** we know about **that does not explore** its environment to understand its world. You
cannot have an intelligent thing if it has no power to interact with its world.

Your brain is constantly computing not only what things are about to happen in the world around you, but also what things are being caused by your own actions. Almost all sensory inputs you process are
being changed constantly by your movements. As your perspective of the world changes, your brain understands all the intricate details of these changes and how you interact with the new reality they
create.

But discard some of your preconceptions about what *movement* really is. It does not have to be defined as with a 3D space. For an intelligent agent, movement could simply be taking an action that
changes the point of observation. I bet you can imagine ways in which computer programs can change their point of view of some world they have, which could be interpreted as movement.

# Weak AI is Still Cool <br/>
I am not slamming Deep Learning at all in this article. I simply want to point out that it is a very long way from the Strong AI everyone has thought was right around the corner since 1975.

Today’s Machine Learning tech is extremely important for processing and understanding the massive amounts of data in our world. We are even learning more about how our brains work because we’re using DL
techniques to process troves of data coming from advanced brain imaging machines. We are basically using today's AI to understand and build tomorrow’s AI.

# Our Approach to Biological AI <br/>
All that being said, we gave up ANN and started from scratch studying neurons in the cortex a long time ago. Our work is completely biologically-constrained, as true to the neuroscience as we can make
it, and we keep discovering cool things. In my talk at ODSC, I go through the complete biological theory of intelligence we call Hierarchical Temporal Memory (HTM). You can also learn about this
technology by reading our [papers](/papers/) or watching educational videos in [HTM School](https://www.youtube.com/HTMSchool).


©ODSC2017

*This blog was originally published at [opendatascience.com](https://opendatascience.com/blog/todays-weak-ai-lacks-intelligence/).*
