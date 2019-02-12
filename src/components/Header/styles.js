import LogoutIcon from '../../assets/images/logout.png'

export default theme => ({
  root: {
    width: '100%',
    display: 'flex',
    padding: '20px 0'
  },
  logout: {
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    right: '90px',
    top: '65px',
    cursor: 'pointer',

    '&:hover': {
      color: '#04b1ff'
    },

    '&:after': {
      content: `""`,
      position: 'absolute',
      width: '22px',
      height: '22px',
      right: '-30px',
      backgroundImage: `url(${LogoutIcon})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 0,

      [theme.breakpoints.down('sm')]: {
        width: '30px',
        right: '-28px',
        height: '30px'
      }
    },
    
    '& span': {
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      }
    },

    [theme.breakpoints.down('md')]: {
      top: '36px'
    },
    [theme.breakpoints.down('sm')]: {
      top: '44px',
      right: '50px'
    }
  }
})
