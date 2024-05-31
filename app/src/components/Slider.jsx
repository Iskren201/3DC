import React, { useState, useEffect } from 'react';
import '../App.css';

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 1,
            image: '../assets/img/Artboard_2.png',
            content: {
                title: '-НЕЩО ',
                description: 'кратко обяснение на продукта',
                buttonText: 'РАЗБЕРЕТЕ ПОВЕЧЕ'
            }
        },
        {
            id: 2,
            image: '../assets/img/image.png',
            content: {
                title: 'НЕЩО',
                description: 'кратко обяснение на продукта',
                buttonText: 'РАЗБЕРЕТЕ ПОВЕЧЕ'
            }
        },
        {
            id: 3,
            image: '../assets/img/Slice_1.png',
            content: {
                title: 'НЕЩО',
                description: 'кратко обяснение на продукта',
                buttonText: 'РАЗБЕРЕТЕ ПОВЕЧЕ'
            }
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((currentSlide + 1) % slides.length);
        }, 33000); // Смяна на слайд на всеки 3 секунди

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
                <div key={slide.id} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
                    <img src={slide.image} alt="" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 flex flex-col items-start justify-center pl-16 bg-gradient-to-r from-purple-600 to-blue-600 bg-opacity-75">
                        <h1 className="text-[94px] font-trend-sans-five" style={{ textShadow: '0px 0px 10px rgba(0, 0, 0, 0.7)' }}>{slide.content.title}</h1>
                        <h3 className="text-[94px] font-trend-sans-five" style={{ textShadow: '0px 0px 10px rgba(0, 0, 0, 0.7)' }}>{slide.content.secundTitle}</h3>
                        <p className="mt-2 text-2xl font-trend-sans-five" style={{ textShadow: '0px 0px 10px rgba(0, 0, 0, 0.7)' }}>{slide.content.description}</p>
                        <button className="mt-4 px-6 py-2 bg-black bg-opacity-50 text-white rounded hover:bg-opacity-75 shadow-lg font-proxima-nova-condensed" style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' }}>
                            {slide.content.buttonText}
                        </button>
                    </div>
                </div>
            ))}
            <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                <button
                    className="bg-black bg-opacity-50 text-white p-3 rounded-full opacity-65 hover:-translate-y-1 hover:scale-110 duration-300 shadow-lg hover:bg-opacity-75"
                    style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' }}
                    onClick={prevSlide}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
            </div>
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                <button
                    className="bg-black bg-opacity-50 text-white p-3 rounded-full opacity-65 shadow-lg hover:bg-opacity-75 hover:scale-110 duration-300"
                    style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' }}
                    onClick={nextSlide}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default Slider;
