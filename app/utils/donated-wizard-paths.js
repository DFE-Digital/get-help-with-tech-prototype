const {
  nextAndBackPaths,
  nextForkPath
} = require('../utils/wizard-helpers')

function donatedWizardPaths (req) {
  var paths = [
    '/school/donated',
    '/school/donated/about-devices',
    '/school/donated/deliveries',
    '/school/donated/opt-in',
    '/school/donated/what-devices-do-you-want',
    '/school/donated/how-many',
    '/school/donated/address',
    '/school/donated/check-answers',
    '/school/donated/opted-in',
    '/school',
    '/responsible-body',
    '/responsible-body/donated',
    '/responsible-body/donated/about-devices',
    '/responsible-body/donated/deliveries',
    '/responsible-body/donated/opt-in',
    '/responsible-body/donated/all-or-some',
    '/responsible-body/donated/which-schools',
    '/responsible-body/donated/what-devices-do-you-want',
    '/responsible-body/donated/how-many',
    // '/responsible-body/donated/what-devices-do-schools-want',
    '/responsible-body/donated/address',
    '/responsible-body/donated/check-answers',
    '/responsible-body/donated/opted-in',
    '/responsible-body'
  ]

  return nextAndBackPaths(paths, req)
}

function donatedWizardForks (req) {
  var forks = {
    '/school/donated': {
      'donated-interested': {
        values: [
          'no'
        ],
        path: '/school/donated/no'
      }
    },
    '/school/donated/opt-in': {
      'donated-opt-in': {
        values: [
          'no'
        ],
        path: '/school/donated/no'
      }
    },
    '/responsible-body/donated': {
      'donated-interested': {
        values: [
          'no'
        ],
        path: '/responsible-body/donated/no'
      }
    },
    '/responsible-body/donated/opt-in': {
      'donated-opt-in': {
        values: [
          'no'
        ],
        path: '/responsible-body/donated/no'
      }
    },
    '/responsible-body/donated/all-or-some': {
      'donated-opt-in-all-or-some': {
        values: [
          'all'
        ],
        path: '/responsible-body/donated/what-devices-do-you-want'
      }
    }
  }

  return nextForkPath(forks, req)
}

module.exports = {
  donatedWizardPaths,
  donatedWizardForks
}
