export default () => ({
  root: {
    display: 'flex',
    minHeight: 'inherit',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  popup: {
    position: 'fixed',
    width: 'fit-content',
    height: 'fit-content',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    margin: 'auto',
    zIndex: 9,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(243, 243, 243)',
    padding: '65px',
    borderRadius: '23px',
    boxShadow: '0px 10px 20px 0px rgba(0,0,0,0.1)'
  },
  authOverlay: {
    position: 'fixed',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    margin: 'auto',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: 2
  },
  preview: {
    width: '300px',
    padding: '20px 25px',
    color: '#fff',
    textAlign: 'center',
    backgroundColor: '#00a8ff',
    borderRadius: '25px'
  },
  title: {
    paddingBottom: '15px',
    fontSize: '18px',
    fontWeight: 900
  },
  content: {
    fontSize: '13px',
    fontWeight: 100
  },
  button: {
    width: '170px',
    color: '#fff',
    margin: '0 auto',
    border: 'none',
    cursor: 'pointer',
    padding: '15px 30px',
    textAlign: 'center',
    fontSize: '14px',
    marginTop: '70px',
    marginBottom: '25px',
    borderRadius: '30px',
    backgroundColor: '#00a8ff',
    transition: 'background-color 0.1s ease-out',

    '&:hover': {
      backgroundColor: '#0092de'
    }
  },
  price: {
    paddingTop: '20px',
    fontSize: '17px',
    fontWeight: 900
  },
  wrIframe: {
    width: '500px',
    height: '400px'
  },
  iframe: {}
})
