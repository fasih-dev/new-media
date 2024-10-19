'use client'

import React from 'react';
import Image from 'next/image';

const SuccessMetricsSection: React.FC = () => {
    return (
        <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Client logos */}
                <div className="flex flex-wrap justify-center space-x-0 sm:space-x-8 mb-8">
                    <div className="mb-4 sm:mb-0">
                        <Image src="/logos/ggl.png" alt="Google" width={140} height={40} />
                    </div>
                    <div className="mb-4 sm:mb-0">
                        <Image src="/logos/mash.png" alt="Mashable" width={220} height={40} />
                    </div>
                    <div className="mb-4 sm:mb-0">
                        <Image src="/logos/inc.png" alt="Inc" width={140} height={40} />
                    </div>
                </div>


                {/* Success metrics */}
                <h2 className="text-3xl sm:text-4xl font-bold text-center text-red-600 mb-4">
                    25+ YEARS OF SUCCESS FOR OUR CLIENTS.
                </h2>
                <p className="text-2xl sm:text-3xl font-bold text-center text-red-600 mb-12">
                    $3.5B+ REVENUE GENERATED.
                </p>

                {/* Award badges */}
                <div className="flex flex-wrap justify-center items-center gap-6 mb-12">
                    <Image src="/badge1.png" alt="Award 1" width={100} height={100} />
                    <Image src="/badge1.png" alt="Award 1" width={100} height={100} />
                    <Image src="/badge1.png" alt="Award 1" width={100} height={100} />
                    <Image src="/badge1.png" alt="Award 1" width={100} height={100} />
                    <Image src="/badge1.png" alt="Award 1" width={100} height={100} />
                </div>

                {/* Description */}
                <p className="text-center text-gray-600 mb-8 max-w-6xl mx-auto text-2xl">
                    <span className='font-bold text-black'> NEWMEDIA.COM</span>   is a full-service <span className='text-red-700 font-bold'>digital marketing agency </span>specializing in performance marketing to dramatically
                    increase revenue and profit for companies. We design, build, and grow holistic, integrated projects which include
                    <span className='text-red-700 font-bold'>    website design </span> and  <span className='text-red-700 font-bold'>development </span>in combination with our proprietary PPC optimization and management,
                    custom software development, social media management, conversion rate optimization, and marketing automation.
                    We've increased client revenues from $200K to $3-500K as a result. Get in touch today to learn how We Scale Brands.®
                </p>

                {/* CTA Button */}
                <div className="text-center">
                    <button className="bg-red-600 text-white font-bold py-2 px-6 rounded hover:bg-red-700 transition duration-300">
                        LEARN MORE
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SuccessMetricsSection;