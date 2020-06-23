const getKeypath = require('keypather/get')

const generateRandomString = (length) => {
  length = length || 3
  return (Number(new Date())).toString(36).slice(-length).toUpperCase()
}

const getDataValue = (data, sections) => {
  sections = Array.isArray(sections) ? sections : [sections]
  return getKeypath(data, sections.map(s => `["${s}"]`).join(''))
}

module.exports = {
  generateRandomString,
  getDataValue
}
