const {
  nextAndBackPaths,
  nextForkPath
} = require('../utils/wizard-helpers')

function shopWizardPaths (req) {
  var paths = [
    '/school/devices/order-in-service',
    '/school/shop',
    ...req.session.data.routersAllocated > 0 ? ['/school/shop/how-many-routers'] : [],
    '/school/shop/how-many',
    '/school/shop/chromebooks',
    '/school/shop/address',
    '/school/shop/delivery-contact',
    '/school/shop/safeguarding',
    '/school/shop/confirm',
    '/school/shop/confirmation',
    '/school',
    '/responsible-body/devices/order-in-service',
    '/responsible-body/shop',
    ...req.session.data.routersAllocated > 0 ? ['/responsible-body/shop/how-many-routers'] : [],
    '/responsible-body/shop/how-many',
    // '/responsible-body/shop/multi-chromebooks',
    '/responsible-body/shop/chromebooks',
    '/responsible-body/shop/pick-a-delivery-address',
    '/responsible-body/shop/address',
    '/responsible-body/shop/delivery-contact',
    '/responsible-body/shop/safeguarding',
    '/responsible-body/shop/confirm',
    '/responsible-body/shop/confirmation',
    '/responsible-body'
  ]

  return nextAndBackPaths(paths, req)
}

function shopWizardForks (req) {
  var forks = {
    '/school/shop': {
      'shop-devices': {
        excludedValues: [
          '4G wireless router'
        ],
        path: '/school/shop/how-many'
      }
    }
  }
  return nextForkPath(forks, req)
}

module.exports = {
  shopWizardPaths,
  shopWizardForks
}
