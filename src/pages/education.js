import React from 'react'
import Reveal from 'react-reveal/Reveal';
import * as Utils from '../utils'
import AboutContent from '../contents/about'
import Scroll from 'react-scroll'
import style from '../style'
import {Timeline, TimelineEvent} from 'react-event-timeline'
import EducationContent from '../contents/education'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSchool} from '@fortawesome/free-solid-svg-icons'
export default class Education extends React.Component {

  getEducationIcon() {
    return <div className="text-light"><FontAwesomeIcon icon={faSchool} /></div>
  }
  getEducationTitleComponent(title) {
    return <h4>{title}</h4>
  }
  getEducationSubtitleComponent(subtitle) {
    return <h5>{subtitle}</h5>
  }
  getEducationDateComponent(edu) {
    return (
      <p>
        {edu.from} - {edu.to?edu.to: <span class="badge badge-info">Ongoing</span>}
      </p>
    )
  }
  getTimeline() {
    return (
      <Timeline lineStyle={style.education.timeline.line}>
        {
          EducationContent.timeline.map(edu => (
            <TimelineEvent
              title={this.getEducationTitleComponent(edu.institude)}
              subtitle={this.getEducationSubtitleComponent(edu.degree)}
              createdAt={this.getEducationDateComponent(edu)}
              style={{background: 'transparent !important'}}
              bubbleStyle={style.education.timeline.bubble}
              icon={this.getEducationIcon()}
            >
              <div>
                {edu.synopsis && <p>{edu.synopsis}</p>}
                {edu.grade && Object.keys(edu.grade).map(gradeTitle => (
                  <p>
                    {gradeTitle}
                    <span style={style.education.timeline.badges} class="badge badge-success">{edu.grade[gradeTitle].grade}</span>
                    {edu.grade[gradeTitle].provisional &&
                      <span style={style.education.timeline.badges} class="badge badge-warning">Provisional</span>
                    }
                  </p>
                ))}
                {edu.thesis && Object.keys(edu.thesis).map(thesisName => (
                  <p> Thesis: <br/>
                    <b>
                      <a target="_blank" href={edu.thesis[thesisName]}>{thesisName}</a>
                    </b>
                  </p>
                ))}
                {
                  edu.courses &&
                  (
                    <div>
                      Courses Taken (excerpt):
                      <ul>
                        {
                          edu.courses.map(course => (
                            <li style={style.education.timeline.courses}>
                              <div style={style.education.timeline.courses.code}>
                                <span style={{width: '100%'}} class="badge badge-secondary">{course.code}</span>
                              </div>
                              <div style={style.education.timeline.courses.title}>
                                {course.name}
                                {course.grade && <span style={style.education.timeline.badges} class="badge badge-danger">{course.grade}</span>}
                              </div>
                            </li>
                          ))
                        }
                      </ul>
                    </div>
                  )
                }


              </div>
            </TimelineEvent>
          ))
        }

      </Timeline>
    )
  }
  render() {
    return (
      <Utils.asPage style={style.education.main} className="bg-light">
        <Reveal>
          <div  className="container">
            <Scroll.Element name="education">
              <h3> Education </h3>
            </Scroll.Element>
            {this.getTimeline()}
          </div>
        </Reveal>
      </Utils.asPage>
    )
  }
}
