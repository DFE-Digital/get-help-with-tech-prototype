const {
  shopWizardPaths,
  shopWizardForks
} = require('../utils/shop-wizard-paths')

/**
 * Family walkthrough routes
 */
module.exports = router => {
  router.get('/shop', function (req, res) {
    res.render('shop/index', { paths: shopWizardPaths(req) })
  })

  router.get('/shop/:view', function (req, res) {
    res.render(`shop/${req.params.view}`, { paths: shopWizardPaths(req) })
  })

  router.post(['/shop', '/shop/:view'], function (req, res) {
    const fork = shopWizardForks(req)
    const paths = shopWizardPaths(req)
    fork ? res.redirect(fork) : res.redirect(paths.next)
  })
}
