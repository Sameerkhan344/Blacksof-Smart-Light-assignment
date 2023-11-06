import React from "react";
import Image from "next/image";
import lightimage from "../../../../public/Assets/lightimage.png";
import arrowimage from "../../../../public/Assets/icon_png.png";
import leftarrow from "../../../../public/Assets/leftarrow.svg";
import rightarrow from "../../../../public/Assets/rightarrow.svg";
import background from "./Productspage.module.css";

const Home: React.FC = () => {
  return (
    <>
      <div className={background.bgimage}>
        <div className="text-[#000] w-full pt-5 h-fit md:p-5 min-h-[100vh] flex items-center justify-center overflow-hidden relative">
          <div className="w-[80vw] flex lg:block flex-col lg:flex-row items-center lg:items-start lg:w-[80vw] ">
            <div className="h-[220px]">
              <div className="w-[4vw] bg-gradient-to-r from-[#4093e0] to-[#FFFFFF00] pt-[14.5px] pb-[14.5px] pl-[40px]">
                <h1 className="text-[#00386B] text-[22px]  capitalize leading-[100%] font-[600]">
                  Products
                </h1>
              </div>
              <div className="w-[50vw]">
                <p className="text-[#000] text-[3.5vw] md:text-[3vw] font-[350] leading-1 pt-[16px] tracking-[0.48px]">
                  <span className="font-[500]">Cutting-edge hardware,</span>{" "}
                  offerings helping cities optimize resources and achieve smart
                  development goals
                </p>
              </div>
            </div>
            <div className="w-full h-fit flex lg:block items-center lg:items-start flex-col lg:flex-row">
              <div className="w-[70vw] flex flex-col gap-2 items-center justify-between pt-[2vw] sm:pt-[10vw] md:pt-[8vw] lg:pt-[15vw] flex-wrap md:flex-row  ">
                <div className="w-50 flex items-center p-[10px] border-[1px] border-solid border-[#869FFB]">
                  <h1 className="text-[16px] ">
                    Centralized Control & Monitoring System
                  </h1>
                </div>
                <div className=" md:w-80 flex items-center p-[10px] border-[1px] border-solid border-[#869FFB]">
                  <h1 className="text-[16px]">NEMA-Mounted VOLC 1160</h1>
                </div>
                <div className="w-50 flex items-center p-[10px] border-[1px] border-solid border-[#869FFB]">
                  <h1 className="text-[16px]">
                    Retrofit Street Light Controller VOLC 2160
                  </h1>
                </div>
                <div className="w-50 flex items-center p-[10px] border-[1px] border-solid border-[#869FFB]">
                  <h1 className="text-[16px]">
                    Retrofit Street Light Controller VOLC 2180
                  </h1>
                </div>
                <div className="w-50 flex items-center p-[10px] border-[1px] border-solid border-[#869FFB]">
                  <h1 className="text-[16px]">
                    Retrofit Street Light Controller VOLC 4180
                  </h1>
                </div>
              </div>
              <div className="w-full flex-col md:flex-row flex relative pt-[30px]">
                <div className="bg-blue-400 h-fit relative overflow-hidden flex items-center justify-center">
                  <Image
                    src={lightimage}
                    alt=""
                    width={750}
                    height={600}
                    className=""
                  />
                </div>
                <div className="absolute bottom-0 left-[45%] transform-[-50%, 0%]">
                  <div className="flex items-center">
                    <div className="flex w-[52.655px] h-[57.256px] shrink-0 bg-[#E4E4E4] items-center justify-center ">
                      <Image src={leftarrow} alt="" />
                    </div>
                    <div className="flex w-[52.655px] h-[57.256px] shrink-0 bg-[#E4E4E4] items-center justify-center ">
                      <Image src={rightarrow} alt="" />
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-b from-[#FFF] to-[#E1F4FF] w-55 h-50  md:pl-[100px] inline-flex items-center">
                  <div className="h-[20rem] md:h-[20rem] lg:h-[220px]">
                    <div className="">
                      <p className="text-[#818181] pt-3  text-[15px] md:text-[14px] capitalize leading-[130%] font-[500]">
                        Products 1/5
                      </p>
                    </div>
                    <div className="">
                      <p className="text-[#000] text-[5vw]  md:text-[25px] lg:text-[32px] font-[600] lg:leading-[46px] pt-[10px]">
                        Centralized Control & Monitoring System
                      </p>
                    </div>
                    <div className="md:w-[20vw] pt-[10px]">
                      <span className="text-[#000] whitespace-wrap  text-[16px] font-[400] md:leading-[24px] md:tracking-[0.16px]">
                        Designed indigenously for street lighting projects, the
                        CCMS offers a complete feeder panel for a group of 30-50
                        street lights.
                      </span>
                    </div>
                    <div className="pt-[20px]">
                      <button
                        type="button"
                        className="text-[#3661FF] text-[20px] font-[405] leading-[24px] flex items-center gap-[5px]"
                      >
                        Know More
                        <span>
                          <Image
                            src={arrowimage}
                            alt="arrow"
                            className="hover:scale-[1.5] transition ease-in-out delay-150 duration-300"
                          />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
