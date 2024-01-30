import React from 'react'

import Header from '../../shared/Header'
import Footer from '../../shared/Footer'

import '../../Style'
import OurStoriesLoopTemplate from '@/components/LoopTemplate/OurStoriesLoopTemplate'
import { NextSeo } from 'next-seo'
import { usePathname } from 'next/navigation'
import AllPageSchema from '@/components/SchemaComponents/Schema'

const Index = () => {

  const pathname = usePathname();

  return (
    <>
      <NextSeo
        title="Our Stories - Green Foundation"
        description="Impacting the lives of farmers from diverse backgrounds has been fulfilling. Our stories of success make us proud and inspire us to commit to the community even more."
        canonical={`https://greenfoundation.in${pathname}`}
        openGraph={{
          url: `https://greenfoundation.in${pathname}`,
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
      />


      <Header />
      <OurStoriesLoopTemplate />
      <Footer />
    </>
  )
}

export default Index