// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import React from 'react'
import ImageLink from 'numenta-web-shared-components/lib/ImageLink'
import List from 'numenta-web-shared-components/lib/List'
import LogoMark from 'numenta-web-shared-components/lib/LogoMark'
import Anchor from 'numenta-web-shared-components/lib/Anchor'
import Image from 'numenta-web-shared-components/lib/Image'
import ListItem from 'numenta-web-shared-components/lib/ListItem'
import ListOrder from 'numenta-web-shared-components/lib/ListOrder'
import Paragraph from 'numenta-web-shared-components/lib/Paragraph'
import Strong from 'numenta-web-shared-components/lib/Strong'
import SubTitle from 'numenta-web-shared-components/lib/SubTitle'
import Table from 'numenta-web-shared-components/lib/Table'
import TableHead from 'numenta-web-shared-components/lib/TableHead'
import TableBody from 'numenta-web-shared-components/lib/TableBody'
import TableRow from 'numenta-web-shared-components/lib/TableRow'
import TableTitle from 'numenta-web-shared-components/lib/TableTitle'
import TableCell from 'numenta-web-shared-components/lib/TableCell'
import TextLink from 'numenta-web-shared-components/lib/TextLink'
import ImageCortical from './images/cortical.png'
import ImageGrokstream from './images/grokstream.png'
import ImageBusiness from './images/business.png'
import styles from './index.css'


/**
 * Business Strategy & IP - MainSection and page content - React view component.
 */
