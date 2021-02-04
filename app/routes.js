const express = require('express')
const router = express.Router()

require('./routes/mobile')(router)
require('./routes/family')(router)
require('./routes/school')(router)
require('./routes/guide')(router)
require('./routes/devices')(router)
require('./routes/shop')(router)

router.get('/responsible-body/donated-which-schools', (req, res, next) => {
  res.locals.schools = req.session.data.schools.map(school => {
    return {
      text: school.name,
      value: school.URN
    }
  })

  next()
})

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
