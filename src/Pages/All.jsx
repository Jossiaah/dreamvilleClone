import React, { useState } from 'react'
import styled from 'styled-components';
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
            <Sidebar sideBar={sideBar} closeSidebar={toggleSideBar} />
            <Container>
                All
            </Container>
        </>
    )
}

export default All