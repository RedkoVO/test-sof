export default () => ({
  root: {
    padding: '0 80px'
  },
  investTitle: {
    color: '#000',
    fontSize: '38px',
    fontWeight: 600,
    textAlign: 'center',
    paddingBottom: '30px'
  },
  tabs: {
    display: 'flex',
    padding: '50px 0'
  },
  tab: {
    marginRight: '15px',
    padding: '12px 25px',
    color: '#fff',
    fontSize: '14px',
    fontWeight: 600,
    borderRadius: '30px',
    backgroundColor: '#8a8a8a',
    cursor: 'pointer',

    '&.active': {
      backgroundColor: '#000'
    }
  },
  wrWallet: {
    fontSize: '20px',
    fontWeight: 400
  },
  wallet: {
    marginBottom: '30px'
  },
  invested: {
    marginBottom: '20px'
  },
  earned: {
    marginBottom: '20px'
  },
  button: {
    padding: '10px 40px',
    color: '#ffffff',
    fontSize: '14px',
    fontWeight: 600,
    borderRadius: '30px',
    backgroundColor: '#000'
  },
  withdrawRight: {
    marginLeft: '15px',
    color: '#0060a1',
    fontStyle: 'italic',
    textDecoration: 'underline'
  },
  referralTitle: {
    color: '#000',
    fontSize: '38px',
    fontWeight: 600,
    textAlign: 'center',
    padding: '70px 0'
  },
  referrals: {
    paddingTop: '20px'
  }
})
