// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import Helmet from 'react-helmet'
import React from 'react'

import ListItem from 'numenta-web-shared-components/lib/ListItem'
import ListOrder from 'numenta-web-shared-components/lib/ListOrder'
import Paragraph from 'numenta-web-shared-components/lib/Paragraph'
import Section from 'numenta-web-shared-components/lib/Section'
import SubTitle from 'numenta-web-shared-components/lib/SubTitle'
import TextLink from 'numenta-web-shared-components/lib/TextLink'

import styles from './index.css'

const titleZH = '《生物与机器智能》（BAMI）书中章节的中文译本'
const titleEN = '(Chinese translation of BAMI book sections)'
const title = (<center>{titleZH}<br />{titleEN}</center>)


/**
 * Biological and Machine Intelligence (BAMI) page - React view component.
 */
export default class BamiPageZH extends React.Component {

  render() {
    return (
      <article>
        <Helmet title={titleZH}>
          <meta name="twitter:title" content={titleZH} />
          <meta
            name="twitter:description"
            content="BAMI书籍章节的中文译本由HTM社区成员Gu Jian提供。Numenta非常感谢Gu
            Jian的工作，但对翻译质量不承担任何责任。(This Chinese translation of BAMI
            book sections is provided by an HTM community member, Gu Jian.
            Numenta greatly appreciates Gu Jian’s work, but disclaims any
            liability for the quality of the translation.)"
          />
        </Helmet>
        <Section headline={true} open={true} title={title}>
          <div className={styles.columns}>
            <div className={styles.aside}>
              <div className={styles.book}>
                <SubTitle level={3}>书中章节</SubTitle>
                {/* eslint-disable max-len */}
                <ListOrder marker="disc">
                  <ListItem>
                    <TextLink to="/assets/pdf/biological-and-machine-intelligence/zh-cn/BaMI-Introduction.pdf" target="_new">
                      前言
                    </TextLink>
                  </ListItem>
                  <ListItem>
                    <TextLink to="/assets/pdf/biological-and-machine-intelligence/zh-cn/BaMI-HTM-Overview.pdf" target="_new">
                      HTM 概览
                    </TextLink>
                  </ListItem>
                  <ListItem>
                    <TextLink to="/assets/pdf/biological-and-machine-intelligence/zh-cn/BaMI-SDR.pdf" target="_new">
                      分布稀疏表征
                    </TextLink>
                  </ListItem>
                  <ListItem>
                    <TextLink to="/assets/pdf/biological-and-machine-intelligence/zh-cn/BaMI-Encoders.pdf" target="_new">
                      编码器
                    </TextLink>
                  </ListItem>
                  <ListItem>
                    <TextLink to="/assets/pdf/biological-and-machine-intelligence/zh-cn/BaMI-Spatial-Pooler.pdf" >
                      空间池化
                    </TextLink>
                  </ListItem>
                  <ListItem>
                    <TextLink to="/assets/pdf/biological-and-machine-intelligence/zh-cn/BaMI-Temporal-Memory.pdf">
                      时序记忆
                    </TextLink>
                  </ListItem>
                  <ListItem>
                    <TextLink to="/assets/pdf/biological-and-machine-intelligence/zh-cn/BaMI-Other-Content.pdf" target="_new">
                      后续加入内容
                    </TextLink>
                  </ListItem>
                  <ListItem>
                    <TextLink to="/assets/pdf/biological-and-machine-intelligence/zh-cn/BaMI-Problem-Sets.pdf" target="_new">
                      习题集
                    </TextLink>
                  </ListItem>
                  <ListItem>
                    <TextLink to="/assets/pdf/biological-and-machine-intelligence/zh-cn/BaMI-Glossary.pdf" target="_new">
                      词汇表
                    </TextLink>
                  </ListItem>
                </ListOrder>
              </div>
              {/* eslint-enable max-len */}
            </div>
            <div className={styles.content}>
              <Paragraph lead={true}>
                BAMI书籍章节的中文译本由HTM社区成员Gu Jian提供。Numenta非常感谢Gu
                Jian的工作，但对翻译质量不承担任何责任。
              </Paragraph>
              <Paragraph>
                (This Chinese translation of BAMI book sections is provided by
                an HTM community member, Gu Jian. Numenta greatly appreciates
                Gu Jian’s work, but disclaims any liability for the quality of
                the translation.)
              </Paragraph>
            </div>
          </div>
        </Section>
      </article>
    )
  }
}
