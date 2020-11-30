const fakeMnoRequests = require('./fake-mno-requests')
const fakeSchoolUsers = require('./fake-school-users')
const fakeRBUsers = require('./fake-rb-users')
const schoolsInResponsibleBody = require('./responsible-body-schools')
const schoolDetails = require('./school-details')

module.exports = {
  rb: 'LEARN@ MAT',
  trust: true,
  'devicesOrdered': 48,
  'routersAllocated': 0,
  'routersOrdered': 0,
  'who-orders-laptops': 'central',
  'responsible-body': {
    144655: {
      chromebooks: 'No',
      domain: 'knowledge.learnmat.uk',
      recovery: 'email@email.com'
    },
    144284: {
      chromebooks: 'No',
      domain: 'LearnMAT.uk',
      recovery: 'email@email.com'
    },
    144286: {
      chromebooks: 'No',
      domain: 'notton.learnmat.uk',
      recovery: 'email@email.com'
    },
    147889: {
      chromebooks: 'No',
      domain: 'LearnMAT.uk',
      recovery: 'email@email.com'
    },
    144285: {
      chromebooks: 'No',
      domain: 'stmatthias.learnmat.uk',
      recovery: 'email@email.com'
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
