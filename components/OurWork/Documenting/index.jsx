import React from 'react'

import Header from '../../shared/Header'
import Footer from '../../shared/Footer/'

import '../../Style'

import DocHeader from './DocHeader'
import DocBanner from './DocBanner'
import DocContent from './DocContent'
import { NextSeo } from 'next-seo'
const index = () => {
  return (
    <>

<NextSeo
      title="Seed Treatment Techniques"
      description="From empowering small scale farmers to initiating a growing biodiversity conservation programme, Green Foundation has taken a holistic approach to empower communities since 1994."
      canonical="https://www.canonical.ie/"
      openGraph={{
        url: 'https://www.url.ie/a',
        title: 'Seed Treatment Techniques',
        description: 'From empowering small scale farmers to initiating a growing biodiversity conservation programme, Green Foundation has taken a holistic approach to empower communities since 1994.',
        images: [
          {
            url: '/our-work/documenting/dic_img_1.png',
            width: 800,
            height: 600,
            alt: 'Documenting Indigenous Knowledge',
            type: 'image/jpeg',
          },
          {
            url: '/our-work/documenting/dic_img_1.png',
            width: 900,
            height: 800,
            alt: 'Documenting Indigenous Knowledge',
            type: 'image/jpeg',
          },
          { url: '/our-work/documenting/dic_img_1.png' },
          { url: '/our-work/documenting/dic_img_1.png' },
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
    <DocHeader />
    <DocBanner />
    <DocContent />
    <Footer />
    </>
  )
}

export default index