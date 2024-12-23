import React from 'react'
import OurStory from "../../components/OurStory"
import Seo from "../../components/Seo/Seo"
const page = () => {
  const seoField = {
    title: "",
    description:
      "",
    path: "our-story",
    metaImage: "",
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
