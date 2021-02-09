const {
  nextAndBackPaths,
  nextForkPath
} = require('../utils/wizard-helpers')

function donatedWizardPaths (req) {
  var paths = [
    '/school/donated',
    '/school/donated/about-devices',
    '/school/donated/what-devices-do-you-need',
    '/school/donated/deliveries',
    '/school/donated/opt-in',
    '/school/donated/address',
    '/school/donated/check-answers',
    '/school/donated/opted-in',
    '/school'
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
    }
  }

  return nextForkPath(forks, req)
}

module.exports = {
  donatedWizardPaths,
  donatedWizardForks
}
