'use client'
import React from 'react'

import Header from '../../shared/Header'
import Footer from '../../shared/Footer/'

import '../../Style'

import AgroHeader from './AgroHeader'
import AgroBanner from './AgroBanner'
import AgroContent from './AgroContent'
import { NextSeo } from 'next-seo'
import { usePathname } from 'next/navigation'
import AllPageSchema from '@/components/SchemaComponents/Schema'

const Agro = () => {
  const pathname = usePathname()
  return (
    <>
      <NextSeo
        title="Seed Banks: Preserving Agrobiodiversity"
        description="Empowering communities to conserve biological diversity practice sustainable agriculture through community seed banks GREEN s pioneering efforts inspire nationwide impact"
        canonical={`https://greenfoundation.in${pathname}`}
        openGraph={{
          url: `https://greenfoundation.in${pathname}`,
          title: 'Seed Banks: Preserving Agrobiodiversity',
          description: 'Empowering communities to conserve biological diversity practice sustainable agriculture through community seed banks GREEN s pioneering efforts inspire nationwide impact',
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
          siteName: 'GreenFoundation',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />

      <AllPageSchema
        target={`${pathname}`}
        type="website"
      />

      <Header />
      <AgroHeader />
      <AgroBanner />
      <AgroContent />
      <Footer />
    </>

  )
}

export default Agro