import React, { useState } from 'react'
import styled from 'styled-components'
import BackDrop from '../Components/BackDrop';
import Logo from '../Components/Logo';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';

const Container = styled.div`
`;

const Tops = () => {

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
            <Container>
                Top
            </Container>
        </>
    )
}

export default Tops