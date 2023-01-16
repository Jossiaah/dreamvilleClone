import React from 'react'
import styled from 'styled-components';
import products from '../products';
import { Link } from 'react-router-dom';


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h4 {
        text-align: left;
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

`

const ProductCard = () => {
    return (
        <>
            {
                products && products.map(product => {
                    return (
                        <>
                            <Container key={product.id}>
                                <Link to={`/products/${product.id}`}>
                                    <img src={product.img} alt={product.title} />
                                </Link>
                                <hr />
                                <Link to={`/products/${product.id}`} style={{ textDecoration: "none", color: "black" }}>
                                    <h4>{product.title}</h4>
                                </Link>
                            </Container>
                            <Price><p>${product.price}</p></Price>
                        </>
                    )
                })
            }
        </>
    )
}

export default ProductCard