import React from 'react'
import OurTeamHeader from './OurTeamHeader'

import Header from '../../../components/shared/Header'
import Footer from '../../../components/shared/Footer'

import '../../Style'
import CoreTeam from './CoreTeam'
import Banner from '../OurTeam/Banner'
import { NextSeo } from 'next-seo'


const index = () => {
  return (
    <>

<NextSeo
      title="Core team - Green Foundation
      "
      description=""
      canonical="https://www.canonical.ie/"
      openGraph={{
        url: 'https://www.url.ie/a',
        title: 'Core team - Green Foundation',
        description: '',
        images: [
          {
            url: '',
            width: 800,
            height: 600,
            alt: 'Core Team',
            type: 'image/jpeg',
          },
          {
            url: '',
            width: 900,
            height: 800,
            alt: 'Core Team',
            type: 'image/jpeg',
          },
          { url: '' },
          { url: '' },
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
    <OurTeamHeader />
    <Banner />
    <CoreTeam />
    <Footer />
    </>
  )
}

export default index