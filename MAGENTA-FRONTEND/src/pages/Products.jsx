import { Link } from "react-router-dom";

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

      {/* ================= PRODUCTS TABLE SECTION ================= */}
      <section
        className="relative py-20 mt-16 bg-gray-50 overflow-hidden"
        data-aos="zoom-in"
        data-aos-delay="200"
        data-aos-duration="1000"
        data-aos-offset="300"
      >
        {/* Background Image (LIGHT FADE) */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-10"
          style={{
            backgroundImage:
              "url(/assets/images/productssection/products2.jpg)",
          }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-4">
          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12 text-gray-800">
            Features of our products
          </h2>

          {/* Table */}
          <div className="overflow-x-auto shadow-xl rounded-xl border border-gray-200 bg-white">
            <table className="w-full border-collapse">

              {/* Header */}
              <thead className="bg-gray-200 text-gray-800">
                <tr>
                  <th className="p-4 border text-center">Name</th>
                  <th className="p-4 border text-center">Customer Profile</th>
                  <th className="p-4 border text-center">Loan Size</th>
                  <th className="p-4 border text-center">Loan Tenure</th>
                  <th className="p-4 border text-center">Rate of Interest</th>
                </tr>
              </thead>

              {/* Body */}
              <tbody className="text-gray-700">

                {/* Row 1 */}
                <tr>
                  <td className="p-4 border font-semibold align-middle text-left">
                    Abhimanini Microfinance Loan
                  </td>
                  <td className="p-4 border leading-relaxed align-top">
                    The Abhimanini microfinance loan supports income-generation
                    activities for women in rural and semi-urban areas. It
                    enables them to initiate or expand businesses, such as
                    farming, livestock rearing, handicrafts, or small-scale trading.
                  </td>
                  <td className="p-4 border align-middle">
                    INR 20,000 to 70,000
                  </td>
                  <td className="p-4 border align-middle">
                    12 to 24 months
                  </td>
                  <td className="p-4 border align-middle">
                    25.50 %
                  </td>
                </tr>

                {/* Row 2 */}
                <tr className="bg-gray-50">
                  <td className="p-4 border font-semibold align-middle text-left">
                    WASH Microfinance Loan: "Sanitation Prosperity Blessings"
                  </td>
                  <td className="p-4 border leading-relaxed align-top">
                    The WASH microfinance loan focuses on financing toilet
                    construction and repair to improve sanitation facilities in
                    rural households.
                  </td>
                  <td className="p-4 border align-middle">
                    INR 20,000 to 70,000
                  </td>
                  <td className="p-4 border align-middle">
                    18 to 24 months
                  </td>
                  <td className="p-4 border align-middle">
                    25.50 %
                  </td>
                </tr>

                {/* Row 3 */}
                <tr>
                  <td className="p-4 border font-semibold align-middle text-left">
                    Green Product Loan (Biodigester)
                  </td>
                  <td className="p-4 border leading-relaxed align-top">
                    The <b>Biodigester Loan</b>  is designed to finance the purchase and
                    installation of <b>biodigesters</b>, which convert organic waste
                    (animal dung, food waste, etc.) into <b>biogas</b> (a clean cooking
                    fuel) and <b>organic manure</b> (a nutrient-rich fertilizer).
                    <br /><br />
                    Additionally, this loan helps women <b>save money on fuel
                    expenses</b>, enabling them to <b>create small savings</b> that benefit
                    their families.
                    <br /><br />
                    This product not only supports financial well-being but also
                    has a <b>positive environmental impact</b> by reducing waste,
                    lowering carbon emissions, and promoting sustainable
                    agricultural practices.
                  </td>
                  <td className="p-4 border align-middle">
                    INR 25,000 to 50,000
                  </td>
                  <td className="p-4 border align-middle">
                    18 to 24 months
                  </td>
                  <td className="p-4 border align-middle">
                    25.50 %
                  </td>
                </tr>

              </tbody>
            </table>
          </div>

          {/* Button */}
          <div className="mt-12 flex justify-center">
            <Link
              to="/products"
              className="bg-pink-600 text-white px-6 py-3 rounded-md font-medium 
              hover:bg-pink-700 transition duration-300 hover:scale-105"
            >
              Coming up with new products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export { Products };