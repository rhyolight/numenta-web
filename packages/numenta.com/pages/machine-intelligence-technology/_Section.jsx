// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import MarkdownBody from 'numenta-web-shared-components/lib/MarkdownBody'
import MarkdownMedia from 'numenta-web-shared-components/lib/MarkdownMedia'
import React from 'react'
import HTMLeft from './_content/_htm_left.md'
import HTMRight from './_content/_htm_right.md'
import NABLeft from './_content/_nab_left.md'
import NABRight from './_content/_nab_right.md'
import HTMStudioLeft from './_content/_htmstudio_left.md'
import HTMStudioRight from './_content/_htmstudio_right.md'
import AppsLeft from './_content/_apps_left.md'
import AppsRight from './_content/_apps_right.md'

import styles from './index.css'


/**
 * Machine Intelligence Technology - main Section/Page React view component.
 */
const SectionTechnology = () => (
  <article className={styles.article}>
    <div className={styles.columns}>
      <div className={styles.aside}>
        <MarkdownMedia markdown={HTMRight} />
      </div>
      <div className={styles.content}>
        <MarkdownBody markdown={HTMLeft} />
      </div>
    </div>

    <hr />
    <div className={styles.columns}>
      <div className={styles.aside}>
        <MarkdownMedia markdown={NABRight} />
      </div>
      <div className={styles.content}>
        <MarkdownBody markdown={NABLeft} />
      </div>
    </div>

    <hr />
    <div className={styles.columns}>
      <div className={styles.aside}>
        <MarkdownMedia markdown={HTMStudioRight} />
      </div>
      <div className={styles.content}>
        <MarkdownBody markdown={HTMStudioLeft} />
      </div>
    </div>

    <hr />
    <div className={styles.columns}>
      <div className={styles.aside}>
        <MarkdownMedia markdown={AppsRight} />
      </div>
      <div className={styles.content}>
        <MarkdownBody markdown={AppsLeft} />
      </div>
    </div>
  </article>)

export default SectionTechnology
