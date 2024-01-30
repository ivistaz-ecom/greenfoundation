import React from 'react'

import Header from '../../shared/Header'
import Footer from '../../shared/Footer'

import '../../Style'
import TrenchBundHeader from './TrenchBundHeader'
import TrenchBundBanner from './TrenchBundBanner'
import TrenchBundContent from './TrenchBundContent'
import { NextSeo } from 'next-seo'
import { usePathname } from 'next/navigation'
import AllPageSchema from '@/components/SchemaComponents/Schema'

const index = () => {

  const pathname = usePathname();

  return (
    <>
      <NextSeo
        title="Trench and bund formation - Green Foundations"
        description=""
        canonical={`https://greenfoundation.in${pathname}`}
        openGraph={{
          url: `https://greenfoundation.in${pathname}`,
          title: 'Seed Banks: Preserving Agrobiodiversity',
          description: '',
          images: [
            {
              url: '/our-work/trench-bund/trench_bund_content_img.png',
              width: 800,
              height: 600,
              alt: 'Trench and bund',
              type: 'image/jpeg',
            },
            {
              url: '/our-work/trench-bund/trench_bund_content_img.png',
              width: 900,
              height: 800,
              alt: 'Trench and bund',
              type: 'image/jpeg',
            },
            { url: '/our-work/trench-bund/trench_bund_content_img.png' },
            { url: '/our-work/trench-bund/trench_bund_content_img.png' },
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
      <TrenchBundHeader />
      <TrenchBundBanner />
      <TrenchBundContent />
      <Footer />
    </>
  )
}

export default index