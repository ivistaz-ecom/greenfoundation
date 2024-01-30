'use client'
import React from 'react'
import HeroBanner from './HeroBanner'
import OurWork from './OurWork'
import NewsandEvents from './NewsandEvents'
import OurReach from './OurReach'
import Partners from './Partners'
import FormHome from './Form'
import Header from '../shared/Header/Navbar'
import Footer from '../shared/Footer/Footer'
import WebsiteSchema from '../shared/WebsiteSchema'
import { NextSeo } from 'next-seo'


import '../Style'
import AllPageSchema from '../SchemaComponents/Schema'
import { usePathname } from 'next/navigation'

const index = () => {
  const pathname = usePathname();
  return (
    <>
      <NextSeo
        title="Agro-biodiversity conservation platform fostering sustainable agriculture"
        description="Green Foundation works towards the conservation of indigenous seed varieties and helps promote sustainable agriculture through agro bio diversity conservation"
        canonical="https://greenfoundation.in/"
        openGraph={{
          url: 'https://greenfoundation.in/',
          title: 'Agro-biodiversity conservation platform fostering sustainable agriculture',
          description: 'Green Foundation works towards the conservation of indigenous seed varieties and helps promote sustainable agriculture through agro bio diversity conservation',
          images: [
            {
              url: '/our-work/agrobio/agrobiodiversity_v.png',
              width: 800,
              height: 600,
              alt: 'Awards and Recognitions',
              type: 'image/jpeg',
            },
            {
              url: '/our-work/agrobio/agrobiodiversity_v.png',
              width: 900,
              height: 800,
              alt: 'Awards and Recognitions',
              type: 'image/jpeg',
            },
            { url: '/our-work/agrobio/agrobiodiversity_v.png' },
            { url: '/our-work/agrobio/agrobiodiversity_v.png' },
          ],
          siteName: 'Green Foundation',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <link rel="canonical" href="https://greenfoundation.in/" />

      <AllPageSchema
        target={`${pathname}`}
        type="website"
      />


      <WebsiteSchema />
      <Header />
      <HeroBanner />
      <OurWork />
      <NewsandEvents />
      <OurReach />
      <Partners />
      <FormHome />
      <Footer />
    </>
  )
}

export default index