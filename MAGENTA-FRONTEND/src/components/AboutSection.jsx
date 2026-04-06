import React from "react";

const steps = [
  {
    id: "01",
    title: "Vision.",
    description:
      "To strive for a life of dignity for The Poor, especially women and under privileged people of the society by working in solidarity with the Poor through providing financial services in the most efficient manner, which help in promoting livelihood opportunity and economic development",
  },
  {
    id: "02",
    title: "Mission.",
    description:
      "To provide innovative and sustainable financial accessibility to the rural, semi-urban and urban poor people, especially women by working shoulder to shoulder with them for women empowerment, so that they can achieve their ambitions and live financially stable better life",
  },
  {
    id: "03",
    title: "Objective.",
    description:
      "To Make Half A Million Poor Families, Who Are Out Of The Normal Banking System In Rural, Urban And Semi-Urban Areas In India Financially Independent By 2023",
  },
];

const AboutSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="flex flex-col items-center mb-16 text-center">
          <p className="text-gray-700 text-xl lg:text-2xl leading-[1.7] max-w-5xl font-medium">
            We work with women from rural and semi-urban areas. We focus on
            providing financial support to those poor women who are not able to
            take benefits of the Banking system
            <span className="text-pink-600"> .</span>
          </p>

          {/* Divider */}
          <div className="w-12 h-0.5 bg-gray-400 mt-6"></div>
        </div>

        {/* Images */}
        <div className="grid lg:grid-cols-12 gap-6 items-center mb-16">
          {/* Left Big Image */}
          <div
            className="lg:col-span-8"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-offset="300"
          >
            <div className="overflow-hidden rounded-xl">
              <img
                src="/assets/images/aboutsection/aboutsection1.jpg"
                alt="About"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Small Image */}
          <div
            className="lg:col-span-4"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-offset="300"
          >
            <div className="overflow-hidden rounded-xl">
              <img
                src="/assets/images/aboutsection/aboutsection2.jpg"
                alt="About Side"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="flex gap-4 items-start"
              data-aos="fade-up"
              data-aos-delay={index * 200} // 👈 stagger effect
              data-aos-duration="1000"
              data-aos-offset="200"
            >
              {/* Number */}
              <h2 className="text-4xl lg:text-5xl font-bold text-red-600">
                {step.id}.
              </h2>

              {/* Content */}
              <div>
                <h6 className="text-lg font-semibold mb-2">{step.title}</h6>
                <p className="text-gray-600 text-md leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { AboutSection };
