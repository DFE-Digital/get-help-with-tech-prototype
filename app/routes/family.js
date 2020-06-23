const {
  schoolWizardPaths,
  schoolMnoWizardPaths
} = require('../utils/wizard-paths')

/**
 * Family walkthrough routes
 */
module.exports = router => {
  router.all('/family', function (req, res) {
    res.render('family/index', { paths: schoolWizardPaths(req) })
  })

  router.all('/family/mno/:view', function (req, res) {
    res.render(`family/mno/${req.params.view}`, { paths: schoolMnoWizardPaths(req) })
  })

  router.all('/family/:view', function (req, res) {
    res.render(`family/${req.params.view}`, { paths: schoolWizardPaths(req) })
  })
}
