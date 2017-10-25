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
import {sortOrderAscend} from 'numenta-web-shared-utils/lib/universal'
import Spacer from 'numenta-web-shared-components/lib/Spacer'
import Subtle from 'numenta-web-shared-components/lib/Subtle'
import TextLink from 'numenta-web-shared-components/lib/TextLink'

import styles from './index.css'

const title = 'Research Papers'


/**
 * Research Papers page and MainSection wrapper - React view component.
 */
export default class PapersPage extends React.Component {

  static contextTypes = {
    route: React.PropTypes.object,
  }

  constructor(props) {
    super(props)
    this.state = {category: '.*', year: '.*'}
  }

  _categoryChangeed(event) {
    this.setState({category: event.target.value})
  }

  _yearChanged(event) {
    this.setState({year: event.target.value})
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
                    {data.category.replace(/-/g, ' ')}
                  </span>
                  <br />
                  {data.org}
                  <Spacer />
                  {data.date}
                </Subtle>
              </div>
              <Paragraph>
                {data.brief}
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
    const {route} = this.context
    const {pages} = route
    const {category, year} = this.state

    const allPosts = pages.filter(({file}) => (
      file.path.match(/^papers\/.*\.md/)))

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
      .map((cat) =>
        <option value={`\\b${cat}\\b`}>
          {
            cat.toLowerCase()
               .replace(/-/g, ' ')
               .replace(/\b\w/g, (s) => s.toUpperCase())
          }
        </option>
      )

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
        .map(({data, file, path}) => this._formatItem(data, file, path))

      results = (
        <ListOrder copy={false}>
          {items}
        </ListOrder>)
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
        <Helmet title={title}>
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content="Research Papers" />
        </Helmet>
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
