"use client";
import * as React from "react";
import arrowimage from "../../../../public/Assets/icon_png.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Pagination } from "swiper/modules";
import Image from "next/image";

const content = [
  {
    img: "../../../../Assets/lightimage.png",
    date: "Products 1/5",
    info: "Centralized Control & Monitoring System",
  },
  {
    img: "../../../../Assets/smart_lights.png",
    date: "Products 1/5",
    info: "NEMA-Mounted VOLC 1160",
  },
  {
    img: "../../../../Assets/lightimage.png",
    date: "Products 1/5",
    info: "Retrofit Street Light Controller VOLC 2160",
  },
  {
    img: "../../../../Assets/image_31.png",
    date: "Products 1/5",
    info: "Retrofit Street Light Controller VOLC 2180",
  },
  {
    img: "../../../../Assets/lightimage.png",
    date: "Products 1/5",
    info: "Retrofit Street Light Controller VOLC 4180",
  },
];

const Fade: React.FC = () => {
  return (
    <section className="pt-[2rem] pb-[2rem]">
      <div className="lg:mx-auto max-w-[80vw] sm:max-w-[80vw] md:max-w-[80vw] lg:max-w-[100vw] mx-[1.5rem]">
        <Swiper
          modules={[Navigation, Pagination, EffectFade]}
          effect={"fade"}
          loop={true}
          pagination={{
            clickable: true,
            type: "fraction",
          }}
          spaceBetween={30}
          navigation
          className="fade"
        >
          {content.map((p, index) => {
            return (
              <SwiperSlide
                className="flex-col lg:flex-row md:flex-col sm:flex-col gap-y-10 md:gap-x-10 lg:gap-x-0 x-md:pt-10"
                key={index}
              >
                <div className="w-[100%] lg:w-[50%] h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[50vh] overflow-hidden">
                  <img
                    src={p.img}
                    alt=""
                    className="h-[35vh] sm:h-[50vh] md:h-[60vh] lg:h-[50vh] w-[100%] object-cover object-center"
                  />
                </div>
                <div className="lg:w-[50%] bg-gradient-to-b from-[#FFF] to-[#E1F4FF] px-y lg:flex lg:flex-col lg:items-start lg:justify-center lg:pl-32">
                  <header className="date text-slate-600 font-bold mb-5">
                    {p.date}
                  </header>
                  <div className="title ">
                    {/* <h1 className="font-bold mt-10 ">{p.header}</h1> */}
                    <p>{p.info}</p>
                  </div>
                  <button className="btn text-[#3661FF]  font-bold mt-5 flex items-center gap-2">
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
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Fade;
