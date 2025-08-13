import React from 'react';
import Title from './Title';

const LongForm = () => {

  return (
    <div id="long-form" className=" pt-16 lg:pt-28 max-w-[1440px] mx-auto w-11/12">
      <div className="lg:px-[5%]">
        <Title
          heading={"Long-Form"}
          title={" Long-Form Video Editing:"}
          styleTitle={" Transform Raw Footage into Impactful Masterpieces"}
          paragraph={
            "    At AlphaVideoEdit.com, we specialize in professional long-form video editing, designed to captivate and engage diverse audiences. Whether it's documentaries, vlogs, webinars, or educational content, we meticulously cut unnecessary parts, remove mistakes and mispronunciations, and merge clips for smooth storytelling. Our team also sources relevant footage to enhance your narrative, improves audio quality, and adds effects, transitions, motion graphics, and custom 2D animations to visualize your story. Our expert editors transform raw footage into compelling, polished videos that amplify your brand's reach, boost viewer retention, and leave a lasting impression."
          }
        ></Title>
      </div>

      {/* Longform Videos - Responsive */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10 px-4">
        {/* Video 1 */}
        <div className="relative w-full pt-[56.25%] rounded-xl overflow-hidden shadow-md">
          <iframe
            src="https://www.youtube.com/embed/lHJdHd7ROB4?controls=0"
            className="absolute top-0 left-0 w-full h-full rounded-xl"
            frameBorder="0"
            allowFullScreen
          />
        </div>

        {/* Video 2 */}
        <div className="relative w-full pt-[56.25%] rounded-xl overflow-hidden shadow-md">
          <iframe
            src="https://www.youtube.com/embed/r5OEAPZw28U?controls=0"
            className="absolute top-0 left-0 w-full h-full rounded-xl"
            frameBorder="0"
            allowFullScreen
          />
        </div>

        {/* Video 3 - Full width on lg */}
        <div className="lg:col-span-2 flex items-center justify-center">
          <div className="relative w-full lg:w-[750px] pt-[56.25%] lg:pt-[30%] rounded-xl overflow-hidden shadow-md">
            <iframe
              src="https://www.youtube.com/embed/g62bzoH672w?controls=0"
              className="absolute top-0 left-0 w-full h-full rounded-xl"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </div>
      </div>



    </div>
  );
};

export default LongForm;