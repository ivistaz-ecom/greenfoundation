import React from 'react'

import Header from '../../shared/Header'
import Footer from '../../shared/Footer/'

import '../../Style'

import SustainHeader from './SustainHeader'
import SustainAgriBanner from './SustainAgriBanner'
import SustainContent from './SustainContent'
import { NextSeo } from 'next-seo'
import { usePathname } from 'next/navigation'
import AllPageSchema from '@/components/SchemaComponents/Schema'



const Index = () => {

  const pathname = usePathname();
  return (
    <>

      <NextSeo
        title="29 years of empowering small scale farmer communities"
        description="From empowering small scale farmers to initiating a growing biodiversity conservation programme, Green Foundation has taken a holistic approach to empower communities since 1994."
        canonical={`https://greenfoundation.in${pathname}`
        }
        openGraph={{
          url: `https://greenfoundation.in${pathname}`,
          title: '29 years of empowering small scale farmer communities',
          description: 'From empowering small scale farmers to initiating a growing biodiversity conservation programme, Green Foundation has taken a holistic approach to empower communities since 1994.',
          images: [
            {
              url: '',
              width: 800,
              height: 600,
              alt: 'Journey So Far',
              type: 'image/jpeg',
            },
            {
              url: '',
              width: 900,
              height: 800,
              alt: 'Journey So Far',
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
      <SustainHeader />
      <SustainAgriBanner />
      <SustainContent />
      <Footer />
    </>
  )
}

export default Index