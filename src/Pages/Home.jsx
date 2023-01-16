import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import BackDrop from '../Components/BackDrop'
import Banner from '../Components/Banner'
import Logo from '../Components/Logo'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import img from '../assets/images/teeImg2.png'
import Legal from '../Components/Legal'
import ShoppingBag from '../Components/ShoppingBag'

const Home = () => {

    const Container = styled.div`
        background-color: hsl(0,0%,95%);
        padding-left: 12px;
        padding-right: 15px;
        height: 34vh;
        position: relative;
    `;

    const Hero = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;

        h2 {
            text-transform: uppercase;
            font-family: 'Sofia Sans Semi Condensed', sans-serif;
            width: 144px ;
            height: 80px;
            margin-right: 20px ;
            font-size: 18px;
            font-weight: 700;
        }

        img {
            width: 190px;
            margin-bottom: 20px;
        }
    `;

    const Button = styled.button`
        position: absolute;
        font-weight: bold;
        left: 10px;
        top: 155px;
        text-transform: uppercase;
        width: 100px;
        height: 32px;
        padding: 5px;
        border: none;
        background-color: hsl(0, 0%, 0%);
        color: hsl(0, 0%, 100%);
        
    `;


    const [sideBar, setSideBar] = useState(false);
    const [shoppingBag, setShoppingBag] = useState(false);
    const toggleSideBar = () => {
        setSideBar((prevState) => !prevState)
    }

    const toggleShoppingBag = () => {
        setShoppingBag((prevState) => !prevState)

    }

    return (
        <>
            <Navbar id='home' openSideBar={toggleSideBar} openShoppingBag={toggleShoppingBag} />
            <Logo />
            <Container>
                <Hero>
                    <h2>introducing <br /> the classic <br /> airbrushed tee.</h2>
                    <img src={img} alt='shirt' />
                </Hero>
                <Button>
                    <Link to='/all' style={{ textDecoration: "none", color: "white" }}>
                        Shop Now
                    </Link>
                </Button>
            </Container>
            <Legal />
            <Banner />
            <BackDrop sideBar={sideBar} />
            <Sidebar sideBar={sideBar} closeSidebar={toggleSideBar} />
            <ShoppingBag bag={shoppingBag} closeBag={toggleShoppingBag} />
        </>
    )
}

export default Home