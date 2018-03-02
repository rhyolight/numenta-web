// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import {getEventTimeDisplay} from 'numenta-web-shared-utils/lib/universal'
import moment from 'moment'
import React from 'react'

import Avatar from '../Avatar'
import Paragraph from '../Paragraph'
import Spacer from '../Spacer'
import Strong from '../Strong'
import Subtle from '../Subtle'
import Table from '../Table'
import TableBody from '../TableBody'
import TableCell from '../TableCell'
import TableRow from '../TableRow'
import TextLink from '../TextLink'
import Time from '../Time'

import styles from './index.css'


/**
 * Post Item Row - React view component for Post List.
 */
const PostListItem = ({post}, {config}) => {
  const {data, path} = post
  const datetime = moment(data.date, config.moments.post)
  const occur = datetime.format(config.moments.human)
  const target = (data.type === 'link') ? data.link : path
  let description = (<Paragraph>{data.description}...</Paragraph>)

  // modifications for: events
  if ('event' in data) {
    const {when, where} = data.event
    const {desc, city, state, country} = where
    let location = city

    if (state) {
      location = `${location}, ${state}`
    }
    if (country) {
      location = `${location} ${country}`
    }

    description = (
      <div className={styles.event}>
        <Table direction="horizontal">
          <TableBody>
            <TableRow>
              <TableCell>
                <Strong>When</Strong>
              </TableCell>
              <TableCell>
                {getEventTimeDisplay(when)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Strong>Where</Strong>
              </TableCell>
              <TableCell>
                <div>{desc}</div>
                <div>
                  {location}
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    )
  }

  return (
    <div className={styles.item}>
      <div className={styles.date}>
        <Time moment={datetime}>{occur}</Time>
      </div>
      <span className={styles.title}>
        <TextLink to={target}>
          {data.title}
        </TextLink>
      </span>
      {description}
      <div className={styles.author}>
        <Subtle>
          <Avatar name={data.author} />
          {data.author}
          <Spacer />
          {data.org}
        </Subtle>
      </div>
    </div>
  )
}

PostListItem.contextTypes = {
  config: React.PropTypes.object,
}

PostListItem.propTypes = {
  post: React.PropTypes.object.isRequired,
}

export default PostListItem
