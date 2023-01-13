import React, { useState } from 'react'
import styled from 'styled-components';
import BackDrop from '../Components/BackDrop';
import Logo from '../Components/Logo';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';

const Container = styled.div`
    
`;


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
            <Container>
                All
            </Container>
        </>
    )
}

export default All