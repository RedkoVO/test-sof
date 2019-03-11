export default theme => ({
  root: {
    width: '1024px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',

    [theme.breakpoints.down('md')]: {
      width: '90%'
    }
  },
  wrQuestionInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    border: '2px solid #00a8ff',
    borderRadius: '30px',

    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  },
  leftBlock: {
    width: '45%',

    [theme.breakpoints.down('sm')]: {
      width: '100%',
      paddingBottom: '30px'
    }
  },
  wrUser: {
    marginTop: '10px',
    paddingTop: '10px',
    borderTop: '2px solid #00a8ff',

    '& img': {
      width: '50px'
    }
  },
  profile: {
    '& a': {
      color: '#575757',
      textDecoration: 'underline'
    }
  }
})
