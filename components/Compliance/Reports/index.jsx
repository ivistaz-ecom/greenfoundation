import React from 'react'

import Header from '@/components/shared/Header/Navbar'
import Footer from '@/components/shared/Footer/Footer'

import '../../Style'
import RepostsHeader from './RepostsHeader'
import ReportsContent from './ReportsContent'
import { NextSeo } from 'next-seo'
import AllPageSchema from '@/components/SchemaComponents/Schema'
import { usePathname } from 'next/navigation'

const index = () => {
  const pathname = usePathname();
  return (
    <>
      <NextSeo
        title="Yearly reports and receipts"
        description="Browse through the financial reports including the foreign contribution receipts associated with the Green Foundation, financial year wise"
        canonical={`https://greenfoundation.in${pathname}`}
        openGraph={{
          url: `https://greenfoundation.in${pathname}`,
          title: 'Yearly reports and receipts',
          description: 'Browse through the financial reports including the foreign contribution receipts associated with the Green Foundation, financial year wise',
          images: [
            {
              url: '',
              width: 800,
              height: 600,
              alt: 'reports',
              type: 'image/jpeg',
            },
            {
              url: '',
              width: 900,
              height: 800,
              alt: 'reports',
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
      <RepostsHeader />
      <ReportsContent />
      <Footer />
    </>
  )
}

export default index