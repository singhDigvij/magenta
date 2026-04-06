// src/components/HeroSlider.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { motion } from "framer-motion";
import { useState } from "react";

const slides = [
  {
    id: 1,
    title: ["Women Empowerment, Financial Inclusion"],
    subtitle:
      "We’re MAGENTA and we believe Small Opportunities are Beginning of Great Change",
    bg: "/assets/images/backgrounds/slider1.jpg",
  },
  {
    id: 2,
    title: ["Accessible Loans for Every Individual"],
    subtitle:
      "Empowering Communities Through Financial Support and Microfinance Solutions",
    bg: "/assets/images/backgrounds/slider2.jpg",
  },
];

const HeroSlider = () => {

    const [activeIndex, setActiveIndex] = useState(0);

   return (
    <section className="relative" id="home">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="relative min-h-125 md:min-h-screen flex items-center justify-center overflow-hidden">
              
              {/* Background */}
              <motion.div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${slide.bg})` }}
                initial={{ scale: 1 }}
                animate={{ scale: 1.1 }}
                transition={{
                  duration: 5,
                  ease: "easeOut",
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50"></div>

              {/* Content */}
              <div className="relative z-10 container mx-auto px-4 text-white text-center max-w-4xl">
                
                {/* Subtitle */}
                <motion.h1
                  key={`subtitle-${index}-${activeIndex}`}
                  className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4"
                  initial={{ opacity: 0, y: 40 }}
                  animate={
                    activeIndex === index
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 40 }
                  }
                  transition={{ duration: 0.8 }}
                >
                  {slide.subtitle}
                </motion.h1>

                {/* Title */}
                <motion.p
                  key={`title-${index}-${activeIndex}`}
                  className="text-base md:text-lg text-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    activeIndex === index
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {slide.title.map((line, i) => (
                    <span key={i}>{line}</span>
                  ))}
                </motion.p>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export { HeroSlider };