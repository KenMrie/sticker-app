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
        <h1> Info should be here </h1>
        <div className='d-flex align-items-center justify-content-center'>
        <CarouselHome/>
        </div>
    </>
  )
}
