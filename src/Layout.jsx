import React from 'react'
import Header from './dist/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './dist/Footer/Footer'
import ScrollToTop from './dist/ScrollToTop/ScrollToTop.js'
function Layout() {
  return (
    <>
    <Header/>
    <ScrollToTop/>
    <Outlet/>
    <Footer/>

    </>
  )
}

export default Layout