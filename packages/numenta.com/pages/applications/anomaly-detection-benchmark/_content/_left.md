---
title: Anomaly Detection Benchmark | Numenta
description: The Numenta Anomaly Benchmark (NAB) is an anomaly detection benchmark that measures results from algorithms designed to find anomalies in streaming data. NAB is an open source framework with a real-world, labeled dataset, and a scoring mechanism that rewards early detection and on-line learning.
header: Anomaly Detection Benchmark
---

[biz]:  /assets/pdf/numenta-anomaly-benchmark/NAB-Business-Paper.pdf
[nab]:  /applications/numenta-anomaly-benchmark/
[peer]: /resources/papers/unsupervised-real-time-anomaly-detection-for-streaming-data/

Sensors and data streams are proliferating as the Internet of Things vision
becomes realized. However, using the data from these sensors is not so easy.
Specifically, being able to identify anomalies in streaming data is surprisingly
difficult. Most techniques are a form of thresholds, i.e. predetermined limits
that must be set to notify abnormalities. However, thresholds have some glaring
weaknesses, including often finding a problem after it has happened, not before,
and not adapting to new states, such that false positives can crowd out the
important signal.

We created the **Numenta Anomaly Benchmark (NAB)** in order to be able to
measure and compare results from algorithms designed to find anomalies in
streaming data. NAB is an open source framework consisting of:

* A dataset with real-world, labeled data files
* A scoring mechanism that rewards early detection and on-line learning

### Resources

* Business Paper: [The Numenta Anomaly Benchmark][biz]
* Technical Peer-Reviewed Paper:
  [Unsupervised Real-Time Anomaly Detection for Streaming Data][peer]
* [More Information][nab]
