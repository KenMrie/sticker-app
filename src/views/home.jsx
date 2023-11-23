import React from "react";
import { NavbarMenu } from "../components/navbar/navbar";
import { Banner } from "../components/Banner/banner";
import { Loading } from "../components/loading/loading";
import { CarouselHome } from "../components/Banner/carousel";
import { ProductsHome } from "../components/products/productsHome";
import { Footer } from "../components/Footer/footer";

export const Home = () => {
  return (
    <>
      <Banner/>
      <NavbarMenu/>
      <CarouselHome/>
      <ProductsHome/>
      <Footer/>
    </>
  );
};
