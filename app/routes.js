const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.post('/account', (req, res) => {
  const hasAccount = req.session.data['has-account']

  if (hasAccount === 'yes') {
    res.redirect('/account/check-email')
  } else {
    res.redirect('/account/create-account')
  }
})

module.exports = router
