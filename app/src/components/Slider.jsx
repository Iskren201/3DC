import React, { useState, useEffect } from 'react';
import '../App.css';

import SummerCollection from '../assets/img/Layer_1-8.png';
import ArrowLeft from '../assets/img/Arrow_Left.png';
import ArrowRight from '../assets/img/Arrow_Right.png';

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 1,
            image: SummerCollection,
            content: {
                title: 'Лятна колекция',
                description: 'кратко обяснение на продукта',
                buttonText: 'Вижте тук'
            }
        },
        {
            id: 2,
            image: SummerCollection,
            content: {
                title: 'Лятна 2',
                description: 'кратко обяснение на продукта',
                buttonText: 'Вижте тук'
            }
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((currentSlide + 1) % slides.length);
        }, 3300);

        return () => clearInterval(interval);
    }, [currentSlide, slides.length]);

    const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
    };

    return (
        <div className="relative flex items-center justify-center h-screen text-white">
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                >
                    <img
                        src={slide.image}
                        alt={`Slide ${slide.id}`}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex flex-col items-start justify-center p-4 md:p-36">
                        <h1 className="text-2xl md:text-[94px] font-trend-sans-five text-yellow-400" style={{ textShadow: '0px 0px 10px rgba(0, 0, 0, 0.7)' }}>{slide.content.title}</h1>
                        <p className="mt-2 text-sm md:text-2xl font-trend-sans-five" style={{ textShadow: '0px 0px 10px rgba(0, 0, 0, 0.7)' }}>{slide.content.description}</p>
                        <button className="mt-4 px-4 py-2 md:px-6 md:py-2 bg-yellow-400 text-black rounded hover:bg-opacity-75 shadow-lg font-proxima-nova-condensed" style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' }}>
                            {slide.content.buttonText}
                        </button>
                    </div>
                </div>
            ))}
            <div className="absolute top-1/2 left-2 md:left-16 transform -translate-y-1/2">
                <button
                    className="text-yellow-400 p-2 md:p-3 rounded-full opacity-65 hover:-translate-y-1 hover:scale-110 duration-300 shadow-lg hover:bg-opacity-75"
                    style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' }}
                    onClick={prevSlide}
                >
                    <img src={ArrowLeft} className="w-6 h-6 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" />
                </button>
            </div>
            <div className="absolute top-1/2 right-2 md:right-16 transform -translate-y-1/2">
                <button
                    className="text-yellow-400 p-2 md:p-3 rounded-full opacity-65 shadow-lg hover:bg-opacity-75 hover:scale-110 duration-300"
                    style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' }}
                    onClick={nextSlide}
                >
                    <img src={ArrowRight} className="w-6 h-6 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" />
                </button>
            </div>
        </div>
    );
}

export default Slider;
