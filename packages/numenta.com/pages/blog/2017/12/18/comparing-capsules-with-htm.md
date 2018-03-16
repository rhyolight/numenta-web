---
author: Subutai Ahmad
description: "A new development in the field of Deep Learning, Geoffrey Hinton's capsule theory, has recently been getting some publicity. At Numenta, we have been getting questions about how it relates to our sensorimotor theory. Subutai Ahmad shares his thoughts about the Hinton's theory in this blog comparing HTM and capsules."
date: 2017/12/18
hideImage: false
image: ../images/brainwaves-small.jpg
org: VP of Research
keywords: "comparing htm and capsules"
title: "Capsules Close-up: Comparing the latest deep learning advance with HTM Sensorimotor Theory"
header: "Capsules Close-up: Comparing the latest deep learning advance with HTM Sensorimotor Theory"
type: post
---

Recently, a new development in the field of Deep Learning (DL), [Geoffrey Hinton's new capsule theory](http://arxiv.org/abs/1710.09829), has been getting some [publicity](https://www.nytimes.com/2017/11/28/technology/artificial-intelligence-research-toronto.html). At Numenta, we have been getting questions about how capsules relate to our new [sensorimotor theory](/resources/papers/a-theory-of-how-columns-in-the-neocortex-enable-learning-the-structure-of-the-world/), so I thought I'd share my current thoughts. (I will not dive into the technical details of capsules - see [here](https://jhui.github.io/2017/11/03/Dynamic-Routing-Between-Capsules) and [here](https://blog.acolyer.org/2017/11/13/dynamic-routing-between-capsules/amp) for some good descriptions.)

**Why have capsules captured attention?**

The fundamental idea behind capsules is that objects are defined by the relative locations of their component features. This theory proposes that you don't have to memorize all the different ways an object appears, and the recognition process can be independent of how an object is oriented. Object recognition happens when different features in different locations vote towards a common, globally consistent, interpretation of the object based on relative locations.

The idea of voting based on relative locations of features has been around since [Hough transforms](https://en.wikipedia.org/wiki/Hough_transform), a popular technique used in Computer Vision since the 1970's. Hinton's novel proposal is that every level of a deep learning network is composed of capsules. Furthermore, the latest papers by Hinton and co-authors show how to integrate capsules into Convolutional Neural Networks (CNNs) and suggest how you might implement the voting process.

Training data is a huge practical problem with deep learning systems today. The biggest promise of capsules is that it should allow deep networks to learn with many fewer examples. Capsule networks might also be [less susceptible to the kinds of weird mistakes deep networks make today](https://www.theverge.com/2017/4/12/15271874/ai-adversarial-images-fooling-attacks-artificial-intelligence), though this remains to be seen.

From my standpoint, it is also exciting to see a big new idea in a field that has been lacking big ideas. (DL has been using essentially the same neural network model since the late 80's.)

There is still work to be done before capsules become practical. Today, capsule networks are much slower than CNNs, and we have only seen results with very limited datasets. The progress is promising, but there are many years of work ahead before it will be a really practical and robust technology.

**What are the commonalities with HTM sensorimotor theory?**

There are some clear analogies between capsules and our sensorimotor theory. The ideas that, 1) objects are defined by the relative locations of features, and that, 2) a voting process figures out the most consistent interpretation of sensory data, are both core to our [columns paper](/resources/papers/a-theory-of-how-columns-in-the-neocortex-enable-learning-the-structure-of-the-world/).

Hinton proposes that every level of a network should be composed of capsules. This notion is also analogous to our theory, where we propose that every cortical column in every level of the neocortex computes and uses relative locations.

**What are the main differences from HTM sensorimotor theory?**

One big difference is that our theory models **movement**. We explicitly model how information changes as we move our sensors (e.g. as we move our eyes around), and how to integrate information to quickly recognize objects. The theory even handles sensors that move independently, such as our fingers. For example, imagine trying to recognize an object with a single sensor (e.g. a coffee cup with a single finger). Often no single sensation is sufficient to uniquely identify it, and you need to sense it sequentially at multiple points. If you were to sense it with multiple sensors simultaneously (e.g. grasp it with your whole hand), you would recognize it much faster (perhaps even in one grasp). Our theory models exactly how to integrate information across different sensations (using movement derived cues to compute the relative locations of features) to recognize the object. This is a fundamental aspect of how we move around our world and recognize things in the presence of incomplete information. Capsules don’t model movement at all.

The largest difference though is that capsules are not intended to be biologically plausible and do not make any attempt to model the brain. Why does this matter? In terms of progressing the field of deep learning, it doesn’t. But while capsules may prove to be useful, they are still inherently a batch, supervised learning technique. Just like other DL systems, they optimize a single objective function, and each network is trained to solve a very specific task. This is very different from general intelligence, and this path won’t lead to truly intelligent machines. Many [deep learning researchers acknowledge this](http://www.cell.com/neuron/fulltext/S0896-6273(17)30509-3), and several [have called for more neuroscience to be incorporated into deep learning](https://www.frontiersin.org/articles/10.3389/fncom.2016.00094/full).

At Numenta, we are creating a theory of the neocortex. HTM theory models the common repeating circuit in the neocortex underlying all mammalian intelligence. Our sensorimotor theory is one key component of it. Other capabilities, such as unsupervised learning, modeling temporal sequences and generating behavior, all fit naturally into the same circuit. You might think of this as a “knowledge circuit.” Understanding this circuit is key to building intelligent machines, and the path forward with HTMs is clear.
