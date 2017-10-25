// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import Helmet from 'react-helmet'
import React from 'react'

import ListItem from 'numenta-web-shared-components/lib/ListItem'
import ListOrder from 'numenta-web-shared-components/lib/List'
import Title from 'numenta-web-shared-components/lib/Title'
import {sortDateDescend} from 'numenta-web-shared-utils/lib/universal'
import TextLink from 'numenta-web-shared-components/lib/TextLink'

import PostListRow from '../../components/PostListRow'
import styles from './index.css'

const title = 'Blog'


/**
 * Blog page - React view component.
 */
export default class BlogPage extends React.Component {
  static contextTypes = {
    route: React.PropTypes.object,
  }
  constructor(props) {
    super(props)
    this.state = {year: 0, from: 0, to: 5}
  }
  _yearChangeed(event) {
    this.setState({year: parseInt(event.target.value, 0), from: 0, to: 5})
  }
  _goto(page) {
    const pos = Math.max(0, page)
    this.setState({from: pos, to: pos + 5})
  }
  render() {
    const {route} = this.context
    const {pages} = route
    const {year, from, to} = this.state
    let posts, prevBtn, nextBtn, pagination

    const allPosts = pages.filter(({file}) => (
      file.path.match(/^blog\/.*\.md/)))

    // Collect categories and years from posts
    const years = new Set()
    allPosts.forEach((post) =>
      years.add(new Date(post.data.date).getFullYear()))

    // Build Year filter
    const yearsOptions = Array.from(years).sort()
      .map((yyyy) => <option value={yyyy}>{yyyy}</option>)

    // Filter posts
    if (year === 0) {
      posts = allPosts
    }
    else {
      posts = allPosts.filter((post) => {
        const yyyy = new Date(post.data.date).getFullYear()
        return yyyy === year
      })
    }
    // Build list for the visible items
    const items = posts.sort(sortDateDescend)
                       .slice(from, to)
                       .map((post) => (
                         <ListItem key={post.file.stem}>
                           <PostListRow post={post} />
                         </ListItem>
                       ))

    // Add pagination buttons if necessary
    const totalPages = Math.ceil(posts.length / 5)
    if (totalPages > 1) {
      if (from > 0) {
        prevBtn = (
          <TextLink onClick={() => this._goto(from - 5)}>&lt; Prev</TextLink>
        )
      }
      if (posts.length > to) {
        nextBtn = (
          <TextLink onClick={() => this._goto(to)}>Next &gt;</TextLink>
        )
      }
      const page = Math.ceil(from / 5) + 1
      pagination = (
        <div className={styles.pagination}>
          {prevBtn} Page {page} of {totalPages} {nextBtn}
        </div>
      )
    }

    return (
      <article>
        <Helmet title={title}>
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content="Blog Posts" />
        </Helmet>
        <Title headline={true}>
          {title}
          <span className={styles.filter}>
            <select
              className={styles.select}
              onChange={(e) => this._yearChangeed(e)}
              value={year}
            >
              <option value="0">All Years</option>
              {yearsOptions}
            </select>
          </span>
        </Title>
        <ListOrder copy={false}>
          {items}
        </ListOrder>
        {pagination}
      </article>
    )
  }
}
