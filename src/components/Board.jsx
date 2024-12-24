const Board = () => {
  return (
    <section className="px-6 py-12">
      <div>
        <h1 className="text-4xl font-bold text-white mb-10 p-5 border-y border-white">
          ACS - Executive Board
        </h1>

        <div className="flex flex-col md:flex-row items-start mb-10 p-4 border-b border-gray-300">
          <div className="md:w-2/3 md:pr-6">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Chief Executive Officer
            </h2>
            <p className="text-lg text-white leading-relaxed mb-5">
              <b>Ram Annadanam</b> is a highly regarded leader, appreciated by
              both partners and team members. He specializes in business
              processes across multiple industries. With significant experience
              working with global clients, his commitment to customer success
              effectively steers the organization. He has worked with the top
              five consulting firms and many Fortune 500 companies as an S4HANA
              solution architect, successfully leading various projects and
              initiatives. His ongoing push for automation inspires the team to
              exceed expectations.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start mb-10 p-4 ">
          <div className="md:w-2/3 ">
            <h2 className="text-2xl font-semibold text-white mb-2">
              Executive Directors
            </h2>
            <p className="text-lg text-white leading-relaxed mb-5">
              <b>Gayathri Konakanchi</b> has a vast experience in leadership
              roles in the public sector before joining us at ACS. Her vast
              experience in sourcing the right talent at the right place helps
              not only us but also our partners immensely.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-4xl font-bold text-white mb-10 p-5 border-y border-white">
          ACS - Non-executive Board
        </h1>

        <div className="flex flex-col md:flex-row items-start mb-10 p-4 border-b border-gray-300">
          <div className="md:w-2/3 md:pr-6">
            <h2 className="text-2xl font-semibold text-white mb-2">
              Advisor - Technology
            </h2>
            <p className="text-lg text-white leading-relaxed">
              <b>Prasad Kompalli</b> is a seasoned entrepreneur and tech
              executive. He spent a significant part of his career at SAP,
              building the technology platform. He worked as Senior Vice
              President responsible for technology development teams both at SAP
              Labs in India and at SAP's headquarters in Germany. Post his long
              tenure at SAP, he has turned entrepreneur, building tech companies
              in ecommerce (Myntra), healthcare (Mfine), and edtech (OnCourse).
              His mentorship helps us build next-generation digital
              transformation solutions for our clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Board;
