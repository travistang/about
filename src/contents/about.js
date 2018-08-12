// JSON of the content of the "about" of myself...
import React from 'react'
import * as Utils from '../utils'
import style from '../style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUtensils,
  faPlane,
  faMusic,
  faBasketballBall,
  faDumbbell,
  faBicycle,
}from  '@fortawesome/free-solid-svg-icons'
import {
  Media,
  Card,
  CardBody,
  Collapse,
  Tooltip,
} from 'reactstrap';
const hobby = [
  {
    icon: faMusic,
    name: 'Piano',
    details: `
      As a trivia, I started learning piano since I was 4, so now I should have nominally been playing for ${Utils.myAge() - 4} years...
      But since I haven't played piano for long time, my skills should now be just like a beginner...
      As another trivia, I will just play classical music, that's probably because of the pieces I played for the piano exams. And yes, I do like listening and playing them.
    `
  },
  {
    icon: faBicycle,
    name: "Cycling",
    details: `
      Some time after I live in Munich I realise that travelling with bike within the city is sometimes faster than taking buses - especially when I go gym.
      That's why since a few months ago I bought a bike and start riding it around. Although I am still a 'beginner' that I may hurt myself once per month by riding it,
      I will keep riding it as it gives a feeling of speed,freedom and health:) There are
    `
  },
  {
    icon: faUtensils,
    name: "Cooking",
    details: `
      I enjoy cooking since my exchange semester at TUM in 2015,
      when eatting out becomes too luxurious to do regularly (and yes, restaurants in Hong Kong are much more affordable compare to those in Munich...)
      Over these years my food is getting more delicious (in my opinion...) and I am willing to try to make new dishes from time to time:)
    `
  },
  {
    icon: faBasketballBall, // lol..
    name: "Badminton",
    details: `
      I play badminton with my family almost every weekend when I was back in Hong Kong.
      Now since I still can't find anyone who plays badminton here in Germany I also haven't played for a long time and my skills will definitely get rusted a bit.
      In case you are in Munich and wish to find somebody to play badminton, feel free to contact me!
      (p.s. I know the icon is a basketball instead of a badminton, I just decided to use it because there's no badminton icon in free version of Font Awesome...
      Sarcastically basketball is a nightmare for me since my face got hit by one when I was in high school.)
    `
  },
  {
    icon: faDumbbell,
    name: 'Gym',
    details: `
      I started to work out at gym since Sep. 2016.
      I still remember the reason behind is that I realised guys here are much bigger than I do and the only thing I can change to 'minimize such difference' is to workout.
      No matter what the reason was and whether its justifiable or not, now it becomes my hobby and I think it can't be changed in the near future.
    `
  }
]
// well I have to make it a class since it has states now...
class HobbyComponent extends React.Component {
  constructor(props) {
    super(props)
    this.iconColor = `text-${Utils.randomColor()}`
    this.state = {
      isExpanded: false,
    }
  }
  toggleExpand() {
    this.setState({...this.state,isExpanded: !this.state.isExpanded})
  }
  render() {
    let hob = this.props.hobby
    return (
      <div style={style.about.interestContainer.interest}>

            <div onClick={this.toggleExpand.bind(this)} style={style.about.interestContainer.interest.content}>
              <div className={this.iconColor} style={style.about.interestContainer.interest.content.icon}>
                <FontAwesomeIcon icon={hob.icon} size="2x"/>
              </div>
              <div  id={`hobby-${hob.name}`} style={style.about.interestContainer.interest.content.text}>
                {hob.name}
              </div>
              <Tooltip direction="right" target={`hobby-${hob.name}`} isOpen={this.state.isExpanded}>
                {hob.details}
              </Tooltip>
            </div>

      </div>
    )
  }
}

export default {
    synopsis: (
      <p>
        I am Travis, a ${Utils.myAge()}-year-old guy from Hong Kong. Current I am doing my Master's degree in Informatics at Technical University of Munich. I will be doing my third semester in Oct 2018.
        <br />
        I have a wide range of interest. From web development to mobile application development, machine learning (deep learning in particular),
        networking, IoT (such as with Raspberry Pi, Arduino, ESP8266...), modeling and simulation, quadcopters... These are all in which I have motivation to investigate and work on.
        My goal is to combine the best out of these fields into a few projects, that people can get the most out of it.
      </p>
    ),
    sections: [
      {
        title: "My Interests",
        content: (
          <div>
            <p> I do have other interests other than writing codes and connecting wires, to name a few...</p>
            <div style={style.about.interestContainer}>

                {hobby.map(hob => <HobbyComponent hobby={hob} />)}

            </div>
          </div>
        )
      },
      {
        title: "\"Travis? Yiu Ting? What's your name actually?\"",
        id: 1,
        content:
        (
          <p style={style.about.text}>
          Well, I have come across this question many times here in Munich.
          <br/><br/>
          <b>Travis</b> is my nickname that all friends of mine call but it never exists in any offical documents.
          <b>Yiu Ting</b> is the name that appears on my passport / IDs but nobody except my parents call me so.
          <br/><br/>
          It is very common for Hongkongers to have an unofficial english name and we get used to calling each other with it in every context.
          <br/><br/>
          That's why I prefer being called <b>Travis</b>. But of course you can call me <b>Yiu Ting</b> if you want since it really is my name and I personally don't care:) But try not to call me both at the same time or I will get confused:)
          </p>
        )
      }
    ]
}
