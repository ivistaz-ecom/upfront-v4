'use client'

import React from "react";
import ImpactStories from "../../components/ImpactStories/ImpactStories";
import Seo from "../../components/Seo/Seo";
const page = () => {
  const seoField = {
    title: "",
    description: "",
    path: "impact-stories",
    metaImage: "",
    pageType: "WebSite",
  };
  return (
    <div>
      <Seo {...seoField} />
      <ImpactStories />
    </div>
  );
};

export default page;
