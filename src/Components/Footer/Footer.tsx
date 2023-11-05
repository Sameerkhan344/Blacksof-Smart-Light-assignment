"use client";
import React from "react";
import Image from "next/image";
// import FooterImage from "../../../public/Assets/Footer.png";
import wifiImage from "../../../public/Assets/wifi.png";
import foot from "./Footer.module.css";
import Link from "next/link";

const Footer = () => {
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

        {/* <div className="relative w-full p-[1rem] sm:p-[5rem] md:p-[5rem] lg:p-[8rem]">
          <div className="flex items-center justify-center">
            <div className="flex items-end md:items-center lg:items-center justify-end md:justify-center lg:justify-center">
              <div className="w-[90vw] sm:w-[95vw] md:w-[90vw] lg:w-[70vw] sm:h-[50vh] md:h-[50vh] lg:h-[50vh] flex flex-col justify-between lg:justify-between text-white text-[13px] sm:text-[15px] md:text-[20px] lg:text-[20px] xl:text-[25px] 2xl:text-[30px] pt-[50vh] sm:pt-[0vh] md:pt-[0vh] lg:pt-[0vh] xl:pt-[0vh] 2xl:pt-[0vh]">
                <div className="w-[100%] sm:w-[100%] md:w-[95%] lg:w-[90%] lg:h-[10vh] flex items-center justify-between">
                  <div className="flex items-center gap-[10px]">
                    <Image src={wifiImage} alt="" />
                    <h1 className="lg:text-[20px] leading-[30px] tracking-[-0.4px]">
                      smart Lights
                    </h1>
                  </div>
                  <div className="flex sm:gap-[20px] flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row lg:gap-[100px]">
                    <Link href="#">Product</Link>
                    <Link href="#">Software Services</Link>
                    <Link href="#">Follow Us</Link>
                  </div>
                </div>
                <div className="lg:w-[60vw] lg:h-[10vh]">
                  <hr className="hover:bg-[#2684FF] w-[300px] sm:w-[500px] md:w-[500px] lg:w-[850px] xl:w-[1000px] lg:h-[2px] shrink-0 bg-[#E2F1FF]" />

                  <div className="flex items-center gap-[10px] lg:gap-[100px] mt-[0px] lg:mt-[30px]">
                    <Link href="#">Privacy Policy</Link>
                    <div className="lg:w-[2px] lg:h-[30px] bg-[#E2F1FF]"></div>
                    <Link href="#">Terms & Conditions</Link>
                    <div className="lg:w-[2px] lg:h-[30px] bg-[#E2F1FF]"></div>
                    <Link href="#">Cookie Policy</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </section>
    </>
  );
};

export default Footer;
