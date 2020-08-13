const fakeMnoRequests = require('./fake-mno-requests')
const fakeSchoolUsers = require('./fake-school-users')
const schoolsInLocalAuthority = require('./local-authority-schools')

module.exports = {
  rb: 'Hampshire',
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
  'responsible-body': {
    'school-users': fakeSchoolUsers
  },
  schools: schoolsInLocalAuthority
}
