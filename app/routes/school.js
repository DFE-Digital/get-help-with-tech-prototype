const {
  schoolWizardPaths,
  schoolWizardForks
} = require('../utils/school-wizard-paths')

/**
 * Family walkthrough routes
 */
module.exports = router => {
  router.get('/school/users', function (req, res) {
    res.render('school/users/index')
  })

  router.get('/school/:view', function (req, res) {
    res.render(`school/${req.params.view}`, { paths: schoolWizardPaths(req) })
  })

  router.post('/school/:view', function (req, res) {
    const fork = schoolWizardForks(req)
    const paths = schoolWizardPaths(req)
    fork ? res.redirect(fork) : res.redirect(paths.next)
  })
}
