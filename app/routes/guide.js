function guideNavigation (req) {
  var contents = [
    {
      text: 'Overview',
      href: '/guide'
    },
    {
      text: 'Asking for account holder name and mobile number',
      href: '/guide/asking-for-account-holder'
    },
    {
      text: 'Asking for mobile network, contracts and Pay as you go (PAYG)',
      href: '/guide/asking-for-network'
    },
    {
      text: 'Telling someone about their offer',
      href: '/guide/telling-about-offer'
    },
    {
      text: 'Privacy and collecting permission to share someone’s details',
      href: '/guide/privacy'
    }
  ]

  const currentItemIndex = contents.findIndex(item => item.href === req.originalUrl)
  const next = contents[currentItemIndex + 1] || false
  const prev = contents[currentItemIndex - 1] || false

  delete contents[currentItemIndex].href

  return { contents, next, prev }
}

/**
 * Guide routes
 */
module.exports = router => {
  router.use(['/guide', '/guide/*'], function (req, res, next) {
    res.locals.navigation = guideNavigation(req)
    next()
  })
}
