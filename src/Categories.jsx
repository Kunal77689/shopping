import React from 'react';
import styled from 'styled-components';
import {data} from "./data.js";
import CategorieItems from './CategorieItems';
const Container = styled.div`
    display: flex;
    justify-content: space-between;
    height: 13cm;
    width: 32cm;
`

const Categories = ()=>{
    return(
        <Container>
            {data.map((item)=>(
                <CategorieItems item = {item}/>
            ))}
        </Container>
    )
}

export default Categories;