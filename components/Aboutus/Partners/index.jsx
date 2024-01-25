import React from 'react'
import PartnersHeader from './PartnersHeader'

import Header from '../../shared/Header'
import Footer from '../../shared/Footer'

import '../../Style'
import Banner from './Banner'
import OurPartners from './OurPartners'
import { NextSeo } from 'next-seo'
import AllPageSchema from '@/components/SchemaComponents/Schema'
import { usePathname } from 'next/navigation'

const index = () => {
  const pathname = usePathname();
  return (
    <>

      <NextSeo
        title="Green Foundation I Partners"
        description="Green Foundation takes pride in working with partners who share the same vision of conserving agrobiodiversity and building health, wealth and resilience of small farmers"
        canonical={`https://greenfoundation.in${pathname}`}
        openGraph={{
          url: `https://greenfoundation.in${pathname}`,
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
          siteName: 'GreenFoundation',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />

      <link rel="canonical" href={`https://greenfoundation.in${pathname}`} />


      <AllPageSchema
        target={`${pathname}`}
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