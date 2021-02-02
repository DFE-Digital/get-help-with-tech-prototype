const faker = require('faker')
const dateFormat = require('dateformat')

faker.locale = 'en_GB'

function getRandomStatus () {
  return faker.random.arrayElement([
    { text: 'Requested', classes: 'govuk-tag--blue' },
    { text: 'In progress', classes: 'govuk-tag--yellow' },
    {
      text: faker.random.arrayElement([
        // 'Invalid number',
        'Unknown number',
        'Unknown name',
        'Not eligible',
        // 'Not on network',
        'Other problem'
      ]),
      classes: 'govuk-tag--red'
    },
    { text: 'Completed', classes: 'govuk-tag--green' }
  ])
}

function unavailableStatus () {
  return { text: 'Unavailable', classes: 'govuk-tag--grey' }
}

function generateFakeRequests (count) {
  const requests = {}

  for (var i = 0; i < count; i++) {
    const lastRequest = i === count - 1

    requests[i] = {
      'mobile-contract-type': faker.random.arrayElement(['Pay Monthly', 'Pay-as-you-go']),
      privacy: ['Yes, the privacy statement has been shared'],
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      'mobile-number': faker.phone.phoneNumber('07#########'),
      date: dateFormat(faker.date.recent(), 'd mmmm h:MMtt'),
      tag: lastRequest ? unavailableStatus() : getRandomStatus(),
      'mobile-network': lastRequest ? 'Comcast' : faker.random.arrayElement([
        'Lycamobile', 'Lycamobile',
        'Three', 'Three',
        'O2', 'O2', 'O2',
        'GiffGaff',
        'Vodafone', 'Vodafone',
        'EE',
        'Sky mobile',
        'Virgin mobile',
        'BT mobile'
      ])
    }
  }

  return requests
}

module.exports = generateFakeRequests(40)
