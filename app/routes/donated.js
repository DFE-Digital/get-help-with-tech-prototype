const {
  donatedWizardPaths,
  donatedWizardForks
} = require('../utils/donated-wizard-paths')

/**
 * Donated walkthrough routes
 */
module.exports = router => {
  router.get(['/responsible-body/donated/what-devices-do-schools-want', '/responsible-body/donated/which-schools'], (req, res, next) => {
    res.locals.schools = req.session.data.schools.map(school => {
      return {
        text: school.name
      }
    })
    next()
  })

  router.all('/school/donated*', function (req, res, next) {
    res.locals.isSchool = true
    next()
  })

  router.all('/responsible-body/donated*', function (req, res, next) {
    res.locals.isRb = true
    next()
  })

  router.get(['/school/donated', '/responsible-body/donated'], function (req, res) {
    res.render('donated/index', { paths: donatedWizardPaths(req) })
  })

  router.post(['/school/donated', '/responsible-body/donated'], function (req, res) {
    const fork = donatedWizardForks(req)
    const paths = donatedWizardPaths(req)
    fork ? res.redirect(fork) : res.redirect(paths.next)
  })

  router.get(['/school/donated/:view', '/responsible-body/donated/:view'], function (req, res) {
    res.render(`donated/${req.params.view}`, { paths: donatedWizardPaths(req) })
  })

  router.post(['/school/donated/check-answers', '/responsible-body/donated/check-answers'], function (req, res, next) {
    req.session.data['donated-opted-in'] = true
    next()
  })

  router.post(['/school/donated/:view', '/responsible-body/donated/:view'], function (req, res) {
    const fork = donatedWizardForks(req)
    const paths = donatedWizardPaths(req)
    fork ? res.redirect(fork) : res.redirect(paths.next)
  })
}
