import React, { useState } from 'react'
import BackDrop from '../Components/BackDrop';
import Banner from '../Components/Banner';
import Legal from '../Components/Legal';
import Logo from '../Components/Logo';
import Navbar from '../Components/Navbar';
import ProductCard from '../Components/ProductCard';
import Sidebar from '../Components/Sidebar';

const All = () => {
    const [sideBar, setSideBar] = useState(false);

    const toggleSideBar = () => {
        setSideBar((prevState) => !prevState)
    }
    return (
        <>
            <Navbar openSideBar={toggleSideBar} />
            <BackDrop sideBar={sideBar} />
            <Sidebar sideBar={sideBar} closeSidebar={toggleSideBar} />
            <Logo />
            <ProductCard />
            <Legal />
            <Banner />
        </>
    )
}

export default All