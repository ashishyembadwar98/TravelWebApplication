import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { BsPersonCircle } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { HiMenuAlt3 } from "react-icons/hi";

const Header = () => {
  const [dropdown, setDropdown] = useState(false);

  const showDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <nav className="w-full h-24 flex flex-col justify-center items-center sticky top-0 z-50 bg-[#1D231F]">
      <div className="container mx-auto lg:px-3 w-full">
        <div className="lg:w-full w-11/12 mx-auto h-full flex lg:justify-between items-center gap-16 px-10">
          <div className="flex flex-col gap-y-4">
            <div className="flex items-center gap-x-2">
              <img
                src="/images/JetSetGo_logo.png"
                alt="Logo"
                className="w-36"
              />
            </div>
          </div>
          <ul className="flex items-center xl:gap-12 gap-x-4 max-lg:hidden">
            <li className="leading-normal no-underline text-white text-lg hover:text-green">
              <a href="#home">Home</a>
            </li>
            <li className="leading-normal no-underline text-white text-lg hover:text-green">
              <a href="#tours">Tours page</a>
            </li>
            <li className="leading-normal no-underline text-white text-lg hover:text-green">
              <a href="#destination">Destination</a>
            </li>
            <li className="leading-normal no-underline text-white text-lg hover:text-green">
              <a href="#news">News</a>
            </li>
            <li className="leading-normal no-underline text-white text-lg hover:text-green">
              <a href="#page">Pages</a>
            </li>
            <li className="leading-normal no-underline text-white text-lg hover:text-green">
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <div className="flex justify-center w-40 gap-4 max-lg:hidden">
            <button className="rounded-full text-white w-10 h-10 flex items-center justify-center hover:text-green">
              <CiSearch size={32} />
            </button>
            <button className="rounded-full text-white w-10 h-10 flex items-center justify-center hover:bg-green hover:text-white">
              <BsPersonCircle size={24} />
            </button>
          </div>
          {dropdown ? (
            <div
              className="lg:hidden text-xl curser-pointer text-white"
              onClick={showDropdown}
            >
              <MdClose />
            </div>
          ) : (
            <div
              className="lg:hidden text-xl curser-pointer text-white"
              onClick={showDropdown}
            >
              <HiMenuAlt3 />
            </div>
          )}
        </div>
        {dropdown && (
          <div className="lg-hidden w-full fixed top-24 bg-white transition-all">
            <div className="w-full flex flex-col items-baseline gap-4">
              <ul className="w-full flex flex-col justify-center">
                <li>
                  <a
                    href="#home"
                    className="px-6 h-10 flex items-center leading-normal no-underline font-bold text-lg text-[15px] border-0 border-b border-[#ffffff1a] border-solid "
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#tours"
                    className="px-6 h-10 flex items-center leading-normal no-underline font-bold text-lg text-[15px] border-0 border-b border-[#ffffff1a] border-solid "
                  >
                    Tours page
                  </a>
                </li>
                <li>
                  <a
                    href="#destination"
                    className="px-6 h-10 flex items-center leading-normal no-underline font-bold text-lg text-[15px] border-0 border-b border-[#ffffff1a] border-solid "
                  >
                    Destination
                  </a>
                </li>
                <li>
                  <a
                    href="#news"
                    className="px-6 h-10 flex items-center leading-normal no-underline font-bold text-lg text-[15px] border-0 border-b border-[#ffffff1a] border-solid "
                  >
                    News
                  </a>
                </li>
                <li>
                  <a
                    href="#page"
                    className="px-6 h-10 flex items-center leading-normal no-underline font-bold text-lg text-[15px] border-0 border-b border-[#ffffff1a] border-solid "
                  >
                    Pages
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="px-6 h-10 flex items-center leading-normal no-underline font-bold text-lg text-[15px] border-0 border-b border-[#ffffff1a] border-solid "
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
