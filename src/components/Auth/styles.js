export default theme => ({
  root: {},
  authOverlay: {
    position: 'fixed',
    top: '-80px',
    width: '100%',
    height: 'calc(100% + 80px)',
    backgroundColor: '#fff',
    zIndex: 9
  },
  wrAuth: {
    position: 'absolute',
    width: 'fit-content',
    height: 'fit-content',
    marginTop: '80px',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    margin: 'auto',
    zIndex: 9,

    [theme.breakpoints.down('md')]: {
      padding: '0 10px'
    }
  },
  wrAuthHeader: {
    position: 'relative',
    paddingBottom: '30px',
    margin: 'auto',
    width: '520px',
    textAlign: 'center',
    zIndex: 9,

    '& img': {
      width: '65px',
      marginBottom: '20px'
    },

    [theme.breakpoints.down('md')]: {
      width: 'inherit'
    }
  },
  title: {
    fontSize: '18px',
    fontWeight: 600
  }
})
