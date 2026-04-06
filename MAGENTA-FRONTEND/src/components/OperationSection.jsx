import { Link } from "react-router-dom";

const OperationSection = () => {
  return (
    <section
      className="py-20"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 items-center gap-10">

          {/* Left Image */}
          <div data-aos="fade-up" data-aos-delay="200">
            <img
              src="/assets/images/operation/operation1.jpg" 
              alt="Operational Model"
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>

          {/* Right Content */}
          <div data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900">
              Operational Model
            </h3>

            <p className="text-gray-600 leading-relaxed mb-6">
              A well-defined process is followed by the MFI for area selection,
              group formation, loan appraisal, disbursement, and collection.
            </p>

            <Link
              to="/operations" // you can change route if needed
              className="inline-block bg-pink-600 text-white px-6 py-2 rounded-md font-medium hover:bg-pink-700 transition"
            >
              Know More
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export { OperationSection };