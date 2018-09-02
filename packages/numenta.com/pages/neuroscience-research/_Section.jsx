// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import React from 'react'
import Markdown from 'numenta-web-shared-components/lib/Markdown'
import Paragraph from 'numenta-web-shared-components/lib/Paragraph'
import Helmet from 'react-helmet'
import Video from 'numenta-web-shared-components/lib/Video'
import TextLink from 'numenta-web-shared-components/lib/TextLink'
import {getMetadataTags} from 'numenta-web-shared-utils/lib/client'
import Content from './neuroscience-research.md'
import styles from './index.css'
import ImageOurGoal from './images/our-goal.jpg'


/**
 * Neuroscience Research MainSection and page content - React view component.
 */
const SectionNeuroscience = (props, {config}) => (
  <article className={styles.columns}>
    <Helmet title={Content.title}>
      {getMetadataTags(Content, config.baseUrl, Content.description)}
    </Helmet>
    <h2>
      Our Goal
    </h2>
    <hr />
    <div className={styles.columns}>
      <div className={styles.aside}>
        <Video
          border={true}
          image={ImageOurGoal}
          respond="mw"
          shadow={true}
          title="Key Discoveries in Understanding How the Brain Works"
          type="youtube"
          videoId="X50GY0mdHlw"
        />
      </div>
      <div className={styles.content}>
        <Paragraph>
          Through our focus on cortical theory, we seek to understand the
          complex circuitry of a cortical column. We want to understand the
          function and operation of the laminar circuits in the brain,
          including what the neurons are doing, what the layers are doing, how
          they interact, and how a cortical column works.
        </Paragraph>
        <Paragraph>
          <TextLink
            to="https://en.wikipedia.org/wiki/Vernon_Benjamin_Mountcastle"
          >Vernon Mountcastle</TextLink> proposed that because every part of
          the neocortex the same complex circuitry, then every part is doing
          the same thing. Therefore, if we can understand a cortical column,
          we will understand the neocortex.
        </Paragraph>
      </div>
    </div>
    <Markdown columns={true}>
      <div dangerouslySetInnerHTML={{__html: Content.body}} />
    </Markdown>
  </article>
)

SectionNeuroscience.contextTypes = {
  config: React.PropTypes.object,
}

export default SectionNeuroscience
