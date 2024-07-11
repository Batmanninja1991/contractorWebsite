import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    address: "",
    city: "",
    message: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      user_number: formData.number,
      user_address: formData.address,
      user_city: formData.city,
      user_message: formData.message,
    };

    emailjs
      .send(
        "service_xqijs2p", // Replace with your EmailJS service ID
        "template_thzg7pi", // Replace with your EmailJS template ID
        templateParams,
        {
          /** "WnKNRLAWCizDV126m" */
        } // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          window.alert("Your message has been sent successfully!");
          onClose(); // Close the modal on successful submission
        },
        (error) => {
          console.log("FAILED...", error);
          window.alert(
            "There was an error sending your message. Please try again."
          );
        }
      );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <section id="contact" className="w-full lg:h-full py-32 bg-gray-200">
      <div className="max-w-9xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl py-10 font-semibold mb-8 text-primary custom-underline">
          Schedule a Free Quote
        </h2>
        <form
          onSubmit={handleFormSubmit}
          className="max-w-2xl py-10 px-6 mx-auto bg-white rounded-lg shadow-md flex flex-col gap-3"
        >
          <div className="mb-4">
            <label htmlFor="name" className="sr-only">
              Your Name
            </label>
            <input
              onChange={handleInputChange}
              id="name"
              name="name"
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg border border-gray-300"
              value={formData.name}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="sr-only">
              Your Email
            </label>
            <input
              onChange={handleInputChange}
              id="email"
              name="email"
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg border border-gray-300"
              value={formData.email}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="number" className="sr-only">
              Your Phone Number
            </label>
            <input
              onChange={handleInputChange}
              id="number"
              name="number"
              type="tel"
              placeholder="Your Phone Number"
              className="w-full p-3 rounded-lg border border-gray-300"
              value={formData.number}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="sr-only">
              Street Address
            </label>
            <input
              onChange={handleInputChange}
              id="address"
              name="address"
              type="text"
              placeholder="Street Address"
              className="w-full p-3 rounded-lg border border-gray-300"
              value={formData.address}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="city" className="sr-only">
              City
            </label>
            <input
              onChange={handleInputChange}
              id="city"
              name="city"
              type="text"
              placeholder="City"
              className="w-full p-3 rounded-lg border border-gray-300"
              value={formData.city}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="sr-only">
              How can we help?
            </label>
            <textarea
              onChange={handleInputChange}
              id="message"
              name="message"
              placeholder="How can we help?"
              className="w-full p-3 rounded-lg border border-gray-300"
              value={formData.message}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-accent text-black hover:bg-black hover:text-accent p-3 rounded-lg font-semibold w-full hover:bg-accent-dark transition"
          >
            Schedule a Free Quote
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

