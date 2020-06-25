function originalQuery (req) {
  var originalQueryString = req.originalUrl.split('?')[1]
  return originalQueryString ? `?${originalQueryString}` : ''
}

function nextAndBackPaths (paths, req) {
  const currentPath = req.path
  const query = originalQuery(req)
  const data = req.session.data
  const index = paths.indexOf(currentPath)
  const next = paths[index + 1] || ''
  let back = paths[index - 1] || ''

  if (currentPath === data['forked-to']) {
    back = data['forked-from']
  }

  return {
    next: next + query,
    back: back + query,
    current: currentPath + query
  }
}

function nextForkPath (forks, req) {
  const currentPath = req.path
  const data = req.session.data
  const fork = forks[currentPath]

  if (fork) {
    for (const [key, condition] of Object.entries(fork)) {
      if (data[key] === condition.answer) {
        data['forked-from'] = currentPath
        data['forked-to'] = condition.path

        return condition.path
      }
    }
  }

  return false
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

  return nextAndBackPaths(paths, req)
}

function schoolWizardForks (req) {
  var forks = {
    '/family/eligible': {
      eligibility: {
        answer: 'No',
        path: '/family/mno/no-bt'
      }
    }
  }

  return nextForkPath(forks, req)
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

  return nextAndBackPaths(paths, req)
}

module.exports = {
  schoolWizardPaths,
  schoolWizardForks,
  schoolMnoWizardPaths
}
