'use client'

import React from 'react'
import Blogs from "../../components/Blogs/Blogs"
import Seo from "../../components/Seo/Seo"
const page = () => {
  const seoField = {
    title: "Upfront Blogs: Insights on Workforce Wellbeing",
    description: "Stay informed with Upfront Global's latest blogs featuring expert insights, news, and trends on workforce wellbeing",
    path: "blogs",
    metaImage: "/HomePage/logo-upfront.png",
    pageType: "WebSite",
  };
  return (
    <div>
      <Seo {...seoField}/>
        <Blogs/>
    </div>
  )
}

export default page