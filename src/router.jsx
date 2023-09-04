import React from 'react'
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom"

import { ThemeProvider } from './themes/themes'
import Navbar from './components/header/navbar'
import Footer from './components/footer/footer'
import Home from './pages/home/home'
import About from './pages/about/about'
import Portfolio from './pages/porfolio/porfolio'
import Contact from './pages/contact/contact'

import './main.css'

function HeaderFooter() {
  return (
    <>
        <Navbar/>
        <Outlet />
        <Footer />
    </>
  )
};

function Router() {
    return (
        <ThemeProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HeaderFooter />}>
                        <Route index element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/contact" element={<Contact />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    )
}


export default Router