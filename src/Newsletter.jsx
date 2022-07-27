import React from 'react';
import styled from 'styled-components';
import SendIcon from '@mui/icons-material/Send';

const Container = styled.div`
    height: 50vh;
    width: 100%;
    background-color: rgb(253,241, 238);
`

const Title = styled.h1`
    font-size: 60px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    margin-left: 400px;
`

const Desc = styled.p`
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
font-size: 20px;
letter-spacing: 4px;
margin-left: 400px;
`

const InputBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 400px;
    margin-right: 100px;
`

const Input = styled.input`
    padding: 5px;
    width: 100%;
`

const Send = styled.button`

    border: none;
    background-color: black;
    color: white;
`

const Newsletter = ()=>{
    return(
        <Container>
            <Title>NEWSLETTER</Title>
            <Desc>410 product to choose from.<br/>
            Start your fashion journey and pick a custom clothing</Desc>
            <InputBox>
            <Input placeholder='YOUR EMAIL ADDRESS'></Input>
            <Send><SendIcon/></Send>
            </InputBox>
        </Container>
    )
}

export default Newsletter;