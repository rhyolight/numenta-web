---
author: Christy Maver
description: "In 2016, Numenta co-founders Jeff Hawkins and Donna Dubinsky wrote a blog about the three major approaches to building machine intelligence: Classic AI, Simple Neural Networks, and Biological Neural Networks. This piece revisits each one and looks at the machine intelligence landscape today. Discover the state of the art, compare and contrast approaches, and understand fundamental limitations. Read why brain theory will be the future of machine intelligence."
date: 2018/05/16
hideImage: true
image: ../images/MachineIntelligenceLandscape2018.jpg
org: VP of Marketing
keywords: "machine intelligence landscape"
title: "The 2018 Machine Intelligence Landscape: A New Look at MI vs ML vs DL vs AI"
header: "The 2018 Machine Intelligence Landscape: A New Look at MI vs ML vs DL vs AI"
type: post
---

Two years ago, our co-founders, Jeff Hawkins and Donna Dubinsky, wrote a blog post titled, [What is Machine Intelligence vs. Machine Learning vs. Deep Learning vs. Artificial Intelligence (AI)?](/blog/2016/01/11/machine-intelligence-machine-learning-deep-learning-artificial-intelligence/) The post, which quickly went viral, was our attempt to make sense of the different approaches to building intelligent machines – approaches with similar sounding and often overlapping terminology. Numenta’s high-level assessment was that there are 3 main categories in this space, and we termed them Classic AI, Simple Neural Networks, and Biological Neural Networks, as shown in the table below.

Since publishing that post in 2016, there has been progress, to varying degrees, in each category. In this post, we’ll take a closer look at each one to assess what the path to machine intelligence looks like in 2018.

|   | *Classic AI* | *Simple Neural Network* | *Biological Neural Network* |
| - |------------| --------------------- | ------------------------- |
| **Examples** | Watson |	Deep Learning	| Hierarchical Temporal Memory (HTM) |
| **Associated terms** | Expert systems	| Artificial Neural Nets (ANN) <br/> Machine learning | Machine intelligence |
| **Data sources** | Rules from experts	| Large datasets	| Data streams |
| **Training** | Programmed by experts | Derived from labeled databases	| Derived from unlabeled data streams |
| **Outputs**	| Answers to questions | Classification	| Prediction <br/> Anomaly detection <br/> Classification |
| **Batch vs. continuous learning**	| Batch	| Batch	| Continuous |
| **Need to know what you are looking for**	| Yes |	Requires labeled data	| No |
| **Many individual models** | Hard |	Hard | Easy |
| **Biological basis** | None | Simple | Realistic |
| **Provides roadmap to general machine intelligence** | No |	No | Yes |

<center><i>2016 Table Summarizing the Characteristics of the 3 Approaches</i></center>

### The Classic AI Approach

In 2016, we defined Classic AI as an expert systems approach. Classic AI solutions solve specific problems using a set of rules programmed by experts. They may exhibit some learning but only in domain-specific areas. Classic AI systems can create a deep knowledge base about a particular issue. While there have been some successes in areas where a domain or question is well-defined, Classic AI has not changed much. Given that it has very little to do with human intelligence and does not generalize across domains, it has not generated massive interest as a potential path to machine intelligence.

### The Simple Neural Network Approach

