import React, { useEffect } from "react";
import { FaHome } from "react-icons/fa";
import { IoBusiness } from "react-icons/io5";
import { MdOutlineEmergency } from "react-icons/md";
import { GiHouse } from "react-icons/gi";
import { FaWrench } from "react-icons/fa";
import { BsTools } from "react-icons/bs";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="services" className="w-full lg:h-full py-32 bg-gray-200">
      <div className="max-w-9xl mx-auto px-4 text-center">
        <h2 className="text-4xl py-10 font-semibold mb-8 text-primary custom-underline">
          Our Services
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 overflow-x-hidden">
          <div
            className="flex flex-col w-11/12 mx-auto items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
            data-aos="fade-left"
            data-aos-offset="100"
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
            <p className="bg-gray-200 text-gray-700 my-4 p-4 rounded-xl flex-grow">
              Whether you need new home construction, renovations, or repairs,
              we provide comprehensive residential construction services. From
              building custom homes to remodeling kitchens and bathrooms, we
              ensure your home meets your vision and standards.
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
              Comprehensive construction solutions for businesses of all sizes.
            </p>
            <p className="bg-gray-200 text-gray-700 my-4 p-4 rounded-xl flex-grow">
              Running a business is challenging enough without construction
              issues. Whether it's a small office or a large commercial space,
              we provide reliable construction services that keep your business
              running smoothly. Trust us for new builds, renovations, and
              upgrades.
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
            <p className="bg-gray-200 text-gray-700 my-4 p-4 rounded-xl flex-grow">
              Construction emergencies can happen at any time. Whether it's a
              structural issue, water damage, or any other urgent problem, our
              emergency services are available around the clock to ensure your
              safety and restore functionality as quickly as possible.
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
            <h3 className="text-xl font-semibold mb-4">Renovation Services</h3>
            <p>
              Transform your space with our professional renovation services.
            </p>
            <p className="bg-gray-200 text-gray-700 my-4 p-4 rounded-xl flex-grow">
              From updating your kitchen to creating a new living area, our
              renovation services are designed to enhance the functionality and
              aesthetics of your home or business. We work closely with you to
              bring your renovation ideas to life.
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
            <h3 className="text-xl font-semibold mb-4">Maintenance Services</h3>
            <p>Regular maintenance to keep your property in top condition.</p>
            <p className="bg-gray-200 text-gray-700 my-4 p-4 rounded-xl flex-grow">
              Preventative maintenance is key to avoiding costly repairs and
              ensuring the longevity of your property. We offer scheduled
              maintenance services for residential and commercial properties,
              addressing everything from minor repairs to major upkeep tasks.
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
            <BsTools
              size={40}
              className="mb-4 text-accent"
              aria-label="Custom Construction Projects"
            />
            <h3 className="text-xl font-semibold mb-4">
              Custom Construction Projects
            </h3>
            <p>Tailored construction solutions to meet your unique needs.</p>
            <p className="bg-gray-200 text-gray-700 my-4 p-4 rounded-xl flex-grow">
              Have a unique construction project in mind? We specialize in
              custom construction projects, working with you to design and build
              structures that meet your specific requirements. From concept to
              completion, we're here to turn your ideas into reality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
