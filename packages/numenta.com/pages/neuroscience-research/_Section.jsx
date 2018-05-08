// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import React from 'react'
import Markdown from 'numenta-web-shared-components/lib/Markdown'
import Helmet from 'react-helmet'
import {getMetadataTags} from 'numenta-web-shared-utils/lib/client'
import Content from './neuroscience-research.md'
import styles from './index.css'


/**
 * Neuroscience Research MainSection and page content - React view component.
 */
const SectionNeuroscience = (props, {config}) => (
  <article className={styles.columns}>
    <Helmet title={Content.title}>
      {getMetadataTags(Content, config.baseUrl, Content.description)}
    </Helmet>
    <Markdown columns={true}>
      <div dangerouslySetInnerHTML={{__html: Content.body}} />
    </Markdown>
  </article>
)

SectionNeuroscience.contextTypes = {
  config: React.PropTypes.object,
}

export default SectionNeuroscience
