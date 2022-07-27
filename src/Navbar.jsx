import React from "react";
import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from "@mui/material";
const Container = styled.div`
   height: 60px;
`
const Wrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center:

`
const Middle = styled.h1`
    flex: 1;
    font-weight: 700;
    margin: 10px;
    display: flex;
    justify-content: center;
    

`

const Left = styled.div`
flex: 1;
display: flex;
font-weight: 500;

`

const Right = styled.div`
    margin_ 40px;
    flex: 1;
    display: flex;
    justify-content: flex-end;
    

    
   
`
const Search = styled.div`
    cursor: pointer;
    margin: 10px
`

const Cart = styled.div`
    cursor: pointer;
    
`
const Person = styled.div`
    cursor: pointer;
    margin: 10px;
`

const Register = styled.div`
cursor: pointer;
margin: 10px;

`

const SignIn = styled.div`
cursor: pointer;
margin: 10px;
`


const Navbar = () =>{

    return(
        <Container>
            <Wrapper>
            <Left>
                <Register>REGISTER</Register>
                <SignIn>SIGN IN</SignIn>
            </Left>
            <Middle>
                WARDROBE.
            </Middle>
            <Right>
                <Search><SearchIcon/></Search>
                <Badge badgeContent={1} color="primary" style = {{margin: 10}}>
                <Cart><ShoppingCartIcon color = 'action'/></Cart>
                </Badge>
                
                <Person><PersonIcon/></Person>
            </Right>
            </Wrapper>
        </Container>
    );
};

export default Navbar;