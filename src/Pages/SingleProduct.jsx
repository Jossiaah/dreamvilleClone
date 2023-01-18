import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import products from '../products';
import styled from 'styled-components'
import Navbar from '../Components/Navbar';
import BackDrop from '../Components/BackDrop';
import Sidebar from '../Components/Sidebar';
import Logo from '../Components/Logo';
import Legal from '../Components/Legal';
import Banner from '../Components/Banner';

const Container = styled.div`
     text-align: left;
     display: flex;
    flex-direction: column;
    /* width: 100vw; */
    align-items: center;

    h3 {
        line-height: 35px;
        font-family: 'Oswald', sans-serif;
        width: 78vw;
        justify-content: left;
        text-align: left;
        font-weight: 400;
        font-size: 25px;
        padding: 20px;
        padding-bottom: 12px;
    }

    img {
        width: 80vw;
    }
    
    p {

        width: 80vw;
        letter-spacing: 1px;
        font-family: 'Oswald', sans-serif;
        font-size: 20px;
        padding-left: 20px;
        font-weight: 400;
        padding-bottom: 20px;
    }
`;

const SingleProduct = () => {

    const { productId } = useParams();
    const product = products.find((product) => product.id === productId);

    const { img, title, price } = product

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
                <img src={img} />
                <h3> {title} </h3>
                <p> $ {price} </p>
            </Container>
            <Legal />
            <Banner />
        </>
    )
}

export default SingleProduct;