import React from 'react'

import Header from '@/components/shared/Header/Navbar'
import Footer from '@/components/shared/Footer/Footer'

import '../../Style'
import FinancialHeader from './FinancialHeader'
import FinancialContent from './FinancialContent'
import { NextSeo } from 'next-seo'
import AllPageSchema from '@/components/SchemaComponents/Schema'
import { usePathname } from 'next/navigation'

const index = () => {
  const pathname = usePathname();
  return (
    <>
      <NextSeo
        title="Financials - Green Foundation"
        description=""
        canonical={`https://greenfoundation.in${pathname}`}
        openGraph={{
          url: `https://greenfoundation.in${pathname}`,
          title: 'Financials - Green Foundation',
          description: '',
          images: [
            {
              url: '',
              width: 800,
              height: 600,
              alt: 'Financials',
              type: 'image/jpeg',
            },
            {
              url: '',
              width: 900,
              height: 800,
              alt: 'Financials',
              type: 'image/jpeg',
            },
            { url: '' },
            { url: '' },
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
      <FinancialHeader />
      <FinancialContent />
      <Footer />
    </>
  )
}

export default index