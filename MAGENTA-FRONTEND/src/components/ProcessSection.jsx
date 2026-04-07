import { FaThLarge, FaArrowRight, FaHeadset } from "react-icons/fa";

const processData = [
  {
    icon: FaThLarge,
    text: "Head Office in Vasant Kunj New Delhi-110070",
  },
  {
    icon: FaArrowRight,
    text: "Branches in 3 States Punjab, Haryana, Uttar Pradesh",
  },
  {
    icon: FaHeadset,
    text: "Support to Operational area via exquisite Technology system",
  },
];

const ProcessSection = () => {
  return (
    <section
      className="py-20 bg-gray-100"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold flex justify-center items-center gap-2">
            Process Flow
            <span className="w-2 h-2 bg-pink-600 rounded-full inline-block translate-y-2.5"></span>
          </h2>
          <div className="w-12 h-0.5 bg-gray-400 mx-auto mt-3"></div>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT IMAGE */}
          <div className="group perspective cursor-pointer">
            <div className="relative w-full h-105 transition-transform duration-700 transform-style preserve-3d group-hover:rotate-y-180">
              {/* FRONT SIDE (IMAGE) */}
              <div className="absolute inset-0 backface-hidden rounded-lg overflow-hidden">
                {/* Gradient Wrapper */}
                <div className="bg-linear-to-br from-pink-200 via-orange-200 to-pink-300 p-4 h-full flex items-center justify-center">
                  <img
                    src="/assets/images/process/process.png"
                    alt="Process"
                    className="max-h-full max-w-full object-contain rounded-md shadow-md"
                  />
                </div>
              </div>

              {/* BACK SIDE (CONTENT) */}
              <div className="absolute inset-0 backface-hidden rotate-y-180 bg-black text-white flex items-center justify-center p-6 rounded-lg">
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-3">
                    Microfinance Activity and Technology
                  </h3>
                  <p className="text-sm leading-relaxed">
                    IT intervention into Microfinance Industry enhances the
                    overall efficiency of the sector. Microfinance Institutions
                    are investing heavily to bring advancements in usage of IT
                    in the process of lending which makes the task simpler and
                    thus help the institutions to increase reachability of the
                    services, Indian population especially in the rural areas
                    are resistant to technological changes that is acting as a
                    major barrier in the effective utilization of the services.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT LIST */}
          <div className="space-y-6" data-aos="fade-left" data-aos-delay="300">
            {processData.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  {/* Icon Box */}
                  <div
                    className="w-14 h-14 flex items-center justify-center  rounded-md bg-white shadow-sm 
                                  group-hover:bg-pink-600 transition duration-300"
                  >
                    <Icon className="text-pink-600 group-hover:text-white transition duration-300" />
                  </div>

                  {/* Text */}
                  <p className="text-gray-700 group-hover:text-pink-600 transition duration-300">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export { ProcessSection };
