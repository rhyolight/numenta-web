// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import React from 'react'
import MarkdownBody from 'numenta-web-shared-components/lib/MarkdownBody'
import Content from './research-publications.md'
import styles from './index.css'


/**
 * Neuroscience Research MainSection and page content - React view component.
 */
const SectionPublications = () => (
  <article className={styles.columns}>
    <MarkdownBody markdown={Content} />
  </article>
)

SectionPublications.contextTypes = {
  config: React.PropTypes.object,
}

export default SectionPublications
