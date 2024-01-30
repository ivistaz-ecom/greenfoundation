import React from 'react'

import Header from '../../shared/Header'
import Footer from '../../shared/Footer/'

import '../../Style'

import TrainingExposureHeader from './TrainingExposureHeader'
import TrainingExposureBanner from './TrainingExposureBanner'
import TrainingExposureContent from './TrainingExposureContent'
import { NextSeo } from 'next-seo'
import { usePathname } from 'next/navigation'
import AllPageSchema from '@/components/SchemaComponents/Schema'



const index = () => {

  const pathname = usePathname();

  return (
    <>
      <NextSeo
        title="Training and Exposure Visits"
        description="Green Foundation’s training and exposure visits offer farmers the required knowledge and interactions with one another on sustainable agriculture, that empowers them as a community"
        canonical={`https://greenfoundation.in${pathname}`}
        openGraph={{
          url: `https://greenfoundation.in${pathname}`,
          title: 'Training and Exposure Visits',
          description: 'Green Foundation’s training and exposure visits offer farmers the required knowledge and interactions with one another on sustainable agriculture, that empowers them as a community',
          images: [
            {
              url: '/our-work/training-exposure/training_exposure_left_img.png',
              width: 800,
              height: 600,
              alt: 'Journey So Far',
              type: 'image/jpeg',
            },
            {
              url: '/our-work/training-exposure/training_exposure_left_img.png',
              width: 900,
              height: 800,
              alt: 'Journey So Far',
              type: 'image/jpeg',
            },
            { url: '/our-work/training-exposure/training_exposure_left_img.png' },
            { url: '/our-work/training-exposure/training_exposure_left_img.png' },
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
      <TrainingExposureHeader />
      <TrainingExposureBanner />
      <TrainingExposureContent />
      <Footer />
    </>

  )
}

export default index