import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const leadersData = [
  {
    name: "Manish Mandal",
    role: "Accounts",
    image: "/assets/images/leaders/manish.jpg",
    desc: `Mr. Manish Mandal is a graduate of IGNOU University in Commerce stream.
           He has been associated with Magenta Finance Services Pvt. Ltd.(the Company) from last Six Month as an Accounts Head. I have around 5 years’ experience in accounts and finance field. I leading the accounts and finance department in the company along with compliance related to Income Tax, Goods & Services Tax, Accounting policies.`,
  },
  {
    name: "Samrat Roy",
    role: "Chief Executive Officer",
    image: "/assets/images/leaders/samrat.jpg",
    desc: `He is associate with Magenta Finance Services Pvt Ltd (the Company) since inception and he is designated as the Chief Executive Officer (CEO) of the Company 
	and under his leadership, the Company had started its Microfbusiness and the business of the Company has grown significantly. 
	He managed business operations of the Company. His expertise lies field of Financial Management, 
	Business Strategy and Planning, Business Analysis and DeveloProject implementation, Fundraising,
	Capacity building of the Employees, key relationship managemhandling all dimensions of the Company.
	He had also played a role of advisor to the Directors and Investhe Company.`,
  },
  {
    name: "Hitashi Sayal",
    role: "Company Secretary",
    image: "/assets/images/leaders/hitashi.jpg",
    desc: `I am Hitashi Syal, a dedicated Company Secretary with a wealth of experience in the intricacies of debt listing and listing companies. I possess an extensive and nuanced understanding of corporate laws, acquired through dedicated professional experience.
	My proficiency extends to navigating the complexities oframeworks and ensuring meticulous adherence to regulatory requirThis depth of knowledge enables me to provide strategic insigsolutions formally and proficiently.
	Committed to upholding the highest legal compliance standleverage my expertise to contribute effectively to a profeenvironment.
    Joining this organization, known for its excellence in fostering learning and professional development, I am committed to contributing my expertise to enhance its already notable standing.
    With a proactive approach, I am determined to put forth unwavering efforts and hard work to contribute to the organization's continuous improvement.
     The exceptional quality of the staff complements the conducive learning environment, further motivating me to collaborate and elevate the collective success of the team. I am enthusiastic about leveraging my skills to fortify the organization's position as a leader in the industry, and I am confident that my dedication will play a pivotal role in achieving this goal.
`,
  },
  {
    name: "Manoj Kumar Sharma",
    role: "Operation Head",
    image: "/assets/images/leaders/manoj.jpg",
    desc: `Mr. Manoj Kumar Sharma a native of ALWAR (Raj), holds a Post degree in Management from JNU, Jaipur University. 
	He is 35 years old. He can speak and write Hindi, and English language. Mr. Manoj Kumar started his working career 
	in 2008 with Humana People to People India as a Development instructor and he holds 14 years of experience in Microfinance.
	He also has expertise in Risk management, Cost Control, Agile development, Preparation of budgets, Planning Marketing,
	and Negotiating contracts. He joined Magenta Finance in the year 2018 as the Operations Head, 
	he is responsible for taking all types of decisions for the Business Operations of the Company. 
`,
  },
];

const Leaders = () => {
  return (
    <section
      className="relative py-24 bg-cover bg-center"
      style={{
        backgroundImage: "url('/assets/images/leaders/leaders-bg.jpg')",
      }}
      data-aos="fade-up"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative max-w-4xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-16 flex justify-center items-center gap-2">
          Our Leaders
          <span className="w-2 h-2 bg-pink-600 rounded-full inline-block translate-y-2"></span>
        </h2>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop={true}
          className="leaders-swiper"
        >
          {leadersData.map((leader, index) => (
            <SwiperSlide key={index}>
              {/* Card */}
              <div className="bg-white rounded-xl shadow-xl px-8 py-10 max-w-xl mx-auto">
                
                {/* Image (INSIDE CARD - NO CROP) */}
                <div className="w-24 h-24 mx-auto mb-4 rounded-full border-4 border-white shadow-md bg-white flex items-center justify-center overflow-hidden">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Name */}
                <h3 className="text-lg font-semibold text-gray-900">
                  {leader.name}
                </h3>

                {/* Role */}
                <p className="text-sm text-gray-500 mb-4">{leader.role}</p>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {leader.desc}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom Styling */}
      <style jsx>{`
        .leaders-swiper .swiper-button-next,
        .leaders-swiper .swiper-button-prev {
          color: white;
          width: 30px;
          height: 30px;
        }

        .leaders-swiper .swiper-button-next::after,
        .leaders-swiper .swiper-button-prev::after {
          font-size: 16px;
          font-weight: bold;
        }

        .leaders-swiper .swiper-pagination-bullet {
          background: #ccc;
          opacity: 1;
        }

        .leaders-swiper .swiper-pagination-bullet-active {
          background: #db2777;
        }
      `}</style>
    </section>
  );
};
export { Leaders };