Machine learning (ML) has seen explosive growth over the past two years, driven largely by deep learning, which uses a simple neural network approach. A recent [Forbes article](https://www.forbes.com/sites/louiscolumbus/2018/02/18/roundup-of-machine-learning-forecasts-and-market-estimates-2018/#1422d43e2225) quoted that machine learning patents grew at a 34% Compound Annual Growth Rate (CAGR) between 2013 and 2017, the third-fastest growing category of all patents granted. Machine Learning Engineer is now the fastest-growing job position in the U.S. according to [LinkedIn’s 2017 U.S. Emerging Jobs Report](https://economicgraph.linkedin.com/research/LinkedIns-2017-US-Emerging-Jobs-Report). We’ve seen a rise in machine learning applications, from self-driving cars to social media services to facial recognition. It’s not just the quantity that has risen but the quality as well. Error rates for image labeling have fallen from [28.5% to below 2.5% since 2010](https://www.forbes.com/sites/louiscolumbus/2018/01/12/10-charts-that-will-change-your-perspective-on-artificial-intelligences-growth/#529521f44758). While it’s not perfect, [as anyone who knows the difference between a turtle and a rifle can attest to](https://www.theverge.com/2017/11/2/16597276/google-ai-image-attacks-adversarial-turtle-rifle-3d-printed), it has greatly improved since 2016. You certainly couldn’t unlock a phone with your face two years ago.

However, despite the progress, many of the improvements are a direct result of more computer horsepower and bigger data sets. Machine learning techniques usually rely on large labeled data sets. The more data a ML algorithm has, the more accurate it can be. Yet labeled data can be difficult to obtain, and in many cases doesn’t exist. Machine learning’s dependency on it creates a scalability issue that is hard to overcome if the goal is to create intelligent machines.

### The Biological Neural Network Approach

The biological approach is based on the assumption that general intelligence depends on principles that the other approaches do not capture, and that the quickest path to true AI is to study the brain to discover those principles. That’s what we do at Numenta: we seek the essential attributes that cannot be ignored in building intelligent systems. These attributes include how we represent information, how memory is a sequence of patterns, how behavior is integrated with learning, and how learning is continuous. At the heart of our models is a biologically-realistic neuron model that explains how brains make predictions. It is much more capable than the abstract and simplified neurons used in simple neural networks.

Since the original blog post, we’ve made several advances in our research. We’ve published five peer-reviewed papers, including two fundamental Frontiers journal papers that propose how the brain learns predictive models of the world – first with [extrinsic sequences](/resources/papers/why-neurons-have-thousands-of-synapses-theory-of-sequence-memory-in-neocortex/) and next with [sensorimotor sequences](/resources/papers/a-theory-of-how-columns-in-the-neocortex-enable-learning-the-structure-of-the-world/). We’ve made additional discoveries that we are in the process of documenting. One particular discovery was so significant that we decided to [focus all our energies on neuroscience research](/blog/2017/07/18/Numenta-Research-FY-2018/). We reduced application development so that we could focus almost exclusively on brain theory, and now we are making great progress in completing a framework for understanding how the neocortex works. Although we have not yet published this new work, we have given [presentations on parts of it](/resources/papers-videos-and-more/jeff-hawkins-simons-institute-talk/).

### The Machine Intelligence Landscape Today

While all three approaches have made progress, an interesting trend has occurred. Just as Machine Learning and Deep Learning have grown in popularity, so has awareness of their limitations – especially from the most respected experts within the field. People like Geoff Hinton, Francois Chollet and Demis Hassabis have [expressed concern](/blog/2017/11/14/secret-to-strong-ai/) that new approaches are needed, that scaling current techniques won’t get us there, and that perhaps the brain can show us the way.

On the surface, one might hope that the three approaches are converging towards a single approach to general artificial intelligence. And while that might be true in spirit, it’s quite different in execution. There seems to be agreement that the brain offers an example of an intelligent machine that we can learn from, but the deep learning approach takes a different tactic. In general, they might look to neuroscience for occasional inspiration but not for detailed algorithms, and biological accuracy almost always yields to engineered solutions.

Our approach is essentially the opposite: we start with the brain and adhere to the biology. If something isn’t possible in the brain, it’s not possible in our theories and software. First and foremost, our goal is to understand the brain. We believe this is the fastest path to creating general machine intelligence.

### Summary

Fundamentally, our analysis of the different approaches to machine intelligence remains the same today as it did two years ago. We still believe that the biological neural network approach is the only one that provides a guaranteed roadmap to machine intelligence and is the fastest way to reach that goal. We’re confident that the brain theory framework we are developing today will be the foundation for tomorrow’s truly intelligent machines.
