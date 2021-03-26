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

  router.get([
    '/responsible-body/shop/address',
    '/responsible-body/shop/confirm'], (req, res, next) => {
    const data = req.session.data

    if (data['shop-rb-delivery-who']) {
      res.locals.schoolToDeliverTo = data.schools.find(obj => {
        return obj.URN === parseInt(data['shop-rb-delivery-who'], 10)
      })
    }

    next()
  })

  router.get('/responsible-body/shop/pick-a-delivery-address', (req, res, next) => {
    const schools = req.session.data.schools

    if (schools.length <= 10) {
      res.locals.schoolItems = req.session.data.schools.map(school => {
        return {
          text: school.name,
          value: school.URN,
          label: {
            classes: 'govuk-!-font-weight-bold'
          },
          hint: {
            html: school.address
          }
        }
      })
    } else {
      const schoolSelectItems = req.session.data.schools.map(school => {
        return {
          text: school.name,
          value: school.URN
        }
      })
      schoolSelectItems.unshift(' ')
      res.locals.schoolItems = schoolSelectItems
    }

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
