const fakeMnoRequests = require('./fake-mno-requests')
const fakeSchoolUsers = require('./fake-school-users')
const schoolsInLocalAuthority = require('./local-authority-schools')

module.exports = {
  rb: 'Croydon',
  school: 'Pool Hayes Primary',
  features: {
    'sign-up': false,
    'bulk-upload': true,
    'only-bt': false,
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
