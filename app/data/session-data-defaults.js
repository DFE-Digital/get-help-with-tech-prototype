const fakeMnoRequests = require('./fake-mno-requests')
const fakeSchoolUsers = require('./fake-school-users')
const fakeRBUsers = require('./fake-rb-users')
const schoolsInResponsibleBody = require('./responsible-body-schools')
const schoolDetails = require('./school-details')

module.exports = {
  rb: 'ALSAGER MULTI ACADEMY TRUST',
  trust: true,
  'devicesOrdered': 50,
  'routersAllocated': 0,
  'routersOrdered': 0,
  'who-orders-laptops': 'central',
  'responsible-body': {
    138934: {
      chromebooks: 'No, they will not need Chromebooks'
    }
  },
  features: {
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
