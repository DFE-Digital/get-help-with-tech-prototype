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
    '/family/ready-device',
    '/family/connect-bt',
    '/family/connect-bt-elsewhere',
    '/family/send-login',
    '/family/login-sent',
    '/family/login-to-bt',
    '/family/confirm-access',
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
    },
    '/family/connect-bt-elsewhere': {
      'connect-bt-elsewhere': {
        values: [
          'No, there was no BT wifi network available',
          'Yes, but this location isn’t suitable for working',
          'No, they can’t move their device (eg desktop computer)',
          'No, they could see a BT wifi network but couldn’t connect',
          'No, there was no BT wifi network available'
        ],
        path: '/family/mno/no-bt'
      }
    },
    '/family/login-to-bt': {
      'login-to-bt': {
        values: [
          'No'
        ],
        path: '/family/mno/no-bt'
      }
    },
    '/family/confirm-access': {
      'confirm-access': {
        values: [
          'No'
        ],
        path: '/family/mno/no-bt'
      }
    },
    '/family/connect-bt': {
      'connect-bt': {
        values: [
          'Yes, they have connected to the network'
        ],
        path: '/family/send-login'
      }
    }
  }

  return nextForkPath(forks, req)
}

function familyMnoWizardPaths (req) {
  var paths = [
    '/family/mno/no-bt',
    '/family/mno/network',
    '/family/mno/payg',
    '/family/mno/network-offer',
    '/family/mno/number',
    '/family/mno/account-holder-name',
    '/family/mno/privacy',
    '/family/mno/success',
    '/family'
  ]

  return nextAndBackPaths(paths, req)
}

module.exports = {
  familyWizardPaths,
  familyWizardForks,
  familyMnoWizardPaths
}
