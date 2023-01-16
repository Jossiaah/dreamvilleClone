import React from 'react'
import {
    HiOutlineShoppingBag,
    HiOutlineMagnifyingGlass,
    HiBars3,
    HiOutlineUser
} from "react-icons/hi2"
import styled from 'styled-components'
import Banner from './Banner';
import { Link } from 'react-router-dom';

const Container = styled.div`
    /* background-color: #e4e4e4; */
    padding: 20px;
    height: 4px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid #e2e2e2;
`;

const Navbar = ({ openSideBar, openShoppingBag }) => {
    return (
        <>
            <Banner />
            <Container>
                <HiBars3 style={{ fontSize: "25px" }} onClick={openSideBar} />
                <HiOutlineMagnifyingGlass style={{ fontSize: "23px" }} />
                <HiOutlineShoppingBag style={{ fontSize: "23px" }} onClick={openShoppingBag} />
                <HiOutlineUser style={{ fontSize: "23px" }} />
            </Container>

        </>
    )
}

export default Navbar