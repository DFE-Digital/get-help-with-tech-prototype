const express = require('express')
const router = express.Router()

var {
  schoolWizardPaths,
  schoolMnoWizardPaths
} = require('./utils/wizard-paths')

router.post('/account', (req, res) => {
  const hasAccount = req.session.data['has-account']

  if (hasAccount === 'yes') {
    res.redirect('/account/check-email')
  } else {
    res.redirect('/account/create-account')
  }
})

router.all('/schools', function (req, res) {
  res.render('schools/index', { paths: schoolWizardPaths(req) })
})

router.all('/schools/mno/:view', function (req, res) {
  res.render(`schools/mno/${req.params.view}`, { paths: schoolMnoWizardPaths(req) })
})

router.all('/schools/:view', function (req, res) {
  res.render(`schools/${req.params.view}`, { paths: schoolWizardPaths(req) })
})

module.exports = router
