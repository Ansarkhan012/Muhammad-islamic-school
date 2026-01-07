'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import Link from 'next/link';

export default function Hero() {
  const slides = [
    {
      id: 1,
      image: '/images/1st.avif',
      title: 'Start Your Complete Quran Learning Experience',
      subtitle: 'Interactive Online Quran Classes Designed For All Ages, Anytime, Anywhere',
      highlightColor: 'text-[#C9A24D]'
    },
    {
      id: 2,
      image: '/images/2nd.avif',
      title: 'Learn from Certified Quran Teachers',
      subtitle: 'One-on-one sessions with native Arabic speakers and personalized learning plans',
      highlightColor: 'text-[#C9A24D]'
    },
    {
      id: 3,
      image: '/images/3rd.webp',
      title: 'Master Quran Recitation & Tajweed',
      subtitle: 'Professional guidance to perfect your pronunciation and understanding',
      highlightColor: 'text-[#C9A24D]'
    }
  ];

  return (
    <section className="relative cursor-pointer min-h-screen md:h-125">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
       
        fadeEffect={{ crossFade: false }}
        navigation={false}
        pagination={{ 
          clickable: true,
          dynamicBullets: true 
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="h-full relative"
              style={{
                backgroundImage: `url('${slide.image}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-black/50"></div>
              
              <div className="container mx-auto px-4 h-full flex items-center relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                  <h1 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in">
                    {slide.title.split(' ').map((word, i) => (
                      <span key={i} className={i === 3 ? slide.highlightColor : 'text-white'}>
                        {word}{' '}
                      </span>
                    ))}
                  </h1>
                  
                  <p className="text-sm md:text-md text-gray-200 mb-8">
                    {slide.subtitle}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link href={"/contact"} className="bg-[#C9A24D] text-white px-4 md:px-8 py-4 rounded-xl font-bold text-md md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                      Register Now
                    </Link>
                    <Link href={"/contact"} className="border-2 border-[#C9A24D] text-white px-4 md:px-8  py-4 rounded-xl font-bold text-md md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-[#C9A24D] hover:text-white">
                      Get Free Trial
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}