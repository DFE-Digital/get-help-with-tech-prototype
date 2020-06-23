const getKeypath = require('keypather/get')
const setKeypath = require('keypather/set')

const generateRandomString = (length) => {
  length = length || 3
  return (Number(new Date())).toString(36).slice(-length).toUpperCase()
}

const getDataValue = (data, sections) => {
  sections = Array.isArray(sections) ? sections : [sections]
  return getKeypath(data, sections.map(s => `["${s}"]`).join(''))
}

const setDataValue = (data, sections, value) => {
  sections = Array.isArray(sections) ? sections : [sections]
  return setKeypath(data, sections.map(s => `["${s}"]`).join(''), value)
}

module.exports = {
  generateRandomString,
  getDataValue,
  setDataValue
}
