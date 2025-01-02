'use client'

import React from "react";
import NewsAndPublications from "../../components/NewsAndPublications/NewsAndPublications";
import Seo from "../../components/Seo/Seo"
const page = () => {
  const seoField = {
    title: "",
    description: "",
    path: "news-and-publications",
    metaImage: "",
    pageType: "WebSite",
  };
  return (
    <div>
      <Seo {...seoField}/>
      <NewsAndPublications />
    </div>
  );
};

export default page;
