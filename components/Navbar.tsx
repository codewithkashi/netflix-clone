import Image from "next/image";
import React, { useState, useCallback, useEffect } from "react";
import { BsChevronDown } from "react-icons/bs";
import { MobileMenu, AccountMenu } from "./";
import {
  BellIcon,
  MagnifyingGlassIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
const TOP_OFFSET = 66;
const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [showBackground, setShowBackground] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const toggleAccountMenu = useCallback(() => {
    setShowAccountMenu((current) => !current);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else setShowBackground(false);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`w-full fixed z-40 px-4 md:px-16 py-4 flex items-center justify-between ${
        showBackground ? "bg-zinc-900 bg-opacity-90" : ""
      }`}
    >
      <div className="flex flex-row items-center transition-all duration-500">
        <Image
          src={"/images/logo.png"}
          height={40}
          width={100}
          alt="Logo"
          className="w-12 sm:w-24"
        />
        <div className="hidden lg:flex gap-2 ml-16">
          {[
            "Home",
            "Series",
            "Films",
            "New & Popular",
            "My List",
            "Browser by languages",
          ].map((e, index) => (
            <div
              key={index}
              className="text-white cursor-pointer hover:bg-gray-300 transition-all rounded-md px-2"
            >
              {e}
            </div>
          ))}
        </div>
        <div className="lg:hidden flex items-center gap-2 ml-8 cursor-pointer">
          <p onClick={() => setVisible((prev) => !prev)} className="text-white">
            Browser{" "}
          </p>
          <BsChevronDown className="text-white transition-all " />
        </div>
        <MobileMenu visible={visible} />
      </div>
      <div className="flex flex-row ml-auto gap-7 items-center">
        <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
          <MagnifyingGlassIcon className="w-6 hidden sm:block" />
        </div>
        <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
          <BellIcon className="w-6 hidden sm:block" />
        </div>
        <div
          onClick={toggleAccountMenu}
          className="flex flex-row items-center gap-2 cursor-pointer relative"
        >
          <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
            <img src="/images/default-blue.png" alt="" />
          </div>
          <ChevronDownIcon
            className={`w-4 text-white fill-white transition ${
              showAccountMenu ? "rotate-180" : "rotate-0"
            }`}
          />
          <AccountMenu visible={showAccountMenu} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
