import React from 'react'

import Header from '../../shared/Header'
import Footer from '../../shared/Footer'

import '../../Style'
import YoutubeVideosStatic from './YoutubeVideosStatic'
import { NextSeo } from 'next-seo'

const index = () => {
  return (
    <>
    <NextSeo
        title="GREEN’s work related videos - Green Foundation"
        description=""
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: 'https://www.url.ie/a',
          title: 'GREEN’s work related videos - Green Foundation',
          description: '',
          images: [
            {
              url: '',
              width: 800,
              height: 600,
              alt: 'videos',
              type: 'image/jpeg',
            },
            {
              url: '',
              width: 900,
              height: 800,
              alt: 'videos',
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
    <YoutubeVideosStatic />
    <Footer />
    </>
  )
}

export default index