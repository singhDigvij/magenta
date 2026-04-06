const Partners = () => {
  return (
    <section className="py-20 bg-gray-50 text-center">
      
      {/* Heading */}
      <div className="mb-6">
        <h2 className="text-3xl md:text-4xl font-semibold flex justify-center items-center gap-2">
          Our Partners and Networks
          <span className="w-2 h-2 bg-pink-600 rounded-full inline-block translate-y-2.5"></span>
        </h2>

        {/* Underline */}
        <div className="w-12 h-0.5 bg-gray-400 mx-auto mt-3"></div>
      </div>

      {/* Table */}
      <div className="max-w-4xl mx-auto px-4">
        <table className="w-full text-left border-collapse">

          {/* Header */}
          <thead>
            <tr className="text-gray-700 text-sm border-b">
              <th className="py-3">Credit Bureau Services</th>
              <th className="py-3">Shareholders</th>
              <th className="py-3">Auditor/ Associations</th>
              <th className="py-3">Insurance</th>
            </tr>
          </thead>

          {/* Body */}
          <tbody className="text-sm text-gray-600">

            <tr className="border-b">
              <td className="py-3">CRIF-Highmark</td>
              <td className="py-3 font-medium">NELLCOME LIMITED</td>
              <td className="py-3">V. Nagarajan & Co.</td>
              <td className="py-3">LIC</td>
            </tr>

            <tr className="border-b">
              <td className="py-3">EQUIFAX</td>
              <td className="py-3 font-medium">GULAB UNITY TRUST</td>
              <td className="py-3">MFIN</td>
              <td className="py-3">PREMERICA</td>
            </tr>

            <tr className="border-b">
              <td className="py-3">TRANSUNION-CIBIL</td>
              <td className="py-3"></td>
              <td className="py-3">SADHAN</td>
              <td className="py-3"></td>
            </tr>

            <tr>
              <td className="py-3">EXPERIAN</td>
              <td className="py-3"></td>
              <td className="py-3"></td>
              <td className="py-3"></td>
            </tr>

          </tbody>
        </table>
      </div>

    </section>
  );
};

export {Partners}