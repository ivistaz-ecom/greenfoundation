import React from 'react'

import Header from '../shared/Header'
import Footer from '../shared/Footer'
import ResearchCommunicationBanner from './ResearchCommunicationBanner'
import ResearchCommunicationContent from './ResearchCommunicationContent'

import '../Style'
import { NextSeo } from 'next-seo'
import { usePathname } from 'next/navigation'
import AllPageSchema from '../SchemaComponents/Schema'

const index = () => {

  const pathname = usePathname();

  return (
    <>
      <NextSeo
        title="Research And Communication - Green Foundation"
        description="Explore the influence of research on sustainable agriculture and agrobiodiversity preservation via GREEN Foundation's initiatives focusing on value chains, indigenous seed diversity, and bolstering enterprises.        "
        canonical={`https://greenfoundation.in${pathname}`}
        openGraph={{
          url: `https://greenfoundation.in${pathname}`,
          title: 'Research And Communication - Green Foundation',
          description: '',
          images: [
            {
              url: '/research-communication/grandmother_seeding_farm_img.png',
              width: 800,
              height: 600,
              alt: 'Awards and Recognitions',
              type: 'image/jpeg',
            },
            {
              url: '/research-communication/grandmother_seeding_farm_img.png',
              width: 900,
              height: 800,
              alt: 'Awards and Recognitions',
              type: 'image/jpeg',
            },
            { url: '/research-communication/grandmother_seeding_farm_img.png' },
            { url: '/research-communication/grandmother_seeding_farm_img.png' },
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
      <ResearchCommunicationBanner />
      <ResearchCommunicationContent />
      <Footer />
    </>
  )
}

export default index