import React from 'react'
import { NavbarMenu } from '../components/navbar/navbar'
import { Banner } from '../components/Banner/banner';
import { AboutUsInfo } from '../components/AboutUsInfo/aboutUsInfo';

export const AboutUs = () => {
  return (
    <>
        <Banner/>
        <NavbarMenu/>
        <AboutUsInfo/>
    </>
  )
}
