import React from 'react'
import { NavbarMenu } from '../components/navbar/navbar'
import { Banner } from '../components/Banner/banner';
import { Products } from '../components/products/products';
import { Loading } from '../components/loading/loading';
import { CarouselHome } from '../components/Banner/carousel';

export const Home = () => {
  return (
    <>
        <Banner/>
        <NavbarMenu/>
        <CarouselHome/>
        <h1> Funky title here </h1>
    </>
  )
}
