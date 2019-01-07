// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import React from 'react'
import Helmet from 'react-helmet'
import {getMetadataTags} from 'numenta-web-shared-utils/lib/client'
import NextSection from 'numenta-web-shared-components/lib/NextSection'
import Section from 'numenta-web-shared-components/lib/Section'
import ContentLeft from './_content/_left.md'
import MainSections, {getNextSection} from './_MainSections'
import SectionHome from './_Section'
import styles from './index.css'

const Default = (<SectionHome key="sectionHome" />)


/**
 * Home Page and MainSection wrapper - React view component.
 */
class HomePage extends React.Component {
  static contextTypes = {
    config: React.PropTypes.object,
  }
  constructor(props) {
    super(props)
    const next = getNextSection(Default)

    this.state = {
      sections: (
        <Section
          headline={true}
          open={true}
          title="Where Neuroscience Meets Machine Intelligence"
        >
          {Default}
          <NextSection {...next} />
        </Section>
      ),
    }
  }

  componentDidMount() {
    this.setState({
      sections: (<MainSections current={Default} />),
    })
  }

  componentWillUnmount() {
    this.setState({sections: []})
  }

  render() {
    const {sections} = this.state
    const {config} = this.context
    return (
      <div className={styles.page}>
        <Helmet title={ContentLeft.title}>
          {getMetadataTags(ContentLeft, config.baseUrl)}
        </Helmet>
        {sections}
      </div>
    )
  }

}

export default HomePage
