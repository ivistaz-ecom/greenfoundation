import React from 'react'

import Header from '../../shared/Header'
import Footer from '../../shared/Footer'

import '../../Style'
import SeedYatrasHeader from './SeedYatrasHeader'
import SeedYatrasBanner from './SeedYatrasBanner'
import SeedYatrasContent from './SeedYatrasContent'
import { NextSeo } from 'next-seo'
import { usePathname } from 'next/navigation'
import AllPageSchema from '@/components/SchemaComponents/Schema'

const index = () => {

  const pathname = usePathname();

  return (
    <>

      <NextSeo
        title="Seed yatras and fairs - Green Foundation"
        description=""
        canonical={`https://greenfoundation.in${pathname}`}
        openGraph={{
          url: `https://greenfoundation.in${pathname}`,
          title: 'Seed yatras and fairs - Green Foundation',
          description: '',
          images: [
            {
              url: '/our-work/seed-yatras/seed_yatras_img.png',
              width: 800,
              height: 600,
              alt: 'Awards and Recognitions',
              type: 'image/jpeg',
            },
            {
              url: '/our-work/seed-yatras/seed_yatras_img.png',
              width: 900,
              height: 800,
              alt: 'Awards and Recognitions',
              type: 'image/jpeg',
            },
            { url: '/our-work/seed-yatras/seed_yatras_img.png' },
            { url: '/our-work/seed-yatras/seed_yatras_img.png' },
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
      <SeedYatrasHeader />
      <SeedYatrasBanner />
      <SeedYatrasContent />
      <Footer />
    </>
  )
}

export default index