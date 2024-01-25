import React from 'react';

const WebsiteSchema = () => (
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org/",
      "@type": "WebSite",
      "name": "Green Foundation",
      "url": "https://greenfoundation.in/",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://greenfoundation.in/{search_term_string}",
        "query-input": "required name=search_term_string"
      }
    })}
  </script>
);

export default WebsiteSchema;