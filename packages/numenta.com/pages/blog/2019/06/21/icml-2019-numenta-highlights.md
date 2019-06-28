---
author: Lucas Souza
description: "Numenta Research Staff Member Lucas Souza attended ICML 2019 with VP Research Subutai Ahmad.  In this blog post, he shares the highlights and key takeaways of this year's conference and reflects on the major themes related to our current machine learning research."
date: 2019/06/20
hideImage: true
dropcap: false
org: Numenta Research Staff Member
image: ../images/posters-icml.png
keywords: "numenta research ICML 2019"
title: ICML 2019 – Reviews, Highlights and Takeaways from the 36th annual Machine Learning Conference
header: ICML 2019 – Reviews, Highlights and Takeaways from the 36th annual Machine Learning Conference
type: post
---

![Getting ready for the first session](../images/getting-ready-icml.png)

> *Figure 1: Getting ready for the first session*

As part of the Numenta Research team, last week I attended ICML (International Conference on Machine Learning) in Long Beach, California with our VP Research Subutai Ahmad, who presented a talk and poster in a workshop on “Uncertainty & Robustness in Deep Learning.” If you’re not familiar with ICML, it is a huge conference, with over 6,000 researchers and students, and several concurrent tracks. The conference was followed by a series of workshops on Friday and Saturday, which were as well organized as the conference, if not better.

It was great to see so many topics related to the areas that we are currently investigating in our machine learning work. Here are some highlights related to our research at Numenta.

![ICML 2019 Schedule](../images/icml-agenda.png)

> *Figure 2: ICML 2019 Schedule*

## Robustness
Creating models robust to noise and adversarial attacks is a hot topic in ML, and ICML had several interesting papers. The talks covered both theoretical and empirical evaluation of adversarial attacks and defense methods, and noise and corruption robustness.

