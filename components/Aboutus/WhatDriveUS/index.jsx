import React from 'react'
import WhatDriveHeader from './WhatDriveHeader'

import Header from '../../shared/Header/Navbar'
import Footer from '../../shared/Footer'

import '../../Style'

import WhatDriveUs from './WhatDriveUsBanner'
import Content from './Content'
import TabsFunction from './TabsFunction'
import EconomicReason from './EconomicReason'
import PoliticalReasons from './PoliticalReasons'
import SeekingLegislativeSupport from './SeekingLegislativeSupport'
import RaisingAwareness from './RaisingAwareness'
import WomenEmpowerment from './WomenEmpowerment'
import { NextSeo } from 'next-seo'

import Schema from '@/components/SchemaComponents/Schema';
import { usePathname } from 'next/navigation'





const index = () => {

  const pathname = usePathname();
  return (
    <>

      <NextSeo
        title="Agro Biodiversity Conservation I Our reasons "
        description=""
        canonical={`https://greenfoundation.in${pathname}`}
        openGraph={{
          url: `https://greenfoundation.in${pathname}`,
          title: 'Why We Do This - Green Foundation',
          description: '',
          images: [
            {
              url: 'https://greenfoundation.in/wp-content/uploads/2023/02/Ecological_reasons.png',
              width: 800,
              height: 600,
              alt: 'What Drives Us',
              type: 'image/jpeg',
            },
            {
              url: 'https://greenfoundation.in/wp-content/uploads/2023/02/Ecological_reasons.png',
              width: 900,
              height: 800,
              alt: 'What Drives Us',
              type: 'image/jpeg',
            },
            { url: 'https://greenfoundation.in/wp-content/uploads/2023/02/Ecological_reasons.png' },
            { url: 'https://greenfoundation.in/wp-content/uploads/2023/02/Ecological_reasons.png' },
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

      <Schema
        target={`${pathname}`}
      />


      <Header />
      <WhatDriveHeader />
      <WhatDriveUs />
      <Content />
      <TabsFunction />
      <EconomicReason />
      <PoliticalReasons />
      <SeekingLegislativeSupport />
      <RaisingAwareness />
      <WomenEmpowerment />
      <Footer />
    </>
  )
}

export default index