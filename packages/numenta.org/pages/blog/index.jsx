// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import Helmet from 'react-helmet'
import React from 'react'

import ListItem from 'numenta-web-shared-components/lib/ListItem'
import ListOrder from 'numenta-web-shared-components/lib/List'
import Section from 'numenta-web-shared-components/lib/Section'
import {sortDateDescend} from 'numenta-web-shared-utils/lib/universal'

import PostListRow from '../../components/PostListRow'

const title = 'Blog'


/**
 * Blog Post List index page - React view component.
 */
const BlogPage = (props, {route, config}) => {
  const {pages} = route
  const {links} = config
  // Filter all markdown files below current location
  const pathname = links.in.blog.substr(1)
  const filter = new RegExp(`^${pathname}.*\\.md`)
  const posts = pages.filter(({file}) => file.path.match(filter))
  const items = posts.sort(sortDateDescend).map((post) => (
    <ListItem key={post.file.stem}>
      <PostListRow post={post} />
    </ListItem>
  ))

  return (
    <article>
      <Helmet title={title} />
      <Section headline={true} open={true} title={title}>
        <ListOrder copy={false}>
          {items}
        </ListOrder>
      </Section>
    </article>
  )
}

BlogPage.contextTypes = {
  route: React.PropTypes.object,
  config: React.PropTypes.object,
}

export default BlogPage
