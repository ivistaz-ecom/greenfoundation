import React from 'react'

import Header from '@/components/shared/Header/Navbar'
import Footer from '@/components/shared/Footer/Footer'

import '../../Style'
import Head from 'next/head'
import KannadaPublicationHeader from './KannadaPublicationHeader'
import KannadaPublicationsContent from './KannadaPublicationsContent'
import { NextSeo } from 'next-seo'


const index = () => {
  return (
    <>
    <NextSeo
        title="Kannada Publication - Green Foundation"
        description=""
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: 'https://www.url.ie/a',
          title: 'Kannada Publication - Green Foundation',
          description: '',
          images: [
            {
              url: '',
              width: 800,
              height: 600,
              alt: 'Kannada Publication',
              type: 'image/jpeg',
            },
            {
              url: '',
              width: 900,
              height: 800,
              alt: 'Kannada Publication',
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
        <KannadaPublicationHeader />
        <KannadaPublicationsContent />
        <Footer />
    </>
  )
}

export default index