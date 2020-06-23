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

  return nextAndBackPaths(paths, req.path, originalQuery(req))
}

function schoolMnoWizardPaths (req) {
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

  return nextAndBackPaths(paths, req.path, originalQuery(req))
}

module.exports = {
  schoolWizardPaths,
  schoolMnoWizardPaths
}
