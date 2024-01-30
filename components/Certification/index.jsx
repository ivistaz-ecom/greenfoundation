import React from 'react'

import Header from '../shared/Header'
import Footer from '../shared/Footer'

import '../Style'
import CertificationBanner from './CertificationBanner'
import CertificationContent from './CertificationContent'
import { NextSeo } from 'next-seo'
import { usePathname } from 'next/navigation'
import AllPageSchema from '../SchemaComponents/Schema'

const index = () => {
  const pathname = usePathname();
  return (
    <>
      <NextSeo
        title="Certification in Organic Farming"
        description="GREEN facilitates organic farming certification using a Participatory Guarantee System PGS which provides credibility for farmers and a higher rate for their produce"
        canonical={`https://greenfoundation.in${pathname}`}
        openGraph={{
          url: `https://greenfoundation.in${pathname}`,
          title: 'Certification in Organic Farming',
          description: 'GREEN facilitates organic farming certification using a Participatory Guarantee System PGS which provides credibility for farmers and a higher rate for their produce',
          images: [
            {
              url: '/certification/participatory_guarantee_system_img.png',
              width: 800,
              height: 600,
              alt: 'Certification',
              type: 'image/jpeg',
            },
            {
              url: '/certification/participatory_guarantee_system_img.png',
              width: 900,
              height: 800,
              alt: 'Certification',
              type: 'image/jpeg',
            },
            { url: '/certification/participatory_guarantee_system_img.png' },
            { url: '/certification/participatory_guarantee_system_img.png' },
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
        type="website"
      />

      <Header />
      <CertificationBanner />
      <CertificationContent />
      <Footer />
    </>
  )
}

export default index