import React from 'react'
import Reveal from 'react-reveal/Reveal';
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';
import * as Utils from '../utils'
import AboutContent from '../contents/about'
import Scroll from 'react-scroll'
import RubberBand from 'react-reveal/RubberBand';
import style from '../style'
import {centerContent} from '../styles/common'
import {Timeline, TimelineEvent} from 'react-event-timeline'
import ProjectsContent from '../contents/projects'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSuitcase,faExclamationTriangle,faCodeBranch,faCode,
  faArrowDown,faArrowUp,faEllipsisH
} from '@fortawesome/free-solid-svg-icons'
import Trend from 'react-trend';
import {
   Button,
   Container,
   Row,
   Col,
   Collapse,
   Card,
   CardFooter,
   CardBody,
   CardTitle,
   CardSubtitle,
   CardText,
   ListGroup,
   ListGroupItem
} from 'reactstrap';
export default class Projects extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isActivityOpen: false,
      // flag indicating if each project is open
      projectsOpen: Object.assign(...ProjectsContent.projects.map(proj => ({[proj.name]:false})))
    }
  }
  toggle(flag){
    this.setState({...this.state,[flag]:!this.state[flag]})
  }
  toggleProjectsOpen(projName) {
    this.setState({
      ...this.state,
      projectsOpen: {
        ...this.state.projectsOpen,
        [projName]:!this.state.projectsOpen[projName]
      }
    })
  }
  getProjects() {
    return ProjectsContent.projects.map(proj => (
      <Zoom>
      <Card style={{margin: 16}} body color="primary" inverse>
        <CardBody onClick={() => {window.open(proj.url,'_blank');return false;}} >
          <CardTitle>{proj.name}
            {'  '}{proj.onGoing? (
              <span className="badge badge-danger">
                ongoing
              </span>
            ):''}
          </CardTitle>

            <p>{proj.date}</p>
            {(proj.url && <p>URL: {proj.url}</p>) || null}
            {(proj.tech && proj.tech.length && proj.tech.map(tech => (
              <span style={style.experiences.techBadge} className="badge badge-warning">
                {tech}
              </span>
            ))) || null}
            <Collapse isOpen={this.state.projectsOpen[proj.name]}>
              <CardText>
                <div style={{textAlign: 'justify'}}>{proj.synopsis}</div>
              </CardText>
            </Collapse>
        </CardBody>
        <CardFooter style={{...centerContent}} onClick={this.toggleProjectsOpen.bind(this,proj.name)}>
          <div>
            <FontAwesomeIcon
              size="2x"
              icon={this.state.projectsOpen[proj.name]?faArrowUp:faEllipsisH}/>
          </div>
        </CardFooter>
      </Card>
      </Zoom>
    ))
  }
  errorComponent() {
    return (
      <div style={style.projects.activity.error}>
        <div>
          <FontAwesomeIcon icon={faExclamationTriangle} size='6x' />
        </div>
        <div>
          Cannot connect to GitHub at the moment :(
        </div>

      </div>
    )
  }
  getActivityIcon(type) {
    if(type == 'PushEvent') return faCode
    if(type == 'CreateEvent') return faCodeBranch
    if(type == 'ReleaseEvent') return
  }
  activityComponent() {
    // loaded, or error??
    if(!this.props.frequencyCount || !this.props.events) return this.errorComponent()
    // it is loaded!
    return (
      <div>
        <a className="text-light" target="_blank" href="https://github.com/travistang">
          <div style={style.projects.activity.profile}>
            <div style={style.projects.activity.profile.icon}>
              <div style={{...style.projects.activity.profile.icon.inner,backgroundImage: `url(${this.props.avatar})`}} />
            </div>
            <div style={style.projects.activity.profile.name}>
              travistang
            </div>
          </div>
        </a>
	<div>
		<Trend
		  gradient={['#fff','#fff']}
		  smooth={true}
		  radius={8}
		  strokeWidth={6}
		  padding={16}
		  autoDraw
		  autoDrawDuration={1500}
		  autoDrawEasing="ease-in"
		  data={this.props.frequencyCount}
		/>
	</div>
        <ListGroup color="light" flush>
          <Collapse isOpen={this.state.isActivityOpen}>
            {this.props.events.map(ev => {
              let action
              if(ev.type == 'PushEvent') action = 'Pushed to'
              if(ev.type == 'CreateEvent') action = 'Created / Added a branch to'
              if(ev.type == 'ReleasedEvent') action = 'Released a version of'
              if(!action) return null // what is this??
              let title = <p>{action} repository <b>{ev.repo.name.split('/')[1]}</b></p>
              let url = 'https://github.com/' + ev.repo.name // lol...
              let dateString = Utils.dateToString(ev.created_at)
              return (
                <Reveal bottom>
                <ListGroupItem className="bg-success" inverse onClick={() => {window.open(url,'_blank');return false;}}>
                  {title}
                  <div style={style.projects.activity.item}>
                    <p> {Utils.mmddYYYY2ddmmYYYY(dateString)} </p>
                    <FontAwesomeIcon icon={this.getActivityIcon(ev.type)} size='1x'/>
                  </div>

                </ListGroupItem>
                </Reveal>
              )
            })}
          </Collapse>
        </ListGroup>

      </div>

    )

  }
  loadingComponent() {
    return null
  }
  render() {
    return (
      <Utils.asPage style={style.education.main}>

          <div className="container">
            <Reveal>
              <Scroll.Element name="projects">
                <h3> Projects </h3>
                <p> I spend much of my free time building softwares and stuffs - For leisure, for fun, for being useful... for different reasons.
                  Some of the projects are listed below.
                </p>
              </Scroll.Element>
            </Reveal>
            <Container>
              <Row>
                <Col lg={7}>
                  {
                    this.getProjects()
                  }
                </Col>

                <Col lg={5}>
                  <Card color="success" inverse body style={{margin: 16}}>


                      <CardTitle>
                        My Recent activities
                      </CardTitle>
                      {
                        this.props.isLoaded?this.activityComponent():this.loadingComponent()
                      }
                      <CardFooter style={{...centerContent}}>
                        <div onClick={this.toggle.bind(this,'isActivityOpen')}>
                          <FontAwesomeIcon
                            size="2x"
                            icon={this.state.isActivityOpen?faArrowUp:faEllipsisH}/>
                        </div>
                      </CardFooter>

                  </Card>


                </Col>
              </Row>

            </Container>


          </div>

      </Utils.asPage>

    )
  }
}
