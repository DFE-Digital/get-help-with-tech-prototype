const fakeMnoRequests = require('./fake-mno-requests')
const fakeSchoolUsers = require('./fake-school-users')
const fakeRBUsers = require('./fake-rb-users')
const schoolsInLocalAuthority = require('./local-authority-schools')

module.exports = {
  rb: 'Lancashire',
  school: 'Pool Hayes Primary',
  features: {
    'sign-up': false,
    'bulk-upload': true,
    'only-bt': false,
    'in-connectivity-pilots': false,
    mno: false
  },
  mno: {
    requests: fakeMnoRequests
  },
  'school-users': fakeSchoolUsers,
  'rb-users': fakeRBUsers,
  schools: schoolsInLocalAuthority
}
