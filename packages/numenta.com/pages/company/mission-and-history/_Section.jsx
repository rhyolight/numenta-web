// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import React from 'react'

import Image from 'numenta-web-shared-components/lib/Image'
import Paragraph from 'numenta-web-shared-components/lib/Paragraph'
import TextLink from 'numenta-web-shared-components/lib/TextLink'
import Video from 'numenta-web-shared-components/lib/Video'

import ImageTimeline from './images/timeline2.png'
import ImageVideoStory from './images/video-ourstory.png'
import styles from './index.css'


/**
 * Mission & History MainSection and page content - React view component.
 */
const SectionMission = (props, {config}) => {
  const {links} = config

  return (
    <article>
      <div className={styles.columns}>
        <div className={styles.aside}>
          <Video
            image={ImageVideoStory}
            respond="mw"
            time="02:32"
            title="Our Story"
            type="youtube"
            videoId="f1tYXv6ST_U"
          />
        </div>
        <div className={styles.content}>
          <Paragraph lead={true}>
            Numenta was founded with a dual mission: to reverse-engineer the
            neocortex and apply that knowledge to the creation of machine
            intelligence. Over the years, we’ve had periods where we’ve focused
            more on commercial efforts, but our primary mission has always been
            a scientific one. As a result, our focus has reverted back to
            progressing our <TextLink to={links.in.neuro}>neuroscience research
            </TextLink>.
          </Paragraph>
          <Paragraph>
            We have made significant progress in understanding the neocortex and
            building software based on those principles. In 2013 we decided we
            wanted to be transparent and make our work available to the broader
            community. We put all of our research and software implementations
            into <TextLink to={links.out.org}>open source</TextLink>, and we
            began publishing <TextLink to={links.in.papers}>peer-reviewed papers
            </TextLink> with the goal of documenting all of our discoveries in
            open access scientific journals.
          </Paragraph>
          <Image
            alt="Numenta Historical Timeline"
            respond="mw"
            shadow={false}
            src={ImageTimeline}
          />
        </div>
      </div>
    </article>
  )
}

SectionMission.contextTypes = {
  config: React.PropTypes.object,
}

export default SectionMission
