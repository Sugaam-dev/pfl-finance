import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { 
  Autoplay, 
  Pagination, 
  Navigation, 
  EffectCreative,
  Parallax,
  Zoom
} from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-creative';
import 'swiper/css/parallax';
import 'swiper/css/zoom';
import './Styles/HeroSection.css'; // Import custom CSS for styling

export default function HeroSection() {
  return (
    <section className="fullscreen-hero-wrapper">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectCreative, Parallax, Zoom]}
        effect="creative"
        parallax={true}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -800],
            rotate: [0, 90, 0],
          },
          next: {
            translate: [0, 0, -800],
            rotate: [0, -90, 0],
          },
        }}
        speed={1800}
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
        <SwiperSlide>
          <div className="slide-inner" data-swiper-parallax="-23%">
            <img 
              src="/images/banner1.jpg" 
              alt="Slide 1" 
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-inner" data-swiper-parallax="-23%">
            <img 
              src="/images/banner2.jpg" 
              alt="Slide 2" 
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-inner" data-swiper-parallax="-23%">
            <img 
              src="/images/banner3.jpg" 
              alt="Slide 3" 
            />
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Content overlay */}
      <div className="hero-overlay-content">
        <h1 className="hero-main-heading" data-swiper-parallax="-300">Welcome to Our Website</h1>
        <p className="hero-description-text" data-swiper-parallax="-200">
          Discover amazing experiences with our innovative solutions 
          designed to transform your business
        </p>
        <button className="hero-cta-button" data-swiper-parallax="-100">
          Get Started
          <span className="button-arrow"></span>
        </button>
      </div>
    </section>
  );
}
