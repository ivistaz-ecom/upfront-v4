'use client'

import React from 'react'
import ContactUs from "../../components/ContactUs"
import Seo from "../../components/Seo/Seo"
const page = () => {
  const seoField = {
    title: "Get in Touch with Upfront Global",
    description: "Contact Upfront Global to partner with us and explore our career options to foster workforce wellbeing with us",
    path: "contact-us",
    metaImage: "/HomePage/logo-upfront.png",
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
