export default theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '30px 0 0 0',
    marginLeft: '65px',
    width: '100%',
    boxSizing: 'border-box',

    [theme.breakpoints.down('md')]: {
      paddingTop: 0,
      marginLeft: 0
    }
  },
  user: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%'
  },
  userBlock: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  userHello: {
    fontSize: '18px',
    margin: 0,
    textAlign: 'center'
  },
  email: {
    fontSize: '13px',
    fontWeight: '500',
    color: 'inherit',
    textDecoration: 'none',

    '&:hover': {
      textDecoration: 'underline'
    }
  },
  userPhoto: {
    height: '50px',
    width: '50px',
    display: 'block',
    borderRadius: '50%',
    boxShadow: '0px 5px 10px 0px rgba(0,0,0,0.1)',
    margin: '0 15px',

    '& img': {
      height: '100%',
      width: '100%',
      borderRadius: '50%'
    },

    [theme.breakpoints.down('md')]: {
      margin: 0
    }
  }
})
