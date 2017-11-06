// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import Helmet from 'react-helmet'
import moment from 'moment'
import React from 'react'
import {browserHistory} from 'react-router'

import Anchor from 'numenta-web-shared-components/lib/Anchor'
import ListItem from 'numenta-web-shared-components/lib/ListItem'
import ListOrder from 'numenta-web-shared-components/lib/List'
import Title from 'numenta-web-shared-components/lib/Title'
import SubTitle from 'numenta-web-shared-components/lib/SubTitle'
import {sortDateDescend} from 'numenta-web-shared-utils/lib/universal'

import PostListRow from '../../components/PostListRow'
import Pagination from '../../components/Pagination'
import styles from './index.css'

const title = 'Events'

const ITEMS_PER_PAGE = 5
/**
 * Events page - React view component.
 */
export default class EventsPage extends React.Component {

  static contextTypes = {
    config: React.PropTypes.object,
    route: React.PropTypes.object,
  }
  static propTypes = {
    location: React.PropTypes.object,
  }

  componentWillMount() {
    // Merge location state
    const {location} = this.props
    this.setState(Object.assign({year: 0, position: 0}, location.state))
  }
  componentWillReceiveProps(nextProps) {
    // Merge location state
    const {location} = nextProps
    this.setState(Object.assign({year: 0, position: 0}, location.state))
  }

  _yearChanged(event) {
    // Reset postion to first page when changing the year
    const year = parseInt(event.target.value, 0)
    const state = Object.assign({}, this.state, {position: 0, year})
    this.setState(state)

    // Update history to include the new state
    const {location} = this.props
    const {key, pathname, query, hash} = location
    browserHistory.push({
      key, pathname, query, hash, state,
    })
  }
  render() {
    const {route, config} = this.context
    const {pages} = route
    const {year, position} = this.state
    const from = position || 0
    const to = from + ITEMS_PER_PAGE
    let posts, pastEvents, upEvents
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
              onChange={(e) => this._yearChanged(e)}
              value={year}
            >
              <option value="0">All Years</option>
              {yearsOptions}
            </select>
          </span>
        </Title>
        {upEvents}
        {pastEvents}
        <Pagination
          position={from}
          itemsPerPage={ITEMS_PER_PAGE}
          total={posts.length}
        />
      </article>
    )
  }
}
