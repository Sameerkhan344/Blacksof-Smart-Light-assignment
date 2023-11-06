"use client";
import React from "react";
import lampimage from "../../../../public/Assets/street_light_controler.png";
import gateimage from "../../../../public/Assets/gateway_png.png";
import cloudimage from "../../../../public/Assets/cloud_based management.png";
import usersimage from "../../../../public/Assets/users_png.png";
import Evaluationimage from "../../../../public/Assets/evaluation_png.png";
import Image from "next/image";
const Workpage: React.FC = () => {
  return (
    <>
      <section className="bg-white w-full flex items-center justify-center overflow-hidden relative pt-[5rem] lg:pt-[100px] pl-[5px] lg:pl-[146px] py-[15rem]">
        <div className="min-h-[100vh] lg:h-[100vh] w-[80vw]">
          <div className="h-[220px]">
            <div className="w-[5vw] bg-gradient-to-r from-[#00386B] to-[#FFFFFF00] pt-[14.5px] pr-[0px] pb-[14.5px] pl-[40px]">
              <h1 className="text-[#00386B] text-[20px] lg:text-[24px] capitalize leading-[150%] font-[600]">
                Ecosystem
              </h1>
            </div>
            <div className="w-[20rem] lg:w-[40rem]">
              <h1 className="text-[#000] text-[25px] lg:text-[48px] font-[400] leading-[40px] lg:leading-[68px] pt-[16px] tracking-[0.48px]">
                How does a smart street light ecosystem work?
              </h1>
            </div>
          </div>
          <div className="h-min w-full">
            <div className="w-full flex items-center lg:items-start lg:justify-between pt-[10px] lg:pt-[54px] flex-col lg:flex-row md:flex-col">
              <div className="">
                <div className="flex items-center sm:items-center justify-center lg:items-start md:items-start md:justify-center lg:justify-center gap-[100px]  lg:gap-[100px]">
                  <div
                    className="border-[2.206px] border-dashed border-[#3661FF] 
              rounded-[28.818px] w-[117px] h-[117px] shrink-0 flex items-center justify-center"
                  >
                    <div className="w-[92.876px] h-[92.786px] shrink-0 rounded-[19.299px] border-[2.206px] border-[#3661FF] flex items-center justify-center shadow-xl hover:scale-[1.3] transition ease-in-out delay-150 duration-300 cursor-pointer bg-gradient-to-r from-[#F3FDFF] to-[#FFF]">
                      <div className="relative">
                        <Image
                          src={lampimage}
                          alt="lamp"
                          className="width={46px} height={67.298px} shrink-0 fill-[#00386B]hover:scale-[1.2] transition ease-in-out delay-150 duration-300 cursor-pointer"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="border-[2.206px] border-dashed border-[#3661FF] 
              rounded-[28.818px] w-[117px] h-[117px] shrink-0 flex items-center justify-center"
                  >
                    <div className="w-[92.876px] h-[92.786px] shrink-0 rounded-[19.299px] border-[2.206px] border-[#3661FF] flex items-center justify-center shadow-xl hover:scale-[1.3] transition ease-in-out delay-150 duration-300 cursor-pointer bg-gradient-to-r from-[#F3FDFF] to-[#FFF]">
                      <div className="relative">
                        <Image
                          src={lampimage}
                          alt="lamp"
                          className="width={46px} height={67.298px} shrink-0 fill-[#00386B]hover:scale-[1.2] transition ease-in-out delay-150 duration-300 cursor-pointer"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-4 sm:px-[6rem] md:px-[10rem] lg:px-[0rem]">
                  <p className="text-[#000] text-[14px] capitalize tracking-[0.14px] font-[410] text-center w-[100%] lg:w-[100%]">
                    Street Light Controller
                  </p>
                  <h1 className="text-[#626262] text-[15px] font-[405] leading-[19.5px] tracking-[0.15px] text-center w-[100%] lg:w-[100%] mt-2">
                    Activates/deactivates in response to motion/light sensing
                    and controls the brightness of the street lamp
                  </h1>
                </div>
              </div>

              <div
                className="flex flex-col items-center w-[100%] lg:w-[55%] md:w-[55%] sm:w-[55%] 

                
             
              pt-[50px] lg:pt-[0px] md:pt-[50px]"
              >
                <div className="flex gap-[40px]">
                  <div
                    className="border-[2.206px] border-dashed border-[#3661FF] 
              rounded-[28.818px] w-[117px] h-[117px] shrink-0 flex items-center justify-center"
                  >
                    <div className="w-[92.876px] h-[92.786px] shrink-0 rounded-[19.299px] border-[2.206px] border-[#EAEAEA] flex items-center justify-center p-[10px] bg-gradient-to-r from-[#F3FDFF] to-[#FFF] shadow-xl hover:scale-[1.3] transition ease-in-out delay-150 duration-300 cursor-pointer ">
                      <div className="relative">
                        <Image
                          src={gateimage}
                          alt="lamp"
                          className="width={46px} height={67.298px} shrink-0 fill-[#00386B]hover:scale-[1.2] transition ease-in-out delay-150 duration-300 cursor-pointer"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-4 w-[80%] sm:w-[100%] md:w-[90%] lg:w-[95%] flex flex-col items-center ">
                  <p className="text-[#000] text-[14px] capitalize tracking-[0.14px] font-[410] text-center">
                    Gateway
                  </p>
                  <h1 className="text-[#626262] text-[15px] font-[405] leading-[19.5px] tracking-[0.15px] text-center mt-2">
                    Employed for interfacing between a Controller and the
                    Lighting Management Software.
                  </h1>
                </div>
              </div>
              <div className="flex flex-col items-center w-[90%] lg:w-[55%] pt-[50px] lg:pt-[0px] md:pt-[50px]">
                <div className="flex gap-[40px]">
                  <div
                    className="border-[2.206px] border-dashed border-[#3661FF] 
              rounded-[28.818px] w-[117px] h-[117px] shrink-0 flex items-center justify-center"
                  >
                    <div className="w-[92.876px] h-[92.786px] shrink-0 rounded-[19.299px] border-[2.206px] border-[#EAEAEA] flex items-center justify-center p-[10px] bg-gradient-to-r from-[#F3FDFF] to-[#FFF] shadow-xl hover:scale-[1.3] transition ease-in-out delay-150 duration-300 cursor-pointer ">
                      <div className="relative">
                        <Image
                          src={cloudimage}
                          alt="lamp"
                          className="width={46px} height={67.298px} shrink-0 fill-[#020305]hover:scale-[1.2] transition ease-in-out delay-150 duration-300 cursor-pointer "
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-4 w-[100%] sm:w-[100%] md:w-[90%] lg:w-[55%]">
                  <p className="text-[#000] text-[14px] capitalize tracking-[0.14px] font-[410] text-center">
                    Cloud-based Management System
                  </p>
                  <h1 className="text-[#626262] text-[15px] font-[405] leading-[19.5px] tracking-[0.15px] mt-2 text-center">
                    Collects information from multiple gateways.
                  </h1>
                </div>
              </div>
            </div>
            <div className="h-50 w-full flex items-center justify-evenly pt-[100px] lg:pt-[200px]">
              <div className="flex flex-col lg:flex-row md:flex-row items-center justify-evenly w-[80%] ">
                <div className="flex flex-col items-center w-[90%] lg:w-[55%] ">
                  <div className="flex gap-[40px]">
                    <div
                      className="border-[2.206px] border-dashed border-[#3661FF] 
              rounded-[28.818px] w-[117px] h-[117px] shrink-0 flex items-center justify-center"
                    >
                      <div className="w-[92.876px] h-[92.786px] shrink-0 rounded-[19.299px] border-[2.206px] border-[#EAEAEA] flex items-center justify-center p-[10px] bg-gradient-to-r from-[#F3FDFF] to-[#FFF] shadow-xl hover:scale-[1.3] transition ease-in-out delay-150 duration-300 cursor-pointer">
                        <div className="relative">
                          <Image
                            src={gateimage}
                            alt="lamp"
                            className="width={46px} height={67.298px} shrink-0 fill-[#00386B] hover:scale-[1.2] transition ease-in-out delay-150 duration-300 cursor-pointer"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 w-[100%] sm:w-[100%] lg:w-[65%]">
                    <p className="text-[#000] text-[14px] capitalize tracking-[0.14px] font-[410] text-center">
                      Users
                    </p>
                    <h1 className="text-[#626262] text-[15px] font-[405] leading-[19.5px] tracking-[0.15px] text-center mt-2">
                      Data from the cloud is used to monitor and control street
                      lights by the System Managers.
                    </h1>
                  </div>
                </div>
                <div className="flex flex-col items-center w-[90%] lg:w-[55%]  sm:w-[55%] pt-[50px] md:p-0 lg:p-0">
                  <div className="flex gap-[40px]">
                    <div
                      className="border-[2.206px] border-dashed border-[#3661FF] 
              rounded-[28.818px] w-[117px] h-[117px] shrink-0 flex items-center justify-center"
                    >
                      <div className="w-[92.876px] h-[92.786px] shrink-0 rounded-[19.299px] border-[2.206px] border-[#EAEAEA] flex items-center justify-center p-[10px] bg-gradient-to-r from-[#F3FDFF] to-[#FFF] shadow-xl hover:scale-[1.3] transition ease-in-out delay-150 duration-300 cursor-pointer">
                        <div className="relative">
                          <Image
                            src={Evaluationimage}
                            alt="lamp"
                            className="width={46px} height={67.298px} shrink-0 fill-[#020305] hover:scale-[1.2] transition ease-in-out delay-150 duration-300 cursor-pointer"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 w-[100%] sm:w-[100%] lg:w-[65%]">
                    <p className="text-[#000] text-[14px] capitalize tracking-[0.14px] font-[410] text-center">
                      Evaluation
                    </p>
                    <h1 className="text-[#626262] text-[15px] font-[405] leading-[19.5px] tracking-[0.15px] mt-2 text-center">
                      Gathered insights are used to evaluate the performance of
                      the lighting systems.
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Workpage;
