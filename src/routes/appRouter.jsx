import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom' 
import { Stickers } from '../views/stickers'
import { Home } from '../views/home'
import { AboutUs } from '../views/aboutUs'
import { Products } from '../views/products'

export const AppRouter =() => {
  return (

    <>
        <Routes> 
            <Route path='/' element={<Home/>} />
            <Route path='/stickers' element={<Stickers/>} />
            <Route path='/aboutUs' element={<AboutUs/>} />
            <Route path='/products' element={<Products/>} />

            <Route path='*' element={<Navigate to='/' replace />}/>

        </Routes>
    </>

  )
}
