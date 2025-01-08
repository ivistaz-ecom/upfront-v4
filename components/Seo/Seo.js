"use client";
import React from "react";

import configData from "../../config";

function NextSeo({ title, description, path, metaImage }) {
  return (
    <head>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="noindex, nofollow" />
      <link rel="icon" href="/Home/seslong-favicon.png" />
      <link rel="canonical" href={`${configData.WEBSITE_URL}${path}`} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`${configData.WEBSITE_URL}${path}`} />
      <meta property="og:site_name" content={title} />
      <meta property="og:image" content={metaImage} />
      <meta name="twitter:card" content="summary_large_image" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "WebSite",
            name: "upfront-v4",
            url: `${configData.WEBSITE_URL}`,
            potentialAction: {
              "@type": "SearchAction",
              target: `${configData.WEBSITE_URL}${path}/{search_term_string}`,
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />
    </head>
  );
}

export default NextSeo;
