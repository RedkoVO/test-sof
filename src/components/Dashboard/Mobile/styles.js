export default () => ({
  '@keyframes fade-and-slide-in': { from: { opacity: 0 }, to: { opacity: 1 } },

  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    margin: '0 auto',
    background: '#f2f1f2'
  },
  tabs: {
    width: '100%'
  },
  tabList: {
    margin: 0,
    padding: '40px 0 40px 0',
    flexWrap: 'wrap',
    justifyContent: 'center',
    listStyleType: 'none',
    display: 'none'
  },
  tab: {
    display: 'flex',
    alignItems: 'center',
    width: '190px',
    margin: '5px',
    padding: '8px',
    color: '#04b1ff',
    fontSize: '14px',
    textAlign: 'center',
    border: '2px solid #04b1ff',
    borderRadius: '30px',
    cursor: 'pointer',

    '&:last-child': {
      borderRightWidth: '1px'
    },
    '&:hover': {
      backgroundColor: '#99d8f5'
    },
    '&:focus': {
      outline: 'none'
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
    flexWrap: 'wrap',
    justifyContent: 'center',
    opacity: 1,
    marginBottom: '100px',
    animation: 'fade-and-slide-in 1200ms ease-in'
  }
})
