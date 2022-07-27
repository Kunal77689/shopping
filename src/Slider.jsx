
import React, {useState} from "react";
import styled from "styled-components";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import items from './data.js';
const Container = styled.div`
    height: 100%;
    widhth: 100%;
    display: flex;
    position: relative;
    overflow:hidden;
    
`

const Arrow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    margin-top: 150px;
    left: ${(props)=>props.direction === "left" && "10px"};
    right: ${(props=>props.direction === "right" && "10px")};
    cursor: pointer;
    z-index: 2;
    opacity:0.5;
`
const Wrapper = styled.div`
    height:100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props=>props.slideIndex *-100}vw);
`

const ImageContainer = styled.div`
    flex:1;
    height: 100%;
`
const Image = styled.img`
    height: 80vh;
    width: 100vw;
    object-fit: cover;
`

const InfoContainer = styled.div`
    flex:1;
    position: absolute;
`

const Title = styled.h1`
color: white;
font-weight: 800px;
margin: 10px;
padding: 10px;
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`

const Desc = styled.div`
color: white;
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
margin: 60px;
font-size: 20px;
font-weight: 400;
display: flex;
flex-wrap: wrap;
letter-spacing: 2px;
`

const Button = styled.button`
    padding: 15px;
    margin: 10px;
    font-size: 15px;
    background-color: transparent;
    color: azure;
    
    cursor: pointer;
`

const Slide = styled.div`
position: relative;
    
    display: flex;
    align-items: center;
    
    background-color: ${props=>props.bg};
`
const Slider = () =>{
    const [index,setIndex] = useState(0);
    const handleClick = (direction)=>{
        if (direction === "left"){
            setIndex(index>0 ? index-1 : 2);
        }else{
            setIndex(index<2?index+1:0);
        }
    }
    return(
        <Container>
            
            <Arrow direction = "left" onClick={()=>handleClick("left")}>
                <ArrowBackIosNewIcon/>
            </Arrow>
            <Wrapper slideIndex = {index}>
                {items.map((dt)=>(
                    <Slide bg = {dt.bg}>
                    <ImageContainer>
                    <Image src = {dt.img} alt="img"></Image>
                    </ImageContainer>
                    <InfoContainer>
                        <Title>{dt.title}</Title>
                        <Desc>
                        {dt.desc}<br/>{dt.desc2}
                        </Desc>
                        <Button>SHOP NOW</Button>
                    </InfoContainer>
                    </Slide>
                ))}
                
            </Wrapper>
            <Arrow direction = "right" onClick={()=>handleClick("right")}>
                <ArrowForwardIosIcon/>
            </Arrow>
            
        </Container>
    );
};
export default Slider;