import React from 'react';
import styled from 'styled-components';
import {DataItems} from './data';
import Product from './Product';
const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 60px;
    margin-top: 450px;
    
`

const Products = ()=>{
    return(
        <Container>
            {DataItems.map((item)=>(
                <Product item = {item}></Product>
            ))}
        </Container>
    )
}

export default Products;