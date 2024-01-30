import React from 'react'

import Header from '../../shared/Header'
import Footer from '../../shared/Footer'
// import NewsEventsLoopTemplate from '@/components/LoopTemplate/NewsEventsLoopTemplate'
import { NextSeo } from 'next-seo'
import NewsAndEvnetsPost from './NewsAndEvnetsPost'
import { usePathname } from 'next/navigation'
import AllPageSchema from '@/components/SchemaComponents/Schema'
import NewsEventsShema from '@/components/SchemaComponents/NewsEventsShema'

const index = () => {

  const pathname = usePathname();

  return (
    <>
      <NextSeo
        title="News and Events - Green Foundation"
        description="Explore our website for the latest news and events, offering a curated selection of informative content to keep you engaged and informed."
        canonical={`https://greenfoundation.in${pathname}`}
        openGraph={{
          url: `https://greenfoundation.in${pathname}`,
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
          siteName: 'GreenFoundation',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />

      <link rel="canonical" href={`https://greenfoundation.in${pathname}`} />

      <NewsEventsShema />


      <AllPageSchema
        target={`${pathname}`}
        type="website"
      />


      <Header />
      <NewsAndEvnetsPost />
      {/* <NewsEventsLoopTemplate /> */}
      <Footer />
    </>
  )
}

export default index