import React from 'react'
import PartnersHeader from './PartnersHeader'

import Header from '../../shared/Header'
import Footer from '../../shared/Footer'

import '../../Style'
import Banner from './Banner'
import OurPartners from './OurPartners'
import { NextSeo } from 'next-seo'

const index = () => {
  return (
    <>

<NextSeo
      title="Green Foundation I Partners"
      description="Green Foundation takes pride in working with partners who share the same vision of conserving agrobiodiversity and building health, wealth and resilience of small farmers"
      canonical="https://www.canonical.ie/"
      openGraph={{
        url: 'https://www.url.ie/a',
        title: 'Green Foundation I Partners',
        description: 'Green Foundation takes pride in working with partners who share the same vision of conserving agrobiodiversity and building health, wealth and resilience of small farmers',
        images: [
          {
            url: '/aboutus/partners/vrutti.svg',
            width: 800,
            height: 600,
            alt: 'Journey So Far',
            type: 'image/jpeg',
          },
          {
            url: '/aboutus/partners/vrutti.svg',
            width: 900,
            height: 800,
            alt: 'Journey So Far',
            type: 'image/jpeg',
          },
          { url: '/aboutus/partners/vrutti.svg' },
          { url: '/aboutus/partners/vrutti.svg' },
        ],
        siteName: 'SiteName',
      }}
      twitter={{
        handle: '@handle',
        site: '@site',
        cardType: 'summary_large_image',
      }}
    />

    <Header />
    <PartnersHeader />
    <Banner />
    <OurPartners />
    <Footer />
    </>
  )
}

export default index