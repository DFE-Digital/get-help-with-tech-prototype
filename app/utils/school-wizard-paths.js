const {
  nextAndBackPaths,
  nextForkPath
} = require('../utils/wizard-helpers')

function schoolWizardPaths (req) {
  const isOrderUser = req.session.data['school-details'].order_user
  const isFirstUser = req.session.data['school-details'].first_user

  var paths = [
    '/school/welcome',
    '/school/privacy',
    '/school/allocation',
    '/school/order-your-own',
    ...isOrderUser ? ['/school/you-ordering'] : [],
    ...isOrderUser ? ['/school/techsource-account'] : [],
    ...isFirstUser ? ['/school/other-ordering'] : [],
    '/school/devices-you-can-order',
    '/school/chromebooks',
    '/school/what-next',
    '/school'
  ]

  return nextAndBackPaths(paths, req)
}

function schoolWizardForks (req) {
  var forks = {
    '/school/you-ordering': {
      'you-ordering': {
        values: [
          'No'
        ],
        path: '/school/other-ordering'
      }
    }
  }
  return nextForkPath(forks, req)
}

module.exports = {
  schoolWizardPaths,
  schoolWizardForks
}
