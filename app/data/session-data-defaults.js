const fakeMnoRequests = require('./fake-mno-requests')
const fakeSchoolRequests = require('./fake-school-requests')
const fakeSchoolUsers = require('./fake-school-users')
const fakeRBUsers = require('./fake-rb-users')
const schoolsInResponsibleBody = require('./responsible-body-schools')
const schoolDetails = require('./school-details')

module.exports = {
  signedInHomePath: '/responsible-body',
  rb: 'Greenwhich',
  laFundedPlacesAllocation: 20,
  laFundedPlacesOrdered:0,
  trust: true,
  rbAddress: [
    'The Woolwich Centre',
    'Wellington Street',
    'Woolwich',
    'SE18 6HQ'
  ],
  trust: false,
  devicesOrdered: 9,
  routersAllocated: 0,
  routersOrdered: 0,
  'who-orders-laptops': 'central',
  'responsible-body': {
    140961: {
      chromebooks: 'yes',
      domain: 'domain.co.uk',
      recovery: 'email@email.com'
    },
    142900: {
      chromebooks: 'yes',
      domain: 'domain.co.uk',
      recovery: 'email@email.com'
    }
  },
  features: {
    iss: true,
    push: true,
    mno: true,
    donated: true,
    'further-education': true,
    'sixth-form-increase': false,
    'xmas-soon': false,
    'increased-allocations': false,
    '15-self': false,
    'delay-delivery': false,
    'school-mno': true,
    'sign-up': false,
    'bulk-upload': true,
    'in-connectivity-pilots': true,
    'request-devices-google-form': true
  },
  mno: {
    requests: fakeMnoRequests
  },
  mobile: fakeSchoolRequests,
  'school-users': fakeSchoolUsers,
  'rb-users': fakeRBUsers,
  schools: schoolsInResponsibleBody,
  'school-details': schoolDetails,
  'max-school-order-users': 3,
  covid: true
}
