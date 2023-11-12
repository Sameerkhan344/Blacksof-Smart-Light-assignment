"use client";
import React from "react";
import background from "./Productspage.module.css";
import Fade from "../Slider/Fade";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Home: React.FC = () => {
  return (
    <>
      <div className={background.bgimage}>
        <div className="text-[#000] w-full pt-5 h-fit md:p-5 flex items-center justify-center overflow-hidden relative">
          <div className="w-[80vw] flex lg:block flex-col lg:flex-row items-center lg:items-start lg:w-[80vw] ">
            <div className="h-[220px] w-[80vw]">
              <div className="w-[4vw] bg-gradient-to-r from-[#4093e0] to-[#FFFFFF00] pt-[14.5px] pb-[14.5px] pl-[40px]">
                <h1 className="text-[#00386B] text-[22px]  capitalize leading-[100%] font-[600]">
                  Products
                </h1>
              </div>
              <div className="w-[80vw] lg:w-[50vw] md:w-[70vw]">
                <p className="text-[#000] text-[4.5vw] sm:text-[3.5vw] lg:text-[3vw] md:text-[3.5vw] font-[350] leading-1 pt-[16px] tracking-[0.48px]">
                  <span className="font-[500]">Cutting-edge hardware,</span>{" "}
                  offerings helping cities optimize resources and achieve smart
                  development goals
                </p>
              </div>
            </div>
            <div className="w-full h-fit flex lg:block items-center lg:items-start flex-col lg:flex-row">
              <div className="w-[80vw] sm:w-[80vw] flex flex-col gap-2 sm:items-start sm:justify-between pt-[5vw] sm:pt-[4vw] md:pt-[8vw] lg:pt-[15vw] flex-wrap md:flex-row ">
                <div className="w-50 flex items-center p-[10px] border-[1px] border-solid border-[#869FFB]">
                  <h1 className="text-[16px] lg:text-[1.5rem] 2xl:text-[1.5rem]">
                    Centralized Control & Monitoring System
                  </h1>
                </div>
                <div className="w-50 flex items-center p-[10px] sm:p-[10px] md:p-[10px] lg:p-[10px] border-[1px] border-solid border-[#869FFB]">
                  <h1 className="text-[16px] lg:text-[1.5rem] 2xl:text-[1.5rem]">
                    NEMA-Mounted VOLC 1160
                  </h1>
                </div>
                <div className="w-50 flex items-center p-[10px] border-[1px] border-solid border-[#869FFB]">
                  <h1 className="text-[16px] lg:text-[1.5rem]  2xl:text-[1.5rem]">
                    Retrofit Street Light Controller VOLC 2160
                  </h1>
                </div>
                <div className="w-50 flex items-center p-[10px] border-[1px] border-solid border-[#869FFB]">
                  <h1 className="text-[16px] lg:text-[1.5rem]  2xl:text-[1.5rem]">
                    Retrofit Street Light Controller VOLC 2180
                  </h1>
                </div>
                <div className="w-50 flex items-center p-[10px] border-[1px] border-solid border-[#869FFB]">
                  <h1 className="text-[16px] lg:text-[1.5rem]  2xl:text-[1.5rem]">
                    Retrofit Street Light Controller VOLC 4180
                  </h1>
                </div>
              </div>
              <Fade />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
