import React from 'react';
import Title from './Title';

const ShortForm = () => {
    const driveVideos = [
        { id: "10NQT5AjB1DA7jmY9kxULBD1rk83b5zEA" },
        { id: "1hyITDUOrh4v9uCmyo6ZTlCL_jTrtRbMe" },
        { id: "1hTPp0m5lWwWh9Y0jfTUcrjIDrf-ocbum" },
        { id: "1T5MSHhmRhMI1IFmeDNsuPbAaaaRqsjg3" },
        { id: "1Vj8JiMPTsfBqAZdivei_b7PQaIr7z4RB" },
        { id: "1PfCH4JKhdR8sLD1DK5sTv8UQlGuKd6Sl" }
    ];

    return (
        <div id="short-form" className="py-16 lg:py-28 max-w-[1440px] mx-auto w-11/12">
            <div className="lg:px-[5%]">
                <Title
                    heading={"Our Portfolio"}
                    title={"Professional Video Editing "}
                    styleTitle={"Showcase & Creative Content"}
                    paragraph={
                        "Discover our diverse portfolio of video editing projects at AlphaVideoEdit.com. From corporate presentations and promotional content to creative storytelling and brand campaigns, we deliver high-quality video editing services that transform your vision into compelling visual narratives. Each project showcases our commitment to excellence in video production and post-production."
                    }
                />
            </div>

            {/* Portfolio Videos - 16:9 Aspect Ratio */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12 px-4 sm:px-8 lg:px-[5%]">
                {driveVideos.map((video, index) => (
                    <div 
                        key={video.id} 
                        className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-lg border-2 border-[#765eff]/20 hover:border-[#765eff]/40 transition-all duration-300"
                    >
                        <iframe
                            src={`https://drive.google.com/file/d/${video.id}/preview`}
                            className="absolute top-0 left-0 w-full h-full rounded-xl"
                            title={`Portfolio video ${index + 1}`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShortForm;
