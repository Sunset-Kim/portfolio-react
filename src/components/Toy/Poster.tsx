import React from 'react'
import styled from 'styled-components'
import { LinkButton } from '../Buttons';

const Container = styled.div`
position: relative;
width: 100%;
padding-top: 200%;
`;

const ContainerChild = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
`;

const Front = styled(ContainerChild)`
display: flex;
flex-direction: column;
justify-content: flex-end;
padding: 24px;
`;

const Title = styled.h2`
font-size: 20px;
margin-bottom: 10px;
`;
const Desc = styled.p`
font-size: 14px;
line-height: 20px;
`;

const Back = styled(ContainerChild)`
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 24px;
`;

const Poster = () => {
  return (
    <Container>
      <Back>

      </Back>
      <Front>
        <div>
          <Title>제목</Title>
          <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore expedita ex perspiciatis ut ab modi nobis? Vel consequatur at sed!</Desc>
          <LinkButton name="link" />
        </div>
      </Front>


    </Container>
  )
}

export default Poster