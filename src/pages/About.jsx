import React, { useState, useEffect } from "react";
import personalImage from "../assets/construction-6475775_1920.jpg";

const About = () => {
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section
        id="about"
        className="w-full lg:h-full py-32 bg-gray-200 overflow-x-hidden"
      >
        <div
          className="max-w-9xl mx-auto px-4 text-center overflow-x-hidden"
          data-aos="fade-in"
          data-aos-offset="100"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >
          <h2 className="text-4xl py-10 font-semibold mb-8 text-primary custom-underline">
            About Us
          </h2>
          <div className="flex flex-col w-11/12 max-w-6xl mx-auto items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <img
              src={personalImage}
              alt="About Us"
              className="mx-auto mb-16 rounded-lg shadow-md"
            />
            <h3 className="text-4xl font-semibold mb-4 text-primary">
              Who We Are
            </h3>
            <p className="text-lg md:w-3/4 mx-auto">
              We are a family-owned general contracting business with over 20
              years of experience. Our team is dedicated to providing
              exceptional service and ensuring your construction projects are
              completed smoothly.
            </p>
            <p className="text-lg md:w-3/4 mx-auto bg-gray-200 text-gray-700 my-4 p-4 rounded-xl">
              Our commitment to quality and customer satisfaction is unwavering.
              We believe in treating our customers like family, ensuring every
              job is done right the first time. Trust us to handle all your
              construction needs with professionalism and care.
            </p>
          </div>
        </div>
      </section>
      <section id="testimonials" className="w-full bg-gray-300">
        <div className="max-w-7xl mx-auto px-4 py-4 text-center">
          <h2 className="text-4xl py-10 font-semibold mb-8 text-primary custom-underline">
            Testimonials
          </h2>
          <div className="relative">
            <div className="flex justify-center items-center">
              <div className="w-11/12 md:w-3/4 bg-white p-6 rounded-lg shadow-md my-4">
                <div className="text-accent font-thin text-5xl pb-6">★★★★★</div>
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
    </>
  );
};

export default About;
