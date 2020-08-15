const devicesPath = '/responsible-body/devices'

/**
 * Guide routes
 */
module.exports = router => {
  router.all(['/responsible-body/devices', '/responsible-body/devices*'], function (req, res, next) {
    const data = req.session.data
    res.locals.hasDevolvedAll = data['who-orders-laptops'] === 'schools'
    res.locals.hasCentralAll = data['who-orders-laptops'] === 'central'
    next()
  })

  router.post(`${devicesPath}/devolve`, function (req, res) {
    res.redirect(`${devicesPath}/next`)
  })

  router.post(`${devicesPath}/schools/:urn`, function (req, res) {
    const urn = parseInt(req.params.urn, 10)
    const school = req.session.data.schools.find(school => school.URN === urn)
    res.render('responsible-body/devices/school', { school, success: true })
  })

  router.get(`${devicesPath}/schools/:urn`, function (req, res) {
    const urn = parseInt(req.params.urn, 10)
    const school = req.session.data.schools.find(school => school.URN === urn)
    res.render('responsible-body/devices/school', { school })
  })
}
