import Image from 'next/image';
import Link from 'next/link';
import client1 from "../../public/ClientImage/client1.webp";
import client2 from "../../public/ClientImage/client2.webp";
import client3 from "../../public/ClientImage/client3.webp";
import client4 from "../../public/ClientImage/client4.webp";

const Hero = () => {
    return (
        <div id="hero" className="py-16 lg:py-28 relative">
            {/* Parent container with relative positioning */}
            <div className="max-w-[1440px] mx-auto w-11/12 text-white flex flex-col items-center justify-center relative z-10">
                {/* Trusted Section */}
                <div className="flex items-start md:items-center md:flex-row flex-col md:space-x-3 gap-1 md:gap-0 mb-4 md:mb-6">
                    <div className="flex -space-x-2">
                        {/* Images */}
                        <Image
                            src={client1}
                            alt="User 1"
                            className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full border-2 border-black transition-transform duration-300 hover:-translate-y-2 object-cover"
                        />
                        <Image
                            src={client2}
                            alt="User 2"
                            className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full border-2 border-black transition-transform duration-300 hover:-translate-y-2 object-cover"
                        />
                        <Image
                            src={client3}
                            alt="User 3"
                            className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full border-2 border-black transition-transform duration-300 hover:-translate-y-2 object-cover"
                        />
                        <Image
                            src={client4}
                            alt="User 4"
                            className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full border-2 border-black transition-transform duration-300 hover:-translate-y-2 object-cover"
                        />
                    </div>
                    <p className="text-[10px] leading-4 md:text-sm text-SecondTextColor md:leading-6">
                        ⭐⭐⭐⭐⭐ <br /> Work with top creators worldwide. <br />
                        Trusted by 30+ influencers, brands, and content creators.
                    </p>
                </div>

                {/* Main Heading */}
                <div className="lg:px-[15%]">
                    <h1 className="text-center text-2xl md:text-4xl lg:text-[60px] lg:leading-[66px] font-bold leading-tight">
                        <span>Maximize Your Reach and Engagement With </span>
                        <span className="font-Instrument text-mainColor tracking-wider">
                            Professionally Edited Videos
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-center leading-5 md:leading-7 text-gray-400 text-xs md:text-base lg:px-16 lg:text-lg mt-4 md:mt-6">
                        Trusted by creators and brands worldwide, AlphaVideoEdit.com
                        specializes in professional video editing for influencers,
                        educators, and businesses. Whether it’s engaging long-form content
                        or attention-grabbing short-form videos, we craft impactful stories
                        that captivate audiences, enhance brand reach, and drive real
                        results.
                    </p>
                </div>

                {/* Buttons */}
                <div className="mt-8 flex items-center space-x-6">
                    <Link href="/about" className="bg-[#fcfcfa]/5 outline-3 hover:outline-offset-4 text-TextColor px-4 py-2 md:px-6 md:py-3 rounded-lg font-semibold outline-[#fcfcfa]/5 hover:outline-mainColor transition-all text-sm md:text-base">
                        Learn More
                    </Link>
                </div>
            </div>

            {/* Banner Glow Effect */}
            <div className="absolute inset-0 bg-thirdBanner h-full w-full bg-no-repeat bg-cover bg-bottom z-0"></div>
        </div>
    );
};

export default Hero;