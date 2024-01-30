import React from 'react'

import Header from '../../shared/Header'
import Footer from '../../shared/Footer'

import '../../Style'
import SeedBanksHeader from './SeedBanksHeader'
import SeedBanksBanner from './SeedBanksBanner'
import SeedBanksContent from './SeedBanksContent'
import { NextSeo } from 'next-seo'
import AllPageSchema from '@/components/SchemaComponents/Schema'
import { usePathname } from 'next/navigation'

const index = () => {

  const pathname = usePathname();

  return (
    <>
      <NextSeo
        title="Seed banks - Green Foundation"
        description="Community seed bank therefore is a system composed of all of the above. It is among the major strategies for maintaining genetic diversity in crop/plant species."
        canonical={`https://greenfoundation.in${pathname}`}
        openGraph={{
          url: `https://greenfoundation.in${pathname}`,
          title: 'Seed banks - Green Foundation',
          description: '',
          images: [
            {
              url: '/our-work/seed-banks/seed_banks_left_img.png',
              width: 800,
              height: 600,
              alt: 'Seed banks',
              type: 'image/jpeg',
            },
            {
              url: '/our-work/seed-banks/seed_banks_left_img.png',
              width: 900,
              height: 800,
              alt: 'Seed banks',
              type: 'image/jpeg',
            },
            { url: '/our-work/seed-banks/seed_banks_left_img.png' },
            { url: '/our-work/seed-banks/seed_banks_left_img.png' },
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
      <SeedBanksHeader />
      <SeedBanksBanner />
      <SeedBanksContent />
      <Footer />
    </>
  )
}

export default index