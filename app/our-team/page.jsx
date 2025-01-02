'use client'

import React from 'react'
import OurTeam from "../../components/OurTeam"
import Seo from "../../components/Seo/Seo"

const page = () => {
  const seoField = {
    title: "",
    description: "",
    path: "our-team",
    metaImage: "",
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
