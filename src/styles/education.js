import {themeColors} from './common'
export default {
  main: {
    paddingTop: 32,
  },
  timeline: {
    line: {
      width: 4,
    },
    bubble: {
      backgroundColor: themeColors.primary,
      border: 'none',
    },
    icon: {
      color: themeColors.text
    },
    courses: {
      display: 'flex',
      code: {
        flex: 1,
      },
      title: {
        paddingLeft: 4,
        flex: 7,
      }
    },
    badges: {
      marginLeft: 4,
    }
  }
}
