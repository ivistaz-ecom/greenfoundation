import React from 'react'

const NewsEventsShema = ({ headline, description, image, authorName, articleUrl, publisherName, publisherLogoUrl, datePublished }) => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": articleUrl
        },
        "headline": headline,
        "description": description,
        "image": image,
        "author": {
            "@type": "Person",
            "name": authorName,
            "url": articleUrl
        },
        "publisher": {
            "@type": "Organization",
            "name": publisherName,
            "logo": {
                "@type": "ImageObject",
                "url": publisherLogoUrl
            }
        },
        "datePublished": datePublished
    };

    return (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    );
};

export default NewsEventsShema