const SectionBusiness = (props, {config}) => {
  const {contact, links} = config

  return (
    <article>
      <div className={styles.columns}>
        <div className={styles.aside}>
          <Image
            alt="Numenta Office"
            respond="mw"
            src={ImageBusiness}
          />
        </div>
        <div className={styles.content}>
          <Paragraph lead={true}>
            Numenta’s business strategy and approach to intellectual property
            (IP) is to create an active research community as well as to enable
            strong commercial opportunities. To that end, we follow these
            general principles:
          </Paragraph>
          <ListOrder marker="decimal">
            <ListItem>
              <Strong>Transparency</Strong>. We openly publish our scientific
                findings, software, intellectual property, and business
                strategy. There are no hidden agendas.
            </ListItem>
            <ListItem>
              <Strong>Scientific Use</Strong>. Anyone can freely use our
                software and intellectual property for non-commercial purposes.
            </ListItem>
            <ListItem>
              <Strong>Commercial Deployment</Strong>. We make reference software
                available (including relevant patents) for free under an AGPL
                license. If the AGPL license is not a good fit, or if you are
                interested in using our intellectual property without our
                software in a commercial application, we offer an IP license
                that enables commercial use.
            </ListItem>
          </ListOrder>
          <Paragraph>
            Learn more about <TextLink to={links.in.businessprinciples}>
            Numenta’s business principles</TextLink>.
          </Paragraph>
        </div>
      </div>

      <Anchor name="licenses" />
      <SubTitle level={3}>
        Summary of Numenta Licenses
      </SubTitle>
      <div className={styles.columns}>
        <div className={styles.content}>
          <hr />
          <div className={styles.licenses}>
            <Table border={true}>
              <TableHead>
                <TableRow>
                  <TableTitle />
                  <TableTitle>
                    Scientific, Research, and Academic Use
                  </TableTitle>
                  <TableTitle>
                    Commercial Use
                  </TableTitle>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Strong>
                      <TextLink
                        to="https://www.gnu.org/licenses/agpl-3.0.en.html"
                      >Open Source License (AGPLv3)</TextLink></Strong>
                  </TableCell>
                  <TableCell>
                    Includes reference software and associated intellectual
                    property
                    <br /> No cost
                  </TableCell>
                  <TableCell>
                    Includes reference software and associated intellectual
                    property Use internally – no cost
                    <br />Distribute derivative software – no cost if released
                    in accordance with the AGPLv3
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Strong><TextLink to="http://numenta.org/licenses/trial/">
                      Trial License</TextLink></Strong>
                  </TableCell>
                  <TableCell>
                    Includes reference software and associated intellectual
                    property without AGPLv3 requirements
                    <br />No commercial rights
                    <br />No cost
                  </TableCell>
                  <TableCell>
                    Includes reference software and associated intellectual
                    property without AGPLv3 requirements
                    <br />No commercial rights
                    <br />No cost
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Strong><TextLink to="/assets/pdf/apps/licensing-guide.pdf">
                      Commercial IP License</TextLink></Strong>
                  </TableCell>
                  <TableCell>
                    We agree not to assert our IP for non-commercial uses
                  </TableCell>
                  <TableCell>
                    Includes intellectual property and use of the reference
                    software
                    <br />Commercial rights
                    <br />Fee
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <Paragraph>If you have any questions about our licenses, visit
            our <TextLink to={links.in.licensingfaq}>FAQ page</TextLink> or
            contact us at <TextLink to="mailto:licenses@numenta.com">
            licenses@numenta.com</TextLink>.</Paragraph>
        </div>
      </div>

      <SubTitle level={2}>
        Partners
      </SubTitle>
      <div className={styles.columns}>
        <div className={styles.aside}>
          <div className={styles.logomark}>
            <LogoMark />
          </div>
        </div>
        <div className={styles.content}>
          <Paragraph>
            Numenta works with strategic partners to bring the power of HTM
            to the market. While we focus on the science and the
            core technology, we select application partners who have deep
            domain knowledge and are able to add an application layer tuned to
            market needs.
          </Paragraph>
          <Paragraph>
            We are flexible in structuring these relationships in a way
            that works for both parties. If you are interested in becoming
            a partner, please {' '}
            <TextLink to={links.in.license}>
              review our license guide
            </TextLink>, {' '}
            and email us at {' '}
            <TextLink to={`mailto:${contact.email.sales}`}>
              {contact.email.sales}
            </TextLink>.
          </Paragraph>
        </div>
      </div>

      <Anchor name="cortical" />
      <SubTitle level={3}><Strong>Cortical.io</Strong></SubTitle>
      <div className={styles.columns}>
        <div className={styles.aside}>
          <ImageLink to={links.out.cortical}>
            <Image
              alt="Cortical.io logo"
              respond="mw"
              shadow={false}
              src={ImageCortical}
            />
          </ImageLink>
        </div>
        <div className={styles.content}>
          <Paragraph>
            Cortical.io is leading the next generation of natural language
            processing: language intelligence. Founded on core principles of
            HTM, Cortical.io’s Semantic Folding technology translates text
            into sparse distributed representations. This enables a host of
            exciting applications that have challenged computer scientists for
            decades including sentiment analysis, automatic summarization,
            semantic search and conversational dialogue systems.
          </Paragraph>
          {/* eslint-disable max-len */}
          <List marker="disc">
            <ListItem>
              <TextLink to={links.out.cortical}>
                Cortical.io
              </TextLink>
            </ListItem>
            <ListItem>
              <TextLink to="http://www.cortical.io/static/downloads/semantic-folding-theory-white-paper.pdf">
                Whitepaper: Semantic Folding
              </TextLink>
            </ListItem>
            <ListItem>
              <TextLink to="/press/2015/05/14/numenta-and-cortical-io-form-strategic-partnership/">
                Press Release
              </TextLink>
            </ListItem>
            <ListItem>
              <TextLink to="/company/newsletter/2015/05/14/announcing-relationship-with-cortical-io/">
                Newsletter
              </TextLink>
            </ListItem>
          </List>
          {/* eslint-enable max-len */}
        </div>
      </div>

      <Anchor name="grok" />
      <SubTitle level={3}><Strong>Grok</Strong></SubTitle>
      <div className={styles.columns}>
        <div className={styles.aside}>
          <ImageLink to={links.out.grok}>
            <Image
              alt="Grok Stream logo"
              respond="mw"
              shadow={false}
              src={ImageGrokstream}
            />
          </ImageLink>
        </div>
        <div className={styles.content}>
          <Paragraph>
            Grok is using HTM technology for advanced IT anomaly detection.
            Grok applies Numenta&#39;s breakthrough technology to solving the IT
            department’s hardest problems, with a complete enterprise
            solution. Its modern user interface makes it easy to drill down to
            important anomalies and take action before a problem worsens.
          </Paragraph>
          {/* eslint-disable max-len */}
          <List marker="disc">
            <ListItem>
              <TextLink to={links.out.grok}>
                Grok
              </TextLink>
            </ListItem>
            <ListItem>
              <TextLink to="/press/2015/08/19/numenta-announces-licensing-of-grok-for-it-to-avik-partners/">
                Press Release
              </TextLink>
            </ListItem>
            <ListItem>
              <TextLink to="/company/newsletter/2015/09/01/partnership-between-numenta-and-avik-partners-on-grok-for-it-analytics/">
                Newsletter
              </TextLink>
            </ListItem>
          </List>
          {/* eslint-enable max-len */}
        </div>
      </div>

    </article>
  )
}

SectionBusiness.contextTypes = {
  config: React.PropTypes.object,
}

export default SectionBusiness
