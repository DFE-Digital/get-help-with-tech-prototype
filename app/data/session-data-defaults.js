const fakeMnoRequests = require('./fake-mno-requests')
const fakeSchoolUsers = require('./fake-school-users')

module.exports = {
  features: {
    'give-bt-numbers': false,
    'sign-up': false,
    'bulk-upload': false,
    'only-bt': false
  },
  mno: {
    requests: fakeMnoRequests
  },
  'responsible-body': {
    'school-users': fakeSchoolUsers
  }
}
