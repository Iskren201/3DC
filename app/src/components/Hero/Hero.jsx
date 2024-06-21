import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import item1 from '../../assets/img/img2.jpg';
import item2 from '../../assets/img/img3.jpg';
import stairs from '../../assets/img/stairs.png';

const Hero = () => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
    };

    const slides = [
        {
            id: 1,
            image: item1,
            title: 'Контейнер за Nintendo Switch игри',
            size: 'Размер 29 x 24 см',
            price: '30лв',
            catefory: 'Категории: Гейминг',
            description: 'Slider 1',
        },
        {
            id: 2,
            image: item2,
            title: 'Поставка за Слушалки-облак',
            size: 'Размер 29 x 24 см',
            price: '30лв',
            catefory: 'Категории: Гейминг',
            description: 'колекция',
        },

    ];

    return (
        <div className='text-white p-5'>
            <div className='relative grid grid-cols-3 gap-4 mb-8'>
                <div className='relative'>
                    <img src={stairs} alt='stairs' className='absolute bottom-0 w-3/4 left-1/2 transform -translate-x-1/2' />
                    <img src={item1} alt='Item 2' className='relative rounded-lg mx-auto z-10 w-2/3' />
                </div>
                <div className='relative'>
                    <img src={stairs} alt='stairs' className='absolute bottom-0 w-full left-1/2 transform -translate-x-1/2' />
                    <img src={item1} alt='Item 1' className='relative rounded-lg mx-auto z-10 w-3/4' />
                </div>
                <div className='relative'>
                    <img src={stairs} alt='stairs' className='absolute bottom-0 w-1/2 left-1/2 transform -translate-x-1/2' />
                    <img src={item1} alt='Item 3' className='relative rounded-lg mx-auto z-10 w-1/2' />
                </div>
            </div>
            <div className='mt-8 mb-12'>
                <Slider {...sliderSettings}>
                    {slides.map(slide => (
                        <div key={slide.id} className='text-center'>
                            <img src={slide.image} alt={`Slider ${slide.id}`} className='mx-auto w-24 h-auto' />
                            <p className='slider-title text-start'>{slide.title}</p>
                            <p className='slider-detail'>{slide.size}</p>
                            <p className='slider-detail'>{slide.price}</p>
                            <p className='slider-detail'>{slide.catefory}</p>
                            <p className='text-white'>{slide.description}</p>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Hero;
