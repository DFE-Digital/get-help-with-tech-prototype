const helpers = require('../utils/helpers')

/**
 * Responsible body routes
 */
module.exports = router => {
  router.all('/responsible-body/mobile/new', function (req, res) {
    const id = helpers.generateRandomString()
    res.redirect(`/responsible-body/mobile/${id}/new`)
  })

  router.all('/responsible-body/mobile/:mobileId/:view', function (req, res) {
    res.render(`responsible-body/mobile/${req.params.view}`, { mobileId: req.params.mobileId })
  })
}
