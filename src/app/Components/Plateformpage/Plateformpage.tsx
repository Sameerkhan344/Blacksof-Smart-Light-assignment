import React from "react";
import Image from "next/image";
import plateformimage from "../../../../public/Assets/plateform-img.png";

const Plateformpage: React.FC = () => {
  return (
    <>
      <section className="bg-white text-[#000] w-full min-h-screen flex items-center justify-center overflow-hidden relative py-[50px] lg:pt-[80px] pl-[0px] md:pl-[50px] lg:pl-[0px]">
        <div className="min-h-full w-[80vw] sm:w-[70vw] md:w-[60vw] lg:w-[80vw] xl:w-[80vw]">
          <div className="w-full flex items-center justify-center">
            <h1 className="text-center text-[30px] lg:text-[40px] md:text-[40px] font-[400] leading-[30px] sm:leading-[40px] md:leading-[40px] lg:leading-[40px] xl:leading-[48px] tracking-[0.48px] sm:w-[100vw] md:w-[100vw] lg:w-[45vw]">
              The platform assists city managers on multiple fronts
            </h1>
          </div>
          <div className="gap-[20px] md:gap-[50px] md:flex md:flex-col md:py-[5rem]">
            <div className="flex items-center justify-evenly lg:justify-between flex-col md:flex-row lg:flex-row gap-3 lg:gap-0">
              <div className="w-[90vw] lg:w-[25vw] flex lg:block items-center lg:items-end flex-col lg:flex-row gap-3 lg:gap-0">
                <div>
                  <Image src={plateformimage} alt="" />
                </div>
                <div>
                  <p className="text-[20px] md:text-[20px] lg:text-[36px] font-[400] leading-[20px] lg:leading-[46.8px] tracking-[0.36px] w-[60vw] sm:w-[40vw] md:w-[35vw] lg:w-[30vw] text-center lg:text-left">
                    Saves on power consumption & related costs
                  </p>
                </div>
              </div>
              <div className="w-[90vw] lg:w-[25vw] flex lg:block items-center lg:items-end flex-col lg:flex-row gap-3 lg:gap-0">
                <div>
                  <Image src={plateformimage} alt="" />
                </div>
                <div>
                  <p className="text-[20px] md:text-[20px] lg:text-[36px] font-[400] leading-[20px] lg:leading-[46.8px] tracking-[0.36px] w-[60vw] sm:w-[40vw] md:w-[35vw] lg:w-[30vw] text-center lg:text-left">
                    Lowers downtimes
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-evenly lg:justify-between flex-col md:flex-row lg:flex-row gap-3 lg:gap-0">
              <div className="w-[90vw] lg:w-[25vw] flex lg:block items-center lg:items-end flex-col lg:flex-row gap-3 lg:gap-0">
                <div>
                  <Image src={plateformimage} alt="" />
                </div>
                <div>
                  <p className="text-[20px] md:text-[20px] lg:text-[36px] font-[400] leading-[20px] lg:leading-[46.8px] tracking-[0.36px] w-[60vw] sm:w-[40vw] md:w-[35vw] lg:w-[30vw] text-center lg:text-left">
                    Detects power thefts.
                  </p>
                </div>
              </div>
              <div className="w-[90vw] lg:w-[25vw] flex lg:block items-center lg:items-end flex-col lg:flex-row gap-3 lg:gap-0">
                <div>
                  <Image src={plateformimage} alt="" />
                </div>
                <div>
                  <p className="text-[20px] md:text-[20px] lg:text-[36px] font-[400] leading-[20px] lg:leading-[46.8px] tracking-[0.36px] w-[60vw] sm:w-[40vw] md:w-[35vw] lg:w-[30vw] text-center lg:text-left">
                    Ensures smart monitoring and control of the street light
                    infrastructure.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-evenly lg:justify-between flex-col md:flex-row lg:flex-row gap-3 lg:gap-0">
              <div className="w-[90vw] lg:w-[25vw] flex lg:block items-center lg:items-end flex-col lg:flex-row gap-3 lg:gap-0">
                <div>
                  <Image src={plateformimage} alt="" />
                </div>
                <div>
                  <p className="text-[20px] md:text-[20px] lg:text-[36px] font-[400] leading-[20px] lg:leading-[46.8px] tracking-[0.36px] w-[60vw] sm:w-[40vw] md:w-[35vw] lg:w-[30vw] text-center lg:text-left">
                    Ensures real-time actionable analytics on power failures,
                    lamp malfunctions, voltage failures, etc.
                  </p>
                </div>
              </div>
              <div className="w-[90vw] lg:w-[25vw] flex lg:block items-center lg:items-end flex-col lg:flex-row gap-3 lg:gap-0">
                <div>
                  <Image src={plateformimage} alt="" />
                </div>
                <div>
                  <p className="text-[20px] md:text-[20px] lg:text-[36px] font-[400] leading-[20px] lg:leading-[46.8px] tracking-[0.36px] w-[60vw] sm:w-[40vw] md:w-[35vw] lg:w-[30vw] text-center lg:text-left">
                    Ensures security in the neighborhood
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Plateformpage;
