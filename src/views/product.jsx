import React from 'react'
import { Banner } from '../components/Banner/banner'
import { Footer } from '../components/Footer/footer'
import { NavbarMenu } from '../components/navbar/navbar'
import { Products } from '../components/Stickerproducts/products'

export const Product = () => {
  return (
    <>
    <Banner/>
    <NavbarMenu/>
    <Products/>
    <Footer/>
    </>
  )
}
