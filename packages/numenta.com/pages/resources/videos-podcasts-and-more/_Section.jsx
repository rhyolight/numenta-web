// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import React from 'react'
import Paragraph from 'numenta-web-shared-components/lib/Paragraph'
import List from 'numenta-web-shared-components/lib/List'
import ListItem from 'numenta-web-shared-components/lib/ListItem'
import Spacer from 'numenta-web-shared-components/lib/Spacer'
import TextLink from 'numenta-web-shared-components/lib/TextLink'
import Video from 'numenta-web-shared-components/lib/Video'
import ImageVideo from './images/video.png'
import styles from './index.css'

/**
 * Papers Videos & More - MainSection and page content - React view component.
 */
const SectionResources = (props, {config}) => {
  const {links} = config
  return (
    <article>
      <div className={styles.columns}>
        <div className={styles.aside}>
          <div className={styles.video}>
            <Video
              image={ImageVideo}
              respond="mw"
              time="1:00:00"
              title="The Hard Unsolved Problems in HTM Theory"
              type="youtube"
              videoId="gXP-63sZM_o"
            />
          </div>
        </div>
        <div className={styles.content}>
          <Paragraph lead={true}>
            To help you learn about our theory and technology, we have created a
            number of videos, podcasts and educational resources.  They are
            designed for anyone who wants to learn more about our cortical
            theory and HTM technology.
          </Paragraph>
          <List marker="disc">
            <ListItem>
              <TextLink to={links.in.videos}>Videos</TextLink><Spacer />From
                keynote presentations to invited talks to cortical animations,
                view our library of videos to see our research developments
                firsthand.
            </ListItem>
            <ListItem>
              <TextLink to={links.in.numentaonintelligencepodcast}>Numenta On
              Intelligence Podcast</TextLink><Spacer />
              Our monthly podcast is about intelligence – how it works in the
              brain, what the key principles are, and how understanding those
              principles may be the fastest path to machine intelligence.
            </ListItem>
            <ListItem>
              <TextLink to={links.in.podcasts}>Other
              Podcasts</TextLink><Spacer />
              Occasionally, our CEO Donna Dubinsky and Co-Founder Jeff Hawkins
              appear as guests on other podcasts.
            </ListItem>
            <ListItem>
              <TextLink to={links.out.htmschool.channel}>HTM School</TextLink>
              <Spacer />This YouTube series is designed to educate the general
              public about Hierarchical Temporal Memory (HTM). Each 10-15 minute
              episode dives into a particular topic.
            </ListItem>
            <ListItem>
              <TextLink to={links.in.opensource}>Open Source Community
              </TextLink>
              <Spacer />If you’re interested in discussing our theories, or
              developing and implementing our technology, join our growing
              community of brain theory enthusiasts.
            </ListItem>
            <ListItem>
              <TextLink to={links.in.bami}>
                Biological and Machine Intelligence (BAMI)
              </TextLink><Spacer />This living book (Biological And Machine
              Intelligence) documents our framework for both biological and
              machine intelligence.
            </ListItem>
            <ListItem>
              <TextLink to={links.in.onintelligence}>On Intelligence</TextLink>
              <Spacer />Read the book where Jeff first shared many of the core
                concepts of our theories.  Intended for a lay scientific
                audience, On Intelligence provides a nice introduction to anyone
                interested in understanding how the human brain works and what
                intelligence is.
            </ListItem>
          </List>
        </div>
      </div>
    </article>
  )
}

SectionResources.contextTypes = {
  config: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default SectionResources
