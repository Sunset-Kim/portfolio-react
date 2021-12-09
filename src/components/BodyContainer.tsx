import React from 'react'
import styled from 'styled-components'

const Container = styled.section`
position: relative;
display: flex;
flex-direction: column;
height: 100%;
max-width: 640px;
padding: 0 10px;
margin: 0 auto;
`;

const BodyContainer: React.FC = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default BodyContainer
