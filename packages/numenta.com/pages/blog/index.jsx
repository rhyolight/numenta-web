// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import Helmet from 'react-helmet'
import React from 'react'

import ListItem from 'numenta-web-shared-components/lib/ListItem'
import ListOrder from 'numenta-web-shared-components/lib/List'
import Title from 'numenta-web-shared-components/lib/Title'
import {sortDateDescend} from 'numenta-web-shared-utils/lib/universal'

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
    this.state = {year: 0}
  }
  _yearChangeed(event) {
    this.setState({year: parseInt(event.target.value, 0)})
  }
  render() {
    const {route} = this.context
    const {pages} = route
    const {year} = this.state

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
    let posts
    if (year === 0) {
      posts = allPosts
    }
    else {
      posts = allPosts.filter((post) => {
        const yyyy = new Date(post.data.date).getFullYear()
        return yyyy === year
      })
    }

    const items = posts.sort(sortDateDescend).map((post) => (
      <ListItem key={post.file.stem}>
        <PostListRow post={post} />
      </ListItem>
    ))

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
      </article>
    )
  }
}
