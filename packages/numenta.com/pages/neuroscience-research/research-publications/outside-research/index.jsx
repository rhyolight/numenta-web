// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import Helmet from 'react-helmet'
import React from 'react'

import Image from 'numenta-web-shared-components/lib/Image'
import ImageLink from 'numenta-web-shared-components/lib/ImageLink'
import ListItem from 'numenta-web-shared-components/lib/ListItem'
import ListOrder from 'numenta-web-shared-components/lib/ListOrder'
import Paragraph from 'numenta-web-shared-components/lib/Paragraph'
import Title from 'numenta-web-shared-components/lib/Title'
import {browserHistory} from 'react-router'
import {
  sortOrderAscend, sortDateDescend,
} from 'numenta-web-shared-utils/lib/universal'
import {getMetadataTags} from 'numenta-web-shared-utils/lib/client'
import Spacer from 'numenta-web-shared-components/lib/Spacer'
import Subtle from 'numenta-web-shared-components/lib/Subtle'
import TextLink from 'numenta-web-shared-components/lib/TextLink'
import Pagination from '../../../../components/Pagination'
import Metatags from './_metatags.md'

import styles from './index.css'

const title = 'Outside Research'
const ITEMS_PER_PAGE = 5


/**
 * Outside Research Papers page and MainSection wrapper - React view component.
 */
export default class OutsideResearchPapersPage extends React.Component {

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
    const state = {category: '.*', year: '.*', position: 0}
    if (location) {
      Object.assign(state, location.state)
    }
    this.setState(state)
  }
  componentWillReceiveProps(nextProps) {
    // Merge location state
    const {location} = nextProps
    const state = {category: '.*', year: '.*', position: 0}
    if (location) {
      Object.assign(state, location.state)
    }
    this.setState(state)
  }

  _addStateToHistory(state) {
    // Update history to include the new state
    const {location} = this.props
    const {key, pathname, query, hash} = location
    browserHistory.push({
      key, pathname, query, hash, state,
    })
  }

  _categoryChangeed(event) {
    const state = Object.assign({}, this.state, {
      position: 0,
      category: event.target.value})
    this.setState(state)
    this._addStateToHistory(state)
  }

  _yearChanged(event) {
    const state = Object.assign({}, this.state, {
      position: 0,
      year: event.target.value})
    this.setState(state)
    this._addStateToHistory(state)
  }

  _formatItem(data, file, path) {
    const url = (data.type === 'link') ? data.link : path
    let media = null
    if (data.image) {
      media = (
        <ImageLink to={url}>
          <Image
            alt={data.title}
            border={true}
            respond="mw"
            shadow={true}
            src={`${path}${data.image}`}
          />
        </ImageLink>
      )
    }

    return (
      <ListItem key={file.stem}>
        <div className={styles.paper}>
          <div className={styles.columns}>
            <div className={styles.aside}>
              {media}
            </div>
            <div className={styles.content}>
              <div className={styles.title}>
                <TextLink to={url}>
                  {data.title}
                </TextLink>
              </div>
              <div className={styles.meta}>
                <Subtle>
                  {data.author}
                  <br />
                  <span className={styles.category}>
                    {data.category}
                  </span>
                  <br />
                  {data.org}
                  <Spacer />
                  {data.date}
                </Subtle>
              </div>
              <Paragraph>
                {data.description}
                <br />
                <span className={styles.remarks}>
                  {data.remarks}
                </span>
              </Paragraph>
            </div>
          </div>
        </div>
      </ListItem>
    )
  }
  render() {
    const {route, config} = this.context
    const {pages} = route
    const {links} = config
    const {category, year, position} = this.state
    const from = position || 0
    const to = from + ITEMS_PER_PAGE

    // Filter all markdown files below the current location
    const pathname = links.in.outsideresearch.substr(1)
    const filter = new RegExp(`^${pathname}.*\\.md`)
    const allPosts = pages.filter(({file}) => (
      file.path.match(filter)
    ))

    // Collect categories and years from posts
    const categories = new Set()
    const years = new Set()
    allPosts.forEach((post) => {
      // Comma separated categories
      for (const cat of post.data.category.split(',')) {
        categories.add(cat.trim())
      }
      years.add(new Date(post.data.date).getFullYear())
    })

    // Build category filter menu
    const categoryOptions = Array.from(categories).sort()
      .map((cat) => (
        <option value={`\\b${cat}\\b`}>{cat}</option>
      ))

    // Build Year filter
    const yearsOptions = Array.from(years).sort()
      .map((yyyy) => <option value={yyyy}>{yyyy}</option>)

    // Filter posts
    const posts = allPosts.filter((post) => {
      const cat = post.data.category
      const yyyy = new Date(post.data.date).getFullYear().toString()

      return cat.match(category) && yyyy.match(year)
    })

    // Format list items
    let results = ''
    if (posts.length > 0) {
      const items = posts.sort(sortOrderAscend)
        .sort(sortDateDescend)
        .slice(from, to)
        .map(({data, file, path}) => this._formatItem(data, file, path))

      results = (
        <ListOrder copy={false}>
          {items}
          <Pagination
            position={from}
            itemsPerPage={ITEMS_PER_PAGE}
            total={posts.length}
          />
        </ListOrder>
      )
    }
    else {
      results = (
        <div className={styles.paper}>
          No Results Found
        </div>
      )
    }


    return (
      <article className={styles.papers}>
        <Helmet title={Metatags.title}>
          {getMetadataTags(Metatags, config.baseUrl)}
        </Helmet>
        <span>
          <TextLink to={links.in.publications}>
            Research Publications
          </TextLink>
        </span>

        <Title headline={true}>
          {title}
          <span className={styles.filter}>
            <select
              className={styles.select}
              onChange={(e) => this._categoryChangeed(e)}
              value={category}
            >
              <option value=".*">All Categories</option>
              {categoryOptions}
            </select>

            <select
              className={styles.select}
              onChange={(e) => this._yearChanged(e)}
              value={year}
            >
              <option value=".*">All Years</option>
              {yearsOptions}
            </select>
          </span>
        </Title>
        {results}
      </article>
    )
  }
}
