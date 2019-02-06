export default () => ({
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
    }
  },
  copyright: {
    textAlign: 'center'
  }
})
