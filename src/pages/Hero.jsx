import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import bgImg from "../assets/floor-333165_1920.jpg";
import { FaHome } from "react-icons/fa";
import { IoBusiness } from "react-icons/io5";
import { MdOutlineEmergency } from "react-icons/md";
import { GiHouse } from "react-icons/gi";
import { FaWrench } from "react-icons/fa";
import { BsTools } from "react-icons/bs";
import servicesImage from "../assets/remodeling-1241040_1920.jpg";
import personalImage from "../assets/construction-6475775_1920.jpg";
import Modal from "../components/Modal";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    review:
      "I cannot express how grateful I am for the outstanding service provided by ABC Contractors. From the moment I called, I was met with professionalism and genuine care. Their team worked tirelessly to resolve my construction issues, ensuring everything was perfect before they left. I highly recommend their services to anyone in need. They truly go above and beyond!",
  },
  {
    id: 2,
    name: "Jane Smith",
    review:
      "ABC Contractors exceeded my expectations in every way. Their quick response and top-notch work were impressive, but it was their friendly demeanor and willingness to explain everything that really stood out. They made me feel valued and respected. I will definitely call them again for any future construction needs and recommend them to all my friends and family.",
  },
  {
    id: 3,
    name: "Alice Johnson",
    review:
      "I had a major construction issue that needed immediate attention, and ABC Contractors came to the rescue. Their team was not only quick and efficient but also incredibly friendly and reassuring. They fixed the problem in no time and left my home spotless. It's rare to find such dedication and quality service. I am beyond thankful for their help and will always turn to them for construction needs.",
  },
  {
    id: 4,
    name: "Robert Brown",
    review:
      "Finding an affordable and reliable construction service can be challenging, but ABC Contractors made it easy. Their team's expertise and attention to detail were evident from the start. They patiently addressed all my concerns and completed the job flawlessly. The peace of mind they provided was priceless. I had a great experience and will always recommend their exceptional services.",
  },
  {
    id: 5,
    name: "Mary Williams",
    review:
      "I am incredibly satisfied with the work done by ABC Contractors. From the first phone call to the completion of the job, they showed unwavering dedication and care. Their team treated my home as if it were their own, ensuring everything was perfect. It was the best construction service I have ever used, and I will never hesitate to call them again. They truly are the best in the business!",
  },
];

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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
      .send("service_xqijs2p", "template_thzg7pi", templateParams, {
        /** "WnKNRLAWCizDV126m" */
      })
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          window.alert("Your message has been sent successfully!");
          setIsModalOpen(false);
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full h-full overflow-x-hidden">
      <section
        id="home"
        className="relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="absolute w-full h-full bg-gradient-to-b from-black/80 via-black/50 to-transparent"></div>
        <div className="relative pt-32 md:pt-44 z-10">
          <div
            className="md:w-3/4 mx-auto p-6 lg:p-10 flex flex-col gap-10 justify-center items-center text-center"
            data-aos="zoom-out"
            data-aos-offset="100"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
          >
            <h1 className="text-5xl lg:text-6xl font-semibold tracking-wide text-accent">
              Your Trusted Construction Experts
            </h1>
            <p className="leading-relaxed text-lg lg:text-2xl tracking-widest max-w-4xl text-white border-yellow-400 border-double border-2 p-6">
              From minor repairs to major construction projects, we at{" "}
              <span className="font-bold text-accent text-xl">
                Construction, LLC
              </span>{" "}
              provide top-quality, reliable services to ensure your home and
              business are built to last. Trust us to deliver exceptional
              results, no matter the size of the job.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="sm:mt-10 mx-auto md:mt-44 text-xl rounded-xl px-8 py-4 font-bold shadow-lg bg-accent hover:bg-black hover:text-accent hover:scale-105"
            >
              Schedule Your Free Quote Today!
            </button>
            <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
          </div>
        </div>
      </section>

      <section id="services" className="w-full py-14 bg-gray-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl pb-10 mb-4 font-semibold text-primary custom-underline">
            Our Services
          </h2>
          <img
            src={servicesImage}
            alt="Services"
            className="w-10/12 mx-auto mb-8 rounded-lg shadow-md"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div
              className="flex flex-col w-11/12 mx-auto items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
              data-aos="fade-left"
              data-aos-offset="50"
              data-aos-duration="1500"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
            >
              <FaHome
                size={40}
                className="mb-4 text-accent"
                aria-label="Residential Construction Services"
              />
              <h3 className="text-xl font-semibold mb-4">
                Residential Construction Services
              </h3>
              <p>
                Expert construction services for your home, ensuring quality and
                durability.
              </p>
            </div>
            <div
              className="flex flex-col w-11/12 mx-auto items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition h-full"
              data-aos="fade-right"
              data-aos-offset="50"
              data-aos-duration="1500"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
            >
              <IoBusiness
                size={40}
                className="mb-4 text-accent"
                aria-label="Commercial Construction Services"
              />
              <h3 className="text-xl font-semibold mb-4">
                Commercial Construction Services
              </h3>
              <p>
                Comprehensive construction solutions for businesses of all
                sizes.
              </p>
            </div>
            <div
              className="flex flex-col w-11/12 mx-auto items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition h-full"
              data-aos="fade-left"
              data-aos-offset="50"
              data-aos-duration="1500"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
            >
              <MdOutlineEmergency
                size={40}
                className="mb-4 text-accent"
                aria-label="Emergency Repair Services"
              />
              <h3 className="text-xl font-semibold mb-4">
                Emergency Repair Services
              </h3>
              <p>
                Available 24/7 to handle any construction-related emergency
                quickly and efficiently.
              </p>
            </div>
            <div
              className="flex flex-col w-11/12 mx-auto items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
              data-aos="fade-right"
              data-aos-offset="50"
              data-aos-duration="1500"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
            >
              <GiHouse
                size={40}
                className="mb-4 text-accent"
                aria-label="Renovation Services"
              />
              <h3 className="text-xl font-semibold mb-4">
                Renovation Services
              </h3>
              <p>
                Transform your space with our professional renovation services.
              </p>
            </div>
            <div
              className="flex flex-col w-11/12 mx-auto items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
              data-aos="fade-left"
              data-aos-offset="50"
              data-aos-duration="1500"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
            >
              <FaWrench
                size={40}
                className="mb-4 text-accent"
                aria-label="Maintenance Services"
              />
              <h3 className="text-xl font-semibold mb-4">
                Maintenance Services
              </h3>
              <p>Regular maintenance to keep your property in top condition.</p>
            </div>
            <div
              className="flex flex-col w-11/12 mx-auto items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
              data-aos="fade-right"
              data-aos-offset="50"
              data-aos-duration="1500"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
            >
              <BsTools
                size={40}
                className="mb-4 text-accent"
                aria-label="Custom Construction Projects"
              />
              <h3 className="text-xl font-semibold mb-4">
                Custom Construction Projects
              </h3>
              <p>Tailored construction solutions to meet your unique needs.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="w-full lg:h-full py-14 bg-white">
        <div
          className="max-w-7xl mx-auto px-4 text-center"
          data-aos="fade-in"
          data-aos-offset="50"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >
          <h2 className="text-3xl md:text-4xl pb-10 font-semibold text-primary custom-underline">
            About Us
          </h2>
          <div className="flex flex-col w-11/12 mx-auto items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <img
              src={personalImage}
              alt="About Us"
              className="w-10/12 mx-auto mb-8 rounded-lg shadow-md"
            />
            <h3 className="text-4xl font-semibold mb-4 text-primary">
              Who We Are
            </h3>
            <p className="text-lg md:w-3/4 mx-auto">
              We are a family-owned electrical business with over 20 years of
              experience. Our team is dedicated to providing exceptional service
              and ensuring your electrical systems are functioning smoothly.
            </p>
            <p className="text-lg md:w-3/4 mx-auto bg-gray-200 text-gray-700 my-4 p-4 rounded-xl">
              Our commitment to quality and customer satisfaction is unwavering.
              We believe in treating our customers like family, ensuring every
              job is done right the first time. Trust us to handle all your
              electrical needs with professionalism and care.
            </p>
          </div>
        </div>
      </section>

      <section id="testimonials" className="w-full py-14 bg-gray-300">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl pb-10 font-semibold text-primary custom-underline">
            Reviews
          </h2>
          <div className="relative">
            <div className="flex justify-center">
              <div className="w-full md:w-2/3 bg-white p-6 rounded-lg shadow-md my-4">
                <div className="text-accent font-thin text-5xl mb-4">★★★★★</div>
                <h3 className="text-gray-700">
                  {testimonials[currentIndex].review}
                </h3>
                <p className="text-xl font-semibold my-4">
                  From: {testimonials[currentIndex].name}
                </p>
              </div>
            </div>
            <button
              className="absolute xl:left-20 left-0 top-1/2 transform -translate-y-1/2 bg-primary/90 text-white p-2 rounded-full shadow-md"
              onClick={handlePrevious}
            >
              &lt;
            </button>
            <button
              className="absolute xl:right-20 right-0 top-1/2 transform -translate-y-1/2 bg-primary/90 text-white p-2 rounded-full shadow-md"
              onClick={handleNext}
            >
              &gt;
            </button>
          </div>
        </div>
      </section>

      {/** Contact Form */}
      <section id="contact" className="w-full lg:h-full py-14 bg-gray-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl pb-10 font-semibold mb-8 text-primary custom-underline">
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
              className="bg-accent text-black hover:bg-black hover:text-accent p-3 rounded-lg font-semibold w-full transition"
            >
              Schedule a Free Quote
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Hero;
