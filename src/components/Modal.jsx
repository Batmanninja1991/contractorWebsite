import React, { useState } from "react";
import emailjs from "emailjs-com";

const Modal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    service: "",
    message: "",
  });

  if (!isOpen) return null;

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      user_name: formData.name,
      user_number: formData.number,
      user_email: formData.email,
      user_service: formData.service,
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
    <div className="fixed inset-0 top-32 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-11/12 max-w-md">
        <form className="text-left" onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="number"
            >
              Phone
            </label>
            <input
              type="tel"
              id="number"
              name="number"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your phone number"
              value={formData.number}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="service"
            >
              Services
            </label>
            <select
              id="service"
              name="service"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formData.service}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>
                Select a service
              </option>
              <option value="Residential Services">Residential Services</option>
              <option value="Commercial Services">Commercial Services</option>
              <option value="Emergency Services">Emergency Services</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-primary hover:scale-105 text-accent font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
