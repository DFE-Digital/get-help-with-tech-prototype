const fakeMnoRequests = require('./fake-mno-requests')
const fakeSchoolUsers = require('./fake-school-users')
const fakeRBUsers = require('./fake-rb-users')
const schoolsInLocalAuthority = require('./local-authority-schools')
const schoolDetails = require('./school-details')

module.exports = {
  rb: 'Derbyshire',
  features: {
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
  schools: schoolsInLocalAuthority,
  'school-details': schoolDetails
}
