import React from 'react'
import { NavbarMenu } from '../components/navbar/navbar'
import { Products } from '../components/products/products';
import { Banner } from '../components/Banner/banner';
import { Footer } from '../components/Footer/footer';


export const Stickers = () => {
  return (
    <>
        <Banner/>
        <NavbarMenu/>
        <Products/>
        <Footer/>

    </>
  )
}
