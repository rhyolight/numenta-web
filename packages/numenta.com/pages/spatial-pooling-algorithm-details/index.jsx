// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2018 Numenta <http://numenta.com>

import Helmet from 'react-helmet'
// import IconDownload from 'react-icons/lib/fa/cloud-download'
// import IconGithub from 'react-icons/lib/fa/github'
// import IconPdf from 'react-icons/lib/fa/file-pdf-o'
// import IconSlideshare from 'react-icons/lib/fa/slideshare'
import React from 'react'

// import Anchor from 'numenta-web-shared-components/lib/Anchor'
// import IconMarker from 'numenta-web-shared-components/lib/IconMarker'
// import Image from 'numenta-web-shared-components/lib/Image'
import List from 'numenta-web-shared-components/lib/List'
import ListItem from 'numenta-web-shared-components/lib/ListItem'
import Paragraph from 'numenta-web-shared-components/lib/Paragraph'
import Strong from 'numenta-web-shared-components/lib/Strong'
import Section from 'numenta-web-shared-components/lib/Section'
import SubTitle from 'numenta-web-shared-components/lib/SubTitle'
import Table from 'numenta-web-shared-components/lib/Table'
import TableBody from 'numenta-web-shared-components/lib/TableBody'
import TableCell from 'numenta-web-shared-components/lib/TableCell'
import TableRow from 'numenta-web-shared-components/lib/TableRow'
// import TextLink from 'numenta-web-shared-components/lib/TextLink'
// import Video from 'numenta-web-shared-components/lib/Video'
import {getMetadataTags} from 'numenta-web-shared-utils/lib/client'

import styles from './index.css'
import Metatags from './_metatags.md'

const title = 'Spatial Pooler Algorithm Details'


/**
 * SP Algorithm Details HTML page - React view component.
 */
const SpDetailsPage = (props, {config}) => {
  const {baseUrl} = config

  return (<article>
    <Helmet title={title}>
      {getMetadataTags(Metatags, baseUrl)}
    </Helmet>

    <Section headline={true} open={true} title={title}>
      <div className={styles.columns}>
        <div className={styles.content}>

          <SubTitle level={2}>
            Chapter Revision History
          </SubTitle>
          <Paragraph>
              The table notes major changes between revisions. Minor changes
              such as small clarifications or formatting changes are not noted.
          </Paragraph>

          <Table>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Strong>Version</Strong>
                </TableCell>
                <TableCell>
                  <Strong>Date</Strong>
                </TableCell>
                <TableCell>
                  <Strong>Changes</Strong>
                </TableCell>
                <TableCell>
                  <Strong>Principal Author(s)</Strong>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  0.4
                </TableCell>
                <TableCell />
                <TableCell>
                  Initial Release
                </TableCell>
                <TableCell>
                  S. Ahmad
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  0.5
                </TableCell>
                <TableCell>
                  Feb 2017
                </TableCell>
                <TableCell>
                  Update to current algorithms
                </TableCell>
                <TableCell>
                  M. Taylor & Y.Cui
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <SubTitle level={2}>
            Important Note to Readers:
          </SubTitle>
          <Paragraph>
              The following text gives details of the Spatial Pooling
              algorithm, including pseudocode and parameters. We
              highly recommend that you access some of the other Spatial
              Pooling resources available in order to understand
              the high-level concepts and role of Spatial Pooling in biology,
              and in HTM. You can find links to the latest Spatial
              Pooling resources in the Spatial Pooling chapter.
          </Paragraph>

          <SubTitle level={2}>
            Spatial Pooling Algorithm Details
          </SubTitle>
          <Paragraph>
              We first present some important terms, then the high-level
              steps, followed by details with pseudocode.
          </Paragraph>

          <SubTitle level={2}>
            Terminology
          </SubTitle>

          <List marker="disc">
            <ListItem>
              Column: An HTM region is organized in columns of cells. The SP
              operates at the column-level, where a column of a cells function
              as a single computational unit.
            </ListItem>
            <ListItem>
              Mini-column: See “Column”
            </ListItem>
            <ListItem>
              Inhibition: The mechanism for maintaining sparse activations of
              neurons. In the SP this manifests as columns inhibiting nearby
              columns from becoming active.
            </ListItem>
            <ListItem>
              Inhibition radius: The size of a column’s local neighborhood,
              within which columns may inhibit each
              other from becoming active.
            </ListItem>
            <ListItem>
              Active duty cycle: A moving average denoting the frequency of
              column activation.
            </ListItem>
            <ListItem>
              Overlap duty cycle: A moving average denoting the frequency of
              the column’s overlap value being at least equal to the proximal
              segment activation threshold.
            </ListItem>
            <ListItem>
              Receptive field: The input space that a column can potentially
              connect to.
            </ListItem>
            <ListItem>
              Permanence value: indicates the amount of growth between a
              mini-column in the Spatial Pooling algorithm and one of the
              cells in its receptive field. Acceptable values are [0,1].
            </ListItem>
            <ListItem>
              Permanence threshold: If a synapse’s permanence is above this
              value, it is considered fully connected.
            </ListItem>
            <ListItem>
              Synapse: A junction between cells. In the Spatial Pooling
              algorithm, synapses on a column’s dendritic segment connect to
              bits in the input space. A synapse can be in the following
              states:
              <List marker="circle">
                <ListItem>
                  Connected—permanence is above the threshold.
                </ListItem>
                <ListItem>
                  Potential—permanence is below the threshold.
                </ListItem>
                <ListItem>
                  Unconnected—does not have the ability to connect.
                </ListItem>
              </List>
            </ListItem>
          </List>

          <SubTitle level={2}>
            Spatial Pooling algorithm steps
          </SubTitle>

          <List marker="decimal">
            <ListItem>
              Start with an input consisting of a fixed number of bits. These
              bits might represent sensory data or they might come from
              another region elsewhere in the HTM system.
            </ListItem>
            <ListItem>
              Initialize the HTM region by assigning a fixed number of columns
              to the region receiving this input. Each column has an
              associated dendritic segment, serving as the connection to the
              input space. Each dendrite segment has a set of potential
              synapses representing a (random) subset of the input bits. Each
              potential synapse has a permanence value. These values are
              randomly initialized around the permanence threshold. Based on
              their permanence values, some of the potential synapses will
              already be connected; the permanences are greater than than the
              threshold value.
            </ListItem>
            <ListItem>
              For any given input, determine how many connected synapses on
              each column are connected to active (ON) input bits. These are
              active synapses.
            </ListItem>
            <ListItem>
              The number of active synapses is multiplied by a “boosting”
              factor, which is dynamically determined by how often a column is
              active relative to its neighbors.
            </ListItem>
            <ListItem>
              A small percentage of columns within the inhibition radius with
              the highest activations (after boosting) become active, and
              disable the other columns within the radius. The inhibition
              radius is itself dynamically determined by the spread of input
              bits. There is now a sparse set of active columns.
            </ListItem>
            <ListItem>
              The region now follows the Spatial Pooling (Hebbian-style)
              learning rule: For each of the active columns, we adjust the
              permanence values of all the potential synapses. The permanence
              values of synapses aligned with active input bits are increased.
              The permanence values of synapses aligned with inactive input
              bits are decreased. The changes made to permanence values may
              change some synapses from being connected to unconnected, and
              vice-versa.
            </ListItem>
            <ListItem>
              For subsequent inputs, we repeat from step 3.
            </ListItem>
          </List>

        </div>
      </div>
    </Section>
  </article>
  )
}

SpDetailsPage.contextTypes = {
  config: React.PropTypes.object,
}

export default SpDetailsPage
