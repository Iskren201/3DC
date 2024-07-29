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
        slidesToScroll: 3,
        centerMode: true,
        variableWidth: true,
    };


    const test = 2;

    const slides = [
        {
            id: 1,
            image: item1,
            title: 'Контейнер за Nintendo Switch игри',
            size: 'Размер 15.5 x 15.5 CM',
            price: '25лв',
            category: 'Категории: Гейминг',
        },
        {
            id: 2,
            image: item2,
            title: 'Поставка за химикал за графичен таблет',
            size: 'Размер: 10 x 15 CM',
            price: '25лв',
            category: 'Категории: Гейминг',
        },
        {
            id: 3,
            image: item1,
            title: 'Поставка за слушалки-облак',
            size: 'Размер: 29 x 24 CM',
            price: '30лв',
            category: 'Категории: Гейминг',
        },
        {
            id: 4,
            image: item2,
            title: 'Поставка за контролер-кристал',
            size: 'Размер: 29 x 24 CM',
            price: '45.80лв',
            category: 'Категории: Гейминг',
        },
    ];

    return (
        <div className='text-white p-4 sm:p-6 md:p-10'>
            <div className='relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8'>
                <div className='relative'>
                    <img src={item1} alt='Item 3' className='relative rounded-lg mx-auto z-10 w-1/2 sm:w-2/3 lg:w-3/4' />
                    <img src={stairs} alt='stairs' className='relative bottom-0 h-52 sm:w-3/4  left-1/2 transform -translate-x-1/2' />
                </div>
                {/* <div className='relative'>
                    <img src={stairs} alt='stairs' className='absolute bottom-0 w-1/2 sm:w-3/4 lg:w-full left-1/2 transform -translate-x-1/2' />
                    <img src={item1} alt='Item 1' className='relative rounded-lg mx-auto z-10 w-1/2 sm:w-2/3 lg:w-3/4' />
                </div>
                <div className='relative'>
                    <img src={stairs} alt='stairs' className='absolute bottom-0 w-1/2 sm:w-3/4 lg:w-full left-1/2 transform -translate-x-1/2' />
                    <img src={item1} alt='Item 3' className='relative rounded-lg mx-auto z-10 w-1/2 sm:w-2/3 lg:w-3/4' />
                </div> */}
                <div className='relative'>
                    <img src={item2} alt='Item 2' className='relative rounded-lg mx-auto z-10 w-1/2 sm:w-2/3 lg:w-3/4' />
                    <img src={stairs} alt='stairs' className='relative bottom-0 h-52 sm:w-3/4  left-1/2 transform -translate-x-1/2' />
                </div>
                <div className='relative'>
                    <img src={item1} alt='Item 3' className='relative rounded-lg mx-auto z-10 w-1/2 sm:w-2/3 lg:w-3/4' />
                    <img src={stairs} alt='stairs' className='relative bottom-0 h-52 sm:w-3/4  left-1/2 transform -translate-x-1/2' />
                </div>
            </div>
            <div className='text-white'>
                <Slider {...sliderSettings}>
                    {slides.map(slide => (
                        <div key={slide.id} className='text-center p-4 w-full'>
                            <div className='rounded-lg overflow-hidden'>
                                <img src={slide.image} alt={`Slider ${slide.id}`} className='mx-auto w-full sm:w-[380px] h-[220px] object-cover' />
                                <div className='p-4 text-left'>
                                    <p className='text-start font-bold text-lg mb-2'>{slide.title}</p>
                                    <p className='text-sm mb-1'>{slide.size}</p>
                                    <p className='text-sm mb-1'>{slide.price}</p>
                                    <p className='text-sm'>{slide.category}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Hero;
