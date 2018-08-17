export default {
  activity: {
    error: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      textAlign: 'center'
    },
    item: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    profile: {
      display: 'flex',
      marginTop: 16,
      icon: {
        flex: '0 0 48px',
        inner: {
          flex: 1,
          height: 48,
          width: 48,
          borderRadius:24,
          backgroundSize: 'cover',
        }
      },
      name: {
        flex: 1,
        display: 'flex',
        marginLeft:16,
        alignItems: 'center'
      }
    }
  }
}
