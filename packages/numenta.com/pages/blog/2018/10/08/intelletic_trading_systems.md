---
author: Christy Maver
description: "Intelletic Trading Systems LLC (ITS) became a commercial licensee of Numenta in May 2018. They use HTM to develop a fully autonomous trading platform for futures and other financial instruments. In this post, Christy Maver interviews Bill Zemlak, the CEO of ITS, about how they’re using HTM, the results they’ve seen so far, and what’s ahead for the company."
date: 2018/10/08    
hideImage: false
org: VP of Marketing
image: ../images/its-logo-white-background.jpg
keywords: "Intelletic Trading Systems"
title: "Q&A with Bill Zemlak, CEO of Intelletic Trading Systems (ITS)"
header: "Q&A with Bill Zemlak, CEO of Intelletic Trading Systems (ITS)"
type: post
---

### Q1 – Tell me about ITS’s mission and how it influences your industry.
Intelletic Trading Systems (ITS) (www.intelletic.com) is the developer of a purely quantitative, proprietary artificial intelligence (AI) based platform making us a market leader in autonomous trading of futures and other assets. Our platform is designed to generate greater profit and incur less risk than any human discretionary trader.

The company came out of my experience as a trader and my belief that AI will be a disruptive technology in many fields, but especially in financial services. It’s only common sense that a machine can process vast amounts of data faster and more consistently than a human. A machine also does not have the two cognitive biases that are destructive to human discretionary trading – fear and greed.

We’ve been researching our core concepts for about a decade, and formally established ITS in 2015.

We are unique in our approach and are not aware of any other entity that is using HTM, or in fact any approach using cortical learning, to trade financial assets.

### Q2 – Why did you adopt HTM?
It’s been an interesting and winding road. My earliest research began with single level neural nets. I felt that the best approach to the use of AI in trading was to mimic how a human trader would behave but do it faster and more consistently. At the time, in the late 1990’s and early 2000’s, single level neural nets were state of the art. However, they proved to be completely ineffective for trading – incapable of learning to a level where they could produce consistent predictions from past data.

Around 2010, deep machine learning (DML) software started to become available, and we started to focus on DML approaches. Based on our reading and discussions with people we know in the trading industry, this is where most of the research remains focused today. However, after five challenging years of research, we concluded that DML was fundamentally flawed and limited, and that it was not going to meet our requirements.

What are these flaws? Well, there are two:

*	First, DML is not much more than a sophisticated form of non-linear regression. As such, it is completely dependent on the training data set to produce good results. Given that financial market data is highly random, we concluded that it was impossible to obtain a training data set that was both large enough and representative enough to train a DML system
*	Second, DML as part of the regression family and assuming an adequate training data set, is good at pattern recognition. This can be loosely termed artificial intelligence. However, it is not good about inferring or making predictions when it encounters things beyond the training set boundaries that it has never seen before. This capability is known as artificial general intelligence, and this is what is needed to mimic a human trader.

We’re not alone in our thinking about DML. In Axios magazine in 2017, Geoffrey Hinton, who in 1986 authored the seminal paper on back-propagation that is at the heart of neural nets and DML, said:

<div style="margin-left:4rem; margin-bottom:1rem;font-style:italic;">
  “…that to get to where neural networks are able to become intelligent on their own, what is known as unsupervised learning, ...means getting rid of back-propagation... I don't think it's how the brain works.... We clearly don't need all the labeled data..... My view is throw it all away and start again”
</div>

About the same time in Wired magazine in August 2017, Bill Joy, a co-founder of Sun, a co-inventor of Java, and a visionary who was working on the Internet of Things (IoT) two decades ago, said:

<div style="margin-left:4rem; margin-bottom:1rem;font-style:italic;">
  “It’s not so interesting just to identify what’s out there statically. What you want to do is have some notion of how that affects things in the time domain... Sure, I can image-recognize a child and a ball on this sidewalk. The important thing is to recognize that, in a given time domain, they may run into the street, right?”
</div>

With our own experience and the comments above, we felt that DML was never going to be an appropriate approach to trading. The key problem is that financial data is continuously streaming and highly random. A supervised learning approach that required an unobtainable training set would never work. We needed an approach to artificial general intelligence, an unsupervised learning approach.

We started to research those approaches and identified cortical learning as having the ability to deal with streaming data and learn unsupervised and in a generalized way. We looked at numerous available options and identified Numenta’s conceptual approach and open source availability as an ideal fit for us. We firmly believe that based on the results we have obtained, we made the correct decision.

