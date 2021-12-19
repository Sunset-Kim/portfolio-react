import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
height: 100%;
overflow-x: hidden;
overflow-y: scroll;
-webkit-overflow-scrolling: touch;

&::-webkit-scrollbar {
  display: none;
}
`;

const ScrollContainer:React.FC = ({children}) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default ScrollContainer
