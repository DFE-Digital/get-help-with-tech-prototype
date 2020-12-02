const fakeMnoRequests = require('./fake-mno-requests')
const fakeSchoolUsers = require('./fake-school-users')
const fakeRBUsers = require('./fake-rb-users')
const schoolsInResponsibleBody = require('./responsible-body-schools')
const schoolDetails = require('./school-details')

module.exports = {
  rb: 'LEO ACADEMY TRUST',
  trust: true,
  devicesOrdered: 9,
  routersAllocated: 0,
  routersOrdered: 0,
  'who-orders-laptops': 'central',
  'responsible-body': {
    143628: {
      chromebooks: 'yes',
      domain: 'leoacademytrust.co.uk',
      recovery: 'email@email.com'
    },
    145481: {
      chromebooks: 'yes',
      domain: 'leoacademytrust.co.uk',
      recovery: 'email@email.com'
    },
    142398: {
      chromebooks: 'yes',
      domain: 'leoacademytrust.co.uk',
      recovery: 'email@email.com'
    },
    143375: {
      chromebooks: 'yes',
      domain: 'leoacademytrust.co.uk',
      recovery: 'email@email.com'
    },
    140260: {
      chromebooks: 'yes',
      domain: 'leoacademytrust.co.uk',
      recovery: 'email@email.com'
    },
    145484: {
      chromebooks: 'yes',
      domain: 'leoacademytrust.co.uk',
      recovery: 'email@email.com'
    }
  },
  features: {
    push: true,
    '15-self': false,
    'delay-delivery': true,
    'school-mno': true,
    'sign-up': false,
    'bulk-upload': true,
    'only-bt': false,
    'in-connectivity-pilots': true,
    mno: false
  },
  mno: {
    requests: fakeMnoRequests
  },
  'school-users': fakeSchoolUsers,
  'rb-users': fakeRBUsers,
  schools: schoolsInResponsibleBody,
  'school-details': schoolDetails,
  'max-school-order-users': 3,
  covid: true
}
