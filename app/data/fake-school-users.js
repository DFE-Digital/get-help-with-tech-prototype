const faker = require('faker')
const dateFormat = require('dateformat')

faker.locale = 'en_GB'

function generateFakeUsers (count) {
  const requests = []

  for (var i = 0; i < count; i++) {
    const firstName = faker.name.firstName()
    const lastName = faker.name.lastName()

    requests.push({
      name: `${firstName} ${lastName}`,
      email: `${firstName}.${lastName}@example.com`.toLowerCase(),
      date: dateFormat(faker.date.recent(), 'd mmmm h:MMtt'),
      number: faker.random.arrayElement([faker.phone.phoneNumber('01### ######'), faker.phone.phoneNumber('07#########'), faker.phone.phoneNumber('020 #### ####')]),
      org: faker.random.arrayElement([
        'STEP Academy',
        'Learners Secondary School',
        'Basildon Catholic School',
        'St Mary’s',
        'St John’s',
        'Pool Hayes Primary',
        'Pool Hayes Academy'
      ])
    })
  }

  return requests
}

module.exports = generateFakeUsers(5)
