import React from 'react'
import { HiOutlineXMark } from 'react-icons/hi2';
import styled from 'styled-components';
import SidebarStyle from './style/Sidebar.style.css'
import backdrop from './style/BackDrop.style.css'


const CloseContainer = styled.div`
    padding: 10px;
    /* background-color: blue; */
    text-align: center;
    align-items: center;
    border-bottom: 1px solid #e2e2e2;
    width: 92%;
    display: flex;

    p {
        font-family: 'Oswald', sans-serif;
        text-transform: uppercase;
        font-size: 13px;
        margin-right: 20px;
        font-weight: 400;
        color: #7d7d7d;
    }
`;

const ShoppingBag = ({ bag, closeBag }) => {
    return (
        <div className={bag ? " sidebar sidebar--open" : "sidebar"}>
            <CloseContainer>
                <p>shopping cart</p>
                <HiOutlineXMark className={bag ? " sidebar--open" : "sidebar--open"} onClick={closeBag} style={{ marginRight: "5px", marginLeft: "130px", color: "#7d7d7d", fontSize: "15px" }} />
            </CloseContainer>
        </div>
    )
}

export default ShoppingBag