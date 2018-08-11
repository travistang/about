import {centerContent,columnFlex,spaceBetween} from './common'
export default {
  ...centerContent,
  ...columnFlex,
  top: {
    ...centerContent,
    ...columnFlex,
    textAlign: 'center',
    width: "50%",
    avatar: {
      height: "25vw",
      width: "25vw",
      background: "white",
      borderRadius: "15vw",
    },
    contactList: {
      ...spaceBetween,
      width: "50%",
    },

  },
  bottom: {
    position: 'relative',
    ...centerContent,
    bottom: '-3rem',
    height: '2em',
    width:  '2em',
    borderRadius: '1em',
  }
}
