import {centerContent,spaceSpread} from './common'
export default {
  techBadge: {
    marginLeft: 4,
    marginRight: 4,
  },
  techList: {
    listStyleType: 'none'
  },
  programming: {
    main: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'left',
      alignItems: 'flex-start'
    }
  },
  language: {
    header: {
      ...spaceSpread
    },
    proficiency: {
      margin: 4,
      width: 32,
      ...centerContent
    }
  }
}
