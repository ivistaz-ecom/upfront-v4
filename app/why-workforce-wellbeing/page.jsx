'use client'

import React from 'react'
import WhyWorkforceWellbeing from "../../components/WhyWorkforceWellbeing"
import Seo from "../../components/Seo/Seo"
const page = () => {
  const seoField = {
    title: "Upfront Global: Why Workforce Wellbeing Matters to Us",
    description: "Understand the importance of workforce wellbeing and how Upfront Global empowers organisations to achieve happier, healthier, and more engaged teams",
    path: "why-workforce-wellbeing",
    metaImage: "/HomePage/logo-upfront.png",
    pageType: "WebSite",
  };
  return (
    <div>
      <Seo {...seoField}/>
      <WhyWorkforceWellbeing/>
    </div>
  )
}

export default page
