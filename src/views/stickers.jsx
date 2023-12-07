import React from 'react'
import { NavbarMenu } from '../components/navbar/navbar'
import { ProductsStickers } from '../components/products/productsStickers'
import { Banner } from '../components/Banner/banner';
import { Footer } from '../components/Footer/footer';


export const Stickers = () => {
  return (
    <>
        <Banner/>
        <NavbarMenu/>
        <ProductsStickers/>
        <Footer/>

    </>
  )
}
