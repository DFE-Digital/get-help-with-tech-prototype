const {
  schoolWizardPaths,
  schoolWizardForks,
  schoolMnoWizardPaths
} = require('../utils/wizard-paths')

/**
 * Family walkthrough routes
 */
module.exports = router => {
  router.all('/family', function (req, res) {
    res.render('family/index', { paths: schoolWizardPaths(req) })
  })

  router.get('/family/mno/:view', function (req, res) {
    res.render(`family/mno/${req.params.view}`, { paths: schoolMnoWizardPaths(req) })
  })

  router.post('/family/mno/:view', function (req, res) {
    const paths = schoolMnoWizardPaths(req)
    res.redirect(paths.next)
  })

  router.get('/family/:view', function (req, res) {
    res.render(`family/${req.params.view}`, { paths: schoolWizardPaths(req) })
  })

  router.post('/family/:view', function (req, res) {
    const fork = schoolWizardForks(req)
    const paths = schoolWizardPaths(req)
    fork ? res.redirect(fork) : res.redirect(paths.next)
  })
}
