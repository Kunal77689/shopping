import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCart from '@mui/icons-material/ShoppingCart';

const Search = styled.div`
opacity: 0;
position: absolute;
color: black;
margin-bottom:0px;
margin-right: 100px;
transition: all 0.5 ease;
cursor:pointer;
&:hover{
    transform: scale(1.5);
}
`

const Heart = styled.div`
opacity: 0;
position: absolute;
color: black;
margin-bottom:0px;
margin-left: 100px;
transition: all 0.5 ease;
cursor:pointer;
&:hover{
    transform: scale(1.5);
}
`
const Cart = styled.div`
opacity: 0;
position: absolute;
color: black;
margin-bottom:0px;
margin-left: 0px;
transition: all 0.5 ease;
cursor:pointer;
&:hover{
    transform: scale(1.5);
}
`
const Container = styled.div`
flex:1;
display:flex;
justify-content:center;
align-items:center;
height: 100%;
width: 100%;
position: relative;
margin: 40px;
transitiom: all 0.8s ease;
&:hover{
    opacity: 0.6;
    transform: scale(1.05);
}
&:hover ${Search}{
    opacity:1;
}
&:hover ${Heart}{
    opacity:1;
}
&:hover ${Cart}{
    opacity:1;
}
`

const Image = styled.img`

margin:20px;
height:60%;
width:20vw;
object-fit:cover;

`

const Desc = styled.h4`

font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
position: absolute;
color: black;
margin-bottom:300px;

`

const Button = styled.button`
position: absolute;
    margin-top:200px;
    padding: 10px;
    background-color: transparent;
    cursor: pointer;
`



const Product = ({item})=>{
    return(
        <Container>
            <Image src = {item.img} alt = "img"></Image>
            <Search><SearchIcon/></Search>
            <Cart><ShoppingCart/></Cart>
            <Heart><FavoriteIcon/></Heart>
            <Desc>{item.desc}</Desc>
            <Button>SHOP NOW</Button>
        </Container>
    )
}

export default Product;