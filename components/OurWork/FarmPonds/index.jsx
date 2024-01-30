import React from 'react'

import Header from '../../shared/Header'
import Footer from '../../shared/Footer/'
import '../../Style'
import FarmHeader from './FarmHeader'
import FarmBanner from './FarmBanner'
import FarmContent from './FarmContent'
import { NextSeo } from 'next-seo'
import AllPageSchema from '@/components/SchemaComponents/Schema'
import { usePathname } from 'next/navigation'


const index = () => {
  const pathname = usePathname();
  return (
    <>
      <NextSeo
        title="Boost Resilience with Farm Ponds: Sustainable Water Source"
        description="Discover how farm ponds empower farmers with reliable pond water for irrigation, reducing dependence on ground water and enhancing resilience to climate change"
        canonical={`https://greenfoundation.in${pathname}`}
        openGraph={{
          url: `https://greenfoundation.in${pathname}`,
          title: 'Boost Resilience with Farm Ponds: Sustainable Water Source',
          description: 'Discover how farm ponds empower farmers with reliable pond water for irrigation, reducing dependence on ground water and enhancing resilience to climate change',
          images: [
            {
              url: '',
              width: 800,
              height: 600,
              alt: 'Farm Ponds',
              type: 'image/jpeg',
            },
            {
              url: '',
              width: 900,
              height: 800,
              alt: 'Farm Ponds',
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
      <FarmHeader />
      <FarmBanner />
      <FarmContent />
      <Footer />
    </>
  )
}

export default index