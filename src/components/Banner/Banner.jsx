import React from "react";
import BannerImgOne from "../../assets/banner_one.png";
import BannerImgTwo from "../../assets/banner_two.png";

const Banner = () => {
  return (
    <section className="py-[80px] bg-accent">
      <div className="container mx-auto">
        <div className="flex items-center gap-x-5">
          <div className="w-1/2">
            <h3 className="text-4xl font-bold text-secondary">
              The <span className="text-primary">Easiest Way</span>{" "}
              <br /> to Get Your New Job
            </h3>
            <p className="mt-8 text-secondary">
              Each month, more than 3 million job seekers turn to
              website in their search for work, making over 140,000
              applications every single day
            </p>
            <div className="flex mt-5 relative">
              <input type="text" className="input w-full h-12" placeholder="Search for job" />
              <button className="btn btn-primary absolute right-0 h-12 rounded-lg z-10">Search</button>
            </div>
          </div>
          <div className="w-1/2 relative mb-5">
            <div className="">
              <img src={BannerImgOne} alt="" />
            </div>
            <div className="absolute -bottom-20 right-0">
              <img src={BannerImgTwo} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
