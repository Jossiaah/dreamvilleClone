import React from 'react'
import styled from 'styled-components'
import dLogo from '../assets/images/dLogo.png'
import { Link } from 'react-router-dom';

const Container = styled.div`
    
`;

const Info = styled.div`
        text-align: center;
        border-top: 2px solid black;
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
        font-size: 18px;
        color: hsl(0, 0%, 55%);
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
const Legal = () => {
    return (
        <Container>
            <Info>
                <InfoItems>
                    <Link to='#home' style={{ textDecoration: "none", color: "black" }}>
                        <li>terms of service</li>
                    </Link>
                    <li>privacy policy</li>
                    <li>faqs</li>
                    <li>contact us</li>
                </InfoItems>
            </Info>
            <CopyRight>
                <h5>Copyright &copy; 2021 Dreamville <br /> Official Store</h5>
                <DLogo>
                    <img src={dLogo} alt='dreamLogo' />
                </DLogo>
            </CopyRight>
        </Container>
    )
}

export default Legal