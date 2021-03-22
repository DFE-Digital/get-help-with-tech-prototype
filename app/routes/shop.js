const {
  shopWizardPaths,
  shopWizardForks
} = require('../utils/shop-wizard-paths')

/**
 * Shop walkthrough routes
 */
module.exports = router => {
  router.all('/school/shop*', function (req, res, next) {
    res.locals.isSchool = true
    next()
  })

  router.all('/responsible-body/shop*', function (req, res, next) {
    res.locals.isRb = true
    next()
  })

  router.get(['/school/shop', '/responsible-body/shop'], function (req, res) {
    res.render('shop/index', { paths: shopWizardPaths(req) })
  })

  router.get(['/school/shop/:view', '/responsible-body/shop/:view'], function (req, res) {
    res.render(`shop/${req.params.view}`, { paths: shopWizardPaths(req) })
  })

  router.post(['/school/shop*', '/responsible-body/shop*'], function (req, res) {
    const fork = shopWizardForks(req)
    const paths = shopWizardPaths(req)
    fork ? res.redirect(fork) : res.redirect(paths.next)
  })
}
