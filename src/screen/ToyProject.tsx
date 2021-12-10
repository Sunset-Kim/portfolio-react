import React from 'react'
import styled from 'styled-components'
import Poster from '../components/Toy/Poster';
const Container = styled.div`
display: flex;
flex-wrap: wrap;
`;

const Dimension = styled.div`
width: calc(100% / 3);
background: cadetblue;
border: 1px solid black;
`;


const ToyProject = () => {
  return (
    <Container>
      <Dimension>
        <Poster />
      </Dimension>
      <Dimension>
        <Poster />
      </Dimension>
      <Dimension>
        <Poster />
      </Dimension>
      <Dimension>
        <Poster />
      </Dimension>
      <Dimension>
        <Poster />
      </Dimension>
    </Container>
  )
}

export default ToyProject
