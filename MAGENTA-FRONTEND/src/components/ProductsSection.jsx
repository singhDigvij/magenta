import { Link } from "react-router-dom";

const ProductSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 items-center gap-10">
          {/* Left Image */}
          <div data-aos="zoom-in" data-aos-delay="200">
            <img
              src="/assets/images/productssection/productssection1.jpg"
              alt="Product"
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>

          {/* Right Content */}
          <div data-aos="fade-left" data-aos-delay="300">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900">
              PRODUCT - Income Generation Loan (Abhimanini)
            </h3>

            <p className="text-gray-600 leading-relaxed mb-6">
              Abhimanini stands for “Proud of Herself”. This loan is designed
              especially for low-income households who aspire to become
              financially independent, build self-respect in themselves, can
              turn their dreams into reality and lead a happy and colourful
              life.
            </p>

            <Link
              to="/products"
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

export { ProductSection };
