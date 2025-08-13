import React from 'react';
import Title from './Title';
import Reviews from './Reviews';

const Review = () => {
  return (
    <section id="reviews" className=" py-16 lg:py-28 bg-[#765eff]/5">
      <div className="flex flex-col items-center justify-center max-w-[1440px] mx-auto w-11/12">
        <div className="mb-10 md:w-4/6 ">
          <Title
            heading={"Review"}
            title={"There’s a reason people are raving"}
            styleTitle={" about us."}
          ></Title>
        </div>
        <Reviews></Reviews>
      </div>
    </section>
  );
};

export default Review;