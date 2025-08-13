import React from 'react';
import Title from './Title';

const Services = () => {
    return (
        <div
        id="services"
        className="bg-[#765eff]/5 py-16 lg:py-28"
      >
        <div className=" max-w-[1440px] mx-auto w-11/12">
          <div className="lg:px-[22%]">
            <Title
              heading={"Services"}
              title={"How can we help"}
              styleTitle={" you?"}
              paragraph={
                "From Short-Form Videos to Long-Form Content, Ad Creatives, and VSLs – Comprehensive Video Editing Services Tailored for Every Need."
              }
            ></Title>
          </div>
  
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 mt-8">
            {/* card 1  */}
            <div className=" bg-firstImage bg-right-top bg-cover border bg-no-repeat border-[#fcfcfa]/20  rounded-2xl py-14 px-6 md:px-14 space-y-4 md:space-y-5 flex flex-col items-center justify-center">
              <h3 className="lg:text-[40px]  md:text-2xl text-xl leading-6 md:leading-9  lg:leading-[46px] font-medium text-center">
              YouTube Videos
              </h3>
              <p className="text-center text-xs leading-5  md:text-sm lg:text-lg text-SecondTextColor md:leading-6 lg:leading-7 md:w-3/6  lg:w-3/4">
              Boost watch time, attract more subscribers, and grow your channel with polished, engaging videos tailored for YouTube.
              </p>
            </div>
  
            {/* card 2 */}
            <div className="border bg-secondImage bg-no-repeat bg-right-top bg-cover border-[#fcfcfa]/20  rounded-2xl py-14 px-6 md:px-14 space-y-4 md:space-y-5 flex flex-col items-center justify-center">
              <h3 className="lg:text-[40px]  md:text-2xl text-xl leading-6 md:leading-9  lg:leading-[46px] font-medium text-center">
                Short Form Contents
              </h3>
              <p className="text-center text-xs leading-5  md:text-sm lg:text-lg text-SecondTextColor md:leading-6 lg:leading-7 md:w-3/6  lg:w-3/4">
                Custom edits optimized for Instagram, TikTok, and LinkedIn to grab
                attention and drive engagement on every platform.
              </p>
            </div>
  
            {/* card 3  */}
            <div className="bg-firstImage bg-left-top bg-cover  bg-no-repeat border border-[#fcfcfa]/20  rounded-2xl py-14 px-6 md:px-14 space-y-4 md:space-y-5 flex flex-col items-center justify-center">
              <h3 className="lg:text-[40px]  md:text-2xl text-xl leading-6 md:leading-9  lg:leading-[46px] font-medium text-center">
                Podcast Editing
              </h3>
              <p className="text-center text-xs leading-5  md:text-sm lg:text-lg text-SecondTextColor md:leading-6 lg:leading-7 md:w-3/6 lg:w-3/4">
                Enhance your podcast with crisp audio, remove gaps, engaging
                visuals, and smooth transitions to captivate your audience
              </p>
            </div>
  
            {/* card 4 */}
            <div className="bg-secondImage bg-left-top bg-cover  bg-no-repeat border  border-[#fcfcfa]/20  rounded-2xl py-14 px-8 md:px-14 space-y-4 md:space-y-5 flex flex-col items-center justify-center">
              <h3 className="lg:text-[40px]  md:text-2xl text-xl leading-6 md:leading-9  lg:leading-[46px] font-medium text-center">
                Ad Creatives and VSLS
              </h3>
              <p className="text-center text-xs leading-5  md:text-sm lg:text-lg text-SecondTextColor md:leading-6 lg:leading-7 md:w-3/6  lg:w-3/4">
                Deliver your message powerfully with high-quality video sales
                letters and visually striking creative edits.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Services;