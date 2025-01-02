'use client'

import React from 'react'
import OurStory from "../../components/OurStory"
import Seo from "../../components/Seo/Seo"
const page = () => {
  const seoField = {
    title: "The Upfront Story: Our Vision of Workforce Wellbeing",
    description:
      "Learn about Upfront Global's mission, vision, and the values driving our efforts to foster workforce wellbeing across industries",
    path: "our-story",
    metaImage: "/HomePage/logo-upfront.png",
    pageType: "WebSite",
  };
  return (
    <div>
      <Seo {...seoField}/>
      <OurStory/>
    </div>
  )
}

export default page
