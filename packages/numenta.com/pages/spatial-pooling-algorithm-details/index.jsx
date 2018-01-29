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
import Code from 'numenta-web-shared-components/lib/Code'
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

          <SubTitle level={2}>
            Spatial Pooling Pseudocode
          </SubTitle>
          <Paragraph>
            This section contains the detailed pseudocode for the Spatial
            Pooling function, broken down into four phases: initialization,
            overlap computation, inhibition, and learning. After
            initialization (phase 1), every iteration of the Spatial Pooling
            algorithm’s compute routine goes through three distinct phases
            (phase 2 through phase 4) that occur in sequence.
          </Paragraph>
          <Paragraph>
            The various data structures and supporting routines used in the
            code are defined in Table X at the end.
          </Paragraph>

          <SubTitle level={3}>
            <Strong>
              Phase 1 – Initialize Spatial Pooling algorithm parameters
            </Strong>
          </SubTitle>
          <Paragraph>
            Prior to receiving any inputs, the Spatial Pooling algorithm is
            initialized by computing a list of initial potential synapses
            for each column. This consists of a random set of inputs
            selected from the input space (within a column’s inhibition
            radius). Each input is represented by a synapse and assigned a
            random permanence value. The random permanence values are chosen
            with two criteria. First, the values are chosen to be in a small
            range around connectedPerm, the minimum permanence value at
            which a synapse is considered "connected". This enables
            potential synapses to become connected (or disconnected) after a
            small number of training iterations. Second, each column has a
            natural center over the input region, and the permanence values
            have a bias towards this center, so that they have higher values
            near the center.
          </Paragraph>

          <SubTitle level={3}>
            <Strong>
              Phase 2 – Compute the overlap with the current input for each
              column
            </Strong>
          </SubTitle>
          <Paragraph>
            Given an input vector, this phase calculates the overlap of each
            column with that vector. The overlap for each column is simply the
            number of connected synapses with active inputs, multiplied by the
            column’s boost factor.
          </Paragraph>
          <Code>
            for c in columns
                overlap(c) = 0
                    for s in connectedSynapses(c)
                        overlap(c) = overlap(c) + input(t, s.sourceInput)
                    overlap(c) = overlap(c) * boost(c)
          </Code>

          <SubTitle level={3}>
            <Strong>
              Phase 3 – Compute the winning columns after inhibition
            </Strong>
          </SubTitle>
          <Paragraph>
            The third phase calculates which columns remain as winners after
            the inhibition step. localAreaDensity is a parameter that controls
            the desired density of active columns within a local inhibition
            area. Alternatively, the density can be controlled by parameter
            numActiveColumnsPerInhArea. When using this method, the
            localAreaDensity parameter must be less than 0. The inhibition
            logic will ensure that at most numActiveColumnsPerInhArea columns
            become active in each local inhibition area. For example, if
            numActiveColumnsPerInhArea is 10, a column will be a winner if it
            has a non-zero overlap and its overlap score ranks 10th or higher
            among the columns within its inhibition radius.
          </Paragraph>
          <Code>
            for c in columns
                minLocalActivity = kthScore(neighbors(c), numActiveColumnsPerInhArea)
                if overlap(c) > stimulusThreshold and
                  overlap(c) ≥ minLocalActivity then 
                    activeColumns(t).append(c)
          </Code>

          <SubTitle level={3}>
            <Strong>
              Phase 4 – Update synapse permanences and internal variables
            </Strong>
          </SubTitle>
          <Paragraph>
            This final phase performs learning, updating the permanence values
            of all synapses as necessary, as well as the boost values and
            inhibition radii. The main learning rule is implemented in lines
            14-20. For winning columns, if a synapse is active, its permanence
            value is incremented, otherwise it is decremented; permanence
            values are constrained to be between 0 and 1. Notice that
            permanence values on synapses of non-winning columns are not
            modified.
          </Paragraph>
          <Paragraph>
            Lines 21-27 implement boosting. There are two separate mechanisms
            in place to help a column learn connections. If a column does not
            win often enough (as measured by activeDutyCycle) compared to its
            neighbors, its overall boost value is set to be greater than 1 
            line 22-23). If a column is active more frequently than its
            neighbors, its overall boost value is set to be less than one. The
            boostFunction is an exponential function that depends on the
            difference between the active duty cycle of a column and the
            average active duty cycles of its neighbors. If a column's
            connected synapses do not overlap well with any inputs often
            enough (as measured by overlapDutyCycle), its permanence values
            are boosted (line 24-27). Note that once learning is turned off,
            boost(c) is frozen.
          </Paragraph>
          <Paragraph>
            Finally, at the end of Phase 4 the inhibition radius is recomputed
            (line 28).
          </Paragraph>
          <Code>
            for c in activeColumns(t)
                for s in potentialSynapses(c)
                    if active(s) then
                        s.permanence += synPermActiveInc
                        s.permanence = min(1.0, s.permanence)
                    else
                        s.permanence -= synPermActiveInc
                        s.permanence = min(0.0, s.permanence)
            for c in columns:
                activeDutyCycle(c) = updateActiveDutyCycle(c)
                activeDutyCycleNeighbors = mean(activeDutyCycle(neighbors(c))
                boost(c) = boostFunction(activeDutyCycle(c),
                    activeDutyCycleNeighbors)
                overlapDutyCycle(c) = updateOverlapDutyCycle(c)
                if overlapDutyCycle(c) < minDutyCycle(c) then
                    increasePermanences(c, 0.1*connectedPerm)
            inhibitionRadius = averageReceptiveFieldSize()
          </Code>

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
