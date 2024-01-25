'use client'
import React from 'react'
import { NextSeo } from 'next-seo';
import '../../Style'

import Header from '../../shared/Header/Navbar'
import Footer from '../../shared/Footer'

import JourneySoFar from './JourneySoFar'
import JourneyHeader from './JourneyHeader'
import JourneySoFarTimeline from './JourneySoFarTimeline';
import Script from 'next/script';
import Schema from '@/components/SchemaComponents/Schema';
import { usePathname } from 'next/navigation';
// import { JsonLd } from 'next-seo/lib/jsonld/jsonld';

const index = () => {
  const pathname = usePathname()
  return (
    <>
      <NextSeo
        title="29 years of empowering small scale farmer communities"
        description="From empowering small scale farmers to initiating a growing biodiversity conservation programme, Green Foundation has taken a holistic approach to empower communities since 1994."
        canonical={`https://greenfoundation.in${pathname}`}
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

      <Schema
        target={`${pathname}`}
      />
      <Header />
      <JourneyHeader />
      <JourneySoFar />
      {/* <JourneySoFarTimeline /> */}
      <Footer />
    </>
  )
}

export default index
