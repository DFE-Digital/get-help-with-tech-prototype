const faker = require('faker')
const dateFormat = require('dateformat')

faker.locale = 'en_GB'

function generateFakeRequests (count) {
  const requests = []

  for (var i = 0; i < count; i++) {
    requests.push({
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      number: faker.phone.phoneNumber('07#########'),
      date: dateFormat(faker.date.recent(), 'd mmmm h:MMtt'),
      tag: faker.random.arrayElement([
        { text: 'New', classes: 'govuk-tag--blue' },
        { text: 'In progress', classes: 'govuk-tag--yellow' },
        { text: 'Not valid', classes: 'govuk-tag--red' },
        { text: 'Complete', classes: 'govuk-tag--green' }
      ])
    })
  }

  return requests
}

module.exports = generateFakeRequests(40)
