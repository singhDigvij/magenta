import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaLinkedinIn,
} from "react-icons/fa";

const directorsData = [
  {
    name: "Raj Kumar Singh",
    role: "Director",
    image: "/assets/images/directors/raj-kumar.jpg",
  },
  {
    name: "Kim Peter Hansen",
    role: "Director",
    image: "/assets/images/directors/kim-peter.jpg",
  },
  {
    name: "Asok Kumar Rathnam",
    role: "Independent Director",
    image: "/assets/images/directors/asok-kumar.jpg",
  },
  {
    name: "Tribikram Nayak",
    role: "Director",
    image: "/assets/images/directors/tribikram.jpg",
  },
];

const Directors = () => {
  return (
    <section className="py-20 bg-white text-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-2 flex justify-center items-center gap-2">
        Directors
        <span className="w-2 h-2 bg-pink-600 rounded-full inline-block translate-y-2.5"></span>
      </h2>

      {/* Small line under heading */}
      <div className="w-12 h-0.5 bg-gray-400 mx-auto mt-3"></div>

      {/* Description */}
      <p className="max-w-3xl mx-auto text-gray-600 mb-12 text-[18px] leading-relaxed">
        MAGENTA Board has four Directors out of which three are Indian national
        and fourth individual is Danish citizen. All the four individuals have
        been passionately involved in the banking sector, development sector,
        working in the domain of livelihood, education and microfinance.
      </p>

      {/* Slider */}
      <div className="max-w-6xl mx-auto px-4">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          autoplay={{ delay: 2500 }}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {directorsData.map((director, index) => (
            <SwiperSlide key={index}>
              <div className="group cursor-pointer">
                {/* Image Container */}
                <div className="relative overflow-hidden rounded-xl shadow-md">
                  {/* Image */}
                  <img
                    src={director.image}
                    alt={director.name}
                    className="w-full h-90 object-cover"
                  />

                  {/* Pink Overlay */}
                  <div className="absolute inset-0 bg-pink-600/60 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center text-center px-4">
                    {/* Name */}
                    <h3 className="text-white text-lg font-semibold">
                      {director.name}
                    </h3>

                    {/* Role */}
                    <p className="text-white text-sm mb-4">{director.role}</p>

                    {/* Icons */}
                    <div className="flex gap-3">
                      {[
                        FaFacebookF,
                        FaTwitter,
                        FaGooglePlusG,
                        FaLinkedinIn,
                      ].map((Icon, i) => (
                        <a
                          key={i}
                          href="/home"
                          className="bg-white text-pink-600 p-2 rounded-full hover:bg-gray-100 transition cursor-pointer"
                        >
                          <Icon size={14} />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Pagination Styling */}
      <style jsx>{`
        .swiper-pagination-bullet {
          background: #ccc;
          opacity: 1;
          width: 10px;
          height: 10px;
          margin: 0 6px !important;
        }
        .swiper-pagination-bullet-active {
          background: #db2777;
        }
      `}</style>
    </section>
  );
};

export { Directors };
