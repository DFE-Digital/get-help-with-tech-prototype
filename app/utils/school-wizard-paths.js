const {
  nextAndBackPaths,
  nextForkPath
} = require('../utils/wizard-helpers')

function schoolWizardPaths (req) {
  var paths = [
    '/school/welcome',
    '/school/privacy',
    '/school/allocation',
    '/school/order-your-own',
    '/school/you-ordering',
    '/school/techsource-account',
    '/school/other-ordering',
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
