import React from 'react'
import OurTeamHeader from './OurTeamHeader'

import Header from '../../../components/shared/Header'
import Footer from '../../../components/shared/Footer'

import '../../Style'
import CoreTeam from './CoreTeam'
import Banner from '../OurTeam/Banner'
import { NextSeo } from 'next-seo'
import AllPageSchema from '@/components/SchemaComponents/Schema'
import { usePathname } from 'next/navigation'


const index = () => {

  const pathname = usePathname();

  return (
    <>
      <NextSeo
        title="Core team - Green Foundation
      "
        description=""
        canonical={`https://greenfoundation.in${pathname}`}
        openGraph={{
          url: `https://greenfoundation.in${pathname}`,
          title: 'Core team - Green Foundation',
          description: '',
          images: [
            {
              url: '',
              width: 800,
              height: 600,
              alt: 'Core Team',
              type: 'image/jpeg',
            },
            {
              url: '',
              width: 900,
              height: 800,
              alt: 'Core Team',
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
      <OurTeamHeader />
      <Banner />
      <CoreTeam />
      <Footer />
    </>
  )
}

export default index