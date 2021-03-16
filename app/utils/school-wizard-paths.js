const {
  nextAndBackPaths,
  nextForkPath
} = require('../utils/wizard-helpers')

function schoolWizardPaths (req) {
  const isFirstUser = req.session.data['school-details'].first_user
  const isLAFundedUser = req.session.data.features.iss

  var paths = [
    '/school/welcome',
    '/school/privacy',
    '/school/allocation',
    ...isFirstUser ? ['/school/other-ordering'] : [],
    '/school/devices-you-can-order',
    ...isLAFundedUser ? [] : ['/school/chromebooks'],
    ...isLAFundedUser ? [] : ['/school/what-next'],
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
