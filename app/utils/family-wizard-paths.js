const {
  nextAndBackPaths,
  nextForkPath
} = require('../utils/wizard-helpers')

function familyWizardPaths (req) {
  var paths = [
    '/family',
    '/family/who',
    '/family/ready',
    '/family/eligible',
    '/family/network',
    '/family/payg',
    '/family/network-offer',
    '/family/number',
    '/family/account-holder-name',
    '/family/privacy',
    '/family/success',
    '/family'
  ]

  return nextAndBackPaths(paths, req)
}

function familyWizardForks (req) {
  var forks = {
    '/family/eligible': {
      eligible: {
        values: [
          'Yes'
        ],
        path: '/family/not-eligible'
      }
    }
  }

  return nextForkPath(forks, req)
}

module.exports = {
  familyWizardPaths,
  familyWizardForks
}
