const fakeMnoRequests = require('./fake-mno-requests')
const fakeSchoolRequests = require('./fake-school-requests')
const fakeSchoolUsers = require('./fake-school-users')
const fakeRBUsers = require('./fake-rb-users')
const schoolsInResponsibleBody = require('./responsible-body-schools')
const schoolDetails = require('./school-details')

module.exports = {
  signedInHomePath: '/responsible-body',
  rb: 'Greenwhich',
  rbAddress: [
    'The Woolwich Centre',
    'Wellington Street',
    'Woolwich',
    'SE18 6HQ'
  ],
  trust: false,
  devicesOrdered: 9,
  routersAllocated: 0,
  routersOrdered: 0,
  'who-orders-laptops': 'central',
  'responsible-body': {
    140961: {
      chromebooks: 'yes',
      domain: 'domain.co.uk',
      recovery: 'email@email.com'
    },
    142900: {
      chromebooks: 'yes',
      domain: 'domain.co.uk',
      recovery: 'email@email.com'
    }
  },
  independentSpecialSchools: [
    {
      name: 'Bethany School',
      id: 'bethany-school',
      emailDomain: 'bethany',
      numberOfPupils: 1
    },
    {
      name: 'Blackheath Prep School',
      id: 'blackheath-prep-school',
      emailDomain: 'blackheath-prep',
      numberOfPupils: 1
    },
    {
      name: 'Bellerbys College London',
      id: 'bellerbys-college-london',
      emailDomain: 'bellerbys-college',
      numberOfPupils: 1
    },
    {
      name: 'Blackheath High School',
      id: 'blackheath-high-school',
      emailDomain: 'blackheath-high',
      numberOfPupils: 4
    },
    {
      name: 'The Pointer School',
      id: 'the-pointer-school',
      emailDomain: 'the-pointer-school',
      numberOfPupils: 1
    },
    {
      name: 'Blackheath High Junior School',
      id: 'blackheath-high-junior-school',
      emailDomain: 'blackheath-high-junior',
      numberOfPupils: 2
    },
    {
      name: 'The Greenwich Steiner School',
      id: 'the-greenwich-steiner-school',
      emailDomain: 'the-greenwich-steiner-school',
      numberOfPupils: 1
    },
    {
      name: 'Riverston School',
      id: 'riverston-school',
      emailDomain: 'riverston',
      numberOfPupils: 1
    },
    {
      name: 'Halstow Primary School',
      id: 'halstow-primary-school',
      emailDomain: 'halstow-primary',
      numberOfPupils: 1
    },
    {
      name: 'Heath House Preparatory School',
      id: 'heath-house-preparatory-school',
      emailDomain: 'heath-house-preparatory',
      numberOfPupils: 1
    },
    {
      name: 'Colfe’s School',
      id: 'colfe-s-school',
      emailDomain: 'colfes',
      numberOfPupils: 1
    },
    {
      name: 'Meridian Primary School',
      id: 'meridian-primary-school',
      emailDomain: 'meridian-primary',
      numberOfPupils: 1
    },
    {
      name: 'Babington House School',
      id: 'babington-house-school',
      emailDomain: 'babington-house',
      numberOfPupils: 1
    },
    {
      name: 'Faraday School',
      id: 'faraday-school',
      emailDomain: 'faraday-school',
      numberOfPupils: 1
    },
    {
      name: 'St Ursula’s Convent Secondary School',
      id: 'st-ursula-s-convent-secondary-school',
      emailDomain: 'st-ursulas-convent',
      numberOfPupils: 1
    },
    {
      name: 'Grangewood Independent School',
      id: 'grangewood-independent-school',
      emailDomain: 'grangewood-independent',
      numberOfPupils: 1
    },
    {
      name: 'Eltham College Junior School',
      id: 'eltham-college-junior-school',
      emailDomain: 'eltham-college',
      numberOfPupils: 1
    },
    {
      name: 'First Fruits Saturday School',
      id: 'first-fruits-saturday-school',
      emailDomain: 'first-fruits',
      numberOfPupils: 1
    }
  ],
  features: {
    push: true,
    mno: true,
    donated: true,
    'la-funded-places': true,
    'further-education': true,
    'sixth-form-increase': false,
    'xmas-soon': false,
    'increased-allocations': false,
    '15-self': false,
    'delay-delivery': false,
    'school-mno': true,
    'sign-up': false,
    'bulk-upload': true,
    'in-connectivity-pilots': true,
    'request-devices-google-form': true
  },
  mno: {
    requests: fakeMnoRequests
  },
  mobile: fakeSchoolRequests,
  'school-users': fakeSchoolUsers,
  'rb-users': fakeRBUsers,
  schools: schoolsInResponsibleBody,
  'school-details': schoolDetails,
  'max-school-order-users': 3,
  covid: true
}
