// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import React from 'react'
import MarkdownBody from 'numenta-web-shared-components/lib/MarkdownBody'
import Helmet from 'react-helmet'
import {getMetadataTags} from 'numenta-web-shared-utils/lib/client'
import Content from './research-publications.md'
import styles from './index.css'


/**
 * Neuroscience Research MainSection and page content - React view component.
 */
const SectionPublications = (props, {config}) => (
  <article className={styles.columns}>
    <Helmet title={Content.title}>
      {getMetadataTags(Content, config.baseUrl, Content.description)}
    </Helmet>
    <MarkdownBody markdown={Content} />
  </article>
)

SectionPublications.contextTypes = {
  config: React.PropTypes.object,
}

export default SectionPublications
