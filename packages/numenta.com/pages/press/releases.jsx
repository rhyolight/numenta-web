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
import Pagination from '../../components/Pagination'
import styles from './releases.css'

const title = 'Press Releases'

const ITEMS_PER_PAGE = 5

/**
 * Press Releases page - React view component.
 */
export default class PressReleasesPage extends React.Component {
  static contextTypes = {
    route: React.PropTypes.object,
  }
  static propTypes = {
    location: React.PropTypes.object,
  }
  constructor(props) {
    super(props)
    const {location} = props
    let from = 0
    if (location && location.hash.length > 0) {
      from = parseInt(location.hash.slice(1), 10)
    }
    this.state = {year: 0, from, to: from + ITEMS_PER_PAGE}
  }
  componentWillReceiveProps(nextProps) {
    const {location} = nextProps
    let from = 0
    if (location.hash.length > 0) {
      from = parseInt(location.hash.slice(1), 10)
      this.setState({from, to: from + ITEMS_PER_PAGE})
    }
  }
  _yearChanged(event) {
    this.setState({
      year: parseInt(event.target.value, 0),
      from: 0,
      to: ITEMS_PER_PAGE})
  }
  render() {
    const {route} = this.context
    const {pages} = route
    const {year, from, to} = this.state

    const allPosts = pages.filter(({file, data}) => (
      file.path.match(/^press\/.*\.md/)) && data.type === 'post')

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
    // Build list for the visible items
    const items = posts.sort(sortDateDescend)
                       .slice(from, to)
                       .map((post) => (
                         <ListItem key={post.file.stem}>
                           <PostListRow post={post} />
                         </ListItem>
                       ))

    return (
      <article>
        <Helmet title={title}>
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content="Press Releases" />
        </Helmet>
        <Title headline={true}>
          {title}
          <span className={styles.filter}>
            <select
              className={styles.select}
              onChange={(e) => this._yearChanged(e)}
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
        <Pagination
          current={from}
          itemsPerPage={ITEMS_PER_PAGE}
          total={posts.length}
        />
      </article>
    )
  }
}
