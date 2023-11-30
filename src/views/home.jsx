import React from "react";
import { NavbarMenu } from "../components/navbar/navbar";
import { Banner } from "../components/Banner/banner";
import { CarouselHome } from "../components/Banner/carousel";
import { ProductsHome } from "../components/products/productsHome";
import { Footer } from "../components/Footer/footer";
import { useState, useEffect } from "react";
import axios from "axios"

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
