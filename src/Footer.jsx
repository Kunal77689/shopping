import React from 'react';
import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
const Container = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: rgb(243,243, 249);

`

const Middle = styled.div`
flex:1;

`

const Left = styled.div`
flex:1;
    
`

const Right = styled.div`
flex:1;
display: flex;
justify-content: center;



`
const RightTitle = styled.h3`
    display: flex;
    justify-content: end;
`
const RightIcons = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`
const Map = styled.div`
    padding: 10px;
`

const Phone = styled.div`
padding: 10px;
`

const Email = styled.div`
padding:10px;
`

const Title = styled.h2`
display: flex;
justify-content: center;
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`
const Facebook = styled.div`
    margin: 10px;
    border-radius: 50%;
    color: white;
    background-color: rgb(66,103,178);
    cursor: pointer;
`

const Instagram = styled.div`
margin: 10px;
    border-radius: 50%;
    color: white;
    background-color: rgb(225,48,108);
cursor: pointer;
`

const Twitter = styled.div`
margin: 10px;
    border-radius: 50%;
    color: white;
    background-color: rgb(29,161,242);
    cursor: pointer;

`
const Icons = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
`

const List = styled.ul`
    font-weight: 750;
    list-style: none;
    display: flex;
    flex-direction: column;
    
    flex-wrap: wrap;
`

const ListItem = styled.li`
    font-weight: 250;
    margin: 5px;
`

const Footer = () =>{
    return(
        <Container>
            <Middle>
                <List>
                    HELP SUPPORT
                    <ListItem>SHIPPING INFO</ListItem>
                    <ListItem>FREE RETURNS</ListItem>
                    <ListItem>HOW TO TRACK</ListItem>
                    <ListItem>HOW TO RETURN</ListItem>
                    <ListItem>SIZE GUIDE</ListItem>
                    <ListItem>WORDROBE. VIP</ListItem>
                </List>
            </Middle>
            <Left>
                <Title>WARDROBE.</Title>
                <Icons>
                <Facebook><FacebookIcon/></Facebook>
                <Instagram><InstagramIcon/></Instagram>
                <Twitter><TwitterIcon/></Twitter>
                </Icons>
            </Left>
            <Right>
                <RightTitle>CONTACT US</RightTitle>
                <RightIcons>
                    <Map>
                    <LocationOnIcon>
                    </LocationOnIcon>
                    45-A ALDERSHOT STREET
                    </Map>
                    <Phone>
                    <PhoneIcon></PhoneIcon>
                    +1(709)631-1624
                    </Phone>
                    <Email>
                    <EmailIcon></EmailIcon>
                    ksikka@mun.ca
                    </Email>
                </RightIcons>
            </Right>
        </Container>
    );
}

export default Footer;