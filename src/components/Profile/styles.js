export default theme => ({
  '@keyframes fade-and-slide-in': { from: { opacity: 0 }, to: { opacity: 1 } },

  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    width: '1024px',
    margin: '0 auto',
    minHeight: '400px',

    [theme.breakpoints.down('md')]: {
      width: 'inherit'
    }
  },
  spinner: {
    position: 'absolute',
    width: '40px',
    height: '40px',
    top: 0,
    bottom: 0,
    margin: 'auto'
  },
  title: {
    paddingTop: '10px',
    fontSize: '30px',
    fontWeight: 600
  },
  tabs: {
    width: '100%'
  },
  tabList: {
    margin: 0,
    padding: '40px 0 0 0',
    display: 'flex',
    listStyleType: 'none',

    [theme.breakpoints.down('md')]: {
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  },
  tab: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
    width: '190px',
    minHeight: '80px',
    padding: '8px',
    color: '#04b1ff',
    fontSize: '14px',
    textAlign: 'center',
    border: '2px solid #04b1ff',
    borderLeft: 'none',
    cursor: 'pointer',

    '&:first-child': {
      borderLeft: '2px solid #04b1ff'
    },
    '&:hover': {
      backgroundColor: '#99d8f5'
    },
    '&:focus': {
      outline: 'none'
    },

    [theme.breakpoints.down('md')]: {
      margin: '5px'
    }
  },
  tabPanel: {
    display: 'none',
    opacity: 0
  },
  selectedTab: {
    color: '#ffffff',
    backgroundColor: '#04b1ff',

    '&:hover': {
      backgroundColor: '#04b1ff'
    }
  },
  selectedPanel: {
    display: 'flex',
    justifyContent: 'space-between',
    opacity: 1,
    marginBottom: '100px',
    animation: 'fade-and-slide-in 1200ms ease-in',

    [theme.breakpoints.down('md')]: {
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  }
})
