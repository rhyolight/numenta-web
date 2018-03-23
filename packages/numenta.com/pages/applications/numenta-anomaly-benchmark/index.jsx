// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import Helmet from 'react-helmet'
import IconDownload from 'react-icons/lib/fa/cloud-download'
import IconGithub from 'react-icons/lib/fa/github'
import IconPdf from 'react-icons/lib/fa/file-pdf-o'
import IconSlideshare from 'react-icons/lib/fa/slideshare'
import React from 'react'

import Anchor from 'numenta-web-shared-components/lib/Anchor'
import IconMarker from 'numenta-web-shared-components/lib/IconMarker'
import Image from 'numenta-web-shared-components/lib/Image'
import List from 'numenta-web-shared-components/lib/List'
import ListItem from 'numenta-web-shared-components/lib/ListItem'
import Paragraph from 'numenta-web-shared-components/lib/Paragraph'
import Section from 'numenta-web-shared-components/lib/Section'
import SubTitle from 'numenta-web-shared-components/lib/SubTitle'
import TextLink from 'numenta-web-shared-components/lib/TextLink'
import Video from 'numenta-web-shared-components/lib/Video'
import {getMetadataTags} from 'numenta-web-shared-utils/lib/client'

import ImageCompare from './images/compare.png'
import ImageDatasheet from './images/datasheet.png'
import ImageDetail from './images/detail.png'
import ImageEquations from './images/equations.png'
import ImageHeartbeat from './images/heartbeat.png'
import ImageMath from './images/math.png'
import ImageRepo from './images/github.png'
import ImageScoreboard from './images/scoreboard.png'
import ImageVideoEval from './images/video-mlconf.png'
import ImageVideoNab from './images/video-nab.png'
import styles from './index.css'
import Metatags from './_metatags.md'
import ImageAnomalyDetection from './images/anomaly-detection-image.png'

/* eslint-disable max-len */
/**
 * Numenta Anomaly Benchmark (NAB) page - React view component.
 */

const title = 'Evaluating Anomaly Detection in Streaming Data: Numenta Anomaly Benchmark (NAB)'

