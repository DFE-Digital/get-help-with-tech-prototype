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
    '/school/shop/windows',
    '/school/shop/chromebooks',
    '/school/shop/address',
    '/school/shop/delivery-contact',
    '/school/shop/confirm',
    '/school/shop/confirmation',
    '/school'
  ]

  return nextAndBackPaths(paths, req)
}

function shopWizardForks (req) {
  var forks = {
    '/school/shop': {
      'shop-devices': {
        excludedValues: [
          '4G Wireless router'
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
