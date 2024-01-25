import React from 'react'

import Header from '../../shared/Header'
import Footer from '../../shared/Footer'

import EnglishPublicationsLoopTemplate from '@/components/LoopTemplate/EnglishPublicationsLoopTemplate'
import EnglishPublicationHeader from './EnglishPublicationHeader'
import { NextSeo } from 'next-seo'

const index = () => {
  return (
    <>
    <NextSeo
        title="English Publication - Green Foundation"
        description=""
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: 'https://www.url.ie/a',
          title: 'English Publication - Green Foundation',
          description: '',
          images: [
            {
              url: '',
              width: 800,
              height: 600,
              alt: 'English Publication',
              type: 'image/jpeg',
            },
            {
              url: '',
              width: 900,
              height: 800,
              alt: 'English Publication',
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
    <EnglishPublicationHeader />
    <EnglishPublicationsLoopTemplate />
    <Footer />
    </>
  )
}

export default index