// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import React from 'react'
import styles from './index.css'

export default class Pagination extends React.Component {
  static propTypes = {
    current: React.PropTypes.number.isRequired,
    itemsPerPage: React.PropTypes.number.isRequired,
    total: React.PropTypes.number.isRequired,
  }

  render() {
    const {current, itemsPerPage, total} = this.props
    let prevBtn, nextBtn
    // Add pagination buttons if necessary
    const totalPages = Math.ceil(total / itemsPerPage)
    if (totalPages > 1) {
      if (current > 0) {
        prevBtn = (
          <a href={`#${current - itemsPerPage}`} className={styles.link}>
            {'<'} Prev
          </a>
        )
      }
      if (total > current + itemsPerPage) {
        nextBtn = (
          <a href={`#${current + itemsPerPage}`} className={styles.link}>
            Next {'>'}
          </a>
        )
      }
      const page = Math.ceil(current / itemsPerPage) + 1
      return (
        <div className={styles.pagination}>
          {prevBtn} Page {page} of {totalPages} {nextBtn}
        </div>
      )
    }
    return null
  }
}
