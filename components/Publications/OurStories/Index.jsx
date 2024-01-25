import React from 'react'

import Header from '../../shared/Header'
import Footer from '../../shared/Footer'

import '../../Style'
import OurStoriesLoopTemplate from '@/components/LoopTemplate/OurStoriesLoopTemplate'
import { NextSeo } from 'next-seo'

const Index = () => {
  return (
    <>
    <NextSeo
        title="Our Stories - Green Foundation"
        description=""
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: 'https://www.url.ie/a',
          title: 'Our Stories - Green Foundation',
          description: '',
          images: [
            {
              url: '',
              width: 800,
              height: 600,
              alt: 'Our Stories',
              type: 'image/jpeg',
            },
            {
              url: '',
              width: 900,
              height: 800,
              alt: 'Our Stories',
              type: 'image/jpeg',
            },
            { url: '' },
            { url: '' },
          ],
          siteName: 'SiteName',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
    <Header />
    <OurStoriesLoopTemplate />
    <Footer />
    </>
  )
}

export default Index