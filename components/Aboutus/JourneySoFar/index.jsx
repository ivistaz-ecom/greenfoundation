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
// import { JsonLd } from 'next-seo/lib/jsonld/jsonld';

const index = () => {
  return (
    <>
      <Script src='https://www.greenfoundation.in/wp-content/themes/hello-elementor-child/js/index-generated.js' />
      <Script src='https://www.greenfoundation.in/wp-content/themes/hello-elementor-child/js/libraries-generated.js' />
      <NextSeo
        title="29 years of empowering small scale farmer communities"
        description="From empowering small scale farmers to initiating a growing biodiversity conservation programme, Green Foundation has taken a holistic approach to empower communities since 1994."
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: 'https://www.url.ie/a',
          title: '29 years of empowering small scale farmer communities',
          description: 'From empowering small scale farmers to initiating a growing biodiversity conservation programme, Green Foundation has taken a holistic approach to empower communities since 1994.',
          images: [
            {
              url: 'https://greenfoundation.in/wp-content/uploads/2023/02/Group-25828.png',
              width: 800,
              height: 600,
              alt: 'Journey So Far',
              type: 'image/jpeg',
            },
            {
              url: 'https://greenfoundation.in/wp-content/uploads/2023/02/Group-25828.png',
              width: 900,
              height: 800,
              alt: 'Journey So Far',
              type: 'image/jpeg',
            },
            { url: 'https://greenfoundation.in/wp-content/uploads/2023/02/Group-25828.png' },
            { url: 'https://greenfoundation.in/wp-content/uploads/2023/02/Group-25828.png' },
          ],
          siteName: 'SiteName',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />

      <link rel="canonical" href="https://greenfoundation.in/journey-so-far" />

      {/* <JsonLd
        schema={{
          "@context": "https://schema.org/",
          "@type": "WebSite",
          "name": "GreenFoundation",
          "url": "https://greenfoundation.in/",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://greenfoundation.in/journey-so-far{search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }}
      /> */}

      <Header />
      <JourneyHeader />
      <JourneySoFar />
      {/* <JourneySoFarTimeline /> */}
      <Footer />
    </>
  )
}

export default index
