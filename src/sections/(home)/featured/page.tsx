
"use client"

import React, { useState, useEffect, useRef } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

function Featured() {
    const Companies = [
        { src: "https://images.pexels.com/photos/11459428/pexels-photo-11459428.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { src: "https://cdn.pixabay.com/photo/2019/01/23/21/16/pixabay-3951079_1280.png" },
        { src: "https://cdn.pixabay.com/photo/2023/03/06/13/58/brand-7833518_640.png" },
        { src: "https://cdn.pixabay.com/photo/2014/12/28/13/20/wordpress-581849_640.jpg" },
        { src: "https://cdn.pixabay.com/photo/2015/05/22/19/01/business-779542_640.jpg" },
        { src: "https://cdn.pixabay.com/photo/2013/01/29/22/53/yahoo-76684_640.png" },
        { src: "https://cdn.pixabay.com/photo/2016/08/02/10/47/wifi-1563020_640.jpg" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const totalSlides = Companies.length;
    const carouselRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
        }, 800 );

        return () => clearInterval(intervalId);
    }, [totalSlides]);

    useEffect(() => {
        if (carouselRef.current) {
            const carousel = carouselRef.current;
            carousel.scrollTo({
                left: carousel.offsetWidth * currentIndex,
                behavior: 'smooth'
            });
        }
    }, [currentIndex]);

    return (
        <div className='max-h-60 bg-white overflow-hidden py-12'>
            <h1 className='text-center mb-7 font-extrabold'>
                PROUDLY FEATURED ON
            </h1>
            <div className="relative lg:w-[80%] md:w-full overflow-hidden mx-auto">
                <Carousel ref={carouselRef} className="w-full overflow-hidden">
                    <CarouselContent className="flex w-full">
                        {Companies.map((company, index) => (
                            <CarouselItem key={index} className="flex-shrink-0 w-full md:basis-1/2 lg:basis-1/5">
                                <div className=" py-2 w-52 flex justify-center">
                                    <img src={company.src} className='max-h-24 w-full object-cover' alt={`Company ${index}`} />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    
                </Carousel>
            </div>
        </div>
    );
}

export default Featured;
