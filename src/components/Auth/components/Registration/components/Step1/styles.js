export default theme => ({
  root: {
    display: 'flex',
    minHeight: 'inherit',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  registrStep1: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(243, 243, 243)',
    padding: '40px 20px',
    borderRadius: '23px',
    boxShadow: '0px 10px 20px 0px rgba(0,0,0,0.1)',
    zIndex: 9
  },
  step1Title: {
    margin: '0 0 20px 0',
    maxWidth: '408px',
    fontSize: '14px',
    fontWeight: 400,
    textAlign: 'center',

    [theme.breakpoints.down('md')]: {
      maxWidth: 'inherit',
      width: '300px'
    }
  },
  field: {
    height: '35px',
    width: '350px',
    border: 'none',
    outline: 'none',
    borderRadius: '23px',
    paddingLeft: '25px',
    boxSizing: 'border-box',
    backgroundColor: 'rgba(	255, 255, 255, 0.61)',
    
    '&.input-error': {
      border: '1px solid red'
    },

    [theme.breakpoints.down('md')]: {
      width: '300px',
    }
  },
  step1BtnBack: {
    display: 'inline-block',
    textAlign: 'center',
    fontSize: '16px',
    fontWeight: 700,
    border: 'none',
    outline: 'none',
    backgroundColor: 'rgba(255, 255, 255, .73)',
    color: 'inherit',
    padding: '10px',
    width: '130px',
    marginTop: '30px',
    borderRadius: '23px',
    marginRight: '12px',
    cursor: 'pointer',
    textDecoration: 'none',

    [theme.breakpoints.down('md')]: {
      fontSize: '14px',
      width: '115px',
    }
  },
  step1BtnsFinish: {
    display: 'inline-block',
    textAlign: 'center',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: 700,
    border: 'none',
    outline: 'none',
    backgroundColor: '#6eec7c',
    color: '#fff',
    padding: '10px',
    width: '205px',
    borderRadius: '23px',
    marginTop: '30px',
    cursor: 'pointer',

    '&.disabled': {
      opacity: 0.3
    },

    [theme.breakpoints.down('md')]: {
      fontSize: '14px',
      width: '170px'
    }
  },
  checkEmail: {
    color: 'green',
    paddingTop: '10px'
  }
})
