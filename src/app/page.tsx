"use client";
import React from "react";
import Home from "../../src/app/Components/Home/Home";
import Workpage from "../../src/app/Components/Workpage/Workpage";
import Productspage from "../../src/app/Components/Productspage/Productspage";
import Plateformpage from "../../src/app/Components/Plateformpage/Plateformpage";
import Footer from "../../src/app/Components/Footer/Footer";
import Header from "../../src/app/Components/Header/Header";

const Page: React.FC = () => {
  return (
    <>
      <Header />
      <Home />
      <Workpage />
      <Productspage />
      <Plateformpage />
      <Footer />
    </>
  );
};

export default Page;
