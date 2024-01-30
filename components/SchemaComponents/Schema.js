import React from 'react'
import { ArticleJsonLd } from 'next-seo';

const AllPageSchema = ({ target, type }) => {

    const schema = {
        "@context": "https://schema.org/",
        "@type": type,
        "name": "GreenFoundation",
        "url": "https://greenfoundation.in/",
        "potentialAction": {
            "@type": "SearchAction",
            "target": `https://greenfoundation.in${target}{search_term_string}`,
            "query-input": "required name=search_term_string"
        },
    }

    return (
        <div>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

        </div>
    )
}

export default AllPageSchema
