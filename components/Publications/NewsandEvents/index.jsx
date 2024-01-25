import React from 'react'

import Header from '../../shared/Header'
import Footer from '../../shared/Footer'
// import NewsEventsLoopTemplate from '@/components/LoopTemplate/NewsEventsLoopTemplate'
import { NextSeo } from 'next-seo'
import NewsAndEvnetsPost from './NewsAndEvnetsPost'

const index = () => {
  return (
    <>
      <NextSeo
        title="News and Events - Green Foundation"
        description=""
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: 'https://www.url.ie/a',
          title: 'News and Events - Green Foundation',
          description: '',
          images: [
            {
              url: '',
              width: 800,
              height: 600,
              alt: 'News and Events',
              type: 'image/jpeg',
            },
            {
              url: '',
              width: 900,
              height: 800,
              alt: 'News and Events',
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
      <NewsAndEvnetsPost />
      {/* <NewsEventsLoopTemplate /> */}
      <Footer />
    </>
  )
}

export default index