const faker = require('faker')
const dateFormat = require('dateformat')
faker.locale = 'en_GB'

function generateFakeUsers (count) {
  const requests = []

  for (var i = 0; i < count; i++) {
    const firstName = faker.name.firstName()
    const lastName = faker.name.lastName()

    requests.push({
      type: 'rb',
      name: `${firstName} ${lastName}`,
      email: `${firstName}.${lastName}@example.com`.toLowerCase(),
      'last-sign-in': faker.random.arrayElement(['Never', 'Today', dateFormat(faker.date.recent(), 'd mmmm h:MMtt')]),
      number: faker.random.arrayElement([faker.phone.phoneNumber('01### ######'), faker.phone.phoneNumber('07#########'), faker.phone.phoneNumber('020 #### ####')]),
      'order-devices': faker.random.boolean()
    })
  }

  return requests
}

module.exports = generateFakeUsers(3)