A little shout out is in order here as well. Numenta has been fabulous to work with over the entire time. We started with Matt Taylor, who manages Numenta’s open source community, and he steered us through many initial questions and getting what we needed operational through [NuPIC](https://github.com/numenta/nupic). For a commercial-focused business like ours, having a partner like Numenta that is responsive and interested is very important to our success.

### Q3 – How are you using HTM at ITS?

We have built an end to end trading Platform at ITS. In general:

*	ITS’s proprietary Cortical Learning Model (CLM) has the ability to predict where and when a trade should be entered and exited, as well as determining asset movement based on trends in real-time trading charts.
*	We’ve developed proprietary trading rules to enter and exit trades and effectively manage trading risk. These rules are based on our years of experience with trading strategies.
*	Our trades are short duration ensuring that the predictions made at entry remain sufficiently valid over the duration of the trade.
*	Our approach is purely quantitative and relies solely on incoming chart data; the Platform does not utilize any macro-economic, political, news, social media or other such data.
*	The platform can be readily scaled in both funds deployed and the number of traded assets.

The ITS Platform is illustrated in the following diagram:

![ITS Platform diagram](../images/platform.png)

Key components of the Platform include:

*	**Asset Selection** -  ITS ranks various asset sources to trade on the platform.
*	**Proprietary Cortical Learning Model** – The CLM predicts hundreds of rule factors for use in ITS’s trading strategy. The Cortical Learning Algorithm function is where we are using HTM. It’s at the heart of the Platform.
*	**Proprietary Execution Container** – This is the operating infrastructure that controls automatic execution of the Platform without human supervision 24/6 while markets are open. It includes extensive risk management.
*	**Broker accounts** -The Platform sends trading signals (enter, exit and manage stops) to any broker account worldwide that is accessible via an API.

One of the most important factors in the success of the CLA is that the data must be properly transformed and encoded. ITS has devoted considerable research and testing to methods for transforming and encoding data. We have developed proprietary transformational techniques that especially suit the financial data that the Platform is processing.

### Q4 – What type of results are you generating?
ITS has used the S&P e-mini future (symbol ES) as its development asset. The ES is the most widely traded future contract worldwide.

The development and back-testing period encompassed three years. After our successful back-test, we started simulated live trading of the ES on July 1, 2018. General comments regarding simulated live results are:
*	The Platform is operating on a fully autonomous basis using a simulated account at ITS’s futures broker. There are no performance differences, including commission rates, between the results achieved on the simulated account versus the results achieved on a funded account.
*	From the back-testing (including margin and safety factor) the Platform generated net profit per ES contract of **47.3% simple annual return**. Weekly compounding of profits will increase that return number.
*	While **long trading (i.e. a profit is made when prices increase) has been operational since July 1st**, the results are not yet statistically significant but will be by the end of 2018.
*	Recently, **ITS started trading the ES short (i.e. a profit is made when prices decline) in addition to long**. Results to date indicate that **short trading will produce similar results to the 47.3% long return**.
* Long results are consistent with the profitability and metrics of the three-year back-test.

**The bottom line is that both long and short trading results are excellent!**


### Q5 – How are you planning to evolve your use of HTM in your application?
ITS currently has a development project to build and incorporate a multi-level HTM model. A human trader would, upon resolution of a trade, assess (i) if the predictions that caused the trade were correct and (ii) if the interpretation of the predictions to trigger a trade was correct. ITS believes that such a multi-level model will be groundbreaking and will significantly improve both the predictions and the interpretation of the predictions. We believe the use of multi-level models is a major and largely unexplored opportunity to improve the results of HTM applications.

ITS also intends to extend trading to other assets. This includes additional futures, equities, commodities and forex, for example.

### Q6 – Where is ITS from a business viewpoint today?
At ITS we are confident that we have solved the trading application and are planning to complete the multi-level model and move to live trading with internal company funds early in 2019.

This summer we closed a very successful seed equity round after raising $1.1 million in Canada and the United States.

We currently have  an Intermediate and a Series A equity funding initiative underway, and refer readers to our website for details and contact information. Our goal is to have the Intermediate round completed by the end of November and the Series A round completed in 2019 Q1.

Longer term, it’s our objective to raise a trading fund and trade that fund on a proprietary basis. We plan to assess that in the summer of 2019 when we have at least six months of live trading results across multiple assets. The decision to establish the trading fund will be in conjunction with a further financing, and that financing, while still flexible today, may be either private or public.

### Q7 – What should readers do if they want to find out more about ITS?
We’re always happy to hear from people interested in what we are doing. The best way to contact us is through our web site [www.intelletic.com](http://www.intelletic.com/).

Given the proprietary nature of the ITS Platform, we do not discuss or present specific technical details of our work. But we’re always happy to talk about HTM and trading.

If a reader is considering an investment in our Intermediate or Series A funding opportunities, please contact us directly so we can determine the best way to proceed.

Christy, we really appreciate Numenta’s interest in ITS and the help that Numenta has provided us to date. We’re looking forward to a long relationship!


### Disclaimer
This Summary does not constitute an offer to sell or a solicitation of any offer or recommendation to purchase securities under the securities laws of any jurisdiction. An offer to sell securities may only be made following delivery of a Private Placement Memorandum prepared by the Company, and upon execution of a Subscription Agreement by the investor and the Company. All information included in this Summary shall be qualified by disclosures made in the Private Placement Memorandum and the Subscription Agreement. Any conflict between the information contained in this Summary, on the one hand, and the Private Placement Memorandum and Subscription Agreement, on the other hand, shall be controlled by the latter.
