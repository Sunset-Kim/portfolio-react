import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
display: flex;
flex-wrap: wrap;
`;
const Dimension = styled.div`
width: calc(100% / 3);
background: cadetblue;
border: 1px solid black;
div {
  padding-top: 200%;
}
`;


const ToyProject = () => {
  return (
    <Container>
      <Dimension><div></div></Dimension>
      <Dimension><div></div></Dimension>
      <Dimension><div></div></Dimension>
      <Dimension><div></div></Dimension>
      <Dimension><div></div></Dimension>
    </Container>
  )
}

export default ToyProject
