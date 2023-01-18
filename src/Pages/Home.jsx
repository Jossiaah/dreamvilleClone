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
        overflow: hidden;
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

        img {
            position: absolute;
            top: 10px;
            left: 200px;
            min-width: 50%;
            height: auto;
            margin-bottom: 20px;
        }

        @media (min-width: 400px) {
            img {
                left: 250px;
            }
        }

        @media (min-width: 600px) {
            img {
                left: 300px;
            }
        }

        @media (min-width: 750px){
            img {
                left: 400px;
            }
        }

        @media (min-width: 1000px) {
            img {
                left: 600px;
            }
        }


    `;



    const HeroText = styled.h2`
        h2 {
            position: absolute;
            bottom: 85px;
            text-transform: uppercase;
            font-family: 'Sofia Sans Semi Condensed', sans-serif;
            margin-right: 20px;
            padding-left: 10px;
            font-size: 22px;
            font-weight: 700;
        }


        @media (min-width: 600px) {
            h2 {
                font-size: 30px;
            }
        }

        @media (min-width: 1000px) {
            h2 {
                left: 90px;
                font-size: 34px;
            }
            
        }
    `

    const Button = styled.button`
        position: absolute;
        font-weight: bold;
        font-size: 12px;
        left: 2px;
        top: 150px;
        text-transform: uppercase;
        width: 100px;
        height: 32px;
        padding: 5px;
        margin-left: 20px;
        border: none;
        background-color: hsl(0, 0%, 0%);
        color: hsl(0, 0%, 100%);

        @media (min-width: 400px) {
            margin-left: 10px;
            width: 95px;
            top: 195px;
            left: 10px;
            font-size: 12px;
        }

        @media (min-width: 600px) {
            width: 150px;
            margin-left: 10px;
            top: 195px;
            font-size: 18px;
            height: 40px;
        }

        @media (min-width: 1000px) {
            left: 90px;
        }
        
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
                    <img style={{ width: '200px' }} src={img} alt='shirt' />
                </Hero>
                <HeroText>
                    <h2>introducing <br /> the classic <br /> airbrushed tee.</h2>
                </HeroText>
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