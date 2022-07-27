import React from 'react';
import styled from 'styled-components';
import Announcement from './Announcement';
import Footer from './Footer';
import Navbar from './Navbar';
import Newsletter from './Newsletter';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Products from './Products';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    height: 60vh;
    width: 60vw;
`
const Image = styled.img`
    height: 50%;
    width: 100%;
    object-fit: cover;
`
const ImageContainer = styled.div`
    height: 8cm;
    width: 14cm;
    margin-top: 100px;
`

const Icons = styled.div`

    display: flex;
    margin: 10px 0px;
    justify-content: center;;
`

const Add = styled.div`
    padding: 5px;
    border-radius: 45%;
    cursor: pointer;
    background-color: teal;
    display: flex;
justify-content: center;
align-items: center;
object-fit: cover;
    color: white;
    &:hover{
        background-color:black;
    }
`

const Subtract = styled.div`
padding: 5px;
display: flex;
justify-content: center;
align-items: center;
    border-radius: 45%;
    background-color: teal;
    color: white;
    object-fit: cover;
    &:hover{
        background-color:black;
    }
    cursor: pointer;
    
`

const Quantity = styled.span`
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
font-size: 19px;
padding: 5px;
font-weight: 400;
    padding: 5px;
`
const DescContainer = styled.div`
display: flex;
flex-direction: column;
margin-top: 50px;
margin-left: 50px;
`

const Title = styled.h3`
    font-weight: 500;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`

const Price = styled.span`
    font-weight: 600;
`
const Colors = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;

`
const Colors1 = styled.div`
    border-radius: 50%;
    margin: 0px 5px;
    background-color: blue;
    width: 20px;
    height: 20px;
    cursor: pointer;
    transition: 0.5s all ease;
    &:hover{
        transform: scale(1.4)
    }
`
const Colors2 = styled.div`
border-radius: 50%;
    background-color: green;
    margin: 0px 5px;
    width: 20px;
    height: 20px;
    cursor: pointer;
    transition: 0.5s all ease;
    &:hover{
        transform: scale(1.4)
    }
`
const Colors3 = styled.div`
border-radius: 50%;
margin: 0px 5px;
    background-color: black;
    width: 20px;
    height: 20px;
    cursor: pointer;
    transition: 0.5s all ease;
    &:hover{
        transform: scale(1.4)
    }
`

const Desc = styled.p`
    letter-spacing: 3px;
    font-weight: 450;
`

const Text = styled.div`
    font-weight: 600;
    font-size: 17px;
    padding: 10px 0px;
`

const Size = styled.span`
    display: flex;
    margin: 10px 0px;
`
const Select = styled.select`
padding: 5px;
width: 80px;
cursor: pointer;
`

const Option = styled.option`
    
`

const SingleProductPage = () =>{
    return(
        <React.StrictMode>
        <Announcement/>
        <Navbar/>
        <Container>
        <ImageContainer>
            <Image src = "https://www.vippng.com/png/full/426-4268915_jordan-shoes-png.png" alt = "img"></Image>
            <Icons>
                <Text>QUANTITY: </Text>
                <Add><AddIcon></AddIcon></Add>
                <Quantity>1</Quantity>
                <Subtract><RemoveIcon></RemoveIcon></Subtract>
            </Icons>
        </ImageContainer>
        <DescContainer>
            <Title>NIKE BASKETBALL DUNKS LIMITED EDITION</Title>
            <Desc>Premium collection Nike sneakers, Basketball. Top quality, latest and limited stock.</Desc>
            <Price>$260</Price>
            <Colors>
            COLOR
            <Colors1></Colors1>
            <Colors2></Colors2>
            <Colors3></Colors3>
            </Colors>
            <Size>
            <Select>
                <Option disabled selected>SIZE</Option>
                <Option>S</Option>
                <Option>M</Option>
                <Option>L</Option>
                <Option>XL</Option>
                <Option>XXL</Option>
            </Select>
        </Size>
        </DescContainer>
        </Container>
        <Newsletter/>
        <Footer/>
        </React.StrictMode>
    )
}

export default SingleProductPage;