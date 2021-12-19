import React, { useState } from 'react'
import styled from "styled-components";
import ToggleSwitch from './ToggleSwitch';

const Container = styled.div`
position: relative;
height: 36px;
width: 640px;
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
    <div>
      <ToggleSwitch onClick={onClick} />
    </div>    
    </Container>
  )
}

export default CommonHeader
