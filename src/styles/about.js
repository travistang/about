import {centerContent,spaceBetween} from './common'
export default {
  section: {
    paddingTop: 16,
  },
  text: {
    textAlign: 'justify',
  },
  interestContainer: {

    alignItems: 'flex-start',
    display: "flex",
    flexWrap: "wrap",
    interest: {
      width: '35%',
      height: 64,
      margin: '1em',
      content: {
        display: "flex",
        icon: {
          ...centerContent,
          flex: 1,
        },
        text: {
          alignItems: 'center',
          flex: 1,
        }
      }
    }
  }
}
