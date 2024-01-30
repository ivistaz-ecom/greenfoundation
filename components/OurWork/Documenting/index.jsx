import React from 'react'

import Header from '../../shared/Header'
import Footer from '../../shared/Footer/'

import '../../Style'

import DocHeader from './DocHeader'
import DocBanner from './DocBanner'
import DocContent from './DocContent'
import { NextSeo } from 'next-seo'
import { usePathname } from 'next/navigation'
import AllPageSchema from '@/components/SchemaComponents/Schema'

const index = () => {
  const pathname = usePathname();

  return (
    <>

      <NextSeo
        title="Seed Treatment Techniques"
        description="From empowering small scale farmers to initiating a growing biodiversity conservation programme, Green Foundation has taken a holistic approach to empower communities since 1994."
        canonical={`https://greenfoundation.in${pathname}`}
        openGraph={{
          url: `https://greenfoundation.in${pathname}`,
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
        type="website"
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