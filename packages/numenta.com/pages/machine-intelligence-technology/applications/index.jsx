// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import React from 'react'
import TextLink from 'numenta-web-shared-components/lib/TextLink'
import MarkdownBody from 'numenta-web-shared-components/lib/MarkdownBody'
import MarkdownMedia from 'numenta-web-shared-components/lib/MarkdownMedia'

import AppsLeft from './_content/_apps_left.md'
import AppsRight from './_content/_apps_right.md'

import GeospatialLeft from './_content/_geospatial_left.md'
import GeospatialRight from './_content/_geospatial_right.md'

import RogueLeft from './_content/_rogue_left.md'
import RogueRight from './_content/_rogue_right.md'

import HtmForStocksLeft from './_content/_htm_for_stocks_left.md'
import HtmForStocksRight from './_content/_htm_for_stocks_right.md'

import styles from './index.css'


/**
 * Applications page and MainSection wrapper - React view component.
 */
const ApplicationsPage = () => (
  <article className={styles.article}>
    <span>
      <TextLink to="/machine-intelligence-technology/">
        Machine Intelligence Technology
      </TextLink>
    </span>

    <div className={styles.columns}>
      <div className={styles.aside}>
        <MarkdownMedia markdown={AppsRight} />
      </div>
      <div className={styles.content}>
        <MarkdownBody markdown={AppsLeft} />
      </div>
    </div>

    <hr />
    <div className={styles.columns}>
      <div className={styles.aside}>
        <MarkdownMedia markdown={RogueRight} />
      </div>
      <div className={styles.content}>
        <MarkdownBody markdown={RogueLeft} />
      </div>
    </div>

    <hr />
    <div className={styles.columns}>
      <div className={styles.aside}>
        <MarkdownMedia markdown={GeospatialRight} />
      </div>
      <div className={styles.content}>
        <MarkdownBody markdown={GeospatialLeft} />
      </div>
    </div>

    <hr />
    <div className={styles.columns}>
      <div className={styles.aside}>
        <MarkdownMedia markdown={HtmForStocksRight} />
      </div>
      <div className={styles.content}>
        <MarkdownBody markdown={HtmForStocksLeft} />
      </div>
    </div>
  </article>)

export default ApplicationsPage
