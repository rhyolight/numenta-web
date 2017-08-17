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
 * Neuroscience Research MainSection and page content - React view component.
 */
const SectionNeuroscience = (props, {config}) => {
  const {baseUrl} = config

  return (<article>
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
    <div className={styles.columns}>
      <div className={styles.aside}>
        <div className={styles.brain}>
          <MarkdownMedia
            border={false}
            shadow={false}
            markdown={ContentRight}
          />
        </div>
      </div>
      <div className={styles.content}>
        <MarkdownBody markdown={ContentLeft} />
      </div>
    </div>
  </article>
  )
}

SectionNeuroscience.contextTypes = {
  config: React.PropTypes.object,
}

export default SectionNeuroscience
