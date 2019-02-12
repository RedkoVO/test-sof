export default theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '200px',
    justifyContent: 'space-around'
  },
  socialIcons: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '400px',
    margin: '0 auto',

    '& svg': {
      cursor: 'pointer'
    },

    [theme.breakpoints.down('md')]: {
      width: '320px'
    }
  },
  copyright: {
    textAlign: 'center',

    [theme.breakpoints.down('md')]: {
      width: '320px',
      margin: '0 auto'
    }
  }
})
