import React from 'react'
import Blogs from "../../components/Blogs/Blogs"
import Seo from "../../components/Seo/Seo"
const page = () => {
  const seoField = {
    title: "",
    description: "",
    path: "blogs",
    metaImage: "",
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