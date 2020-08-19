const {
  nextAndBackPaths
} = require('../utils/wizard-helpers')

function rbDeviceWizardPaths (req) {
  var paths = [
    '/responsible-body/devices',
    '/responsible-body/devices/devolve',
    '/responsible-body/devices/next',
    '/responsible-body/devices/schools'
  ]

  return nextAndBackPaths(paths, req)
}

module.exports = {
  rbDeviceWizardPaths
}
