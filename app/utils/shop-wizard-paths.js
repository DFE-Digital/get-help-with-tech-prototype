const {
  nextAndBackPaths,
  nextForkPath
} = require('../utils/wizard-helpers')

function shopWizardPaths (req) {
  var paths = [
    '/shop/devices/order-lockdown',
    '/shop',
    ...req.session.data.routersAllocated > 0 ? ['/shop/how-many-routers'] : [],
    '/shop/how-many',
    '/shop/windows',
    '/shop/chromebooks',
    '/shop/address',
    '/shop/delivery-contact',
    '/shop/confirm',
    '/shop/confirmation',
    '/school'
  ]

  return nextAndBackPaths(paths, req)
}

function shopWizardForks (req) {
  var forks = {
    '/shop': {
      'shop-devices': {
        excludedValues: [
          '4G Wireless router'
        ],
        path: '/shop/how-many'
      }
    }
  }
  return nextForkPath(forks, req)
}

module.exports = {
  shopWizardPaths,
  shopWizardForks
}
