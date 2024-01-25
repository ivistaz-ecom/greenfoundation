import React from 'react'

import Header from '../../shared/Header'
import Footer from '../../shared/Footer'
import '../../Style'
import KitchenHeader from './KitchenHeader'
import KitchenBanner from './KitchenBanner'
import KitchenContent from './KitchenContent'
import { NextSeo } from 'next-seo'
import { usePathname } from 'next/navigation'
import AllPageSchema from '@/components/SchemaComponents/Schema'


const index = () => {

  const pathname = usePathname();

  return (
    <>

      <NextSeo
        title="Kitchen and Community Gardens"
        description="Our Initiative of setting up over 950 kitchen and community gardens throughout Karnataka by providing resources and training has helped many farmers"
        canonical={`https://greenfoundation.in${pathname}`}
        openGraph={{
          url: `https://greenfoundation.in${pathname}`,
          title: 'Kitchen and Community Gardens',
          description: 'Our Initiative of setting up over 950 kitchen and community gardens throughout Karnataka by providing resources and training has helped many farmers',
          images: [
            {
              url: '/our-work/kitche-community/kitchen_garden_tab_img.png',
              width: 800,
              height: 600,
              alt: 'Kitchen and Community Gardens',
              type: 'image/jpeg',
            },
            {
              url: '/our-work/kitche-community/kitchen_garden_tab_img.png',
              width: 900,
              height: 800,
              alt: 'Kitchen and Community Gardens',
              type: 'image/jpeg',
            },
            { url: '/our-work/kitche-community/kitchen_garden_tab_img.png' },
            { url: '/our-work/kitche-community/kitchen_garden_tab_img.png' },
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
      <KitchenHeader />
      <KitchenBanner />
      <KitchenContent />
      <Footer />
    </>
  )
}

export default index