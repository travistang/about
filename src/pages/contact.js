import React from 'react'
import Reveal from 'react-reveal/Reveal';
import Fade from 'react-reveal/Fade'
import * as Utils from '../utils'
import ContactContent from '../contents/contact'
import Scroll from 'react-scroll'
import style from '../style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAt,
  faCopyright,
} from '@fortawesome/free-solid-svg-icons'
import {
  faFacebook,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'

export default class Contact extends React.Component {
  getIconFromContactMethod(method) {
    let icon
    switch(method.method) {
      case 'email':
        icon = faAt
        break
      case 'github':
        icon = faGithub
        break
      case 'facebook':
        icon = faFacebook
        break
      default: return null
    }
    return <FontAwesomeIcon icon={icon} size='lg'/>
  }
  render() {
    return (
      <section style={style.contact.main} className="bg-primary text-light">
        <div container>
          <Scroll.Element name="contact">
            <Fade>
              <h3> Contact </h3>
            </Fade>

            <div style={style.contact.container}>
              {
                ContactContent.methods.map(method => (
                  <Fade>
                    <div style={style.contact.container.method}>
                      <div style={style.contact.container.method.icon}>
                        {this.getIconFromContactMethod(method)}
                      </div>
                      <div style={style.contact.container.method.detail}>
                        {method.url?(
                          <a href={method.url}>{method.detail}</a>
                        ):method.detail}
                      </div>
                    </div>
                  </Fade>

                ))
              }
            </div>
            <div style={style.contact.container.copyright}>
              Copyright <FontAwesomeIcon icon={faCopyright}/> 2018 Tang Yiu Ting. All rights reserved.

            </div>
          </Scroll.Element>
        </div>
      </section>

    )
  }
}
