const fakeMnoRequests = require('./fake-mno-requests')
const fakeSchoolRequests = require('./fake-school-requests')
const fakeSchoolUsers = require('./fake-school-users')
const fakeRBUsers = require('./fake-rb-users')
const schoolsInResponsibleBody = require('./responsible-body-schools')
const schoolDetails = require('./school-details')

module.exports = {
  signedInHomePath: '/responsible-body',
  laPlaceholderSchoolAllocation: 6,
  laPlaceholderSchoolOrdered: 0,
  trust: false,
  userEmail: 'k.redfern@bury.gov.uk',
  rb: 'Bury Council',
  rbAddress: [
    'Knowsley Place',
    'Knowsley St',
    'Bury',
    'BL9 0SW'
  ],
  devicesOrdered: 9,
  routersAllocated: 10,
  routersOrdered: 0,
  'who-orders-laptops': 'central',
  features: {
    socialCare: true,
    iss: false,
    push: true,
    mno: true,
    donated: true,
    'further-education': true,
    '15-self': false,
    'delay-delivery': false,
    'order-in-service': false
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
