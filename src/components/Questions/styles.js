export default () => ({
  root: {
    width: '1024px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
  wrQuestionInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    border: '2px solid #00a8ff',
    borderRadius: '30px'
  },
  leftBlock: {
    width: '45%'
  },
  question: {},
  user: {},
  date: {},
  nature: {},
  rightBlock: {
    display: 'flex',
    flexDirection: 'column',
    width: '45%'
  },
  field: {
    height: '100px',
    border: '2px solid #00a8ff',
    borderRadius: '30px',
    padding: '10px 10px 10px 25px',

    '&:focus': {
      outline: 'none'
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
