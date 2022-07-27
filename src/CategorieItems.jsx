import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
flex:1;
   padding: 10px;
   
   position: relative;
`
const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit:cover;
    position: absolute;
    
`

const Info = styled.h3`
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
position: absolute;
color: azure;
margin-top: 200px;
margin-left: 100px;

`
const Button = styled.button`
    position: absolute;
    margin-top: 250px;
    margin-left: 150px;
    border: none;
    padding: 10px;
    color: grey;
    cursor: pointer;
`

const CategorieItems = ({item}) =>{
    return(
        <Container>
            
            <Image src = {item.img}></Image>
            <Info>{item.title}</Info>
            <Button>SHOP NOW</Button>
        </Container>
    )
}

export default CategorieItems;