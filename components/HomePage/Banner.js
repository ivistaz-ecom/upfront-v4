import React from "react";

const Banner = () => {
  return (
    
  <>
  <div className="pointer-events-none">
  <video
    src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/Upfront-v4/Upfront-Banner-Video.mp4"
    width={1200}
    height={900}
    className="w-full"
    alt="home banner"
    autoPlay
    loop
    muted
    playsInline
  />
</div>

  </>
  );
};

export default Banner;
