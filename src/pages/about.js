import React from 'react'
import Reveal from 'react-reveal/Reveal';
import * as Utils from '../utils'
import AboutContent from '../contents/about'
import Scroll from 'react-scroll'

import style from '../style'
export default class About extends React.Component {

  render() {
    return (
      <Utils.asPage>
        <Reveal>
          <div className="container">
            <Scroll.Element name="about">
              <h3> About Me</h3>
            </Scroll.Element>

            <p style={style.about.text}> {AboutContent.synopsis}</p>
            {
              AboutContent.sections.sort((sa,sb) => sa - sb)
                .map(section =>
                  <div style={style.about.section}>
                    <h4> {section.title} </h4>
                    {section.content}
                  </div>
                )
            }
          </div>
        </Reveal>
      </Utils.asPage>
    )

  }
}
