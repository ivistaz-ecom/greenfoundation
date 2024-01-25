import React from 'react'

import Header from '../../../components/shared/Header'
import Footer from '../../../components/shared/Footer'

import '../../Style'
import AwardsHeader from './AwardsHeader'
import AwardsBanner from './AwardsBanner'
import Awards from './Awards'
import { NextSeo } from 'next-seo'

const index = () => {
  return (
    <>

<NextSeo
      title="Recognition that reinforces our mission"
      description="Our work in building communities through agro biodiversity conversation has won us many accolades and awards The recognition is proof we are heading in the right direction"
      canonical="https://www.canonical.ie/"
      openGraph={{
        url: 'https://www.url.ie/a',
        title: 'Recognition that reinforces our mission',
        description: 'Our work in building communities through agro biodiversity conversation has won us many accolades and awards The recognition is proof we are heading in the right direction',
        images: [
          {
            url: '/aboutus/awards-recog/awards_2004.png',
            width: 800,
            height: 600,
            alt: 'Awards and Recognitions',
            type: 'image/jpeg',
          },
          {
            url: '/aboutus/awards-recog/awards_2004.png',
            width: 900,
            height: 800,
            alt: 'Awards and Recognitions',
            type: 'image/jpeg',
          },
          { url: '/aboutus/awards-recog/awards_2004.png' },
          { url: '/aboutus/awards-recog/awards_2004.png' },
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
    <AwardsHeader />
    <AwardsBanner />
    <Awards />
    <Footer />
    </>
  )
}

export default index