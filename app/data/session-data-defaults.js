const fakeMnoRequests = require('./fake-mno-requests')
const fakeSchoolUsers = require('./fake-school-users')
const fakeRBUsers = require('./fake-rb-users')
const schoolsInResponsibleBody = require('./responsible-body-schools')
const schoolDetails = require('./school-details')

module.exports = {
  rb: 'DARTMOOR MULTI ACADEMY TRUST',
  trust: true,
  'devicesOrdered': 50,
  'routersAllocated': 0,
  'routersOrdered': 0,
  'who-orders-laptops': 'central',
  'responsible-body': {
    145341: {
      chromebooks: 'Yes',
      domain: 'blacktorrington.devon.sch.uk',
      recovery: 'email@email.com'
    },
    145330: {
      chromebooks: 'Yes',
      domain: 'stjamesokehampton.co.uk',
      recovery: 'email@email.com'
    },
    145346: {
      chromebooks: 'Yes',
      domain: 'stjamesokehampton.co.uk',
      recovery: 'email@email.com'
    },
    145331: {
      chromebooks: 'Yes',
      domain: 'stjamesokehampton.co.uk',
      recovery: 'email@email.com'
    },
    145342: {
      chromebooks: 'Yes',
      domain: 'bridgerule.devon.sch.uk',
      recovery: 'email@email.com'
    },
    145338: {
      chromebooks: 'Yes',
      domain: 'chagford-primary.devon.sch.uk',
      recovery: 'email@email.com'
    },
    146248: {
      chromebooks: 'Yes',
      domain: 'stjamesokehampton.co.uk',
      recovery: 'email@email.com'
    },
    145339: {
      chromebooks: 'Yes',
      domain: 'stjamesokehampton.co.uk',
      recovery: 'email@email.com'
    },
    145343: {
      chromebooks: 'Yes',
      domain: 'hcc.devon.sch.uk',
      recovery: 'email@email.com'
    },
    145332: {
      chromebooks: 'Yes',
      domain: 'stjamesokehampton.co.uk',
      recovery: 'email@email.com'
    },
    145340: {
      chromebooks: 'Yes',
      domain: 'stjamesokehampton.co.uk',
      recovery: 'email@email.com'
    },
    145333: {
      chromebooks: 'Yes',
      domain: 'ntcps.co.uk',
      recovery: 'email@email.com'
    },
    145337: {
      chromebooks: 'Yes',
      domain: 'stjamesokehampton.co.uk',
      recovery: 'email@email.com'
    },
    145334: {
      chromebooks: 'Yes',
      domain: 'okehampton.school',
      recovery: 'email@email.com'
    },
    145335: {
      chromebooks: 'Yes',
      domain: 'stjamesokehampton.co.uk',
      recovery: 'email@email.com'
    },
    145336: {
      chromebooks: 'Yes',
      domain: 'tavistockcollege.org',
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
