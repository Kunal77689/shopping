import React from 'react';
import styled from 'styled-components';
import Announcement from './Announcement';
import Navbar from './Navbar';
import Products from './Products';
import Newsletter from './Newsletter';
import Footer from './Footer';

const Container = styled.div`
    
    margin: 50px 10px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

`

const Title = styled.h2`
    display: flex;
    justify-content: left;
`

const FilterContainer = styled.h3`
   
font-weight: 600;
`

const Wrapper = styled.div`
display: flex;
justify-content: space-between;
`

const Filter = styled.span`


`

const SelectFilter = styled.select`
    margin: 10px;
    padding: 5px;
    background-color: transparent;
    opacity: 0.7;
    cursor: pointer;
`

const SelectOption = styled.option`
`

const SortContainer = styled.h3`
   
font-weight: 600;
`

const Sort = styled.span`


`


const ProductsFilter = () =>{
    return(
        <React.StrictMode>
      <Announcement />
      <Navbar />
      <Container>
        <Title>PRODUCTS</Title>
        <Wrapper>
        <FilterContainer>
            <Filter>
                FILTER: 
            </Filter>
            <SelectFilter>
                <SelectOption disabled selected>COLOR</SelectOption>
                <SelectOption>BLACK</SelectOption>
                <SelectOption>GREEN</SelectOption>
                <SelectOption>RED</SelectOption>
                <SelectOption>YELLOW</SelectOption>
                <SelectOption>TEAL</SelectOption>
            </SelectFilter>
        </FilterContainer>
        <SortContainer>
            <Sort>
                SORT: 
            </Sort>
            <SelectFilter>
                <SelectOption disabled selected>SIZE</SelectOption>
                <SelectOption>S</SelectOption>
                <SelectOption>M</SelectOption>
                <SelectOption>L</SelectOption>
                <SelectOption>XL</SelectOption>
                <SelectOption>XXL</SelectOption>
            </SelectFilter>
        </SortContainer>
        </Wrapper>
      </Container>
      <Products />
      <Newsletter />
      <Footer />
    </React.StrictMode>
    )
}

export default ProductsFilter;