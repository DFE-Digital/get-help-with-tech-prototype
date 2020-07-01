const fakeMnoRequests = require('./fake-mno-requests')
const fakeSchoolUsers = require('./fake-school-users')

module.exports = {
  features: {
    'sign-up': false,
    'bulk-upload': true
  },
  mno: {
    requests: fakeMnoRequests
  },
  'responsible-body': {
    'school-users': fakeSchoolUsers
  }
}
