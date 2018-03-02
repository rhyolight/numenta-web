// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import React from 'react'


const HtmlWrapper = ({route}) => {
  const post = route.page.data
  const header = post.header || post.title

  return (
    <div className="html">
      <h1 dangerouslySetInnerHTML={{__html: header}} />
      <div dangerouslySetInnerHTML={{__html: post.body}} />
    </div>
  )
}

HtmlWrapper.propTypes = {
  route: React.PropTypes.object.isRequired,
}

export default HtmlWrapper
