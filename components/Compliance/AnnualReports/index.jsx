import React from 'react'

import Header from '@/components/shared/Header/Navbar'
import Footer from '@/components/shared/Footer/Footer'
import AnnualReportsHeader from './AnnualReportsHeader'
import AnnualReportsContent from './AnnualReportsContent'
import { NextSeo } from 'next-seo'

import '../../Style'
import AllPageSchema from '@/components/SchemaComponents/Schema'
import { usePathname } from 'next/navigation'

const index = () => {
  const pathname = usePathname();
  return (
    <>
      <NextSeo
        title="Annual Reports - Green Foundation"
        description="Empowering communities to conserve biological diversity practice sustainable agriculture through community seed banks GREEN s pioneering efforts inspire nationwide impact"
        canonical={`https://greenfoundation.in${pathname}`}
        openGraph={{
          url: `https://greenfoundation.in${pathname}`,
          title: 'Annual Reports - Green Foundation',
          description: 'Empowering communities to conserve biological diversity practice sustainable agriculture through community seed banks GREEN s pioneering efforts inspire nationwide impact',
          images: [
            {
              url: '/compliance/Biennial_Report_2012-14.png',
              width: 800,
              height: 600,
              alt: 'Annual Reports',
              type: 'image/jpeg',
            },
            {
              url: '/compliance/Biennial_Report_2012-14.png',
              width: 900,
              height: 800,
              alt: 'Annual Reports',
              type: 'image/jpeg',
            },
            { url: '/compliance/Biennial_Report_2012-14.png' },
            { url: '/compliance/Biennial_Report_2012-14.png' },
          ],
          siteName: 'GreenFoudation',
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
      <AnnualReportsHeader />
      <AnnualReportsContent />
      <Footer />
    </>
  )
}

export default index