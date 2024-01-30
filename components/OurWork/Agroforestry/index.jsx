import React from 'react'

import Header from '../../shared/Header'
import Footer from '../../shared/Footer'

import AgroforestryHeader from './AgroforestryHeader'
import AgroforestryBanner from './AgroforestryBanner'
import AgroforestryContent from './AgroforestryContent'

import '../../Style'
import { NextSeo } from 'next-seo'
import { usePathname } from 'next/navigation'
import AllPageSchema from '@/components/SchemaComponents/Schema'

const index = () => {

  const pathname = usePathname();

  return (
    <>
      <NextSeo
        title="Agroforestry - Green Foundation"
        description="Empowering communities to conserve biological diversity practice sustainable agriculture through community seed banks GREEN s pioneering efforts inspire nationwide impact"
        canonical={`https://greenfoundation.in${pathname}`}
        openGraph={{
          url: `https://greenfoundation.in${pathname}`,
          title: 'Agroforestry - Green Foundation',
          description: 'Empowering communities to conserve biological diversity practice sustainable agriculture through community seed banks GREEN s pioneering efforts inspire nationwide impact',
          images: [
            {
              url: '',
              width: 800,
              height: 600,
              alt: 'Agroforestry',
              type: 'image/jpeg',
            },
            {
              url: '',
              width: 900,
              height: 800,
              alt: 'Agroforestry',
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

      <link rel="canonical" href={`https://greenfoundation.in${pathname}`} />

      <AllPageSchema
        target={`${pathname}`}
        type="website"
      />

      <Header />
      <AgroforestryHeader />
      <AgroforestryBanner />
      <AgroforestryContent />
      <Footer />
    </>
  )
}

export default index