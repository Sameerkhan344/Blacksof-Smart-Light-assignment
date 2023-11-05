import React from "react";
import Home from "@/Components/Home/Home";
import Workpage from "@/Components/Workpage/Workpage";
import Productspage from "@/Components/Productspage/Productspage";
import Plateformpage from "@/Components/Plateformpage/Plateformpage";
import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
const page = () => {
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

export default page;
