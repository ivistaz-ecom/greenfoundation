import React from 'react'

import Header from '../../shared/Header'
import Footer from '../../shared/Footer'
import '../../Style'
import SeedHeader from './SeedHeader'
import SeedBanner from './SeedBanner'
import SeedContent from './SeedContent'
import { NextSeo } from 'next-seo'
import AllPageSchema from '@/components/SchemaComponents/Schema'
import { usePathname } from 'next/navigation'

const index = () => {
  const pathname = usePathname();
  return (
    <>

      <NextSeo
        title="Seed Multiplication"
        description="Seed multiplication is important in that it helps enrich the biodiversity of a local area by making available many indigenous seed varieties Learn more"
        canonical={`https://greenfoundation.in${pathname}`}
        openGraph={{
          url: `https://greenfoundation.in${pathname}`,
          title: 'Seed Multiplication',
          description: 'Seed multiplication is important in that it helps enrich the biodiversity of a local area by making available many indigenous seed varieties Learn more',
          images: [
            {
              url: '/our-work/seedmultiplication/seed_multiplication.png',
              width: 800,
              height: 600,
              alt: 'Seed Multiplication',
              type: 'image/jpeg',
            },
            {
              url: '/our-work/seedmultiplication/seed_multiplication.png',
              width: 900,
              height: 800,
              alt: 'Seed Multiplication',
              type: 'image/jpeg',
            },
            { url: '/our-work/seedmultiplication/seed_multiplication.png' },
            { url: '/our-work/seedmultiplication/seed_multiplication.png' },
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
      <SeedHeader />
      <SeedBanner />
      <SeedContent />
      <Footer />
    </>
  )
}

export default index