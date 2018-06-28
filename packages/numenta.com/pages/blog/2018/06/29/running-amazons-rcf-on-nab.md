---
author: Numenta
description: "After AWS announced its Random Cut Forest algorithm (RCF) for anomaly detection, we were curious to see how it would score on the Numenta Anomaly Benchmark (NAB), a benchmark we designed to test anomaly detection algorithms. We share the results in this blog and ask one of our engineers to walk us through the process"
date: 2018/06/29
hideImage: false
org: Joanne Cua & Luiz Scheinkman
image: ../images/rcf-on-nab.png
keywords: "Amazon anomaly benchmark"
title: "Running Amazon’s RCF Algorithm on the Numenta Anomaly Benchmark"
header: "Running Amazon’s Random Cut Forest Algorithm on the Numenta Anomaly Benchmark"
type: post
---

Last fall, we came across a [blog](https://aws.amazon.com/about-aws/whats-new/2017/11/now-get-explanations-for-anomaly-scores-with-amazon-kinesis-analytics-anomaly-detection/?sc_channel=em&sc_campaign=Launch_RN20171107&sc_publisher=aws&sc_medium=em_&sc_content=launch_la_nontier1&sc_country=&sc_geo=&sc_category=mult&sc_outcome=launch&mkt_tok=eyJpIjoiWVdReFl6SmxOemhrWlRRMyIsInQiOiJpNnlqXC9sZWRUZEVld0ZSVDEwd2NLTW5sb2JmMlp6S0JKdVVyZkZQbElZM09SZnpDQjhUdmN1dkR5dFM3bU5aWkVrZ3FPRHpMUjZmYm5jSkg1WUhUUmZLbXg3bUpOOVhUQzdIaTU0QjBuV3hucnV5ZDEzZld5cXhnZjE2NFdRUkMifQ%3D%3D) published by AWS, Amazon’s cloud computing subsidiary, announcing Amazon Kinesis Analytics for anomaly detection, which uses Random Cut Forest (RCF) algorithm to identify anomalies in streaming data.

Seeing a new algorithm for anomaly detection piqued our interest because we have developed our own benchmark for anomaly detection at Numenta, called the [Numenta Anomaly Benchmark (NAB)](/applications/numenta-anomaly-benchmark/). For those who are unfamiliar with NAB, it is the first benchmark designed to evaluate time-series data, and it has a unique scoring scheme that gives credit to algorithms that are able to find anomalies earlier while penalizing false results.

[NAB’s open source repository](https://github.com/numenta/NAB) contains more than 50 labeled data streams taken from a wide range of real-world sources. While reading AWS’ [paper](http://proceedings.mlr.press/v48/guha16.pdf) about using RCF algorithm for anomaly detection, we were pleasantly surprised to see that the authors demonstrated their algorithm using one of NAB’s sample datasets consisting of [six months of taxi ridership volume in New York City](https://github.com/numenta/NAB/blob/master/data/realKnownCause/nyc_taxi.csv).

Out of curiosity, we asked Luiz Scheinkman, one of our engineers, to run RCF on NAB to see how the new algorithm would score compared to the other anomaly detection algorithms we’ve evaluated using NAB, including our own HTM algorithm.

## ... And the results are in

Amazon’s RCF came in #5 out of 10 anomaly detection algorithms tested on NAB. Most of these are anomaly detection algorithms we found available in open source, while a few were submission entries to the [2016 NAB Competition](/company/newsletter/2016/02/10/numenta-anomaly-benchmark-competition/).

<style type="text/css">
	table.tableizer-table {
		font-size: 12px;
		border: 1px solid #CCC;
		font-family: Arial, Helvetica, sans-serif;
	}
	.tableizer-table td {
		padding: 4px;
		margin: 3px;
		border: 1px solid #CCC;
	}
	.tableizer-table th {
		background-color: #000000;
		color: fff;
		font-weight: bold;
	}
</style>
<table class="tableizer-table">
<thead><tr class="tableizer-firstrow"><th>Detector</th><th>Standard Profile</th><th>Reward Low FP</th><th>Reward Low FN</th></tr></thead><tbody>
 <tr><td>Perfect</td><td>100</td><td>100</td><td>100</td></tr>
 <tr><td><a href="https://github.com/numenta/nupic">Numenta HTM</a></td><td>70.5-69.7</td><td>62.6-61.7</td><td>75.2-74.2</td></tr>
 <tr><td><a href="https://github.com/smirmik/CAD">CAD OSE</a></td><td>69.9</td><td>67</td><td>73.2</td></tr>
 <tr><td><a href="https://github.com/numenta/NAB/tree/master/nab/detectors/knncad">KNN CAD</a></td><td>58</td><td>43.4</td><td>64.8</td></tr>
 <tr><td><a href="http://www.hpl.hp.com/techreports/2011/HPL-2011-8.pdf">Relative Entropy</a></td><td>54.6</td><td>47.6</td><td>58.8</td></tr>
 <tr><td><a href="http://proceedings.mlr.press/v48/guha16.pdf">Random Cut Forest</a></td><td>51.7</td><td>38.4</td><td>59.7</td></tr>
 <tr><td><a href="https://github.com/twitter/AnomalyDetection">Twitter ADVec v1.0.0</a></td><td>47.1</td><td>33.6</td><td>53.5</td></tr>
 <tr><td><a href="https://github.com/numenta/NAB/blob/master/nab/detectors/gaussian/windowedGaussian_detector.py">Windowed Gaussian</a></td><td>39.6</td><td>20.9</td><td>47.4</td></tr>
 <tr><td><a href="https://github.com/etsy/skyline">Etsy Skyline</a></td><td>35.7</td><td>27.1</td><td>44.5</td></tr>
 <tr><td>Bayesian Changepoint</td><td>17.7</td><td>3.2</td><td>32.2</td></tr>
 <tr><td><a href="https://arxiv.org/abs/1601.06602v3">EXPoSE</a></td><td>16.4</td><td>3.2</td><td>26.9</td></tr>
 <tr><td>Random</td><td>11</td><td>1.2</td><td>19.5</td></tr>
 <tr><td>Null</td><td>0</td><td>0</td><td>0</td></tr>
</tbody></table>

In order to get a better understanding on how Luiz evaluated RCF on NAB, I sat down with him and asked him a couple of questions regarding the process.

<p style="margin-left: 30px"><font size="4"><b>Can you give more details on how you integrated RCF into NAB?</b></font> <br><br>
There are <a href="https://github.com/numenta/NAB/wiki/NAB-Entry-Points">3 different ways</a> to test custom algorithms on NAB: <br>
<b>1.</b> Create a custom detector using NAB API <br>
<b>2.</b> Give NAB anomaly scores before the threshold optimization phase<br>
<b>3.</b> Give NAB the anomaly detections<br><br></p>

<p style="margin-left: 30px">Because the algorithm was already implemented in AWS Kinesis Data Analytics, I chose option 2 where I would just stream NAB data directly to AWS Kinesis and calculate the anomaly scores using the built-in <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/sqlref/sqlrf-random-cut-forest.html">RANDOM_CUT_FOREST</a> function. </p>

<p style="margin-left: 30px"><font size="4"><b>How much tweaking did you have to do to the algorithm to get these results?</b></font> <br>
I used the AWS Kinesis Data Analytics [default template for anomaly detection](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/app-anom-score-create-app.html) as is; the only tweak was to normalize the anomaly score.</p>

<p style="margin-left: 30px"><font size="4"><b>Have you tried changing the algorithm parameters to see if you would get different results?</b></font> <br>
I've tried using different values for the “shingleSize” and “numberOfTrees” parameters and published the results yielding the best scores I found, which were actually the default values for the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/sqlref/sqlrf-random-cut-forest.html">RANDOM_CUT_FOREST</a> function. The results are easy to replicate and the parameters are easy to change, so it would be great if anyone in the Open Source community could try different parameters and let me know if that improves the scores. </p>

<p style="margin-left: 30px"><font size="4"><b>How can somebody else replicate these results?</b></font> <br>
I’ve outlined how you can do so in seven steps. You can also find these instructions in our [NAB Random Cut Forest repository](https://github.com/numenta/NAB/tree/master/nab/detectors/random_cut_forest). </p>

<p style="margin-left: 50px"><font size="3"><b>1. Clone the NAB repository</b></font> <br>This command will close the repository:<br>
<code>git clone https://github.com/numenta/NAB.git</code>
</p>

<p style="margin-left: 50px"><font size="3"><b>2. Configure your AWS credentials</b></font> <br>
Use the <a href="https://aws.amazon.com/cli/">AWS Command Line Interface (CLI) tool</a>, and enter this command:<br>
<code>aws configure</code>
</p>

<p style="margin-left: 50px"><font size="3"><b>3. Create NAB results folder structure</b></font> <br>
This command will create the necessary <a href="https://github.com/numenta/NAB/blob/master/results/randomCutForest">directories</a> and entries in the <a href="https://github.com/numenta/NAB/blob/master/config/thresholds.json">config/thresholds.json</a> file:<br>
<code>python scripts/create_new_detector.py --detector randomCutForest</code>
</p>

<p style="margin-left: 50px"><font size="3"><b>4. Create AWS Kinesis Analytics Application</b></font> <br>
This command will create and configure a new AWS Kinesis Analytics Application ready to receive NAB data from the input stream and output anomaly scores suitable for NAB to the output stream:<br>
<code>python nab/detectors/random_cut_forest/random_cut_forest.py --create</code>
</p>

<p style="margin-left: 50px"><font size="3"><b>5. Stream all files</b></font> <br>
To stream all NAB data files use the following command: <br>
<code>python nab/detectors/random_cut_forest/random_cut_forest.py --stream</code>
</p>

<p style="margin-left: 50px"><font size="3"><b>6. Clean up</b></font> <br>
At the end of the evaluation, it is recommended you delete all resources used to compute the anomaly scores. Use the following command to delete all AWS resources created by this script: <br>
<code>python nab/detectors/random_cut_forest/random_cut_forest.py --delete</code>
</p>

<p style="margin-left: 50px"><font size="3"><b>7. Compute NAB scores</b></font> <br>
Once you have calculated anomaly scores for all NAB data, you can use NAB's standard commands to compute NAB scores. For example, use the following command from NAB's root directory to optimize the anomaly score threshold for your algorithm's detections, run the scoring algorithm, and normalize the raw scores to yield your final NAB scores. <br>
<code>python run.py -d randomCutForest --optimize --score --normalize</code>
</p>

<hr>

If you have any questions or comments or would like to share your results, don’t hesitate to leave a comment below or start a thread on the [NAB section of the HTM Forum](https://discourse.numenta.org/c/nupic/nab).
