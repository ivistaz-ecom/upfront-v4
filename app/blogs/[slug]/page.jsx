"use client";

import React, { use } from "react";
import Posts from "./Blogpost"; // Adjust the import path accordingly
const Page = ({ params }) => {
  const { slug } = use(params) || {};

  return <div>{slug ? <Posts slug={slug} /> : null}</div>;
};

export default Page;
