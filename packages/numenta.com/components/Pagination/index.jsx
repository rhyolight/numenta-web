// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import React from 'react'
import {Link} from 'react-router'
import styles from './index.css'

export default class Pagination extends React.Component {
  static propTypes = {
    position: React.PropTypes.number.isRequired,
    itemsPerPage: React.PropTypes.number.isRequired,
    total: React.PropTypes.number.isRequired,
  }
  static contextTypes = {
    location: React.PropTypes.object,
  }

  render() {
    const {itemsPerPage, total} = this.props

    // Add pagination buttons if necessary
    const totalPages = Math.ceil(total / itemsPerPage)
    if (totalPages > 1) {
      const {position} = this.props
      const {location} = this.context
      const {pathname} = location
      let prevBtn, nextBtn
      if (position > 0) {
        // Store new position with location state
        const state = Object.assign({},
          location.state, {position: position - itemsPerPage})
        prevBtn = (
          <Link to={{pathname, state}} className={styles.link}>
            {'<'} Prev
          </Link>
        )
      }
      if (total > position + itemsPerPage) {
        // Store new position with location state
        const state = Object.assign({},
          location.state, {position: position + itemsPerPage})
        nextBtn = (
          <Link to={{pathname, state}} className={styles.link}>
            Next {'>'}
          </Link>
        )
      }
      const page = Math.ceil(position / itemsPerPage) + 1
      return (
        <div className={styles.pagination}>
          {prevBtn} Page {page} of {totalPages} {nextBtn}
        </div>
      )
    }
    return null
  }
}
