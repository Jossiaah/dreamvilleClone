import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import BackDrop from '../Components/BackDrop'
import Banner from '../Components/Banner'
import Logo from '../Components/Logo'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import img from '../assets/images/teeImg2.png'
import dLogo from '../assets/images/dLogo.png'

const Home = () => {

    const Container = styled.div`
        background-color: hsl(0,0%,95%);
        padding-left: 12px;
        padding-right: 15px;
        border-bottom: 2px solid black;
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

    const Info = styled.div`
        text-align: center;
        margin-top: 30px;
        border-bottom: 2px solid black;
    `;

    const InfoItems = styled.div`
        background-color: hsl(0, 0%, 100%);
        font-size: 15px;
        /* font-family: 'Sofia Sans Semi Condensed', sans-serif; */
        font-weight: 100;
        list-style: none;
        text-transform: uppercase;
        line-height: 100px;
    `;

    const CopyRight = styled.div`
        text-align: right;
        color: #8a8a8a;
        align-items: center;
        display: flex;
        justify-content: flex-end;
        padding: 35px;
        padding-right: 15px;
        line-height: 24px;
        
    `;

    const DLogo = styled.div`
        img {
            width: 50px;
            margin-left: 20px ;
        }
    `;

    const [sideBar, setSideBar] = useState(false);

    const toggleSideBar = () => {
        setSideBar((prevState) => !prevState)
    }

    return (
        <>
            <Navbar openSideBar={toggleSideBar} />
            <Logo />
            <Container>
                <Hero>
                    <h2>introducing <br /> the classic <br /> airbrushed tee.</h2>
                    <img src={img} />
                </Hero>
                <Button>
                    <Link to='/all' style={{ textDecoration: "none", color: "white" }}>
                        Shop Now
                    </Link>
                </Button>
            </Container>
            <Info>
                <InfoItems>
                    <li>terms of service</li>
                    <li>privacy policy</li>
                    <li>faqs</li>
                    <li>contact us</li>
                </InfoItems>
            </Info>
            <CopyRight>
                <h4>Copyright &copy; 2021 Dreamville <br /> Official Store</h4>
                <DLogo>
                    <img src={dLogo} />
                </DLogo>
            </CopyRight>
            <Banner />
            <BackDrop sideBar={sideBar} />
            <Sidebar sideBar={sideBar} closeSidebar={toggleSideBar} />
        </>
    )
}

export default Home