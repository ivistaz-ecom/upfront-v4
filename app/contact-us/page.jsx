'use client'

import React from 'react'
import ContactUs from "../../components/ContactUs"
import Seo from "../../components/Seo/Seo"
const page = () => {
  const seoField = {
    title: "",
    description: "",
    path: "contact-us",
    metaImage: "",
    pageType: "WebSite",
  };
  return (
    <div>
      <Seo {...seoField}/>
      <ContactUs/>
    </div>
  )
}

export default page
