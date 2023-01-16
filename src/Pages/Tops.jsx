import React, { useState } from 'react'
import styled from 'styled-components'
import BackDrop from '../Components/BackDrop';
import Logo from '../Components/Logo';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import tops from '../tops';
import { Link } from 'react-router-dom';
import Legal from '../Components/Legal';
import Banner from '../Components/Banner';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h4 {
        text-align: left;
        line-height: 18px;
        width: 345px;
    }
    
    hr {
        border: 1px solid black;
        margin-top: 5px;
        margin-bottom: 10px;
        width: 350px;
    }

    img {
        width: 350px;
    }
`;

const Price = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    p {
        width: 340px;
        text-align: left;
        letter-spacing: 2px;
        padding-top: 10px;
        padding-bottom: 20px;
        

    }
    `




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
            {
                tops && tops.map(top => {
                    return (
                        <>
                            <Container key={top.id}>
                                <Link to={`/products/${top.id}`}>
                                    <img src={top.img} alt={top.title} />
                                </Link>
                                <hr />
                                <Link to={`/products/${top.id}`} style={{ textDecoration: "none", color: "black" }}>
                                    <h4>{top.title}</h4>
                                </Link>
                            </Container>
                            <Price><p>${top.price}</p></Price>
                        </>
                    )
                })
            }
            <Legal />
            <Banner />
        </>
    )
}

export default Tops