// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import Helmet from 'react-helmet'
import moment from 'moment'
import React from 'react'

import Anchor from 'numenta-web-shared-components/lib/Anchor'
import ListItem from 'numenta-web-shared-components/lib/ListItem'
import ListOrder from 'numenta-web-shared-components/lib/List'
import Title from 'numenta-web-shared-components/lib/Title'
import SubTitle from 'numenta-web-shared-components/lib/SubTitle'
import TextLink from 'numenta-web-shared-components/lib/TextLink'
import {
  sortDateAscend, sortDateDescend,
} from 'numenta-web-shared-utils/lib/universal'

import PostListRow from '../../components/PostListRow'
import styles from './index.css'

const title = 'Events'


/**
 * Events page - React view component.
 */
export default class EventsPage extends React.Component {
  static contextTypes = {
    config: React.PropTypes.object,
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
    const {route, config} = this.context
    const {pages} = route
    const {year, from, to} = this.state
    let posts, prevBtn, nextBtn, pagination, pastEvents, upEvents
    const now = moment()
    const allPosts = pages.filter(({file}) => (
      file.path.match(/^events\/.*\.md/)))

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

    const past = items.filter(({data}) => (
      (moment(data.date, config.moments.post) < now)
    ))
    const upcoming = items.filter(({data}) => (
      (moment(data.date, config.moments.post) >= now)
    ))
    const itemsPast = past.map((post) => (
      <ListItem key={post.file.stem}>
        <PostListRow post={post} />
      </ListItem>
    ))
    const itemsUp = upcoming.map((post) => (
      <ListItem key={post.file.stem}>
        <PostListRow post={post} />
      </ListItem>
    ))

    if (itemsPast.length > 0) {
      pastEvents = (
        <div>
          <Anchor name="past" />
          <SubTitle>Past Events</SubTitle>
          <ListOrder copy={false}>
            {itemsPast}
          </ListOrder>
        </div>
      )
    }
    if (itemsUp.length > 0) {
      upEvents = (
        <div>
          <Anchor name="upcoming" />
          <SubTitle>Upcoming Events</SubTitle>
          <ListOrder copy={false}>
            {itemsUp}
          </ListOrder>
        </div>
      )
    }

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
      <article className={styles.events}>
        <Helmet title={title}>
          <meta name="twitter:title" content={title} />
          <meta
            name="twitter:description"
            content="Upcoming and Past Events"
          />
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
        {upEvents}
        {pastEvents}
        {pagination}
      </article>
    )
  }
}
