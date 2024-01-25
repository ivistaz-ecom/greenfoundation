import React from 'react'

import Header from '../../shared/Header'
import Footer from '../../shared/Footer'

import '../../Style'
import SiltAppHeader from './SiltAppHeader'
import SiltAppBanner from './SiltAppBanner'
import SiltAppContent from './SiltAppContent'
import { NextSeo } from 'next-seo'
import { usePathname } from 'next/navigation'
import AllPageSchema from '@/components/SchemaComponents/Schema'

const index = () => {
  const pathname = usePathname();
  return (
    <>

      <NextSeo
        title="Silt application - Green Foundation"
        description=""
        canonical={`https://greenfoundation.in${pathname}`}
        openGraph={{
          url: `https://greenfoundation.in${pathname}`,
          title: 'Silt application - Green Foundation',
          description: '',
          images: [
            {
              url: '',
              width: 800,
              height: 600,
              alt: 'Silt application - Green Foundation            ',
              type: 'image/jpeg',
            },
            {
              url: '',
              width: 900,
              height: 800,
              alt: 'Silt application - Green Foundation            ',
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
      />

      <Header />
      <SiltAppHeader />
      <SiltAppBanner />
      <SiltAppContent />

      <Footer />
    </>
  )
}

export default index