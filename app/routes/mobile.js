const helpers = require('../utils/helpers')

/**
 * Mobile routes, shared between RBs and schools
 */
module.exports = router => {
  router.all([
    '/responsible-body/internet/mobile',
    '/responsible-body/internet/mobile/*',
    '/school/internet/mobile',
    '/school/internet/mobile/*'
  ], function (req, res, next) {
    const isRb = req.originalUrl.includes('responsible-body')
    res.locals.mobilePath = `/${isRb ? 'responsible-body' : 'school'}/internet/mobile`
    res.locals.isRb = isRb
    res.locals.isSchool = !isRb
    next()
  })

  router.all([
    '/responsible-body/internet/mobile/new',
    '/school/internet/mobile/new'
  ], function (req, res) {
    const id = helpers.generateRandomString()
    res.redirect(`${res.locals.mobilePath}/${id}/new`)
  })

  router.post([
    '/responsible-body/internet/mobile/type',
    '/school/internet/mobile/type'
  ], function (req, res) {
    if (req.body['mobile-entry-type'] === 'Using a spreadsheet') {
      res.redirect(`${res.locals.mobilePath}/bulk`)
    } else {
      res.redirect(`${res.locals.mobilePath}/new`)
    }
  })

  router.all([
    '/responsible-body/internet/mobile/bulk/:view',
    '/school/internet/mobile/bulk/:view'
  ], function (req, res) {
    res.render(`mobile/bulk/${req.params.view}`)
  })

  router.all([
    '/responsible-body/internet/mobile/:mobileId/new',
    '/school/internet/mobile/:mobileId/new'
  ], function (req, res) {
    res.render('mobile/new', { mobileId: req.params.mobileId })
  })

  router.all([
    '/responsible-body/internet/mobile/:mobileId/check-answers',
    '/school/internet/mobile/:mobileId/check-answers'
  ], function (req, res) {
    res.render('mobile/check-answers', { mobileId: req.params.mobileId })
  })

  router.all([
    '/responsible-body/internet/mobile/:mobileId/request',
    '/school/internet/mobile/:mobileId/request'
  ], function (req, res) {
    res.render('mobile/request', { mobileId: req.params.mobileId })
  })

  router.all([
    '/responsible-body/internet/mobile',
    '/school/internet/mobile'
  ], function (req, res) {
    res.render('mobile/index')
  })

  router.all([
    '/responsible-body/internet/mobile/bulk',
    '/school/internet/mobile/bulk'
  ], function (req, res) {
    res.render('mobile/bulk/index')
  })

  router.all([
    '/responsible-body/internet/mobile/:view',
    '/school/internet/mobile/:view'
  ], function (req, res) {
    res.render(`mobile/${req.params.view}`)
  })
}
