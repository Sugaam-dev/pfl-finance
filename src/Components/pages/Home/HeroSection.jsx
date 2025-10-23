import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { 
  Autoplay, 
  Pagination, 
  Navigation, 
  EffectFade
} from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

import './Styles/HeroSection.css';

export default function HeroSection() {
  return (
    <section className="fullscreen-hero-wrapper">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        fadeEffect={{
          crossFade: true
        }}
        speed={1200}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: false,
        }}
        navigation={true}
        loop={true}
        className="hero-swiper-container"
      >
        {/* First slide - eager loading */}
        <SwiperSlide>
          <div className="slide-inner">
            <img 
              src="/images/banner1.jpg" 
              alt="Slide 1"
              loading="eager"
              className="slide-image"
            />
          </div>
        </SwiperSlide>

        {/* Remaining slides - native lazy loading */}
        <SwiperSlide>
          <div className="slide-inner">
            <img 
              src="/images/banner2.jpg" 
              alt="Slide 2"
              loading="lazy"
              className="slide-image"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide-inner">
            <img 
              src="/images/banner3.jpg" 
              alt="Slide 3"
              loading="lazy"
              className="slide-image"
            />
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Content overlay */}
      <div className="hero-overlay-content">
        <h1 className="hero-main-heading">Welcome to PFL Finance</h1>
        <p className="hero-description-text">
          Empowering your growth with smart, transparent, and reliable financial solutions tailored for your success.
        </p>
        <button className="hero-cta-button">
          Get Started
          <span className="button-arrow"></span>
        </button>
      </div>
    </section>
  );
}
