import React from 'react'

import Header from '../shared/Header/Navbar'
import Footer from '../shared/Footer/Footer'

import '../Style'
import ContactForm from './ContactForm'
import { NextSeo } from 'next-seo'
import AutoLayoutExample from './Contactus'
import Contact7Form from './Contact7Form'
import { usePathname } from 'next/navigation'
import AllPageSchema from '../SchemaComponents/Schema'

const index = () => {
  const pathname = usePathname();
  return (
    <>
      <NextSeo
        title="Contact - Green Foundation"
        description=""
        canonical={`https://greenfoundation.in${pathname}`}
        openGraph={{
          url: `https://greenfoundation.in${pathname}`,
          title: 'Contact - Green Foundation',
          description: '',
          images: [
            {
              url: '',
              width: 800,
              height: 600,
              alt: 'Contact',
              type: 'image/jpeg',
            },
            {
              url: '',
              width: 900,
              height: 800,
              alt: 'Contact',
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
      <ContactForm />
      {/* <AutoLayoutExample /> */}

      {/* <Contact7Form /> */}
      <Footer />
    </>
  )
}

export default index