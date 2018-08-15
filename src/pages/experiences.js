import React from 'react'
import Reveal from 'react-reveal/Reveal';
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';
import * as Utils from '../utils'
import AboutContent from '../contents/about'
import Scroll from 'react-scroll'
import RubberBand from 'react-reveal/RubberBand';
import style from '../style'
import {Timeline, TimelineEvent} from 'react-event-timeline'
import ExperiencesContent from '../contents/experiences'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSuitcase} from '@fortawesome/free-solid-svg-icons'
import {
  Card,
  CardBody,
  Progress,
  Collapse
} from 'reactstrap';
export default class Experiences extends React.Component {
  constructor(props) {
    super(props)
    this.state = { // allow possible extension of the state, also merge the inner dict to the final state object, so the outer '...'
      ...Object.assign(   // combine them to a single objects, first the small dicts need to be applied with spread operator, thats why the inner '...'
        ...Object.keys(ExperiencesContent.programming) // we get a list of dict here, say: {"Python": false}
          .map(lang => ({[lang]: false}))
      )
    }
  }
  getExperienceIcon() {
    return <div className="text-light"><FontAwesomeIcon icon={faSuitcase} /></div>
  }
  getExperienceTitleComponent(exp) {
    return <h4>{exp.role}</h4>
  }
  getExperienceSubtitleComponent(exp) {
    return <h6>{exp.company} • {exp.nature} • {exp.date} </h6>
  }

  getTimeline() {
    return (
      <Timeline orientation="right" lineStyle={style.education.timeline.line}>
        {
          ExperiencesContent.timeline.map(exp => (
            <TimelineEvent
              title={this.getExperienceTitleComponent(exp)}
              subtitle={this.getExperienceSubtitleComponent(exp)}
              bubbleStyle={style.education.timeline.bubble}
              icon={this.getExperienceIcon()}
            >
            <div>
              {exp.synopsis && <p>{exp.synopsis}</p>}
              Technologies:
              {exp.technologies && exp.technologies.map(tech => (
                  <span className="badge badge-success" style={style.experiences.techBadge}>
                    {tech}
                  </span>
              ))}


            </div>
            </TimelineEvent>
          ))
        }
      </Timeline>
    )
  }
  getLanguageSkillsComponent() {
    return (
      <div>
        {Object.keys(ExperiencesContent.language).map(lang => (
          <Reveal left>
          <Card style={{margin: 16}}>
            <CardBody>
              <div style={style.experiences.language.header}>
                <h5>
                  <b>{lang}:</b>{'  '}
                  {ExperiencesContent.language[lang].proficiency}{'  '}

                </h5>

                {ExperiencesContent.language[lang].grade && (
                  <span style={style.experiences.language.proficiency} className={`badge badge-${ExperiencesContent.language[lang].color}`}>
                    {ExperiencesContent.language[lang].grade}
                  </span>
                )}
              </div>

              <Progress color={Utils.getProgressColor(ExperiencesContent.language[lang].score)} value={ExperiencesContent.language[lang].score}/>
            </CardBody>

          </Card>
          </Reveal>
        ))}
      </div>
    )
  }
  toggleState(lang) {
    let newState = {...this.state,[lang]: !this.state[lang]}
    this.setState(newState)
  }
  getProgrammingSkillsComponent() {
    return (
      <div style={style.experiences.programming.main}>
        {Object.keys(ExperiencesContent.programming).map(lang => (
          <Zoom>
            <Card onClick={() => this.toggleState(lang)} style={{margin:16, width: '35vw',minHeight: 128}}>
              <CardBody>
                <h5>
                  {lang}
                </h5>
                <Progress
                  color={Utils.getProgressColor(ExperiencesContent.programming[lang].score)}
                  value={ExperiencesContent.programming[lang].score}
                />
                {
                  (
                    ExperiencesContent.programming[lang].tech &&
                    ExperiencesContent.programming[lang].tech.length  &&
                    <Collapse isOpen={this.state[lang]}>
                      <h6> Experience in related frameworks: </h6>
                      {
                        ExperiencesContent.programming[lang].tech.map(tech => (
                          <span  style={{margin:4}} className="badge badge-warning">
                            {tech}
                          </span>
                        ))
                      }
                    </Collapse>
                  ) || null // HACK: if there is indeed no tech, a "0" will be rendered and i dont want it, so i give a null..
                }
              </CardBody>
            </Card>
          </Zoom>
        ))}
      </div>
    )
  }
  render() {
    return (
      <Utils.asPage style={style.education.main} className="bg-light">

          <div className="container">
            <Reveal>
              <Scroll.Element name="experience">
                <h3> Experience </h3>
              </Scroll.Element>
              {this.getTimeline()}
            </Reveal>
              <h4> Language Skills </h4>
              {this.getLanguageSkillsComponent()}
              <h4> Programming Languages </h4>
              {this.getProgrammingSkillsComponent()}

          </div>

      </Utils.asPage>
    )
  }
}
