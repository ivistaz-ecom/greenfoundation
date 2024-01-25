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





const index = () => {
  return (
    <>

      <NextSeo
        title="Why We Do This - Green Foundation"
        description=""
        canonical="https://greenfoundation.in/why-we-do-this"
        openGraph={{
          url: 'https://greenfoundation.in/why-we-do-this',
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


      <link rel="canonical" href="https://greenfoundation.in/why-we-do-this" />

      <Schema
        target="/why-we-do-this"
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