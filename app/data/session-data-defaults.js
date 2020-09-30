const fakeMnoRequests = require('./fake-mno-requests')
const fakeSchoolUsers = require('./fake-school-users')
const fakeRBUsers = require('./fake-rb-users')
const schoolsInResponsibleBody = require('./responsible-body-schools')
const schoolDetails = require('./school-details')

module.exports = {
  rb: 'COMMUNITY ACADEMIES TRUST',
  trust: true,
  'who-orders-laptops': 'central',
  'responsible-body': {
    138934: {
      chromebooks: 'No, they will not need Chromebooks'
    }
  },
  features: {
    'sign-up': false,
    'bulk-upload': true,
    'in-connectivity-pilots': true,
    'pilots-stopped': true,
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
  covid: false
}
