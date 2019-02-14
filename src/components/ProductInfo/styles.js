export default () => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 'calc(100% - 1px)',
    marginTop: '10px',
    padding: '20px 10px',
    border: '2px solid #03b9ff'
  },
  text: {
    maxWidth: '70%'
  },
  openFullQuestion: {
    maxWidth: '200px',
    maxHeight: '40px',
    padding: '10px 15px',
    color: '#fff',
    textAlign: 'center',
    borderRadius: '10px',
    backgroundColor: '#03b9ff',
    cursor: 'pointer',

    '&.blue': {
      backgroundColor: '#03b9ff'
    },
    '&.green': {
      backgroundColor: '#40ad3a'
    }
  }
})
