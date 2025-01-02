'use client'

import React from 'react'
import OurTeam from "../../components/OurTeam"
import Seo from "../../components/Seo/Seo"

const page = () => {
  const seoField = {
    title: "Meet the Passionate Team Behind Upfront Global",
    description: "Get to know the passionate area experts leading Upfront Global's initiatives to foster healthier, more productive workplaces worldwide.",
    path: "our-team",
    metaImage: "/HomePage/logo-upfront.png",
    pageType: "WebSite",
  };
  return (
    <div>
      <Seo {...seoField}/>
      <OurTeam/>
    </div>
  )
}

export default page
