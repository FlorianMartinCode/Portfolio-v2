import React from 'react'
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom"
import Navbar from './components/header/navbar'
import Home from './pages/home/home'
import About from './pages/about/about'
import Portfolio from './pages/porfolio/porfolio'
import Contact from './pages/contact/contact'

function Header() {
  return (
    <>
        <Navbar />
        <Outlet />
    </>
  )
};

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Header />}>
                    <Route index element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/contact" element={<Contact />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}


export default Router