import React from 'react'
import WhyWorkforceWellbeing from "../../components/WhyWorkforceWellbeing"
import Seo from "../../components/Seo/Seo"
const page = () => {
  const seoField = {
    title: "",
    description: "",
    path: "why-workforce-wellbeing",
    metaImage: "",
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
