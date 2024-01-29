
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Col, Container, Image, Row } from 'react-bootstrap';
import Link from 'next/link';

import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer';
import { NextSeo } from 'next-seo';

import config from '../config.json'
import { usePathname } from 'next/navigation';
import AllPageSchema from '@/components/SchemaComponents/Schema';



export default function Page() {
    const router = useRouter()
    const [data, setData] = useState([]);
    const slug = router.query.slug;
    const currentPath = router.asPath;

    const pathname = usePathname();

    // const URL_SEO = `${config.apiDomain}posts/${slug}&_embed`;

    const fetchPost = async () => {
        try {
            const urlFetchPost = `${config.apiDomain}posts?&slug=${slug}&_embed`;
            // const urlFetchPost = `https://beta.greenfoundation.in/wp-json/wp/v2/posts?&slug=${slug}&_embed`;
            const response = await fetch(urlFetchPost);

            if (!response.ok) {
                throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
            }

            const result = await response.json();
            setData(result);
            // console.log(result);
        } catch (error) {
            console.error('Error fetching data:', error.message);
        }
    };

    useEffect(() => {
        fetchPost();
    }, [slug]);

    const formatPublishedDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    const customCanonicalURL = 'https://greenfoundation.in/';


    return (
        <>


            {/* Yoast SEO */}
            <div>
                {data.map((item) => (
                    <div key={item.id}>
                        {/* Other post details */}
                        <NextSeo
                            title={item.yoast_head_json?.title}
                            description={item.yoast_head_json?.description}
                            // canonical={`https://greenfoundation.in${pathname}`}
                            canonical={`https://greenfoundation.in${currentPath}`}
                            openGraph={{
                                url: `https://greenfoundation.in${pathname}`,
                                title: item.yoast_head_json?.title,
                                description: item.yoast_head_json?.description,
                                url: "",
                                images: [
                                    {
                                        url: item._embedded['wp:featuredmedia'][0].source_url,
                                        width: 800,
                                        height: 600,
                                        alt: item.title?.rendered,
                                    },
                                ],
                                "@context": "https://schema.org",
                                "@type": "Article",
                                "mainEntityOfPage": {
                                    "@type": "WebPage",
                                    "@id": `https://greenfoundation.in${pathname}`
                                },
                                "author": {
                                    "@type": "Person",
                                    "name": "",
                                    "url": `https://greenfoundation.in${pathname}`
                                },
                                "publisher": {
                                    "@type": "Organization",
                                    "name": "",
                                    "logo": {
                                        "@type": "ImageObject",
                                        "url": ""
                                    }
                                },
                                "datePublished": item.date
                            }}
                        />
                        {/* <h2 dangerouslySetInnerHTML={{ __html: item.title.rendered }} /> */}

                    </div>
                ))}
            </div>

            <link rel="canonical" href={`https://greenfoundation.in${pathname}`} />

            <AllPageSchema
                target={`${pathname}`}
            />

            <Header />

            <Container fluid className='w-100'>
                <Container className='py-5 p-0'>

                    <Link href='/news-and-events' className='d-flex flex-md-row flex-column gap-3 justify-md-content-start align-content-center align-items-center text-decoration-none '>
                        <Image src='/publications/our-stories/back_to_stories_icon_green.svg' alt='' />
                        <h5 className='p-0 m-0 text-green fw-bolder'>Back to News & Events</h5>
                    </Link>




                    <hr className='my-4' />

                    <Row className='p-0 '>
                        <Col md={8} className='d-flex flex-column gap-2'>

                            {data.map((items) => (
                                <div key={items.id}>
                                    <Image src={items._embedded['wp:featuredmedia'][0].source_url} alt={items.title.rendered} fluid />
                                    <div className='py-2'>
                                        <h4 dangerouslySetInnerHTML={{ __html: items.title.rendered }} />
                                    </div>

                                    <p style={{ fontSize: '11px !important', color: '#126634' }}>
                                        {formatPublishedDate(items.date)}
                                    </p>

                                    {/* <p dangerouslySetInnerHTML={{ __html: items.content.rendered }} /> */}
                                    {/* <div dangerouslySetInnerHTML={{ __html: items.content.rendered.replace(/http:\/\/localhost:3000/g, config.apiDomain) }} /> */}
                                    <div dangerouslySetInnerHTML={{ __html: items.content.rendered }} />

                                    {/* <p>
                                        {items.content.rendered}
                                    </p> */}
                                </div>
                            ))}
                        </Col>


                        <Col className='py-md-0 py-5'>
                            <h2>Related</h2>
                        </Col>
                    </Row>
                </Container>
            </Container>



            <Footer />
        </>
    )
}