const NabPage = (props, {config}) => {
  const {baseUrl} = config

  return (<article>
    <Helmet title={title}>
      {getMetadataTags(Metatags, baseUrl)}
    </Helmet>
    <Section headline={true} open={true} title={title}>
      <div className={styles.columns}>
        <div className={styles.aside}>
          <Video
            image={ImageVideoNab}
            respond="mw"
            time="02:23"
            title="Numenta Anomaly Benchmark (NAB) for anomaly detection in streaming data"
            type="youtube"
            videoId="u_ENXLIlu8s"
          />
        </div>
        <div className={styles.content}>
          <SubTitle level={3}>
            The First Benchmark For Evaluating Anomaly Detection In Streaming
            Data
          </SubTitle>
          <Paragraph lead={true}>
            The need for anomaly detection has grown, as the Internet of Things
            has produced a world that’s overflowing with streaming data. As
            these data sources continue to grow, so does the need for anomaly
            detection.
          </Paragraph>
          <Paragraph>
          Uncovering anomalies allows you to:
          </Paragraph>
          <List marker="disc">
            <ListItem>
              Detect potential machine failures
            </ListItem>
            <ListItem>
              Recognize changes in Twitter activity
            </ListItem>
            <ListItem>
              Identify unexpected traffic patterns
            </ListItem>
          </List>
          <Paragraph>
            There are different methods of anomaly detection in streaming
            data, but how do you measure their effectiveness? NAB is the first
            benchmark designed for time-series data that gives credit to
            finding anomalies earlier and adjusting to changed patterns.
          </Paragraph>
        </div>
      </div>

      <Anchor name="features" />
      <SubTitle>Features</SubTitle>
      <div className={styles.columns}>
        <div className={styles.aside}>
          <Image
            alt="Numenta Anomaly Detection Benchmark – Heartbeat monitor"
            border={true}
            respond="mw"
            src={ImageHeartbeat}
          />
        </div>
        <div className={styles.content}>
          <SubTitle level={3}>Real-World Dataset</SubTitle>
          <Paragraph>
            NAB contains a dataset with real-world, labeled data files across
            multiple domains. We’ve accumulated this valuable data from years
            of working with customers to address their anomaly problems.
          </Paragraph>
        </div>
      </div>
      <div className={styles.columns}>
        <div className={styles.aside}>
          <Image
            alt="Numenta Anomaly Detection Benchmark – Mathematical Equations"
            border={true}
            respond="mw"
            src={ImageEquations}
          />
        </div>
        <div className={styles.content}>
          <SubTitle level={3}>Scoring Mechanism</SubTitle>
          <Paragraph>
            We have developed a unique scoring function that rewards early
            detection, penalizes late or false results, and gives credit for
            on-line learning.
          </Paragraph>
        </div>
      </div>
      <div className={styles.columns}>
        <div className={styles.aside}>
          <Image
            alt="Numenta Anomaly Detection Benchmark – Geometric and Math Blueprints"
            border={true}
            respond="mw"
            src={ImageMath}
          />
        </div>
        <div className={styles.content}>
          <SubTitle level={3}>Open Source Code Library</SubTitle>
          <Paragraph>
            NAB is a modular, open source code base. Numenta will be working
            to build a community around NAB to add data files and test
            additional algorithms.
          </Paragraph>
        </div>
      </div>

      <Anchor name="resources" />
      <SubTitle>Resources</SubTitle>
      <div className={styles.columns}>
        <div className={styles.aside}>
          <TextLink to="/resources/papers/unsupervised-real-time-anomaly-detection-for-streaming-data/">
            <Image
              alt="Numenta Anomaly Detection Benchmark – Anomaly Detection Image"
              border={true}
              respond="mw"
              src={ImageAnomalyDetection}
            />
          </TextLink>
        </div>
        <div className={styles.content}>
          <SubTitle level={3}>
            Research Paper: Unsupervised Real-Time Anomaly Detection for Streaming Data
          </SubTitle>
          <Paragraph>
            This paper introduces an anomaly detection technique using HTM and
            the Numenta Anomaly Benchmark (NAB). The paper also contains an
            analysis of the performance of ten algorithms (including HTM) on
            NAB.
          </Paragraph>
          <IconMarker icon={<IconPdf />}>
            <TextLink to="/resources/papers/unsupervised-real-time-anomaly-detection-for-streaming-data/">
              Read Research Paper
            </TextLink>
          </IconMarker>
        </div>
      </div>
      <div className={styles.columns}>
        <div className={styles.aside}>
          <Video
            image={ImageVideoEval}
            respond="mw"
            time="19:23"
            title="Evaluating Real-Time Anomaly Detection"
            type="youtube"
            videoId="SxtsCrTHz-4"
          />
        </div>
        <div className={styles.content}>
          <SubTitle level={3}>
            Evaluating Real-Time Anomaly Detection:
            The {title}
          </SubTitle>
          <Paragraph>
            Subutai Ahmad, VP Research presenting NAB and discussing the need
            for evaluating real-time anomaly detection algorithms. This
            presentation was delivered at MLConf (Machine Learning Conference)
            in San Francisco 2015.
          </Paragraph>
          <IconMarker icon={<IconSlideshare />}>
            <TextLink to="http://www.slideshare.net/numenta/evaluating-realtime-anomaly-detection-the-numenta-anomaly-benchmark">
              See Slides
            </TextLink>
          </IconMarker>
        </div>
      </div>
      <div className={styles.columns}>
        <div className={styles.aside}>
          <TextLink to="/assets/pdf/numenta-anomaly-benchmark/NAB-Business-Paper.pdf">
            <Image
              alt="Numenta Anomaly Detection Benchmark – NAB White Paper Chart Figure"
              border={true}
              respond="mw"
              src={ImageCompare}
            />
          </TextLink>
        </div>
        <div className={styles.content}>
          <SubTitle level={3}>
            White Paper: The {title}
          </SubTitle>
          <Paragraph>
            Why did we create this benchmark? Why is anomaly detection so hard
            in streaming data? This paper answers those questions and
            highlights how business managers can use NAB to ensure they’re
            getting valuable insights as early as possible.
          </Paragraph>
          <IconMarker icon={<IconPdf />}>
            <TextLink to="/assets/pdf/numenta-anomaly-benchmark/NAB-Business-Paper.pdf">
              Read Whitepaper
            </TextLink>
          </IconMarker>
        </div>
      </div>
      <div className={styles.columns}>
        <div className={styles.aside}>
          <TextLink to="http://arxiv.org/abs/1510.03336">
            <Image
              alt="Numenta Anomaly Detection Benchmark – NAB Scoreboard"
              border={true}
              respond="mw"
              src={ImageScoreboard}
            />
          </TextLink>
        </div>
        <div className={styles.content}>
          <SubTitle level={3}>
            Research Paper: Evaluating Real-time Anomaly Detection
            Algorithms – the {title}
          </SubTitle>
          <Paragraph>
            This peer-reviewed paper was accepted to the {' '}
            <TextLink to="http://www.icmla-conference.org/icmla15/">
              IEEE Conference on Machine Learning and Applications
            </TextLink> {' '}
            December 9-11, 2015 in Miami. It contains technical details on
            NAB, including the mathematical explanation of the scoring system.
          </Paragraph>
          <IconMarker icon={<IconPdf />}>
            <TextLink to="http://arxiv.org/abs/1510.03336">
              Read Research Paper
            </TextLink>
          </IconMarker>
        </div>
      </div>
      <div className={styles.columns}>
        <div className={styles.aside}>
          <TextLink to="https://github.com/numenta/NAB">
            <Image
              alt="Numenta Anomaly Detection Benchmark – NAB Github Repository"
              border={true}
              respond="mw"
              src={ImageRepo}
            />
          </TextLink>
        </div>
        <div className={styles.content}>
          <SubTitle level={3}>NAB Repository</SubTitle>
          <Paragraph>
            This open source library contains all data files, algorithms and
            documentation. Use this repository to try NAB for yourself.  Test
            your own techniques against the published algorithms and share
            your results.
          </Paragraph>
          <IconMarker icon={<IconGithub />}>
            <TextLink to="https://github.com/numenta/NAB">
              Visit Repository
            </TextLink>
          </IconMarker>
        </div>
      </div>
      <div className={styles.columns}>
        <div className={styles.aside}>
          <TextLink
            to="/assets/pdf/numenta-anomaly-benchmark/NAB-Data-Sheet.pdf"
          >
            <Image
              alt="Numenta Anomaly Detection Benchmark – NAB Datasheet"
              border={true}
              respond="mw"
              src={ImageDatasheet}
            />
          </TextLink>
        </div>
        <div className={styles.content}>
          <SubTitle level={3}>
            Data Sheet: {title}
          </SubTitle>
          <Paragraph>
            Download this two-page data sheet to learn more about the key
            components of NAB.
          </Paragraph>
          <IconMarker icon={<IconDownload />}>
            <TextLink to="/assets/pdf/numenta-anomaly-benchmark/NAB-Data-Sheet.pdf">
              Download Datasheet
            </TextLink>
          </IconMarker>
        </div>
      </div>

      <Anchor name="try" />
      <SubTitle>
        Try NAB for Yourself
      </SubTitle>
      <div className={styles.columns}>
        <div className={styles.aside}>
          <Image
            alt="Numenta Anomaly Detection Benchmark – NAB Chart Detail"
            border={true}
            respond="mw"
            src={ImageDetail}
          />
        </div>
        <div className={styles.content}>
          <SubTitle level={3}>
            Try the {title}
          </SubTitle>
          <Paragraph>
            We’ve made it easy for you to try NAB. {' '}
            <TextLink to="https://github.com/numenta/NAB">
              Visit the repository
            </TextLink> {' '}
            to test your own techniques and share your results. Use NAB to
            select the best algorithm for your specific application.
          </Paragraph>
          <SubTitle level={3}>
            Contribute Your Data
          </SubTitle>
          <Paragraph>
            We are committed to adding more real-world data files to our
            benchmark dataset. Do you have streaming data files with known
            anomalies? Contact us at {' '}
            <TextLink to="mailto:nab@numenta.org">nab@numenta.org</TextLink>
            {' '} to see if we can incorporate your data into a future
            version of NAB.
          </Paragraph>
        </div>
      </div>
    </Section>
  </article>
  )
}

NabPage.contextTypes = {
  config: React.PropTypes.object,
}

export default NabPage
