import React from "react";
import Home from "@/app/Components/Home/Home";
import Workpage from "@/app/Components/Workpage/Workpage";
import Productspage from "@/app/Components/Productspage/Productspage";
import Plateformpage from "@/app/Components/Plateformpage/Plateformpage";
import Footer from "@/app/Components/Footer/Footer";
import Header from "@/app/Components/Header/Header";

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
