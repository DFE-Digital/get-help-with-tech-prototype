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

  // Point back to where we forked from
  if (currentPath === data['forked-to']) {
    back = data['forked-from']
  }

  // Remove the saved fork if we return to it
  if (currentPath === data['forked-from'] && req.method === 'GET') {
    delete data['forked-from']
    delete data['forked-to']
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
      const storedValues = Array.isArray(data[key]) ? data[key] : [data[key]]

      if (condition.values) {
        const values = Array.isArray(condition.values) ? condition.values : [condition.values]

        if (values.some(v => storedValues.indexOf(v) >= 0)) {
          data['forked-from'] = currentPath
          data['forked-to'] = condition.path

          return condition.path
        }
      }

      if (condition.excludedValues) {
        const excludedValues = Array.isArray(condition.excludedValues) ? condition.excludedValues : [condition.excludedValues]

        if (!excludedValues.some(v => storedValues.indexOf(v) >= 0)) {
          data['forked-from'] = currentPath
          data['forked-to'] = condition.path

          return condition.path
        }
      }
    }
  }

  return false
}

module.exports = {
  nextAndBackPaths,
  nextForkPath
}
