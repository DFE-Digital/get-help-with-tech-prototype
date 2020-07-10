const fakeMnoRequests = require('./fake-mno-requests')
const fakeSchoolUsers = require('./fake-school-users')

module.exports = {
  features: {
    'give-bt-numbers': false,
    'sign-up': false,
    'bulk-upload': true,
    'only-bt': true
  },
  mno: {
    requests: fakeMnoRequests
  },
  'responsible-body': {
    'school-users': fakeSchoolUsers
  }
}
