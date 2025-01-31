import { useState } from "react";
import { MdOutlineParagliding, MdSearch } from "react-icons/md";
import { FaPeopleCarry, FaUsers } from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";
import { IoMdOptions } from "react-icons/io";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonHiking,
  faPersonBiking,
  faGlobe,
  faUmbrellaBeach,
} from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  const responsive = {
    superlargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 5,
    },
  };

  const type = [
    { title: "Adventure", icon: <FontAwesomeIcon icon={faPersonHiking} /> },
    { title: "Discovery", icon: <FontAwesomeIcon icon={faGlobe} /> },
    {
      title: "Mountain Biking",
      icon: <FontAwesomeIcon icon={faPersonBiking} />,
    },
    { title: "Beach", icon: <FontAwesomeIcon icon={faUmbrellaBeach} /> },
    { title: "Adventure", icon: <FontAwesomeIcon icon={faPersonHiking} /> },
    { title: "Discovery", icon: <FontAwesomeIcon icon={faGlobe} /> },
    {
      title: "Mountain Biking",
      icon: <FontAwesomeIcon icon={faPersonBiking} />,
    },
    { title: "Beach", icon: <FontAwesomeIcon icon={faUmbrellaBeach} /> },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <div>
      <section
        className="relative bg-black lg:h-[90vh]"
        data-aos="fade-down"
        data-aos-delay="300"
        data-aos-duration="3000"
      >
        <img
          className="absolute w-full h-full object-cover"
          src="/images/hero_image1.jpg"
          alt=""
        />
        <div className="flex flex-col justify-center items-center relative z-10 lg:h-full h-screen max-w-[1320px] px-6 lg:pt-20 pt-16 mx-auto">
          <span className="lg:text-6xl text-3xl text-white text-center font-bold relative">
            You Dream It, We <br />Make It
            <div className="bg-orange text-white text-lg -left-8 px-8 py-1 w-fit absolute -top-8 z-10 -rotate-[10deg]">
              Let's Explore
            </div>
          </span>
          <p className="text-white text-center text-2xl my-5">
            Checkout Beautiful Places Around the World.
          </p>
          <div className="bg-white p-6 rounded-lg lg:flex items-center justify-between w-full">
            <div className="flex items-center w-full lg:border-r border-b py-2 pr-4 mr-4">
              <MdOutlineParagliding className="text-green text-3xl mr-2" />
              <div className="flex flex-col w-full">
                <p className="text-grey-600 text-sm">Destinations</p>
                <select className="focus:outline-none">
                  <option value="">Locations</option>
                </select>
              </div>
            </div>
            <div className="flex items-center w-full lg:border-r border-b py-2 pr-4 mr-4">
              <FaPeopleCarry className="text-green text-3xl mr-2" />
              <div className="flex flex-col w-full">
                <p className="text-grey-600 text-sm">Activity</p>
                <select className="focus:outline-none">
                  <option value="">Booking Type</option>
                </select>
              </div>
            </div>
            <div className="flex items-center w-full lg:border-r border-b py-2 pr-4 mr-4">
              <AiOutlineCalendar className="text-green text-3xl mr-2" />
              <div className="flex flex-col w-full">
                <p className="text-grey-600 text-sm">Date From</p>
                <input type="date" className="focus:outline-none" />
              </div>
            </div>
            <div className="flex items-center w-full lg:border-r border-b py-2 pr-4 mr-4">
              <AiOutlineCalendar className="text-green text-3xl mr-2" />
              <div className="flex flex-col w-full">
                <p className="text-grey-600 text-sm">Date To</p>
                <input type="date" className="focus:outline-none" />
              </div>
            </div>
            <div className="flex items-center w-full lg:border-r border-b py-2 pr-4 mr-4">
              <FaUsers className="text-green text-3xl mr-2" />
              <div className="flex flex-col w-full">
                <p className="text-grey-600 text-sm">Guests</p>   
                <input
                  type="number"
                  min="0" 
                  className="focus:outline-none w-16 placeholder-black"
                  placeholder="0"
                />
              </div>
            </div>
            <div className="flex items-center mr-4 lg:mt-0 mt-4">
              <IoMdOptions className="lg:block hidden text-green text-3xl mr-2" />
              <button className="bg-green text-white flex items-center justify-center gap-4 px-6 py-3 outline-none border-none rounded-lg font-semibold text-sm w-full">
                <MdSearch size={20} /> SEARCH
              </button>
            </div>
          </div>
          <img
            src="/images/curved_arrow.png"
            alt=""
            className="lg:block hidden mt-2 -ml-96 w-80"
          />
          <p className="text-white lg:text-2xl lg:py-0 py-8">
            Or browse the selected type
          </p>
        </div>
      </section>

      <section className="bg-[#F3F8F6]">
        <div className="relative z-10 max-w-[1320px] px-6 mx-auto -mt-10">
          <Carousel
            responsive={responsive}
            infinite
            autoPlay={true}
            itemClass="px-2"
          >
            {type.map((item, index) => (
              <div key={index} className="group">
                <div
                  className={`curser-pointer p-8 rounded-lg flex flex-col justify-center items-start gap-4 ${
                    currentSlide % type.length === index
                      ? "bg-green text-white"
                      : "bg-white text-green  group-hover:bg-green group-hover:text-white"
                  }`}
                >
                  <p
                    className={`font-bold text-lg ${
                      currentSlide % type.length === index
                        ? "text-white"
                        : "text-green group-hover:text-white"
                    }`}
                  >
                    {item.title}
                  </p>
                  <span
                    className={`text-7xl ${
                      currentSlide % type.length === index
                        ? "text-white"
                        : "text-green group-hover:text-white"
                    }`}
                  >
                    {item.icon}
                  </span>
                  <p
                    className={`${
                      currentSlide % type.length === index
                        ? "text-white"
                        : "text-green group-hover:text-white"
                    }`}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </section>
    </div>
  );
};

export default Hero;
