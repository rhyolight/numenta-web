// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import React from 'react'
import root from 'window-or-global'

import styles from './index.css'


/**
 * Disqus Comments Thread React Component.
 *  Custom, as `react-disqus-thread` is not working.
 * @see github:mzabriskie/react-disqus-thread/issues/14#issuecomment-234407160
 */
class Disqus extends React.Component {
  /* eslint-disable camelcase */
  componentWillMount() {
    const {document} = root
    const {
      category_id, identifier, title, url, onNewComment, shortname,
    } = this.props
    const script = document.createElement('script')
    root.disqus_config = function () {
      this.page.category_id = category_id
      this.page.identifier = identifier
      this.page.title = title
      this.page.url = url
      this.callbacks.onNewComment = onNewComment
    }
    script.src = `//${shortname}.disqus.com/embed.js`
    script.async = true
    document.body.appendChild(script)
  }

  render() {
    return (
      <div className={styles.disqus} id="disqus_thread" />
    )
  }

}

Disqus.propTypes = {
  category_id: React.PropTypes.string,
  identifier: React.PropTypes.string,
  onNewComment: React.PropTypes.func,
  shortname: React.PropTypes.string.isRequired,
  title: React.PropTypes.string,
  url: React.PropTypes.string,
}

export default Disqus
