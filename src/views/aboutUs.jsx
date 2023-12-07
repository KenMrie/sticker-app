import React from 'react'
import { NavbarMenu } from '../components/navbar/navbar'
import { Banner } from '../components/Banner/banner';
import { AboutUsInfo } from '../components/AboutUsInfo/aboutUsInfo';
import { FormTest } from '../components/BASE TITLE/FORM TEST';

export const AboutUs = () => {
  return (
    <>
        <Banner/>
        <NavbarMenu/>
        <AboutUsInfo/>
    </>
  )
}
