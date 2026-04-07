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
      "To make half a million poor families, who are out of the normal banking system in rural and semi-urban areas in India, financially independent",
  },
  {
    id: "04",
    title: "Commitment.",
    description: `Our Commitment to Financial Inclusion

• Increase Outreach: The company aims to increase its outreach to reach more underserved communities and individuals. This goal may involve expanding its branch network, leveraging technology to reach remote areas, and developing partnerships with other organizations to extend its services.

• Expand Product Portfolio: The company expands its product portfolio to meet the diverse needs of its customers. This may involve developing new financial products or modifying existing ones to better suit the needs of its target market.

• Improve Operational Efficiency: The company improves its operational efficiency to reduce costs and improve customer service. This may involve streamlining processes, automating tasks, and implementing best practices in its operations.

• Enhance Risk Management: The company enhances its risk management framework to ensure the sustainability of its operations. This may involve developing new risk management tools, strengthening its credit appraisal processes, and implementing effective monitoring and recovery mechanisms.

• Increase Financial Sustainability: The company increases its financial sustainability by achieving profitability and ensuring the long-term viability of its operations. This may involve diversifying its funding sources, optimizing its loan portfolio, and minimizing operational risks.

• Foster Social Impact: The company fosters social impact by promoting entrepreneurship, creating self-employment opportunities, and supporting small businesses. This may involve providing financial education and training, mentoring entrepreneurs, and facilitating access to markets.

• Meet Regulatory Compliance: The company meets regulatory compliance requirements to ensure its operations are conducted within legal and ethical frameworks. This may involve maintaining accurate and transparent financial records, adhering to regulatory guidelines, and implementing effective compliance monitoring mechanisms.`,
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
            data-aos="zoom-in"
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
            data-aos="zoom-in"
            data-aos-delay="400"
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex gap-4 items-start"
              data-aos="zoom-in"
              data-aos-delay="100"
              data-aos-duration="1000"
              data-aos-offset="200"
            >
              {/* Number */}
              <h2 className="text-4xl lg:text-5xl font-bold text-pink-600">
                {step.id}.
              </h2>

              {/* Content */}
              <div>
                <h6 className="text-lg font-semibold mb-2">{step.title}</h6>
                <p className="text-gray-600 text-md leading-relaxed whitespace-pre-line">
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
