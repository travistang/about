import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
} from 'reactstrap';

import style from './style'
import './App.css'
import { fab,
  faGithub,
  faFacebook,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons'

import {
  faAngleDoubleDown,
  faArrowDown,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Scroll from 'react-scroll';

import Jump from 'react-reveal/Jump';
import Reveal from 'react-reveal/Reveal';
import * as Utils from './utils'
import About from './pages/about'
import Education from './pages/education'
import Experiences from './pages/experiences'
import Projects from './pages/projects'
import Contact from './pages/contact'
// this require....
const VisibilitySensor = require('react-visibility-sensor')


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      isOnCover: true,

      avatar: null,
      frequencyCount: null,
      events: null,
      // flag indicate whether the API has been called or not,
      // if its true but the attrs above is null, then you know theres an error...
      isLoaded: false,
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  // I want the navbar to be transparent
  getNavbarStyle() {
    if(this.state.isOnCover) {
      return {
        color: 'light',
        light: true,
        dark: false,
      }
    } else {
      return {
        color: 'primary',
        light: false,
        dark: true,
      }
    }
  }
  navBar() {
    return (
      <Navbar {...this.getNavbarStyle()} fixed="top" expand="md">
        <NavbarToggler onClick={this.toggle.bind(this)} />
        <Collapse isOpen={this.state.isOpen} navbar className="justify-content-around">
          <Nav navbar>
            <NavItem className="navLinkHover">
              <NavLink>
                <Scroll.Link to="about" offset={-70} smooth={true} delay={100}>About</Scroll.Link>
              </NavLink>
            </NavItem>
            <NavItem className="navLinkHover">
              <NavLink>
                <Scroll.Link to="education" offset={-70} smooth={true} delay={100}> Education</Scroll.Link>
              </NavLink>
            </NavItem>
            <NavItem className="navLinkHover">
              <NavLink>
                <Scroll.Link to="experience" offset={-70} smooth={true} delay={100}>
                  Experience
                </Scroll.Link>
              </NavLink>
            </NavItem>
            <NavItem className="navLinkHover">
              <NavLink>
                <Scroll.Link to="projects" offset={-70} smooth={true} delay={100}>
                  Projects
                </Scroll.Link>
              </NavLink>
            </NavItem>
            <NavItem className="navLinkHover">
              <NavLink>
                <Scroll.Link to="contact" offset={-70} smooth={true} delay={100}>
                  Contact
                </Scroll.Link>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
  onCoverInViewChange(isVisible) {
    this.setState({...this.state,isOnCover:isVisible})
  }
  cover() {
    return (
      <section>
        <div className="jumbotron">
          <div style={style.cover}>
            <Reveal>
              <div style={style.cover.top}>
                <div style={style.cover.top.avatar}>
                </div>
                <hr className="my-4"/>
                <Scroll.Element name="top">
                  <VisibilitySensor onChange={this.onCoverInViewChange.bind(this)} />
                  <h2> Hi. I am Travis! </h2>
                  <p> Welcome to my homepage.</p>
                </Scroll.Element>

                <hr className="my-4"/>
                {
                  /*
                  <div style={style.cover.top.contactList}>
                    <a href="https://github.com/travistang">
                      <FontAwesomeIcon icon={faGithub} size="lg"/>
                    </a>
                    <a href="https://www.facebook.com/yiutingtangtravis">
                      <FontAwesomeIcon icon={faFacebook} size="lg"/>
                    </a>
                    <a href="https://www.linkedin.com/in/travis-tang-08289074/">
                      <FontAwesomeIcon icon={faLinkedin} size="lg"/>
                    </a>
                  </div>
                  */
                  /*
                  <Button size='lg' href="cv" color="primary">
                     Get my CV
                  </Button>
                  */
                }

              </div>
            </Reveal>
            <Jump>
              <Scroll.Link to="about" offset={-70} smooth={true} delay={100}>
                <div className="bg-light" style={style.cover.bottom}>
                  <FontAwesomeIcon icon={faAngleDoubleDown} size="2x" />
                </div>
              </Scroll.Link>
            </Jump>

          </div>

        </div>
      </section>
    )
  }
  getWindowDimension() {
    // https://stackoverflow.com/questions/19014250/rerender-view-on-browser-resize-with-react#19014495
    var w = window,
        d = document,
        documentElement = d.documentElement,
        body = d.getElementsByTagName('body')[0],
        width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
        height = w.innerHeight|| documentElement.clientHeight|| body.clientHeight;
    this.props.notifyWindowSizeChange({width,height})
  }
  asPage(props) {
    return (
      <div style={style.page}>
        {props.children}
      </div>
    )
  }
  render() {
    return (
      <div style={style.main}>
        {this.navBar()}
        {
          <Utils.asPage>
              {this.cover()}
          </Utils.asPage>
        }
        <About />
        <Education />
        <Experiences />
        <Projects {...this.state} />
        <Contact />
      </div>
    );
  }

  componentWillMount() {
    this.getWindowDimension()
  }
  componentDidMount() {
    // register, register, register...
    window.addEventListener('resize',this.getWindowDimension.bind(this))
    fetch('https://api.github.com/users/travistang/events')
      .then(response => response.json())
      .then(data => {
        let dateToString =  Utils.dateToString
        let avatar = data[0].actor.avatar_url
        // aggregate the data a bit
        let interestingEvents = data.filter(ev => 'PushEvent,CreateEvent,ReleaseEvent'.split(',').indexOf(ev.type) != -1)
          .filter(ev => (new Date() - new Date(ev.created_at)) <= 7 * 86400 * 1000) // within one week

        let dict = {} // stores the frequency

        // I want only push event and create event as Release...
        interestingEvents.forEach((ev) => {
          let dateKey = dateToString(ev.created_at)
          let activityCount = ev.type == "PushEvent"?ev.payload.commits.length:1 // the rest count as one only...

          if(!dict[dateKey]) dict[dateKey] = 0
          dict[dateKey] += activityCount

        })
        // prepare
        let numCommitOfDate = (date) => {
          let dateString = dateToString(date)
          let ind = Object.keys(dict).sort((a,b) => new Date(a) - new Date(b)).indexOf(dateString)
          if(ind < 0) return 0 // no commits on this day
          else return dict[dateString]
        }
        let startDate = new Date() - 6 * 86400 * 1000 // lets start from one week ago...
        // but why 6? becuase today (new Date() - 0 * 86400 * 1000 = new Date()) counts!
        let freqCount = []
        for(let i = 0; i < 7; i++) {
          freqCount.push(numCommitOfDate(startDate + i * 86400 * 1000))
        }

        // now just prepare for the event list, then we're good to go!
        this.setState({...this.state,
          avatar,
          frequencyCount: freqCount,
          events: interestingEvents,
          isLoaded: true
        })
      })
      .catch(e => {
        this.setState({...this.state,isLoaded: true,avatar: null,frequencyCount: null,events: null})
      })
  }
}

export default App;
