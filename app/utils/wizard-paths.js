function originalQuery (req) {
  var originalQueryString = req.originalUrl.split('?')[1]
  return originalQueryString ? `?${originalQueryString}` : ''
}

function nextAndBackPaths (paths, currentPath, query) {
  var index = paths.indexOf(currentPath)
  var next = paths[index + 1] || ''
  var back = paths[index - 1] || ''

  return {
    next: /confirm|edit/.test(next) ? next : next + query,
    back: /confirm|edit/.test(back) ? back : back + query,
    current: /confirm|edit/.test(back) ? currentPath : currentPath + query
  }
}

function schoolWizardPaths (req) {
  var paths = [
    '/schools',
    '/schools/who',
    '/schools/ready',
    '/schools/eligible',
    '/schools/ready-device',
    '/schools/connect-bt',
    '/schools/connect-bt-elsewhere',
    '/schools/send-login',
    '/schools/login-sent',
    '/schools/login-to-bt',
    '/schools/confirm-access',
    '/schools/success',
    '/schools'
  ]

  return nextAndBackPaths(paths, req.path, originalQuery(req))
}

function schoolMnoWizardPaths (req) {
  var paths = [
    '/schools/mno/no-bt',
    '/schools/mno/network',
    '/schools/mno/payg',
    '/schools/mno/network-offer',
    '/schools/mno/number',
    '/schools/mno/account-holder-name',
    '/schools/mno/privacy',
    '/schools/mno/success',
    '/schools'
  ]

  return nextAndBackPaths(paths, req.path, originalQuery(req))
}

module.exports = {
  schoolWizardPaths,
  schoolMnoWizardPaths
}
