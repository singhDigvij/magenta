import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const Products = () => {
  return (
    <>
      {/* ================= HERO / BANNER ================= */}
      <section
        className="relative h-[80vh] flex items-center justify-center text-center"
        style={{
          backgroundImage: "url(/assets/images/productssection/products1.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">
            Our Products
          </h1>

          <p className="text-sm md:text-base">
            <Link to="/" className="opacity-80 hover:text-pink-400 transition">
              Home
            </Link>

            <span className="mx-2">{">"}</span>

            <span className="text-pink-400">Our Products</span>
          </p>
        </div>
      </section>

      {/* ================= FEATURES SECTION ================= */}
      <section
        className="relative py-20 mt-16 bg-white overflow-hidden"
        data-aos="zoom-in"
        data-aos-delay="200"
        data-aos-duration="1000"
        data-aos-offset="300"
      >
        <div
          className="absolute top-0 left-0 w-full h-200 bg-cover bg-center opacity-60"
          style={{
            backgroundImage:
              "url(/assets/images/productssection/products2.jpg)",
          }}
        ></div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Heading */}
            <h2
              className="text-2xl md:text-3xl uppercase font-semibold mb-8"
              style={{ color: "#d63384" }}
            >
              Features of Our Products
            </h2>

            {/* List */}
            <ul className="text-gray-800 space-y-4 text-left">
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-pink-600 w-4 h-4 mt-1 shrink-0" />
                <span>
                  MFSPL offers small loans to women in between ₹ 20,000 to ₹
                  50,000 to provide support for income generation activities as
                  per RBI Guidelines. It operates on Joint Liability Group (JLG)
                  lending model wherein a group of individual women come
                  together to borrow from MFSPL. They share responsibilities and
                  guarantee each other’s loans. Each group comprises of 8 -10
                  female members. Loans are not usually offered for housing or
                  personal consumption.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-pink-600 w-4 h-4 mt-1 shrink-0" />
                <span>
                  MFSPL is a member of four credit bureaus Equifax, CIBIL, CRIF
                  Highmark and Experian
                </span>
              </li>

              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-pink-600 w-4 h-4 mt-1 shrink-0" />
                <span>
                  Poor downtrodden women with family income of ₹ 1,00,000 p.a.
                  in rural & ₹ 1,60,000 p.a. in urban areas are the set
                  standards for being eligible for loans.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-pink-600 w-4 h-4 mt-1 shrink-0" />
                <span>
                  The typical JLG customers are economically backward unskilled
                  women in the age group of 18 – 58 years who have no source of
                  regular income/ employment and are deprived of any kind of
                  financial assistance by the Banks. The target customers are
                  those who are able and willing to engage themselves in some
                  income generating activities which would bring in some income
                  to sustain their family and repay the instalments.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-pink-600 w-4 h-4 mt-1 shrink-0" />
                <span>
                  Under its own portfolio, presently MFSPL offers only one loan
                  product of amount ranging from ₹ 20,000 to ₹ 50,000 with
                  tenure of 12 months to 24 months and with repayment cycle of
                  28 days
                </span>
              </li>

              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-pink-600 w-4 h-4 mt-1 shrink-0" />
                <span>
                  MFSPL offers loans for various activities like income
                  generation, agriculture allied and nonfarm activities.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-pink-600 w-4 h-4 mt-1 shrink-0" />
                <span>
                  Company has tie up with Pramerica Life Insurance Limited for
                  providing insurance solutions to the customers
                </span>
              </li>
            </ul>

            {/* Button */}
            <div className="mt-10 flex justify-center">
              <Link
                to="/products"
                className="bg-pink-600 text-white px-6 py-3 rounded-md font-medium 
               hover:bg-pink-700 transition duration-300 hover:scale-105"
              >
                Coming up with new products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export { Products };
