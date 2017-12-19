// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import Helmet from 'react-helmet'
import React from 'react'
import {browserHistory} from 'react-router'

import ListItem from 'numenta-web-shared-components/lib/ListItem'
import ListOrder from 'numenta-web-shared-components/lib/List'
import Title from 'numenta-web-shared-components/lib/Title'
import {sortDateDescend} from 'numenta-web-shared-utils/lib/universal'
import {getMetadataTags} from 'numenta-web-shared-utils/lib/client'

import Spacer from 'numenta-web-shared-components/lib/Spacer'
import Subtle from 'numenta-web-shared-components/lib/Subtle'
import TextLink from 'numenta-web-shared-components/lib/TextLink'
import Pagination from '../../components/Pagination'
import styles from './links.css'
import Metatags from './_links.md'

const title = 'Press Links'
const ITEMS_PER_PAGE = 10
/**
 * Press Links page - React view component.
 */
export default class PressLinksPage extends React.Component {

  static contextTypes = {
    route: React.PropTypes.object,
    config: React.PropTypes.object,
  }
  static propTypes = {
    location: React.PropTypes.object,
  }

  componentWillMount() {
    // Merge location state
    const {location} = this.props
    const state = {year: 0, position: 0}
    if (location) {
      Object.assign(state, location.state)
    }
    this.setState(state)
  }
  componentWillReceiveProps(nextProps) {
    // Merge location state
    const {location} = nextProps
    const state = {year: 0, position: 0}
    if (location) {
      Object.assign(state, location.state)
    }
    this.setState(state)
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
    let posts

    const allPosts = pages.filter(({file}) =>
      file.path.match(/^press\/.*\.md/))

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
    const links = posts.filter(({data}) => (data.type === 'link'))
    const items = links.sort(sortDateDescend)
                       .slice(from, to)
                       .map(({data, file}) => (
                         <ListItem key={file.stem}>
                           <div className={styles.link}>
                             <div>
                               <TextLink to={data.link}>
                                 {data.title}
                               </TextLink>
                             </div>
                             <Subtle>
                               {data.date}
                               <Spacer />
                               {data.author}
                               <Spacer />
                               {data.org}
                             </Subtle>
                           </div>
                         </ListItem>
                       ))

    return (
      <article>
        <Helmet title={Metatags.title}>
          {getMetadataTags(Metatags, config.baseUrl)}
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
          position={from}
          itemsPerPage={ITEMS_PER_PAGE}
          total={links.length}
        />
      </article>
    )
  }
}
