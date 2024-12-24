import business from "../assets/Technology-3.jpg";

const Business = () => {
  return (
    <section className="container mx-auto p-6">
      {/* Image and Intro Paragraph */}
      <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
        <img
          src={business}
          alt="about us image"
          className="w-full md:w-min mx-auto h-full object-cover rounded-lg"
        />
      </div>

      <div className="my-8 p-4 border-y border-white">
        <h2 className="text-gray-100 text-2xl font-bold mb-4">
          Advanced Enterprise Application Services
        </h2>
        <h3 className="text-gray-200 text-xl font-semibold mb-4">
          Our Specialization
        </h3>
        <ul className="text-gray-300 text-lg ml-4 space-y-2">
          <li>
            <strong>Application Management, Maintenance & Support:</strong> Our
            experts are dedicated to seamlessly operating your applications,
            offering round-the-clock support and maintenance.
          </li>
          <li>
            <strong>Implementation and Rollouts:</strong> We are proficient in
            implementing and rolling out applications efficiently to maximize
            the benefits of your platforms.
          </li>
          <li>
            <strong>Technical Upgrades:</strong> Stay at the forefront of
            technology with our seamless upgrade services, ensuring your
            applications meet evolving demands.
          </li>
          <li>
            <strong>Independent Testing:</strong> Our independent testing
            services guarantee high performance and functionality.
          </li>
          <li>
            <strong>Business Intelligence & Analytics:</strong> Unlock valuable
            insights with our Business Intelligence and Analytics solutions.
          </li>
          <li>
            <strong>Managed Cloud, Security, & Mobility Services:</strong>{" "}
            Leverage cloud technology securely and operate efficiently from
            anywhere.
          </li>
        </ul>
      </div>

      <div className="my-8 p-4 border-b border-white">
        <h2 className="text-gray-100 text-2xl font-bold mb-4">
          Digital Transformation Services
        </h2>
        <p className="text-gray-300 text-lg mb-4">
          ACS strives towards transforming Enterprise business solutions using
          the latest SAP technologies to gain a competitive advantage in the
          digital market.
        </p>
        <ul className="text-gray-300 text-lg ml-4 space-y-2">
          <li>
            <strong>Application Development and Integrations:</strong>{" "}
            Implementing S4HANA on Public/Private Cloud.
          </li>
          <li>
            <strong>Mobile Development:</strong> Application access through
            Mobile APP.
          </li>
          <li>
            <strong>Business Technology Platform:</strong> Platform as a
            service.
          </li>
          <li>
            <strong>SAP Analytics Cloud:</strong> Analytical reports,
            dashboards, and planning.
          </li>
          <li>
            <strong>Intelligent Technologies:</strong> Automation using AI,
            Machine Learning, and IoT.
          </li>
          <li>
            <strong>SAP Migrations:</strong> Transform legacy SAP systems to new
            S4HANA.
          </li>
        </ul>
      </div>

      <div className="my-8 p-4 border-b border-white">
        <h2 className="text-gray-100 text-2xl font-bold mb-4">
          Application Maintenance Services
        </h2>
        <p className="text-gray-300 text-lg mb-4">
          ACS features a skilled team committed to providing superior SAP AMS
          support for optimal SAP system performance.
        </p>
        <ul className="text-gray-300 text-lg ml-4 space-y-2">
          <li>
            <strong>Onsite Model:</strong> Dedicated resources at client site.
          </li>
          <li>
            <strong>Offsite Model:</strong> Dedicated resources at offsite.
          </li>
          <li>
            <strong>Offsite Shared Model:</strong> Flexible support based on key
            business processes.
          </li>
          <li>
            <strong>Hybrid Support Model:</strong> Onsite lead with offsite
            delivery.
          </li>
        </ul>
      </div>

      <div className="my-8 p-4 border-b border-white">
        <h2 className="text-gray-100 text-2xl font-bold mb-4">
          Human Resources Consultancy Services
        </h2>
        <p className="text-gray-300 text-lg mb-4">
          As ACS works with a large talent pool, we also offer Human Resources
          Consultancy services.
        </p>
        <ul className="text-gray-300 text-lg ml-4 space-y-2">
          <li>
            <strong>Staff Augmentation:</strong> With a presence in various
            geographies, we support clients in onshore, nearshore, and offshore
            placements.
          </li>
          <li>
            <strong>Staffing:</strong> Meeting client staffing needs with a
            focus on customer satisfaction.
          </li>
          <li>
            <strong>Managed Services:</strong> We offer managed services,
            leveraging our specialization in key skills.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Business;
