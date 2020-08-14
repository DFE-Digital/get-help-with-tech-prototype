const devicesPath = '/responsible-body/devices'

/**
 * Guide routes
 */
module.exports = router => {
  router.post(`${devicesPath}/devolve`, function (req, res) {
    res.redirect(`${devicesPath}/next`)
  })

  router.post(`${devicesPath}/schools/:urn`, function (req, res) {
    const urn = parseInt(req.params.urn, 10)
    const goToNext = req.body.next
    const schools = req.session.data.schools

    if (goToNext) {
      const currentIndex = schools.findIndex(school => school.URN === urn)
      const nextSchool = schools[currentIndex + 1]
      res.redirect(`${devicesPath}/schools/${nextSchool.URN}`)
    } else {
      res.redirect(`${devicesPath}/schools`)
    }
  })

  router.get(`${devicesPath}/schools/:urn`, function (req, res) {
    const urn = parseInt(req.params.urn, 10)
    const school = req.session.data.schools.find(school => school.URN === urn)
    res.render('responsible-body/devices/school', { school })
  })
}
