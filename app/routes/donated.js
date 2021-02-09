const {
  donatedWizardPaths,
  donatedWizardForks
} = require('../utils/donated-wizard-paths')

/**
 * Donated walkthrough routes
 */
module.exports = router => {
  router.get('/school/donated', function (req, res) {
    res.render('school/donated/index', { paths: donatedWizardPaths(req) })
  })

  router.post('/school/donated', function (req, res) {
    const fork = donatedWizardForks(req)
    const paths = donatedWizardPaths(req)
    fork ? res.redirect(fork) : res.redirect(paths.next)
  })

  router.get('/school/donated/:view', function (req, res) {
    res.render(`school/donated/${req.params.view}`, { paths: donatedWizardPaths(req) })
  })

  router.post('/school/donated/check-answers', function (req, res, next) {
    req.session.data['donated-opted-in'] = true
    next()
  })

  router.post(['/school/donated/:view', '/responsible-body/donated/:view'], function (req, res) {
    const fork = donatedWizardForks(req)
    const paths = donatedWizardPaths(req)
    fork ? res.redirect(fork) : res.redirect(paths.next)
  })
}
