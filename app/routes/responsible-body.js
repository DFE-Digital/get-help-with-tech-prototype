const helpers = require('../utils/helpers')

/**
 * Responsible body routes
 */
module.exports = router => {
  router.all('/responsible-body/mobile/new', function (req, res) {
    const id = helpers.generateRandomString()
    res.redirect(`/responsible-body/mobile/${id}/new`)
  })

  router.post('/responsible-body/mobile/type', function (req, res) {
    if (req.body['responsible-body'].type === 'Using a spreadsheet') {
      res.redirect('/responsible-body/mobile/bulk')
    } else {
      res.redirect('/responsible-body/mobile/new')
    }
  })

  router.all('/responsible-body/mobile/bulk/:view', function (req, res) {
    res.render(`responsible-body/mobile/bulk/${req.params.view}`)
  })

  router.all('/responsible-body/mobile/:mobileId/new', function (req, res) {
    res.render('responsible-body/mobile/new', { mobileId: req.params.mobileId })
  })

  router.all('/responsible-body/mobile/:mobileId/check-answers', function (req, res) {
    res.render('responsible-body/mobile/check-answers', { mobileId: req.params.mobileId })
  })
}
