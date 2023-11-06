import React from "react";
import Image from "next/image";
import Homecss from "./Home.module.css";
import Button from "@/app/Components/Button/Button";
import background from "../../../../public/Assets/Hero_section.png";

const Home: React.FC = () => {
  return (
    <>
      <section className="bg-red-500 lg:bg-green-500 sm:bg-pink-500 w-full min-h-screen flex flex-col items-center overflow-hidden">
        <div className="relative w-full">
          <Image
            src={background}
            alt="background image"
            className="lg:w-full width={1000} lg:height={1000} h-[100vh]"
          />
        </div>
        <div className="absolute w-[80vw] lg:w-[55vw] text-center flex flex-col items-center py-[160px] sm:py-[218px] xl:py-[218px] md:py-[15rem]">
          <p className="text-white text-[25px] lg:text-[24px] capitalize tracking-[1px]">
            smart Lighting solutions
          </p>
          {/* <div className="bg-[#0061BA] rounded-[1826px] w-[16px] h-[126px] rotate-[-3.28deg] shrink-0 blur-[200px] absolute top-80"></div> */}
          <div className="overflow-hidden relative w-full h-full mt-[10px]">
            <div className={Homecss.TextGif}>
              <h1 className="text-white text-[22px] lg:text-[2rem] md:text-[2rem] items-center text-center capitalize">
                Bringing a new perspective to street lights and the cities of
                tomorrow.
              </h1>
            </div>
          </div>
          <Button />
        </div>
      </section>
    </>
  );
};

export default Home;
