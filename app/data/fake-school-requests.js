const faker = require('faker')
const dateFormat = require('dateformat')

faker.locale = 'en_GB'

function generateFakeRequests (count) {
  const requests = {}

  for (var i = 0; i < count; i++) {
    requests[i] = {
      'mobile-contract-type': faker.random.arrayElement(['Pay monthly', 'Pay as you go (PAYG)']),
      privacy: ['Yes, the privacy statement has been shared'],
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      'mobile-number': faker.phone.phoneNumber('07#########'),
      date: dateFormat(faker.date.recent(), 'd mmmm h:MMtt'),
      tag: faker.random.arrayElement([
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
      ]),
      'mobile-network': faker.random.arrayElement([
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
