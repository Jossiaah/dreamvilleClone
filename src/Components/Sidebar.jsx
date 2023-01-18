import React from 'react'
import styled from 'styled-components'
import { HiOutlineXMark } from "react-icons/hi2"
import SidebarStyle from './style/Sidebar.style.css'
import backdrop from './style/BackDrop.style.css'
import { Link } from 'react-router-dom'



const CloseContainer = styled.div`
    padding: 10px;
    /* background-color: blue; */
    text-align: center;
    align-items: center;
    border-bottom: 1px solid #e2e2e2;
    width: 92%;
    display: flex;

    p {
        font-size: 15px;
        margin-right: 20px;
        font-weight: 100;
        color: #7d7d7d;
    }
`;

const MenuItems = styled.div`
    padding: 10px;

    li {
        font-size: 15px;
        list-style: none;
        padding-top: 20px;
        padding-left: 10px;
    }
`;

const Sidebar = ({ sideBar, closeSidebar }) => {
    return (
        <div className={sideBar ? " sidebar sidebar--open" : "sidebar"}>
            <CloseContainer>
                <HiOutlineXMark className={sideBar ? " sidebar--open" : "sidebar--open"} onClick={closeSidebar} style={{ marginRight: "5px", marginLeft: "10px", color: "#7d7d7d", fontSize: "20px", cursor: "pointer" }} />
                <p>Close</p>
            </CloseContainer>
            <MenuItems>
                <Link to='/all' style={{ textDecoration: "none", color: "black" }}>
                    <li>All</li>
                </Link>
                <Link to='/tops' style={{ textDecoration: "none", color: "black" }}>
                    <li>Tops</li>
                </Link>
                <Link to='/bottoms' style={{ textDecoration: "none", color: "black" }}>
                    <li>Bottoms</li>
                </Link>
                <Link to='/accessories' style={{ textDecoration: "none", color: "black" }}>
                    <li>Accessories</li>
                </Link>
            </MenuItems>
        </div>
    )
}

export default Sidebar