export default () => ({
  wrContent: {
    width: '220px',
    textAlign: 'center',
    margin: '5px'
  },
  headerContent: {
    padding: '20px 0',
    width: '220px',
    height: '130px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    color: '#fff',
    backgroundColor: '#00a8ff',
    borderTopLeftRadius: '30px',
    borderTopRightRadius: '30px'
  },
  title: {
    fontSize: '18px',
    fontWeight: 900
  },
  oldPrice: {
    color: '#ff7d7d',
    textDecoration: 'line-through'
  },
  percent: {
    color: '#ff7d7d'
  },
  price: {
    fontSize: '17px',
    fontWeight: 900
  },
  content: {
    display: 'flex',
    flexWrap: 'wrap',
    flexFlow: 'column',
    height: 'calc(100% - 130px)',
    backgroundColor: '#fff',
    border: '2px solid #00a8ff',
    borderBottomLeftRadius: '30px',
    borderBottomRightRadius: '30px'
  },
  wrItem: {
    display: 'flex',
    alignItems: 'stretch',
    flexDirection: 'column',
    flexGrow: 1
  },
  item: {
    padding: '15px 18px',
    fontSize: '14px',
    fontWeight: 100
  },
  underline: {
    height: '1px',
    width: '160px',
    margin: '0 auto',
    backgroundColor: '#00a8ff'
  },
  button: {
    width: '170px',
    margin: '0 auto',
    marginTop: '70px',
    marginBottom: '25px',
    padding: '15px 30px',
    color: '#fff',
    fontSize: '14px',
    backgroundColor: '#00a8ff',
    borderRadius: '30px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.1s ease-out',

    '&:hover': {
      backgroundColor: '#0092de'
    },
    '&:focus': {
      outline: 'none'
    },
    '&:active': {
      backgroundColor: '#0483c5'
    }
  }
})
