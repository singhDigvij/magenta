import { Link } from "react-router-dom";
import { useState } from "react";

const BusinessModel = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const accordionData = [
    {
      title: "Purpose of Loan",
      content: "Income generating, Agriculture allied and non-farm activities.",
    },
    {
      title: "Customer Age",
      content: "Customers between 18 to 58 years are eligible.",
    },
    {
      title: "Credit Bureau",
      content:
        "Equifax/Highmark or others.",
    },
    {
      title: "Eligibility Criteria of Credit Bureau",
      content:
        "Not more than 1 NBFC-MFI lending Loan outstanding not exceed 1,00,000 No overdue of any NBFC-MFI/Bank.",
    },
    {
      title: "Maximum Household Annual Income",
      content: "Rural Areas – 1,00,000, Urban & semi urban Areas – 1,60,000.",
    },
     {
      title: "Loan Size",
      content: "Rs. 20,000/- to Rs. 30,000/- (First Cycle) Up to 50,000/- (Second Cycle).",
    },
     {
      title: "Interest Rate",
      content: "As per RBI guideline.",
    },
     {
      title: "Loan Processing fee",
      content: "1% of the loan amount + GST.",
    },
     {
      title: "Insurance fee",
      content: "As per policy.",
    },
     {
      title: "Loan tenure",
      content: "12 Months (Loans up to Rs. 30,000) and for above Rs. 30,000/-24 Months.",
    },
     {
      title: "Instalments Days",
      content: "28 Days.",
    },
     {
      title: "Insurance coverage",
      content: "Member and her nominee during loan tenure.",
    },
     {
      title: "JLG formation",
      content: "5-8 members.",
    },
     {
      title: "Center Meeting Formation",
      content: "Minimum 10 members.",
    },
     {
      title: "Trainings for group",
      content: "3 Day CGT and 1 Day GRT, CGT stands for Compulsory Group Training and GRT stands for Group Recognition Test.",
    },
     {
      title: "Field Staff Household Visits for group",
      content: "100% household verification of members.",
    },
     {
      title: "Pre-Closer",
      content: "Allowed without any penalty and interest.",
    },
     {
      title: "Delayed Payment",
      content: "Penality as per RBI Guidelines.",
    },
     {
      title: "Disbursements",
      content: "Non cash mode and in special cases cash disbursement is allowed after prior approval of MD/CEO/ person nominated by MD.",
    },
     {
      title: "Collection Process",
      content: "Centre deposit their repayment to field executive.",
    },
     {
      title: "Radius of branch operation",
      content: "20 KM (for above approval will be taken from COO/MD).",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      {/* ================= HERO / BANNER ================= */}
      <section
        className="relative h-[80vh] flex items-center justify-center text-center"
        style={{
          backgroundImage:
            "url(/assets/images/businessmodel/businessmodel2.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">
            Our Business Models
          </h1>

          <p className="text-sm md:text-base">
            <Link to="/" className="opacity-80 hover:text-pink-400 transition">
              Home
            </Link>

            <span className="mx-2">{">"}</span>

            <span className="text-pink-400">Our Business Models</span>
          </p>
        </div>
      </section>

      {/* ================= BUSINESS MODEL ACCORDION ================= */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 w-full">
          {/* Heading */}
          <div className="text-center mb-12 max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Our Business Model<span className="text-pink-600">.</span>
            </h2>

            <div className="w-10 h-0.5 bg-gray-400 mx-auto mt-4 mb-6"></div>

            <p className="text-gray-600 leading-relaxed">
              We work with women from rural and semi-urban areas...
            </p>
          </div>

          {/* Process Label */}
          <div className="flex items-center justify-center mb-8">
            <div className="h-px bg-gray-300 w-20"></div>
            <span className="mx-4 text-sm text-gray-500">Process</span>
            <div className="h-px bg-gray-300 w-20"></div>
          </div>

          {/* Accordion */}
          <div className="space-y-4 w-full max-w-6xl mx-auto">
            {accordionData.map((item, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-md overflow-hidden shadow-sm"
              >
                {/* Header */}
                <div
                  onClick={() => toggleAccordion(index)}
                  className={`px-6 py-4 cursor-pointer flex justify-between items-center transition 
              ${
                activeIndex === index
                  ? "bg-pink-600 text-white"
                  : "bg-white text-gray-800 hover:bg-gray-100"
              }`}
                >
                  <span className="font-medium">{item.title}</span>
                  <span>{activeIndex === index ? "-" : "+"}</span>
                </div>

                {/* Content */}
                {activeIndex === index && (
                  <div className="px-6 py-4 bg-white text-gray-600">
                    {item.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export { BusinessModel };
