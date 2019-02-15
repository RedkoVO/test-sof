import OpenIcon from '../../assets/images/openQuestion.png'
import CloseIcon from '../../assets/images/cancel.png'

export default () => ({
  root: {
    width: 'calc(100% - 1px)',
    marginTop: '10px',
    padding: '45px 10px',
    border: '2px solid #dddddd',
    borderRadius: '10px',

    '&.active': {
      backgroundColor: '#fff'
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
  }
})
