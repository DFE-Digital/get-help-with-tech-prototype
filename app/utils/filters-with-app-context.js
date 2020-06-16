// Add Nunjucks filters with access to app, req and res
module.exports = (nunjucksAppEnv, app) => {
  app.use((req, res, next) => {
    // Add name, value, id, idPrefix and checked attributes to GOVUK form inputs
    // Generate the attributes based on the application ID and the section they’re in
    nunjucksAppEnv.addFilter('decorateFormAttributes', (obj, name) => {
      var storedValue = req.session.data[name]

      if (obj.items !== undefined) {
        obj.items = obj.items.map(item => {
          var checked = ''
          var selected = ''
          if (typeof item.value === 'undefined') {
            item.value = item.text
          }

          // If data is an array, check it exists in the array
          if (Array.isArray(storedValue)) {
            if (storedValue.indexOf(item.value) !== -1) {
              checked = 'checked'
              selected = 'selected'
            }
          } else {
            // The data is just a simple value, check it matches
            if (storedValue === item.value) {
              checked = 'checked'
              selected = 'selected'
            }
          }

          item.checked = checked
          item.selected = selected
          return item
        })

        obj.idPrefix = name
      } else {
        obj.value = storedValue
      }

      obj.id = name
      obj.name = name
      return obj
    })

    next()
  })
}
