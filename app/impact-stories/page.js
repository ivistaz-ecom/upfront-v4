'use client'

import React from "react";
import ImpactStories from "../../components/ImpactStories/ImpactStories";
import Seo from "../../components/Seo/Seo";
const page = () => {
  const seoField = {
    title: "Upfront Global: Workforce Wellbeing Impact Stories",
    description: "Explore our transparent impact stories of transformation as we work together with organisations to make workforce wellbeing a reality for workforces",
    path: "impact-stories",
    metaImage: "/HomePage/logo-upfront.png",
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
