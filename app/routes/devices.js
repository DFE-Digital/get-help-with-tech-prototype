const getKeypath = require('keypather/get')
const devicesPath = '/responsible-body/devices'

/**
 * Guide routes
 */
module.exports = router => {
  router.all([devicesPath, `${devicesPath}*`], function (req, res, next) {
    const data = req.session.data
    res.locals.hasDevolvedAll = data['who-orders-laptops'] === 'schools'
    res.locals.hasCentralAll = data['who-orders-laptops'] === 'central'
    res.locals.whoOrders = res.locals.hasDevolvedAll ? 'School' : 'Local authority'
    next()
  })

  router.post(`${devicesPath}/devolve`, function (req, res) {
    res.redirect(`${devicesPath}/next`)
  })

  router.all(`${devicesPath}/schools/:urn`, function (req, res) {
    const urn = parseInt(req.params.urn, 10)
    const data = req.session.data
    const school = data.schools.find(school => school.URN === urn)
    const schoolData = getKeypath(data, `['responsible-body'][${urn}]`) || {}

    const hasSetContactDetails = !!schoolData['person-type']
    const isHeadteacher = schoolData['person-type'] === 'headteacher'
    const emailAddress = isHeadteacher ? school.headteacher_email : schoolData['new-invite-email-address']
    const name = isHeadteacher ? school.headteacher : schoolData['new-invite-name']
    const number = isHeadteacher ? false : schoolData['new-invite-number']

    let whoOrders = res.locals.hasCentralAll ? 'The local authority orders devices' : 'The school orders devices'
    if (schoolData.who) {
      whoOrders = schoolData.who === 'central' ? 'The local authority orders devices' : 'The school orders devices'
    }

    res.render('responsible-body/devices/school/index', {
      school,
      hasSetContactDetails,
      isHeadteacher,
      emailAddress,
      whoOrders,
      name,
      number,
      success: req.method === 'POST'
    })
  })
}
