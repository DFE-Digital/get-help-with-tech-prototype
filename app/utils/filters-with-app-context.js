const helpers = require('./helpers')

// Add Nunjucks filters with access to app, req and res
module.exports = (nunjucksAppEnv, app) => {
  app.use((req, res, next) => {
    // Add name, value, id, idPrefix and checked attributes to GOVUK form inputs
    // Generate the attributes based on where they are stored in the data object
    nunjucksAppEnv.addFilter('decorateFormAttributes', (obj, sections) => {
      sections = Array.isArray(sections) ? sections : [sections]
      var storedValue = helpers.getDataValue(req.session.data, sections)

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

        obj.idPrefix = sections.join('-')
      } else {
        obj.value = storedValue
      }

      obj.id = sections.join('-')
      obj.name = sections.map(s => `[${s}]`).join('')
      return obj
    })

    // Retrieve the value of something
    // Designed as a replacement to `data[thing][thing]`
    nunjucksAppEnv.addGlobal('dataValue', (sections) => {
      if (sections && !Array.isArray(sections)) {
        sections = [sections]
      }

      return helpers.getDataValue(req.session.data, sections)
    })

    next()
  })
}
