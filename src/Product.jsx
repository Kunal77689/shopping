import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
flex:1;
display:flex;
justify-content:center;
align-items:center;
padding: 10px;
height: 100%;
width: 100%;
position: relative;
`

const Image = styled.img`

margin:20px;
height:60vh;
width:35vw;
object-fit:cover;
`

const Desc = styled.h4`

font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
position: absolute;
color: black;
margin-bottom:330px;
`

const Button = styled.button`
position: absolute;
    border: none;
    margin-top:200px;
    padding: 10px;
    color: grey;
    cursor: pointer;
`

const Product = ({item})=>{
    return(
        <Container>
            <Image src = {item.img} alt = "img"></Image>
            <Desc>{item.desc}</Desc>
            <Button>SHOP NOW</Button>
        </Container>
    )
}

export default Product;