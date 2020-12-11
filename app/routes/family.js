const {
  familyWizardPaths,
  familyWizardForks
} = require('../utils/family-wizard-paths')

/**
 * Family walkthrough routes
 */
module.exports = router => {
  router.all('/family', function (req, res) {
    res.render('family/index', { paths: familyWizardPaths(req) })
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