Subutai gave a talk based on a [paper we released earlier this year](https://arxiv.org/abs/1903.11257), which showed how the combination of sparse connections and sparse activation function (k-winners) promotes high levels of sparsity and can lead to networks that are both power-efficient and robust to noise. We are currently working on augmenting sparse neural networks with structural plasticity, and extending its application to larger and more complex models and datasets.  For those unable to catch the livestream of the workshop, you can [view the talk](https://www.facebook.com/icml.imls/videos/474831503062000/?t=3628), [click through the slides](https://www.slideshare.net/numenta/icml-2019-workshop-how-can-we-be-so-dense-the-robustness-of-highly-sparse-representations), and [download the poster](/assets/pdf/posters/ICML-Robustness-June-2019-poster.pdf).  

An interesting dataset, called [ImageNet-P](https://arxiv.org/abs/1903.12261), was recently released by Hendrycks and Dietterich at ICLR. It features images augmented with 15 types of algorithmically generated corruptions, aimed at mimicking noisy data often found in real-world scenarios. An MNIST version of this dataset, called [MNIST-C](https://arxiv.org/abs/1906.02337), was presented in ICML uncertainty and robustness workshop.

## Continuous Learning
Natalia Dias-Rodriguez, representing [ContinualAI](https://www.continualai.org/), gave an interesting talk of the [challenges in continuous learning](https://slideslive.com/38917211/continual-learning-and-robotics-an-overview). I’m glad to hear they are working on a survey of continuous learning, to be released in about 2 weeks on arXiv. I’m excited to read it! Marta White, from the University of Alberta, also presented some fascinating research on continuous learning and [sparse representations](https://arxiv.org/abs/1811.06626).

There were many other promising talks and posters on continuous learning, including a full-day workshop on lifelong learning and another on multitask learning. It was great to see the latest papers by the Berkeley group on [unsupervised meta-learning](https://arxiv.org/abs/1810.02334) and [reinforcement learning without explicit reward functions](https://arxiv.org/abs/1904.07854).

![Brains-ICML](../images/brains-icml.png)

> *Figure 3: It's all about brains*

## Sparse Representations
Our brain is incredibly sparse, and that is key to how we learn. [Sparse representations](/neuroscience-research/sparse-distributed-representations/) are foundational to Numenta’s work, and we have published several papers on how sparse representations can lead to semantic representations better suited to build robust systems.

Pruning can also promote structural sparsity after training and lead to smaller networks, which can be embedded in smaller devices and are generally faster and more power-efficient. Two recent papers on pruning published in ICLR, the [Lottery Ticket Hypothesis (LT)](https://arxiv.org/abs/1803.03635) and [Rethinking the Value of Network Pruning](https://arxiv.org/abs/1810.05270), hints that some of the model’s performance might be attributed to learning the structure of the network instead of learning the weights.

A more recent paper presented in ICML deep learning theory workshop, called [Deconstructing the Lottery Ticket Hypothesis](https://eng.uber.com/deconstructing-lottery-tickets/), takes a step further in that direction. Zhou et al. extends the LT paper and shows that a pruned neural network, with weights initialized to constant values with the same sign as the weights of the original network, can achieve up to 87% accuracy in MNIST with no training.

The conference and workshops also featured a handful of interesting talks and discussions on naturally emerging sparsity and implicit sparsity in neural networks trained with or without regularization.

## Structural plasticity
Another key characteristic of our brain is how much it changes during the course of our lifetime or even in much smaller periods. In only a few days, [up to 30% of our synapses can be replaced](http://www.jneurosci.org/content/35/36/12535), which is a hallmark to how adaptable our brain is.

Zeroing out weights or activations is a common strategy during training (dropout and variants) and is a powerful regularization method. But can we build models that can also be sparse at inference time, while keeping the benefits of regularization? That is a compelling idea, being discussed in the community for years, with thought-provoking papers such as [Louizos et al](https://arxiv.org/abs/1712.01312).

A recent paper that captured my interest is [Sparse Evolutionary Training (SET)](https://arxiv.org/abs/1707.04780). In the SET model, the initial weights are sparsely distributed at around a 4% sparsity level. Connections are pruned during training, based on magnitude, and an equal number of random connections are reinitialized, promoting a structure search during training.

Two follow-up papers on SET were presented at ICML. The idea of dynamic sparse reparametrization is further explored in [Mostafa and Wang](https://arxiv.org/abs/1902.05967), with an improved heuristic that reallocates more connections to layers with higher training loss as opposed to random reallocation. The SET authors also present a [follow-up work](https://arxiv.org/abs/1906.11626) that proposes pruning all incoming and outgoing connections of a neuron, showing improved results (to be published).

![posters-ICML](../images/posters-icml.png)

> *Figure 4: Posters session at the seaside ballroom*

## Other topics of interest

Curriculum learning is a common technique in reinforcement learning and consists of presenting increasingly difficult tasks to your agent. This is especially useful in environments where the reward is sparse and difficult to obtain.

A paper by [Mangalam and Prabhu](https://openreview.net/pdf?id=HkxHv4rn24), from UnifyID, compares which examples are learned faster by deep neural nets and shallow classifiers, and concludes that the goodness of an example is an attribute of the sample, and not of the model. This points to an interest direction of research, to use shallow classifiers to distinguish easy to learn from hard to learn examples and apply it for curriculum learning in more complex models.

I also saw fascinating work on self-supervised learning models that use [contrastive predictive coding](https://arxiv.org/abs/1807.03748) to pre-train neural networks, allowing them to learn faster or with less labeled samples. What particularly caught my attention was a paper by [Löwe et al.](https://arxiv.org/abs/1905.11786), from the University of Amsterdam, which proposes a novel deep learning method that does not require labels nor end-to-end back-propagation. It is certainly an interesting research direction for biologically inspired learning models.

## Wrapping Up
I have at least a dozen more highlights, which wouldn’t fit the post! If you’d like to see Subutai’s summary of our week at ICML, you can view [this video taken during one of our recently livestreamed research meetings](https://www.youtube.com/watch?v=46vh8Cq2quw), where he presented a recap.  Overall I had a great time at ICML, and hope to be there next year for another round of ground-breaking research.

## Numenta Resources from ICML
* How Can We Be So Dense? The Robustness of Highly Sparse Representations: [Video](https://www.facebook.com/icml.imls/videos/474831503062000/?t=3628), [Poster](/assets/pdf/posters/ICML-Robustness-June-2019-poster.pdf), [slides](https://www.slideshare.net/numenta/icml-2019-workshop-how-can-we-be-so-dense-the-robustness-of-highly-sparse-representations)
* Subutai’s Recap of ICML: [Video](https://www.youtube.com/watch?v=46vh8Cq2quw)
