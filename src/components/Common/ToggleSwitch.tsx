import React, { useState } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-regular-svg-icons';

const Circle = styled.span`
position: absolute;
top: 3px;
left: 3px;
display: inline-block;
width: 14px;
height: 14px;
border-radius: 50%;
background-color: ${props => props.theme.color.background};
transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out;
`;


const Button = styled.button<{isOn: boolean}>`
position: relative;
width: 36px;
height: 20px;
border-radius: 100px;
border: 0;
background-color: ${props => props.theme.color.foreground};

${Circle} {
  transform: ${props => props.isOn ? `translateX(16px)`:`translateX(0px)`} 
}
`;

interface ToggleSwitchProps {
  onClick: () => void
}

const ToggleSwitch:React.FC<ToggleSwitchProps> = ({onClick}) => {
  const [isOn, setIsOn] = useState(false);
  
  const onToggle = () => {
    setIsOn(prev => !prev);
    onClick && onClick();
  }

  return (
    <Button onClick={onToggle} isOn={isOn}>
        <Circle />
    </Button>
  )
}

export default ToggleSwitch
