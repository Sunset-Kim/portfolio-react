import React from 'react'
import styled from "styled-components";


const Container = styled.div<{mb: number}>`
  margin-bottom: ${props => props.mb}px;
`;
const Title = styled.h3`
font-family: 'Norwester','Roboto';
margin: 0;
margin-bottom: 10px;
font-size: 18px;
`;

const Contents = styled.div`
font-size: 15px;
line-height: 22px;
white-space: pre-wrap;
`;

interface DialogProps {
  title?: string,
  mb?: number
}

const Dialog:React.FC<DialogProps> = ({title,mb = 10, children}) => {
  return (
    <Container mb={mb}>
      {
        title &&
        <Title>{title}</Title>
      }
      <Contents>
        {children}
      </Contents>
    </Container>
  )
}

export default Dialog
