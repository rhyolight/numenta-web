// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import React from 'react'
import Helmet from 'react-helmet'
import {getMetadataTags} from 'numenta-web-shared-utils/lib/client'


/**
 * Gatsby JSON Wrapper - React view component.
 */
const JsonWrapper = ({route}, {config}) => {
  const {data} = route.page

  return (
    <div className="json">
      <Helmet tilte={data.title}>
        {getMetadataTags(data, config.baseUrl)}
      </Helmet>
      <h1>
        {data.title}
      </h1>
      <p>
        Raw view of json file
      </p>
      <pre dangerouslySetInnerHTML={{__html: JSON.stringify(data, null, 4)}} />
    </div>
  )
}

JsonWrapper.propTypes = {
  route: React.PropTypes.object.isRequired,
}

export default JsonWrapper
