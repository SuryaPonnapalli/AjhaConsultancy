import { useState } from "react";
import logo from "../assets/Staffing-2.jpg";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        access_key: "aec83334-d88e-428d-9f46-d5ee36700061", // Replace with your actual access key
      }),
    });

    if (response.ok) {
      alert("Form submitted successfully!");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section
      id="contactus"
      className="py-16 w-full relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${logo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container mx-auto px-6 lg:px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 bg-gray-900 bg-opacity-90 p-10 rounded-lg shadow-lg">
          <div className="w-full lg:w-1/2 space-y-6 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              We would love to hear from you
            </h2>

            <form
              className="space-y-6 flex flex-col items-center"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-3/4 p-3 my-4 rounded border border-gray-500 focus:border-red-500 focus:outline-none transition bg-gray-800 text-gray-100 placeholder-gray-400"
              />

              <input
                type="email"
                placeholder="Your Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-3/4 p-3 my-4 rounded border border-gray-500 focus:border-red-500 focus:outline-none transition bg-gray-800 text-gray-100 placeholder-gray-400"
              />

              <input
                type="text"
                placeholder="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-3/4 p-3 my-4 rounded border border-gray-500 focus:border-red-500 focus:outline-none transition bg-gray-800 text-gray-100 placeholder-gray-400"
              />

              <textarea
                placeholder="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-3/4 p-3 my-4 rounded border border-gray-500 focus:border-red-500 focus:outline-none transition bg-gray-800 text-gray-100 placeholder-gray-400 h-32 resize-none"
              />

              <button
                type="submit"
                className="w-3/4 py-3 my-4 bg-red-500 text-white font-semibold rounded hover:bg-red-600 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
