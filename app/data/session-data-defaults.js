const fakeMnoRequests = require('./fake-mno-requests')
const fakeSchoolRequests = require('./fake-school-requests')
const fakeSchoolUsers = require('./fake-school-users')
const fakeRBUsers = require('./fake-rb-users')
const schoolsInResponsibleBody = require('./responsible-body-schools')
const schoolDetails = require('./school-details')

module.exports = {
  signedInHomePath: '/responsible-body',
  laPlaceholderSchoolAllocation: 100,
  laPlaceholderSchoolOrdered: 0,
  trust: false,
  userEmail: 'name@example.com',
  rb: 'Sandwell',
  rbAddress: [
    'Sandwell Council House', 'Freeth St', 'Oldbury', 'B69 3DE'
  ],
  setting: {
    learner: 'pupil'
  },
  devicesAllocation: 150,
  devicesOrdered: 0,
  routersAllocated: 10,
  routersOrdered: 0,
  'who-orders-laptops': 'central',
  features: {
    socialCare: false,
    iss: false,
    push: true,
    mno: true,
    donated: false,
    'further-education': true,
    '15-self': false,
    'delay-delivery': false,
    'order-in-service': true,
    'autumn-service': true
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
  covid: true,
  device_groups: [
    {
      group_name: 'Laptops',
      devices: [
        {
          type: 'laptop',
          name: 'Microsoft Windows laptop',
          generic: true,
          numberOrdered: 0,
          overview: {
            'Operating system': 'Windows 10 pro education',
            'Screen size': '14 inch',
            Memory: '4 GB',
            'Hard disk size': '32 GB'
          },
          specification: {
            Processor: 'Intel or AMD Integrated Graphics',
            Connectivity: 'Wi-Fi to 802.11ac',
            Audio: 'Stereo speakers',
            Ports: 'USB',
            Input: 'Standard UK keyboard',
            'Video port': 'HDMI',
            Multimedia: 'Webcam',
            'Audio ports': 'Headphone and microphone socket',
            Bluetooth: 'Yes',
            Encryption: 'Yes',
            Security: 'TPM 2.0',
            Weight: 'Maximum 1.8kg',
            'Battery life': '7 hours',
            PSU: 'Fitted with UK 3-pin plug as standard'
          },
          brands: [
            'Asus',
            'Dell',
            'HP',
            'Lenovo'
          ]
        },
        {
          type: 'Chromebook',
          name: 'Google Chromebook',
          generic: true,
          numberOrdered: 0,
          overview: {
            'Operating system': 'Chrome OS',
            'Screen size': '11 inch',
            Memory: '4 GB',
            'Hard disk size': '32 GB'
          },
          specification: {
            Processor: 'Intel or AMD Integrated Graphics',
            Memory: 'Minimum 4GB',
            Storage: 'Minimum 16GB',
            Connectivity: 'Wi-Fi to 802.11ac',
            Audio: 'Stereo speakers',
            Ports: 'USB',
            Input: 'Standard UK keyboard',
            'Video port': 'Yes, through USB-C',
            Multimedia: 'Webcam',
            'Audio ports': 'Headphone and microphone socket',
            'Operating system': 'Chrome OS',
            Bluetooth: 'Yes',
            Encryption: 'Yes',
            Security: 'Google Security Chip H1',
            Weight: 'Maximum 1.29kg',
            'Battery life': '10 hours',
            PSU: 'Fitted with UK 3-pin plug as standard'
          },
          brands: [
            'Asus',
            'Dell',
            'HP',
            'Lenovo'
          ]
        }
      ]
    },
    {
      group_name: 'Tablets',
      devices: [
        {
          type: 'tablet',
          name: 'Apple iPad',
          generic: false,
          numberOrdered: 0,
          overview: {
            'Operating system': 'iPad OS',
            'Screen size': '10.2 inch',
            Memory: '3 GB',
            'Hard disk size': '32 GB'
          },
          specification: {
            Processor: 'Apple A10 Fusion – 64-bit',
            Memory: '3GB',
            Storage: '32GB',
            Connectivity: '802.11a/b/g/n/ac',
            Audio: 'Stereo speakers',
            Ports: 'Lightning and Smart Connector',
            Multimedia: 'Rear and front cameras',
            'Audio ports': 'Headphone socket',
            'Operating system': 'iPad OS',
            Bluetooth: 'Yes',
            Weight: '483g',
            'Battery life': '10 hours',
            PSU: 'Charging via power adapter or USB to computer system'
          }
        },
        {
          type: 'tablet',
          name: 'Microsoft windows tablet',
          generic: true,
          numberOrdered: 0,
          overview: {
            'Operating system': 'Windows 10 pro education',
            'Screen size': '11 inch',
            Memory: '4 GB',
            'Hard disk size': '32 GB'
          },
          specification: {
            Processor: 'Intel',
            Memory: 'Minimum 2GB',
            Storage: 'Minimum 32GB',
            Connectivity: 'Wi-Fi to 802.11ac',
            Audio: 'Stereo speakers',
            Ports: 'USB 3.0',
            Input: 'N/A',
            'Video port': 'Yes, through USB-C or mini HDMI depending on model',
            Multimedia: 'Webcam',
            'Audio ports': 'Headphone socket',
            'Operating system': 'Windows 10 Pro',
            Bluetooth: 'Yes',
            Encryption: 'Yes',
            Security: 'TPM 2.0',
            Weight: 'Maximum 750g',
            'Battery life': '9 hours',
            PSU: 'Fitted with UK 3-pin plug as standard'
          },
          brands: [
            'Asus',
            'Dell',
            'HP',
            'Lenovo'
          ]
        }
      ]
    }
  ]
}
