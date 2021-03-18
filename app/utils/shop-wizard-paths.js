const {
  nextAndBackPaths,
  nextForkPath
} = require('../utils/wizard-helpers')

function shopWizardPaths (req) {
  var paths = [
    '/shop/devices/order-lockdown',
    '/shop',
    '/shop/how-many',
    '/shop/windows',
    '/shop/chromebooks',
    '/shop/address',
    '/shop/confirm',
    '/shop/confirmation',
    '/school'
  ]

  return nextAndBackPaths(paths, req)
}

function shopWizardForks (req) {
  // var forks = {
  //   '/shop/you-ordering': {
  //     'you-ordering': {
  //       values: [
  //         'No'
  //       ],
  //       path: '/shop/other-ordering'
  //     }
  //   }
  // }
  return nextForkPath({}, req)
}

module.exports = {
  shopWizardPaths,
  shopWizardForks
}
