import OpenIcon from '../../assets/images/openQuestion.png'
import CloseIcon from '../../assets/images/cancel.png'

export default theme => ({
  root: {
    width: 'calc(100% - 1px)',
    marginTop: '10px',
    padding: '45px 10px',
    border: '2px solid #dddddd',
    borderRadius: '10px',

    '&.active': {
      backgroundColor: '#fff'
    },

    [theme.breakpoints.down('sm')]: {
      width: '90%',
      margin: '0 auto',
      marginBottom: '10px'
    }
  },
  wrShortInformation: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative'
  },
  text: {
    maxWidth: '70%'
  },
  openFullQuestion: {
    position: 'absolute',
    top: '0px',
    right: '20px',
    width: '17px',
    height: '17px',
    backgroundImage: `url(${OpenIcon})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 0,
    cursor: 'pointer',
    transition: 'all 0.1s ease-out',

    '&.active': {
      width: '25px',
      height: '25px',
      top: '-30px',
      right: '25px',
      backgroundImage: `url(${CloseIcon})`
    }
  },
  wrFullInformation: {
    paddingTop: '20px'
  },
  status: {
    padding: '10px 0',
    fontSize: '16px',
    fontWeight: 600
  },
  ask: {
    padding: '8px 30px',
    color: '#fff',
    backgroundColor: '#03b9ff',
    borderRadius: '20px',
    cursor: 'pointer'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '70%',
    margin: '0 auto'
  },
  field: {
    height: '100px',
    border: '2px solid #00a8ff',
    borderRadius: '30px',
    padding: '10px 10px 10px 25px',

    '&:focus': {
      outline: 'none'
    },
    '&.input-error': {
      border: '2px solid red'
    }
  },
  submit: {
    width: '170px',
    color: '#fff',
    margin: '0 auto',
    border: 'none',
    cursor: 'pointer',
    padding: '10px 30px',
    fontSize: '14px',
    marginTop: '20px',
    transition: 'background-color 0.1s ease-out',
    borderRadius: '30px',
    backgroundColor: '#00a8ff',

    '&:hover': {
      backgroundColor: '#0092de'
    },
    '&:focus': {
      outline: 'none'
    }
  }
})
