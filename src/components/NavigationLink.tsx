import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
margin: 0 60px;
height: 60px;
line-height: 60px;
`;

interface NavigationLinkProps {

}

const NavigationLink: React.FC<NavigationLinkProps> = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default NavigationLink
