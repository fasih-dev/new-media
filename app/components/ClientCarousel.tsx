'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick"

const clients = [
    { name: 'Ford', logo: '/logos/fo.png' },
    { name: 'Stanford', logo: '/logos/st.webp' },
    { name: 'CBS', logo: '/logos/cb.webp' },
    { name: 'Kaiser Permanente', logo: '/logos/ka.png' },
    { name: 'PostNet', logo: '/logos/pn.png' },
    { name: 'BrightView', logo: '/logos/br.png' },
    { name: 'Delta', logo: '/logos/de.webp' },
];

const ClientCarousel: React.FC = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 0,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024, // for tablets and medium screens
                settings: {
                    slidesToShow: 3, // Show 3 slides
                },
            },
            {
                breakpoint: 768, // for smaller screens and phones
                settings: {
                    slidesToShow: 2, // Show 2 slides
                },
            },
            {
                breakpoint: 480, // for very small screens
                settings: {
                    slidesToShow: 1, // Show 1 slide
                },
            },
        ],
    };

    return (
        <div className="max-w-full bg-gray-100 pt-48 pb-8 md:pt-24 sm:mt-12 lg:mt-2">
            <div className="container mx-auto flex flex-wrap items-center">
                {/* Static left section */}
                <div className="w-full md:w-1/4 text-left flex-shrink-0 mb-4 md:mb-0">
                    <div className="flex items-start mb-2">
                        <h2 className="text-xl md:text-2xl font-bold text-red-600 ml-2">Our Clients</h2>
                    </div>
                    <Link href="/case-studies" className="text-sm text-red-600 hover:underline">
                        VIEW CASE STUDIES &gt;
                    </Link>
                </div>

                {/* Carousel section */}
                <div className="w-full md:w-3/4 overflow-hidden">
                    <Slider {...settings}>
                        {clients.map((client, index) => (
                            <div key={index} className="px-4">
                                <Image
                                    src={client.logo}
                                    alt={client.name}
                                    width={220}
                                    height={100}
                                    className="object-contain h-20"
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default ClientCarousel;
