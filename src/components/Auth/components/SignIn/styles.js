export default () => ({
  root: {},
  containerRegistratStep1: {
    display: 'flex',
    minHeight: 'inherit',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerRegistrat: {
    display: 'flex',
    minHeight: 'inherit',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  registrStep1: {
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
  step1Title: {
    fontSize: '50px',
    fontWeight: 400,
    textAlign: 'center',
    margin: '0 0 40px 0'
  },
  step1Label: {
    fontSize: '15px',
    fontWeight: 400,
    textAlign: 'left',
    alignSelf: 'flex-start',
    paddingLeft: '25px',
    margin: '15px 0'
  },
  field: {
    marginTop: '10px',
    height: '46px',
    width: '400px',
    border: 'none',
    outline: 'none',
    borderRadius: '23px',
    paddingLeft: '25px',
    boxSizing: 'border-box',
    backgroundColor: 'rgba(	255, 255, 255, 0.61)'
  },
  step1BtnBack: {
    display: 'inline-block',
    fontSize: '20px',
    fontWeight: 700,
    border: 'none',
    outline: 'none',
    backgroundColor: 'rgba(255, 255, 255, .73)',
    color: 'inherit',
    padding: '13px',
    width: '140px',
    borderRadius: '23px',
    marginTop: '50px',
    marginRight: '12px',
    cursor: 'pointer',
    textDecoration: 'none'
  },
  step1BtnsRegister: {
    fontSize: '20px',
    fontWeight: 700,
    border: 'none',
    outline: 'none',
    backgroundColor: '#6eec7c',
    color: '#fff',
    padding: '13px',
    width: '245px',
    borderRadius: '23px',
    marginTop: '50px',
    cursor: 'pointer',

    '&.disabled': {
      opacity: '0.5',
      cursor: 'default'
    }
  }
})
