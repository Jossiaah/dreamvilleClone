import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import dreamLogo from '../assets/images/dreamville-logo-reverse_300x.png'


const Container = styled.div`
    padding: 20px;
    display: flex;
    justify-content: center;
`;

const LogoImg = styled.img`
    width: 150px;
    
`

const Logo = () => {
    return (
        <Container>
            <Link to='/'>
                <LogoImg src={dreamLogo} />
            </Link>
        </Container>
    )
}

export default Logo