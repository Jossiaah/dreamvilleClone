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
import ShoppingBag from '../Components/ShoppingBag';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h4 {
        text-align: left;
        font-weight: 400;
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

    @media (min-width:730px) {
        flex-direction: row;
        justify-content: center;
        align-items: center;

        hr {
            display: none;
        }

        h4 {
            outline: 1px solid black;
            padding: 12px;
            font-size: 25px;
            font-weight: 600;
            width: 480px;
            line-height: 40px;
            height: 150px;
        }

        img {
            width: 200px;
        }
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

    @media (min-width: 730px) {


p {
    position: relative;
    bottom: 80px;
    left: 30px;
    font-size: 25px;
}
}
    `;




const Tops = () => {

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
            <Navbar openSideBar={toggleSideBar} openShoppingBag={toggleShoppingBag} />
            <BackDrop sideBar={sideBar} />
            <Sidebar sideBar={sideBar} closeSidebar={toggleSideBar} />
            <ShoppingBag bag={shoppingBag} closeBag={toggleShoppingBag} />
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