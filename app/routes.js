const express = require('express')
const router = express.Router()

require('./routes/responsible-body')(router)
require('./routes/family')(router)

router.post('/account', (req, res) => {
  const hasAccount = req.session.data['has-account']

  if (hasAccount === 'yes') {
    res.redirect('/account/check-email')
  } else {
    res.redirect('/account/create-account')
  }
})

module.exports = router
