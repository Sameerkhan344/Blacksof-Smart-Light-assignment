import React from "react";
import Image from "next/image";
import wifiImage from "../../../../public/Assets/wifi.png";
import foot from "./Footer.module.css";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <>
      <section className={foot.fotterimg}>
        <footer className="rounded-lg shadow h-[50vh] flex items-center px-5">
          <div className="w-full max-w-screen-xl mx-auto flex flex-col justify-between h-[30vh]">
            <div className="sm:flex sm:items-center sm:justify-between">
              <a href="#" className="flex items-center mb-4 sm:mb-0">
                <Image
                  src={wifiImage}
                  className="h-8 mr-3"
                  alt="Flowbite Logo"
                />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  smart Lights
                </span>
              </a>
              <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 dark:text-white">
                <li>
                  <a href="#" className="mr-4 hover:underline md:mr-6 ">
                    Product
                  </a>
                </li>
                <li>
                  <a href="#" className="mr-4 hover:underline md:mr-6">
                    Software Services
                  </a>
                </li>
                <li>
                  <a href="#" className="mr-4 hover:underline md:mr-6 ">
                    Follow Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <hr className="my-6 border-white dark:border-white lg:my-8" />
              <span className="block text-sm text-white sm:text-center dark:text-white-400">
                <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 dark:text-white">
                  <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 ">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6">
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 ">
                      Cookie Policy
                    </a>
                  </li>
                </ul>
              </span>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
};

export default Footer;
