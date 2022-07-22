import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    color: white;
    display: flex;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.591);
    align-items: center;
`

const Announcement = ()=>{
    return(
        <Container>
            FREE SHIPPING ON ALL ORDERS ABOVE $500
        </Container>
    );
};

export default Announcement;