// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import React from 'react'
import Helmet from 'react-helmet'
import {getMetadataTags} from 'numenta-web-shared-utils/lib/client'


/**
 * Gatsby HTML Wrapper - React view component.
 */
const HtmlWrapper = ({route}, {config}) => {
  const post = route.page.data

  return (
    <div className="html">
      <Helmet title={post.title}>
        {getMetadataTags(post, config.baseUrl)}
      </Helmet>
      <h1 dangerouslySetInnerHTML={{__html: post.title}} />
      <div dangerouslySetInnerHTML={{__html: post.body}} />
    </div>
  )
}

HtmlWrapper.propTypes = {
  route: React.PropTypes.object.isRequired,
}

export default HtmlWrapper
