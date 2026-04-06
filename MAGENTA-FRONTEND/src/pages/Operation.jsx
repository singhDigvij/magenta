import { Link } from "react-router-dom";

const Operation = () => {
  return (
    <>
      {/* ================= HERO / BANNER ================= */}
      <section
        className="relative h-[80vh] flex items-center justify-center text-center"
        style={{
          backgroundImage: "url(/assets/images/operation/operation2.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">
            Operational Model
          </h1>

          <p className="text-sm md:text-base">
            <Link to="/" className="opacity-80 hover:text-pink-400 transition">
              Home
            </Link>

            <span className="mx-2">{">"}</span>

            <span className="text-pink-400">Our Operational Model</span>
          </p>
        </div>
      </section>

      {/* ================= OPERATION TABLE SECTION ================= */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              {/* Table Head */}
              <thead>
                <tr className="border-b border-gray-700 text-left">
                  <th className="py-4 px-6 w-[5%]">#</th>
                  <th className="py-4 px-6 w-[60%]">Step Description</th>
                  <th className="py-4 px-6 w-[20%]">Staff Responsibilities</th>
                  <th className="py-4 px-6 w-[15%]">Approving Authorities</th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody>
                {/* Row 1 */}
                <tr className="border-b border-gray-800 align-middle">
                  <td className="py-6 px-6">1</td>

                  <td className="py-6 px-6 pr-12 text-gray-300 leading-relaxed">
                    Area selection: The villages are Identified which are under
                    20 KM distance from branch. The villagers are gathered, and
                    field executive tries to know what their income level is,
                    their occupational patterns, their income generation
                    activity, their money lending process, sources of their
                    money lenders, interest charged by them, presence of other
                    MFI’s. Regular Interactions are conducted with the sarpanch,
                    anganwadi worker, schoolteachers, etc. Village survey form
                    is filled with the information as total number of
                    households, literacy rate, sources of income, main business
                    activities, financial dependency, irrigation facility, major
                    threats etc. by the Field Executive (FE). The village survey
                    form is verified by the Branch Manager and the survey report
                    shall be approved by Area Manager or Equivalent Designation
                    After filling the form, the date of projection meeting is
                    decided and conveyed to the interested people and request
                    them to take out their time to take part in it and how it
                    will be beneficial to them to save them from money lenders
                    who are exploiting them in the name of lending money.
                  </td>

                  <td className="py-6 px-6 text-gray-300">
                    Field Executive Recommendation: BM
                  </td>

                  <td className="py-6 px-6 text-gray-300">Area Manager</td>
                </tr>

                {/* Row 2 */}
                <tr className="border-b border-gray-800 align-middle">
                  <td className="py-6 px-6">2</td>

                  <td className="py-6 px-6 pr-12 text-gray-300 leading-relaxed">
                    Information/Projection Meeting: After getting approval on
                    the village survey, Field Executive makes a visit to
                    organize a projection meeting and ensure that all community
                    should participate in the meeting. The purpose of the
                    meeting is to make potential clients and residents of the
                    selected operational area, terms, and conditions and to
                    generate an interest in taking a loan. Field Executive makes
                    note of people who are interested and can convince others in
                    getting involved in such activities to raise their living
                    standard and support family income. He also informs them
                    about the further process of group formation and decides the
                    meeting date and time, give contact details to them.
                  </td>

                  <td className="py-6 px-6 text-gray-300">Field Executive</td>

                  <td className="py-6 px-6 text-gray-300">Branch Manager</td>
                </tr>

                {/* Row 3 */}
                <tr className="border-b border-gray-800 align-middle">
                  <td className="py-6 px-6">3</td>

                  <td className="py-6 px-6 pr-12 text-gray-300 leading-relaxed">
                    Group Formation Meeting: It is vital for a group that all
                    members should know each other, and all members should
                    accept the responsibilities. To ensure the above, the field
                    executives and the Branch Managers must explain the group
                    responsibilities regularly to the members during training
                    and GRT process etc.
                  </td>

                  <td className="py-6 px-6 text-gray-300">Field Executive</td>

                  <td className="py-6 px-6 text-gray-300">Branch Manager</td>
                </tr>

                {/* Row 4 */}
                <tr className="border-b border-gray-800 align-middle">
                  <td className="py-6 px-6">4</td>

                  <td className="py-6 px-6 pr-12 text-gray-300 leading-relaxed">
                    Members Selection & Credit Bureau: Field Executive
                    facilitates formation of group among the interested people.
                    Groups need to be formed by the clients as per their
                    convenience. The data along with KYC documents sourced from
                    the selected members is sent for the Credit Bureau Check.
                    After the credit bureau check report is generated, the
                    client who are approved from that, for them the CGT is done.
                  </td>

                  <td className="py-6 px-6 text-gray-300">Field Executive</td>

                  <td className="py-6 px-6 text-gray-300">Branch Manager</td>
                </tr>

                {/* Row 5 */}
                <tr className="border-b border-gray-800 align-middle">
                  <td className="py-6 px-6">5</td>

                  <td className="py-6 px-6 pr-12 text-gray-300 leading-relaxed">
                    Compulsory Group Training: After group formation, a 3-day
                    Compulsory Group Training (CGT) of the members is organized
                    in a particular location, preferably in one of the member’s
                    house which should be approx. 1 Km walk from each member
                    house. The CGT is meant to provide a complete awareness
                    about the MFSPL terms and regulations, roles and
                    responsibilities of a group member and Centre as a whole.
                  </td>

                  <td className="py-6 px-6 text-gray-300">Field Executive</td>

                  <td className="py-6 px-6 text-gray-300">Branch Manager</td>
                </tr>

                {/* Row 6 */}
                <tr className="border-b border-gray-800 align-middle">
                  <td className="py-6 px-6">6</td>

                  <td className="py-6 px-6 pr-12 text-gray-300 leading-relaxed">
                    Group Recognition Test (GRT): All members must undergo GRT
                    process for a loan application. GRT should be undertaken by
                    Branch Manager (BM). It is undertaken to ensure the quality
                    of training and suitability of the group members to borrow a
                    loan from MFSPL. It starts with everybody reciting Pratigya
                    Patra. Household verification is conducted during the GRT.
                    In this the Branch Manager must visit each house and should
                    make sure that all the particulars mentioned in the loan
                    application form are true and hold valid.
                  </td>

                  <td className="py-6 px-6 text-gray-300">Field Executive</td>

                  <td className="py-6 px-6 text-gray-300">Branch Manager</td>
                </tr>

                {/* Row 7 */}
                <tr className="border-b border-gray-800 align-middle">
                  <td className="py-6 px-6">7</td>

                  <td className="py-6 px-6 pr-12 text-gray-300 leading-relaxed">
                    Loan Application Process: After successful completion of GRT
                    process, the group undergoes loan application process for
                    the disbursement purpose. The FE must fix a date for filling
                    up the loan application process in presence of all the
                    members.
                  </td>

                  <td className="py-6 px-6 text-gray-300">Field Executive</td>

                  <td className="py-6 px-6 text-gray-300">Branch Manager</td>
                </tr>

                {/* Row 8 */}
                <tr className="border-b border-gray-800 align-middle">
                  <td className="py-6 px-6">8</td>

                  <td className="py-6 px-6 pr-12 text-gray-300 leading-relaxed">
                    Documentation and Loan Disbursements: Application Form is
                    given to each member for duly filling of all details
                    pertaining to loan and its purpose. Loan format verification
                    is done by FE and then he recommends for approval to BM. To
                    receive credit, the beneficiary signs on a revenue stamp on
                    loan format, counter signed by group leader. All the
                    disbursement will take place in non[1]cash mode (NEFT, RTGS,
                    etc.). The cases with satisfactory disbursement documents
                    will be sent to accounts for disbursement. Basis the
                    conformation received from branch; accounts will disburse
                    the loan amount to the client’s respective saving account
                    through banking channels (NEFT) within next 24-48 hours
                    (Subject to bank holiday). The amount transferred to
                    client’s saving account will be after deduction of
                    processing fee, insurance fee and any other charges levied
                    by the company time to time. Once NEFT is done, branch
                    manager will be informed by accounts team and will be asked
                    to conform it from the clients. Confirmation from members
                    will be communicated back to accounts team.
                  </td>

                  <td className="py-6 px-6 text-gray-300">Field Executive</td>

                  <td className="py-6 px-6 text-gray-300">
                    Branch Manager and Area Manager
                  </td>
                </tr>

                {/* Row 9 */}
                <tr className="border-b border-gray-800 align-middle">
                  <td className="py-6 px-6">9</td>

                  <td className="py-6 px-6 pr-12 text-gray-300 leading-relaxed">
                    Loan Utilization Check :Branch Manger will Verify within 30
                    days of disbursement whether the loan has been utilized as
                    per loan propose mentioned in application form. All loan
                    utilization check report should be uploaded in MIS within 30
                    days of disbursement.
                  </td>

                  <td className="py-6 px-6 text-gray-300">Branch Manager</td>

                  <td className="py-6 px-6 text-gray-300">Head Office</td>
                </tr>

                {/* Row 10 */}
                <tr className="border-b border-gray-800 align-middle">
                  <td className="py-6 px-6">10</td>

                  <td className="py-6 px-6 pr-12 text-gray-300 leading-relaxed">
                    Loan Collection / Recovery: Center meetings are the Forum
                    for repayment of installments, social awareness, capacity
                    building empowerment hub and a platform for exchange of
                    ideas and concerns. Clients need to repay their installments
                    as per the repayment schedule provided at the time of
                    disbursement.
                  </td>

                  <td className="py-6 px-6 text-gray-300">Field Executive</td>

                  <td className="py-6 px-6 text-gray-300">Branch Manager</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export { Operation };
