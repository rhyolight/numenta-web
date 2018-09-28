---
author: Numenta
description: "Numenta researchers Marcus Lewis and Mirko Klukas will visit the MIT Department of Brain and Cognitive Sciences to give a presentation on neural networks that process input over time."
date: 2018/10/02
event:
  what: "Processing sensory(-motor) sequences: Neural networks that work by testing predictions"
  when:
    begin: 2018/10/02 10:00
    end: 2018/10/02 11:30
  where:
    desc: McGovern Boardroom, 46-3160Q 43 Vassar St.
    city: Cambridge
    state: MA
    country: USA
    web: https://bcs.mit.edu/
  who: Marcus Lewis and Mirko Klukas
  why: Speaking
image: ../images/mit.png
org: Marcus Lewis and Mirko Klukas
keywords: "BCS MIT Numenta"
title: "MIT Department of Brain and Cognitive Sciences"
header: "MIT Department of Brain and Cognitive Sciences"
type: post
---

## Abstract
In this talk, we present neural network models that process input over time. We show a predictive mechanism that relies on properties of dendrites that aren't modeled in traditional point neurons. We combine this mechanism with location representations based on grid cells to create neural networks that process different types of input sequences. This predictive mechanism involves a population of neurons that each has "proximal" and "distal" integration zones on its dendrites. The distal input acts as a predictive signal, while the proximal input gives the cell its classical receptive field and is used to test which predictions are accurate. The population forms a conjunctive representation of the two inputs. To process extrinsic sensory sequences, we allow this population to learn recurrent connections on distal dendrites, and this causes it to implement sequence memory resembling the Lempel-Ziv compression algorithm. To process input sequences caused by self-motion, we add a second population of neurons resembling grid cells which represent a location and perform path integration, and the two populations learn a spatial map. Neural networks built around this predictive mechanism recognize sequences and locations from ambiguous sensory inputs by activating multiple representations, using these representations to make predictions, and using subsequent input to disambiguate.
