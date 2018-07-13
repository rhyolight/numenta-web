// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import Helmet from 'react-helmet'
import zipObject from 'lodash/zipObject'
import React from 'react'

import Anchor from 'numenta-web-shared-components/lib/Anchor'
import ListItem from 'numenta-web-shared-components/lib/ListItem'
import ListOrder from 'numenta-web-shared-components/lib/ListOrder'
import Section from 'numenta-web-shared-components/lib/Section'
import {sortDateDescend} from 'numenta-web-shared-utils/lib/universal'
import Spacer from 'numenta-web-shared-components/lib/Spacer'
import SubTitle from 'numenta-web-shared-components/lib/SubTitle'
import Subtle from 'numenta-web-shared-components/lib/Subtle'
import TextLink from 'numenta-web-shared-components/lib/TextLink'
import {MAIN_SECTION_LIST} from '../_MainSections'

const title = 'Sitemap'


/**
 * Element for each individula Post List item (Blog, event, etc) for Sitemap -
 *  React view component.
 */
const SitemapItem = (props) => {
  const {data, path} = props
  return (
    <ListItem {...props}>
      <TextLink to={path}>
        {data.title}
      </TextLink> {' '}
      <Spacer />
      <Subtle>{data.date}</Subtle>
    </ListItem>
  )
}
SitemapItem.propTypes = {
  data: React.PropTypes.object.isRequired,
  path: React.PropTypes.string.isRequired,
}


/**
 * Sitemap Page - React view component.
 */
const SitemapPage = (props, {config, route}) => {
  const {links} = config
  const {pages} = route
  const categories = [
    'blog',
    'careers',
    'events',
    'newsletter',
    'press',
    'resources',
  ]
  const posts = categories
    .map((category) => pages
      .filter(({data, file}) => {
        const matcher = new RegExp(`.*${category}/.*.md`)
        return (data.type === 'post') && file.path.match(matcher)
      })
      .sort(sortDateDescend)
      .map((post) => {
        post.key = post.file.stem
        return React.createElement(SitemapItem, post)
      })
    )
  const items = zipObject(categories, posts)

  const sections = MAIN_SECTION_LIST.map((section) => {
    let titleText = section.title
    if (section.component.key === 'sectionHome') {
      titleText = 'Home'
    }
    return (<ListItem>
      <TextLink to={section.url}>
        {titleText}
      </TextLink>
    </ListItem>)
  })
  return (
    <article>
      <Helmet title={title} />
      <Section headline={true} open={true} title={title}>
        <Anchor name="main" />
        <SubTitle>Main</SubTitle>
        <ListOrder marker="disc">
          {sections}
        </ListOrder>

        <Anchor name="blog" />
        <SubTitle>
          <TextLink to={links.in.blog}>
            Blog
          </TextLink>
        </SubTitle>
        <ListOrder marker="disc">
          {items.blog}
        </ListOrder>

        <Anchor name="events" />
        <SubTitle>
          <TextLink to={links.in.events}>
            Events
          </TextLink>
        </SubTitle>
        <ListOrder marker="disc">
          {items.events}
        </ListOrder>

        <Anchor name="newsletter" />
        <SubTitle>
          <TextLink to={links.in.newsletter}>
            Newsletter
          </TextLink>
        </SubTitle>
        <ListOrder marker="disc">
          {items.newsletter}
        </ListOrder>

        <Anchor name="press" />
        <SubTitle>
          <TextLink to={links.in.press}>
            Press Releases
          </TextLink>
        </SubTitle>
        <ListOrder marker="disc">
          {items.press}
        </ListOrder>
      </Section>
    </article>
  )
}

SitemapPage.contextTypes = {
  config: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default SitemapPage
