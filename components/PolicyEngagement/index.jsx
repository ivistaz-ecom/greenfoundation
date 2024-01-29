import React from 'react'

import Header from '../shared/Header'
import Footer from '../shared/Footer'
import PolicyEngagementBanner from './PolicyEngagementBanner'
import PolicyEngagementContent from './PolicyEngagementContent'

import '../Style'
import { NextSeo } from 'next-seo'
import AllPageSchema from '../SchemaComponents/Schema'
import { usePathname } from 'next/navigation'

const index = () => {
  const pathname = usePathname();
  return (
    <>
      <NextSeo
        title="Our Policy Engagement"
        description="Read about Green Foundation s stance and focus on policies for a variety of topics including Hybrid seeds, Organic seeds, seed production and more"
        canonical={`https://greenfoundation.in${pathname}`}
        openGraph={{
          url: `https://greenfoundation.in${pathname}`,
          title: 'Our Policy Engagement',
          description: 'Read about Green Foundation s stance and focus on policies for a variety of topics including Hybrid seeds, Organic seeds, seed production and more',
          images: [
            {
              url: '',
              width: 800,
              height: 600,
              alt: 'Awards and Recognitions',
              type: 'image/jpeg',
            },
            {
              url: '',
              width: 900,
              height: 800,
              alt: 'Awards and Recognitions',
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
      <PolicyEngagementBanner />
      <PolicyEngagementContent />
      <Footer />
    </>
  )
}

export default index