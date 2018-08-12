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
  DropdownItem
} from 'reactstrap';

import style from './style'
// import { library } from '@fortawesome/fontawesome-svg-core'
import { fab,
  faGithub,
  faFacebook,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons'

import {
  faAngleDoubleDown
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Scroll from 'react-scroll';

import Jump from 'react-reveal/Jump';
import Reveal from 'react-reveal/Reveal';
import * as Utils from './utils'
import About from './pages/about'
import Education from './pages/education'

// this require....
const VisibilitySensor = require('react-visibility-sensor')


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      isOnCover: true,
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
            <NavItem>
              <NavLink href="">
                <Scroll.Link to="about" smooth={true} delay={100}>About</Scroll.Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Education</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Experiences</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Contact</NavLink>
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
                  <h2> Hi. I'm Travis! </h2>
                  <p> Welcome to my homepage:)</p>
                </Scroll.Element>

                <hr className="my-4"/>
                <div style={style.cover.top.contactList}>
                  <FontAwesomeIcon icon={faGithub} size="lg"/>
                  <FontAwesomeIcon icon={faFacebook} size="lg"/>
                  <FontAwesomeIcon icon={faLinkedin} size="lg"/>
                </div>
              </div>
            </Reveal>
            <Jump>
              <Scroll.Link to="about" smooth={true} delay={100}>
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
      </div>
    );
  }

  componentWillMount() {
    this.getWindowDimension()
  }
  componentDidMount() {
    // register, register, register...
    window.addEventListener('resize',this.getWindowDimension.bind(this))
  }
}

export default App;
