'use client'

import React from "react";
import NewsAndPublications from "../../components/NewsAndPublications/NewsAndPublications";
import Seo from "../../components/Seo/Seo"
const page = () => {
  const seoField = {
    title: "News and Publications from Upfront Global",
    description: "Discover the latest news, research, and publications from Upfront Global, highlighting innovations and achievements in workforce wellbeing",
    path: "news-and-publications",
    metaImage: "/HomePage/logo-upfront.png",
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
