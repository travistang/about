// The code for rendering my CV goes here!
import React from 'react'
import ContactContent from '../contents/contact'
import EducationContent from '../contents/education'
import ExperiencesContent from '../contents/experiences'
import ProjectsContent from '../contents/projects'

import {Timeline, TimelineEvent} from 'react-event-timeline'
import {
  Container,
  Row,
  Col,
  Progress
} from 'reactstrap'
import style from '../styles/CV'
import {
  faFacebook,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import {
  // sections' icons
  faAddressCard,
  faLanguage,
  faSuitcase,
  faSchool,
  faGlobe,
  faInfo,

  faAt,
  faMapMarker,
  faHome,


} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class CV extends React.Component {

  getIconByName(name) {
    switch(name) {
      case 'email':
        return faAt
      case 'github':
        return faGithub
      case 'facebook':
        return faFacebook
      case 'website':
        return faGlobe
      case 'info':
        return faInfo
      case 'currentLocation':
        return faMapMarker
      case 'home':
        return faHome
      default: return null
    }
  }
  // besides those on the website, anything more you want to add?
  getContactMethodList() {
    return [
      // no facebook on cv please..
      ...ContactContent.methods.filter(meth => meth.method != 'facebook'),
      {
        method: 'website',
        detail: 'travistang.github.io/about/'
      }
    ]
  }
  getAboutList() {
    return [
      {
        icon: 'home',
        name: 'Country',
        value: 'Hong Kong', // :)
      },
      {
        icon: 'currentLocation',
        name: 'Current City',
        value: "Munich"
      },
    ]
  }
  // consist of the avatar, contact info, name, origin,...
  infoAndContactSection() {
    return (
      <div style={style.left.info}>
        <div style={style.left.info.avatar}>
        </div>
        <h4 className="text-light"> Tang, Yiu Ting </h4>
        <p className="text-dark">  B.Eng. in Computer Science </p>
        {this.infoSection()}
        {this.contactSection()}
      </div>
    )
  }
  infoSection() {
    return (
      <this.sectionWithHeaderAndIcon
        icon={faInfo}
        title="About"
      >
        {
          this.getAboutList().map(about => (
            <div style={style.left.info.container.column}>

              <div style={style.left.info.container.column.icon}>
                <FontAwesomeIcon icon={this.getIconByName(about.icon)} />
              </div>
              <div style={style.left.info.container.column.text}>
                {about.value}
              </div>
            </div>
          ))
        }
      </this.sectionWithHeaderAndIcon>
    )
  }
  contactSection() {
    return (
      <this.sectionWithHeaderAndIcon
        icon={faAddressCard}
        title='Contact'
      >
        <div style={style.left.info.container}>
          {this.getContactMethodList().map(method => (

            <div style={style.left.info.container.column}>
              {/* Above is about each entry of the contact info  */}
              {/* This is the icon of such contact method */}
              <div style={style.left.info.container.column.icon}>
                <FontAwesomeIcon icon={this.getIconByName(method.method)} />
              </div>
              {/* This is the text of such contact method... */}
              <div style={style.left.info.container.column.text}>
                {method.url || method.detail}
              </div>
            </div>

          ))}
        </div>

      </this.sectionWithHeaderAndIcon>
    )

  }
  // consist of my language skills
  languageSection() {
    return (
      <this.sectionWithHeaderAndIcon
        icon={faLanguage}
        title="Languages"
      >
        <div style={style.left.info.container}>
          {Object.keys(ExperiencesContent.language).map(lang => (
            <div style={style.left.info.container.language}>
              <div style={style.left.info.container.language.name}>
                <b>{lang}</b> : {ExperiencesContent.language[lang].proficiency}
                {ExperiencesContent.language[lang].grade && `  (${ExperiencesContent.language[lang].grade})`}
              </div>
              <div style={style.left.info.container.language.bar}>
                <Progress color="light" className="bg-primary" value={ExperiencesContent.language[lang].score} max={100}/>
              </div>

            </div>
          ))}
        </div>
      </this.sectionWithHeaderAndIcon>
    )
  }
  // consist of my education,
  // this should be in a form of timeline, just like in the main page, but with a much concise course list
  educationSection() {
    return (
      <this.sectionWithHeaderAndIcon
        icon={faSchool}
        title="Education"
        inverse
      >
        <div style={style.right.education}>
          <Timeline lineStyle={style.right.education.timeline.line}>
            {
              EducationContent.timeline.map(edu => (
                <TimelineEvent
                  title={<h5>{edu.institude}</h5>}
                  subtitle={<h6>{edu.degree}</h6> }
                  createdAt={`${edu.from} - ${edu.to?edu.to: 'Now'}`}
                  bubbleStyle={style.right.education.timeline.bubbles}
                />
              ))
            }
          </Timeline>

        </div>
      </this.sectionWithHeaderAndIcon>
    )
  }
  // consist of my working experience,
  // consist of the synopsis, but not the tech
  experienceSection() {
    return (
      <this.sectionWithHeaderAndIcon
        icon={faSuitcase}
        title="Experience"
        inverse
      >
        <div style={style.right.education}>
          <Timeline lineStyle={style.right.education.timeline.line}>
            {
              ExperiencesContent.timeline.map(exp => (
                <TimelineEvent
                  title={<h5>{exp.role}</h5>}
                  subtitle={<h6>{exp.company} | {exp.nature}</h6> }
                  createdAt={exp.date}
                  bubbleStyle={style.right.education.timeline.bubbles}
                />
              ))
            }
          </Timeline>

        </div>
      </this.sectionWithHeaderAndIcon>
    )
  }
  // consist
  projectsSection() {
    return (
      <this.sectionWithHeaderAndIcon
        icon={faSchool}
        title="Personal Projects"
        inverse
      >
        <div style={style.right.education}>
          {ProjectsContent.projects
              .filter(p => p.includeInCV)
              .map(proj => (
                <div style={style.right.projects}>
                  <div style={style.right.projects.title}>
                    <h5>{proj.cvName || proj.name}</h5>
                  </div>
                  <div style={style.right.projects.url}>
                    {proj.cvUrl || proj.url}
                  </div>
                  <div style={style.right.projects.description}>
                    <p>{proj.cvSynopsis}</p>
                  </div>
                </div>
              ))

          }
        </div>
      </this.sectionWithHeaderAndIcon>
    )
  }

  sectionWithHeaderAndIcon(props) {
    let textColor = props.inverse?"text-primary":"text-light"
    return (
      <div className={textColor} style={{...props.style,...style.commonSection}}>
        <div style={style.commonSection.header}>
        {
          /*
            <div style={style.commonSection.header.icon}>
              <FontAwesomeIcon icon={props.icon} size="1x"/>
            </div>
          */
        }

          <div style={style.commonSection.header.text}>
            {props.title}
          </div>

        </div>
        <div style={style.commonSection.content}>
          {props.children}
        </div>

      </div>
    )
  }

  render() {
    return (
      <div style={style.main}>
        <div style={style.left} className="bg-primary">
          {this.infoAndContactSection()}
          {this.languageSection()}
        </div>
        <div style={style.right}>
          {this.experienceSection()}
          {this.educationSection()}
          {this.projectsSection()}
        </div>
      </div>

    )
  }
}
