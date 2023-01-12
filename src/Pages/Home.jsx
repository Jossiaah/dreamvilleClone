import React, { useState } from 'react'
import BackDrop from '../Components/BackDrop'
import Banner from '../Components/Banner'
import Logo from '../Components/Logo'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'

const Home = () => {

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
            <Banner />
        </>
    )
}

export default Home