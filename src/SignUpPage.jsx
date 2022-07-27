import React from 'react';
import styled from 'styled-components';
import Announcement from './Announcement';
import Footer from './Footer';
import Navbar from './Navbar';
import Newsletter from './Newsletter';

const Container = styled.div`
    
    
`

const Title = styled.h2`
    font-weight: 500px;
    display: flex;
    justify-content: start;
    padding: 30px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`

const Wrapper = styled.div`

    display: flex;
    flex-direction: column;

`

const Name = styled.input`

`

const Contact = styled.input`

`

const Email = styled.input`

`

const Address = styled.input`

`

const Country = styled.input`

`
const Username = styled.input`

`

const Password = styled.Password`

`
const SignUpPage = ()=>{
    return(
        <React.StrictMode>
        <Announcement></Announcement>
        <Navbar></Navbar>
        <Container>
            <Title>SIGN UP</Title>
            <Wrapper>
                <Name></Name>
                <Contact></Contact>
                <Email></Email>
                <Address></Address>
                <Country></Country>
                <Username></Username>
                <Password></Password>

            </Wrapper>
        </Container>
        </React.StrictMode>
    )
}

export default SignUpPage;