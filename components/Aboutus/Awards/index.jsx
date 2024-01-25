import React from 'react'

import Header from '../../../components/shared/Header'
import Footer from '../../../components/shared/Footer'

import '../../Style'
import AwardsHeader from './AwardsHeader'
import AwardsBanner from './AwardsBanner'
import Awards from './Awards'
import { NextSeo } from 'next-seo'
import AllPageSchema from '@/components/SchemaComponents/Schema'

const index = () => {
  return (
    <>

      <NextSeo
        title="Recognition that reinforces our mission"
        description="Our work in building communities through agro biodiversity conversation has won us many accolades and awards The recognition is proof we are heading in the right direction"
        canonical="https://greenfoundation.in/awards-and-recognitions"
        openGraph={{
          url: 'https://greenfoundation.in/awards-and-recognitions',
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
          siteName: 'GreenFoundation',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />

      <link rel="canonical" href="https://greenfoundation.in/awards-and-recognitions" />

      <AllPageSchema
        target="awards-and-recognitions"
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