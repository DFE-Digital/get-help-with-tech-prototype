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
  var forks = {}

  return nextForkPath(forks, req)
}

module.exports = {
  donatedWizardPaths,
  donatedWizardForks
}
