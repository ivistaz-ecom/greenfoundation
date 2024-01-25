import React from 'react'

import Header from '@/components/shared/Header/Navbar'
import Footer from '@/components/shared/Footer/Footer'

import '../../Style'
import OurReachHeader from './OurReachHeader'
import OurReach from '@/components/Home/OurReach'
import { NextSeo } from 'next-seo'
import AllPageSchema from '@/components/SchemaComponents/Schema'

const index = () => {
  return (
    <>

      <NextSeo
        title="Impacting farmers across India"
        description="At Green Foundation, we have been impacting the lives of farmers acorss the states of Karnataka, Tamil Nadu, Madhya Pradesh and Chhattisgarh and will continue to reach to more
      "
        canonical="https://greenfoundation.in/our-reach"
        openGraph={{
          url: 'https://greenfoundation.in/our-reach',
          title: 'Impacting farmers across India',
          description: 'At Green Foundation, we have been impacting the lives of farmers acorss the states of Karnataka, Tamil Nadu, Madhya Pradesh and Chhattisgarh and will continue to reach to more',
          images: [
            {
              url: '',
              width: 800,
              height: 600,
              alt: 'What Drives Us',
              type: 'image/jpeg',
            },
            {
              url: '',
              width: 900,
              height: 800,
              alt: 'What Drives Us',
              type: 'image/jpeg',
            },
            { url: '' },
            { url: '' },
          ],
          siteName: 'GreenFoundation',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />

      <link rel="canonical" href="https://greenfoundation.in/our-reach" />

      <AllPageSchema
        target="our-reach"
      />

      <Header />
      <OurReachHeader />
      <OurReach />
      <Footer />
    </>
  )
}

export default index