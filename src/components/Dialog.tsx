import React from 'react'
import styled from "styled-components";


const Container = styled.div`
`;

const Title = styled.h3`
font-family: 'Norwester','Roboto';
margin: 0;
margin-bottom: 10px;
font-size: 16px;
letter-spacing: 0.05em;

/* md */
${({theme: {media}}) => media.tablet`
  font-size: 20px;
`}
`;

const Contents = styled.div`
font-size: 15px;
line-height: 22px;
white-space: pre-wrap;
`;

interface DialogProps {
  title?: string,
  
}

const Dialog:React.FC<DialogProps> = ({title, children}) => {
  return (
    <Container>
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
