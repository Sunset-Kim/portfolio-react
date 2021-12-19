import React, { useState } from 'react'
import styled from "styled-components";
import ToggleSwitch from './ToggleSwitch';

const Container = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;

max-width: 640px;
padding: 0 10px;
height: 36px;
margin: 0 auto;
`;

interface CommonHeaderProps {
  onChangeTheme?: () => void
}

const CommonHeader:React.FC<CommonHeaderProps> = ({onChangeTheme}) => {

  const onClick = () => {
    onChangeTheme && onChangeTheme();
  }  

  return (
    <Container>
      <ToggleSwitch onClick={onClick} />
    </Container>
  )
}

export default CommonHeader
