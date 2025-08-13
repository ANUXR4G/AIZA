import React from 'react';

const OurWork = () => {
    const driveVideos = [
        { id: "1oPE8JtmUWZ1588m43bZA1v38d5BR2dYQ" },
        { id: "1wPd6AXue-S2vxYqZe_tvzoBIZVRF5Zql" },
    ];

    return (
        <div id="work" className="max-w-[1440px] mx-auto w-11/12">
            <div className="py-20 lg:py-32 px-4 md:px-8 lg:px-12">
                <div className="lg:px-[15%]">
                    <div className="flex items-center flex-col justify-center text-TextColor text-center">
                        <div className="py-2 px-4 border rounded-lg mb-4 md:mb-6 border-[#fcfcfa]/20 font-medium text-xs md:text-sm lg:text-base">
                            Our Work
                        </div>
                        <h3 className="mb-3 md:mb-6 text-2xl md:text-4xl lg:text-[60px] md:leading-[66px] font-medium">
                            <span className="block lg:inline">Creative Video </span>
                            <span className="text-mainColor font-Instrument italic ">
                                Projects
                            </span>
                        </h3>
                        <p className="text-xs md:text-base lg:text-lg text-center text-SecondTextColor px-4 md:px-8">
                            Explore our portfolio of exceptional video editing projects. 
                            From compelling storytelling to dynamic visual effects, 
                            see how we transform raw footage into engaging content 
                            that captivates audiences.
                        </p>
                    </div>
                </div>

                {/* Video Grid - Work Portfolio with increased width */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 mt-12 md:mt-16 px-2 md:px-4 lg:px-8">
                    {driveVideos.map((video, index) => (
                        <div
                            key={video.id}
                            className="relative w-full overflow-hidden border-2 border-[#765eff]/30 rounded-xl aspect-[16/9] p-2 md:p-3 lg:p-4 bg-gradient-to-br from-[#765eff]/5 to-transparent"
                        >
                            <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg">
                                <iframe
                                    src={`https://drive.google.com/file/d/${video.id}/preview`}
                                    title={`Creative video project ${index + 1}`}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurWork;
