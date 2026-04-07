const funders = [
  "/assets/images/funders/nellcome.png",
  "/assets/images/funders/usha.jpg",
  // "/assets/images/funders/eclear.png",
  "/assets/images/funders/growlogo.png",
  // "/assets/images/funders/rarfincare.jpg",
  "/assets/images/funders/IBL-Logo.png",
  "/assets/images/funders/fwwb.jpg",
  // "/assets/images/funders/muthoot.jpg",
  "/assets/images/funders/uc.jpg",
  // "/assets/images/funders/realtouch.jpg",
  // "/assets/images/funders/efl.jpg",
];

const Funders = () => {
  return (
    <section
      className="py-20 bg-white overflow-hidden"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold flex justify-center items-center gap-2">
            Our Funders
            <span className="w-2 h-2 bg-pink-600 rounded-full inline-block translate-y-2"></span>
          </h2>
          <div className="w-12 h-0.5 bg-gray-400 mx-auto mt-3"></div>
        </div>

        {/* Slider */}
        <div className="relative overflow-hidden">
          <div className="flex w-max animate-scroll gap-16 items-center">
            {/* Duplicate logos for infinite effect */}
            {[...funders, ...funders].map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt="funder"
                className="h-16 object-contain transition duration-300 filter-none"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Funders };
