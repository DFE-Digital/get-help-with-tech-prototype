/**
 * Guide routes
 */
module.exports = router => {
  router.all('/responsible-body/devices/schools/:urn', function (req, res) {
    const urn = parseInt(req.params.urn, 10)
    const school = req.session.data.schools.find(school => school.URN === urn)
    res.render('responsible-body/devices/school', { school })
  })
}
