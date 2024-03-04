import React from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'
import About from "./components/About/About";
import Contact from './components/Contact/Contant';
function Layout() {
    return (
       <>
       <Header/>
       <Outlet/>
       <About/>
       <Footer/>
       <Contact/>
       </> 
    )
}

export default Layout
