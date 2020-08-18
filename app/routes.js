const express = require('express')
const router = express.Router()

require('./routes/responsible-body')(router)
require('./routes/family')(router)
require('./routes/school')(router)
require('./routes/guide')(router)
require('./routes/devices')(router)

router.post('/account', (req, res) => {
  const hasAccount = req.session.data['has-account']

  if (hasAccount === 'yes') {
    res.redirect('/account/check-email')
  } else {
    res.redirect('/account/create-account')
  }
})

router.get('/sign-out', (req, res) => {
  delete req.session.data['sign-in-email-address-rb']
  delete req.session.data['sign-in-email-address-mno']

  res.redirect('/')
})

module.exports = router
