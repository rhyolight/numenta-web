// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import MarkdownBody from 'numenta-web-shared-components/lib/MarkdownBody'
import MarkdownMedia from 'numenta-web-shared-components/lib/MarkdownMedia'
import React from 'react'
import Helmet from 'react-helmet'
import {prefixLink} from 'gatsby-helpers'

import ContentLeft from './_content/_left.md'
import ContentRight from './_content/_right.md'

import styles from './index.css'


/**
 * Machine Intelligence Technology - main Section/Page React view component.
 */
const SectionTechnology = (props, {config}) => {
  const {baseUrl} = config

  return (<article className={styles.columns}>
    <Helmet>
      <meta
        name="twitter:image"
        content={baseUrl + prefixLink(ContentRight.image)}
      />
      <meta
        name="twitter:description"
        content={ContentLeft.brief}
      />
    </Helmet>
    <div className={styles.aside}>
      <MarkdownMedia markdown={ContentRight} />
    </div>
    <article className={styles.content}>
      <MarkdownBody markdown={ContentLeft} />
    </article>
  </article>
  )
}

SectionTechnology.contextTypes = {
  config: React.PropTypes.object,
}

export default SectionTechnology
