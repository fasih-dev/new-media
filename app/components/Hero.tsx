const Hero = () => {
    return (
        <div className="relative h-screen">
            {/* Video background */}
            <video
                autoPlay
                loop
                muted
                className="absolute z-0 w-full h-full object-cover"
            >
                <source src="/video.mp4" type="video/mp4" />
            </video>

            {/* Content overlay */}
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between h-full bg-opacity-50 text-white px-4 md:px-16 py-8">

                {/* Left Side Title */}
                <div className="p-4 md:p-8 mb-8 md:mb-0 w-full md:w-auto text-center md:text-left">
                    <h1 className="text-7xl  lg:text-[7rem] font-bold bg-red-600 text-white inline-block border border-solid border-black">
                        WE
                    </h1>
                    <br />
                    <h1 className="text-7xl  lg:text-[7rem] font-bold bg-red-600 text-white ml-4 inline-block border border-solid border-black">
                        SCALE
                    </h1>
                    <br />
                </div>

                {/* Right Side Review Box */}
                <div className="bg-white text-black p-4 md:p-8 w-full max-w-md md:max-w-lg rounded-lg text-center md:text-left">
                    <p className="italic mb-4 text-sm md:text-base">&quot;Our website sessions doubled within a few months of launching the new website. For SEO, our leads from organic traffic have increased by 91%, and our annual revenue has risen by 43%. NEWMEDIA.COM has done a truly fantastic job. We&apos;re pleased with everything they&apos;ve done for us.&quot;</p>
                    <p className="font-semibold text-sm md:text-base">Jenn D. review from Clutch.co</p>
                    <p className="text-red-600 font-bold mt-4 text-sm md:text-base">Rated 5/5 stars on Clutch</p>
                    <button className="mt-6 bg-red-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-lg font-semibold">
                        Request a Quote
                    </button>
                </div>
            </div>

            {/* Buttons below Hero */}
            <div className="z-50 sm:pb-24 bg-transparent text-white flex flex-wrap justify-center lg:pb-8 pt-8">
                <button className="mx-1 my-1 md:mx-2 bg-red-600 text-white px-4 py-2 text-sm md:text-2xl font-extrabold">Digital Marketing</button>
                <button className="mx-1 my-1 md:mx-2 bg-red-600 text-white px-4 py-2 text-sm md:text-2xl font-extrabold">SEO</button>
                <button className="mx-1 my-1 md:mx-2 bg-red-600 text-white px-4 py-2 text-sm md:text-2xl font-extrabold">PPC</button>
                <button className="mx-1 my-1 md:mx-2 bg-red-600 text-white px-4 py-2 text-sm md:text-2xl font-extrabold">Advertising Agency</button>
                <button className="mx-1 my-1 md:mx-2 bg-red-600 text-white px-4 py-2 text-sm md:text-2xl font-extrabold">WordPress</button>
            </div>
        </div>
    );
}

export default Hero;
