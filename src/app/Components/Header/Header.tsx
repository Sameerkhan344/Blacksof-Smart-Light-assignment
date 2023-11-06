"use client";
import React, { useState } from "react";
import Image from "next/image";

import wifiImage from "../../../../public/Assets/wifi.png";
import Link from "next/link";
import Button from "../Button/Button";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import SideNav from "../SideNav/SideNav";

const Header: React.FC = () => {
  const [menu, setMenu] = useState<boolean>(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const CloseMenu = () => {
    setMenu(false);
  };

  return (
    <>
      <div>
        <nav className="bg-gradient-to-tr from-[#002547] to-[#00050A]">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="#" className="flex items-center">
              <Image src={wifiImage} className="h-8 mr-3" alt="wifiLogo" />

              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                smart Lights
              </span>
            </a>
            <div
              data-collapse-toggle="navbar-solid-bg"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              onClick={handleChange}
            >
              <span className="sr-only">Open main menu</span>
              {!menu ? (
                <AiOutlineMenuUnfold size={25} />
              ) : (
                <AiOutlineClose size={25} />
              )}
            </div>

            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-default"
            >
              <ul className="font-medium flex flex-col items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:border-gray-700">
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Services
                  </a>
                </li>
                <Button />
              </ul>
            </div>

            {menu ? (
              <div className="absolute z-10 bg-white mt-3 dark:bg-[#121212]">
                <SideNav />
              </div>
            ) : null}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
