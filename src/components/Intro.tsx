import { YouTubeEmbed } from "@next/third-parties/google";

const Intro = () => {
    return (
        <section className="bg-[#765eff]/5">
            <div className=" py-16 lg:py-28 max-w-[1440px] mx-auto w-11/12">
                <div className="lg:px-[20%]">
                    {/* Main Heading */}
                    <h1 className="text-center text-2xl md:text-4xl lg:text-[60px] md:leading-[66px] font-medium leading-tight">
                        <span>Why Storytelling Matters in </span>
                        <span className="font-Instrument lg:ml-3 italic text-mainColor tracking-wider">
                            Video Editing
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-center text-gray-400 text-xs md:text-base lg:px-16 lg:text-lg mt-4 md:mt-6">
                        Discover how storytelling elevates video editing, captivates
                        audiences, and transforms content into unforgettable experiences for
                        your brand.
                    </p>
                </div>

                {/* Videos Section */}
                <div className="space-y-10">

                    {/* Google Drive Video */}
                    <div className="flex justify-center">
                        <div className="max-h-[400px] w-full max-w-[700px] rounded-2xl overflow-hidden border border-[#fcfcfa]/20">
                            <iframe
                                src="https://drive.google.com/file/d/1kahBTT5QRPP5Gzhq0ZKuNmcXLOSAUhDe/preview"
                                className="w-full h-[400px]"
                                frameBorder="0"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;
