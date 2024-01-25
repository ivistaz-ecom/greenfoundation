import React from 'react'

import SituHeader from './SituHeader'

import Header from '../../shared/Header'
import Footer from '../../shared/Footer'
import '../../Style'
import SituBanner from './SituBanner'
import SituContent from './SituContent'
import { NextSeo } from 'next-seo'


const index = () => {
  return (
    <>

<NextSeo
      title="Green Foundation I In-Situ Conservation"
      description="Conservation of indigenous seed varieties has been at the core of the Foundation’s work Learn more about seed multiplication and our approach through in situ and ex situ conservation"
      canonical="https://www.canonical.ie/"
      openGraph={{
        url: 'https://www.url.ie/a',
        title: 'Green Foundation I In-Situ Conservation',
        description: 'Conservation of indigenous seed varieties has been at the core of the Foundation’s work Learn more about seed multiplication and our approach through in situ and ex situ conservation',
        images: [
          {
            url: '/our-work/insit/In-situ-and-Ex-situ-conservation.png',
            width: 800,
            height: 600,
            alt: 'In-situ and Ex-situ Conservation',
            type: 'image/jpeg',
          },
          {
            url: '/our-work/insit/In-situ-and-Ex-situ-conservation.png',
            width: 900,
            height: 800,
            alt: 'In-situ and Ex-situ Conservation',
            type: 'image/jpeg',
          },
          { url: '/our-work/insit/In-situ-and-Ex-situ-conservation.png' },
          { url: '/our-work/insit/In-situ-and-Ex-situ-conservation.png' },
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
    <SituHeader />
    <SituBanner />
    <SituContent />
    <Footer />
    </> 
  )
}

export default index