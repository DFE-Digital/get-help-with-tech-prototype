const {
  familyWizardPaths,
  familyWizardForks,
  familyMnoWizardPaths
} = require('../utils/family-wizard-paths')

/**
 * Family walkthrough routes
 */
module.exports = router => {
  router.all('/family', function (req, res) {
    res.render('family/index', { paths: familyWizardPaths(req) })
  })

  router.get('/family/mno/:view', function (req, res) {
    res.render(`family/mno/${req.params.view}`, { paths: familyMnoWizardPaths(req) })
  })

  router.post('/family/mno/:view', function (req, res) {
    const paths = familyMnoWizardPaths(req)
    res.redirect(paths.next)
  })

  router.get('/family/:view', function (req, res) {
    res.render(`family/${req.params.view}`, { paths: familyWizardPaths(req) })
  })

  router.post('/family/:view', function (req, res) {
    const fork = familyWizardForks(req)
    const paths = familyWizardPaths(req)
    fork ? res.redirect(fork) : res.redirect(paths.next)
  })
}
