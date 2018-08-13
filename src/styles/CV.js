import {themeColors} from './common'
const avatarPath = require('../contents/imgs/formal-avatar.jpg')

export default {
  main: {
    fontFamily: "Montserrat",
    display: 'flex',
    position: 'fixed',
    top:0,
    left:0,
    bottom: 0,
    right: 0,
  },
  commonSection: {
    marginTop: 32,
    width: '100%',
    header: {
      display: 'flex',
      justifyContent: 'left',
      alignItems: 'center',
      icon: {
        flex: '0 0 32',
        marginRight: 16
      },
      text: {
        display: 'flex',
        alignItems: 'center',
        fontSize: 22,
        flex: 1,
      }
    },
    content: {
      padding: 8
    }

  },
  left: {
    flex: 1,
    padding: 16,
    info: {
      display: 'flex',
      flexDirection: 'column',
      alignItems:'center',
      justifyContent: 'center',
      avatar: {
        width: '15vw',
        height: '15vw',
        backgroundImage: `url(${avatarPath})`,
        backgroundSize: 'cover',
        borderRadius: '8vw',
        marginTop: 16,
        marginBottom: 16,
      },
      container: {
        display: 'flex',
        flexDirection: 'column',
        language: {
          display: 'flex',
          flexDirection: 'column',
          marginTop: 4,
          marginBottom: 4,
          name: {
            flex: 1,
          },
          bar: {
            flex: 1,
          }
        },
        column: {
          display: 'flex',
          flexDirection: 'left',
          icon: {
            flex: '0 0 24px',
          },
          text: {
            flex: 1,
            display: 'flex',
            justifyContent: 'left',
            textAlign: 'left'
          }
        }
      }
    },

  },
  right: {
    flex: 2,
    padding: 16,
    projects: {
      width: '100%',
      marginTop: 16,
      marginBottom:16,
      title: {
        flex: 1,
        fontWeight: 'bold'
      },
      url: {
        flex: 1,
        fontSize: 12,
      },
      description: {
        flex: 1,
      }

    },
    education: { // this name should be changed since it is actually being used by all sub-components on the right...
      display: 'flex',
      flexWrap: 'wrap',

      timeline: {
        line: {
          width: 4,
          background: themeColors.primary
        },
        bubbles: {
          border: `2px solid ${themeColors.primary}`,
          // background: 'none'
        }

      }
    }
  }

}
