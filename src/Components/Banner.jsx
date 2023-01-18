import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 50px;
    min-width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: hsl(0, 0%, 0%);
    color: #ffffff;

    p {
        font-size: 12px;
        text-transform: uppercase;
        align-items: center;
        justify-content: center;
        padding-left: 10px;
    }
`

const Banner = () => {
    return (
        <Container>
            <p>Est . 2007</p>
            <p>don't sleep .</p>
        </Container>
    )
}

export default Banner