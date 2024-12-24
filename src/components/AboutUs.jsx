import aboutus from "../assets/About Us - 1.jpg";

const AboutUs = () => {
  return (
    <section className="container mx-auto p-6">
      {/* Image and Intro Paragraph */}
      <div className="flex flex-col md:flex-row justify-evenly items-center gap-6 mb-8">
        <img
          src={aboutus}
          alt="about us image"
          className="w-full md:w-1/3 h-auto object-cover rounded-lg"
        />
        <div className="md:w-1/2">
          <p className="text-gray-300 text-2xl">
            At ACS, we are committed to helping businesses navigate the
            ever-evolving digital landscape. With expertise in DX (Digital
            Transformation), Data and Cloud, User Journey, and BPA (Business
            Process Automation), we empower organizations to thrive in today's
            digital age.
          </p>
        </div>
      </div>

      {/* Remaining Content */}
      <div>
        <div className="my-8 p-4 border-y border-white">
          <h2 className="text-2xl text-gray-100 font-bold mb-4">
            Our Global Presence
          </h2>
          <p className="text-gray-300 text-lg">
            With offices strategically located in North America and India, we
            are striving towards a strong global presence. Our professional
            network allows us to serve clients across industries and regions,
            ensuring that we understand the specific challenges and
            opportunities they face.
          </p>
        </div>

        <div className="my-8 p-4 border-b border-white">
          <h2 className="text-2xl text-gray-100 font-bold mb-4">
            Experienced Consultants and Associates
          </h2>
          <p className="text-gray-300 text-lg">
            At ACS, we take pride in our team of skilled Senior consultants and
            Consultants. Our experts possess deep industry knowledge and are
            well-versed in the latest technological advancements. They work
            closely with our clients to develop tailored solutions that address
            their unique business needs and propel them toward success.
          </p>
        </div>

        <div className="my-8 p-4 border-b border-white">
          <h2 className="text-2xl text-gray-100 font-bold mb-4">
            Driving Digital Transformation
          </h2>
          <p className="text-gray-300 text-lg">
            We are passionate about driving digital transformation for our
            clients. By leveraging cutting-edge technologies and innovative
            strategies, we help organizations optimize their operations, enhance
            customer experiences, and unlock new growth opportunities. Our
            comprehensive suite of services encompasses SAP Consulting, Digital
            Transformation and cloud solutions, user journey optimization, and
            BPA implementation.
          </p>
        </div>

        <div className="my-8 p-4 border-b border-white">
          <h2 className="text-2xl text-gray-100 font-bold mb-4">
            Customer-Centric Approach
          </h2>
          <p className="text-gray-300 text-lg">
            At ACS, we prioritize our clients and their success. We believe in
            fostering long-term partnerships built on trust, transparency, and
            collaboration. By truly understanding our clients' goals and
            challenges, we deliver customized solutions that drive tangible
            business outcomes and exceed expectations.
          </p>
        </div>

        <div className="my-8 p-4 border-b border-white">
          <h2 className="text-2xl text-gray-100 font-bold mb-4">
            Our Commitment
          </h2>
          <p className="text-gray-300 text-lg">
            ACS is committed to staying at the forefront of customer
            satisfaction. We continuously strive to ensure our clients benefit
            from the latest advancements in technology and industry best
            practices. Our goal is to empower organizations to embrace digital
            transformation and stay ahead in an ever-competitive business
            landscape.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
