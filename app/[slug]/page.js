"use client";
import React, { useEffect, useState } from "react";
import config from "../../config";
import NotFound from "../not-found";

const Post = ({ params }) => {
  const [slug, setSlug] = useState(null);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unwrapParams = async () => {
      const resolvedParams = await params; // Unwrap the Promise
      setSlug(resolvedParams.slug);
    };
    unwrapParams();
  }, [params]);

  useEffect(() => {
    if (!slug) return; // Wait until slug is resolved

    const fetchData = async () => {
      try {
        const response = await fetch(
          `${config.wpApiUrl}/seo-blog?_embed&slug=${slug}&production_mode[]=${config.SERVER}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  if (isLoading) {
    return (
      <div>
        <div className="animate-pulse flex flex-col justify-center items-center my-10 pb-36">
          <div className="bg-[#746C6C] h-52 w-10/12 rounded-md"></div>
          <div className="mb-5 h-5 w-10/12 rounded-md bg-[#B9B9B9] mt-4"></div>
          <div className="mb-2 h-5 w-10/12 rounded-md bg-[#B9B9B9]"></div>
        </div>
      </div>
    );
  }

  if (error || !data || data.length === 0) {
    return <NotFound />;
  }

  return (
    <>
      {data.map((post, index) => (
        <React.Fragment key={index}>
          <head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <title>{post.acf.meta_title_}</title>
            <meta name="description" content={post.acf.meta_description} />
            <meta http-equiv="content-language" content="en"></meta>
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href={`https://upfront.global/${slug}`} />
          </head>

          <div className="w-full">
            <div className="bg-gradient-to-r from-gray-950 to-[#f40f34] bg-cover  flex flex-col pb-8">
              <div
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                className="text-white text-center p-2 lg:p-0 lg:text-6xl text-3xl my-52 align-middle justify-center lg:my-80 lg:ps-16 container mx-auto"
              />
            </div>

            <div className="pt-5 lg:px-10 px-5 text-xl pb-32 paragraph-height">
              <div
                dangerouslySetInnerHTML={{
                  __html: post["content"]["rendered"],
                }}
              />
            </div>
          </div>
        </React.Fragment>
      ))}
    </>
  );
};

export default Post;
