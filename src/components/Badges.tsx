import React from "react";
import styled from "styled-components";

interface Container {
  bgColor?: string
  textColor?: string
  size?: number
}

const BadgeContainer = styled.span<Container>`
display: inline-flex;
justify-content: center;
align-items: center;
width: 50px;
height: 50px;
padding: 3px;
border-radius: 50%;
background-color: ${props => props.bgColor ?? props.theme.color.foreground};
color: ${props => props.textColor ?? props.theme.color.background};

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
`;


const SkillBadgeContainer = styled.span<Container>`
display: inline-flex;
justify-content: center;
align-items: center;
width: ${props => props.size ?? '50px'};
height: ${props => props.size ?? '50px'};
padding: 3px;
border-radius: 50%;
background-color: ${props => props.bgColor ?? props.theme.color.foreground};
color: ${props => props.textColor ?? props.theme.color.background};
overflow: hidden;

img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
}
`;

export type Keywords = "html" | "css" | "javascript" | "jquery" |"react" | "react-navtive" | "typescript"

interface BasicBadgeProps {
  type: Keywords
  bgColor?: string
  textColor?: string
}

const BasicBadge: React.FC<BasicBadgeProps> = ({ type, bgColor, textColor }) => {

    return (
      <BadgeContainer bgColor={bgColor} textColor={textColor}>
        <img src={`/images/common/${type}.png`} alt={type} />
      </BadgeContainer>
    )
  }

const SkillBadge: React.FC<BasicBadgeProps> = ({ type, bgColor, textColor }) => {

  return (
    <SkillBadgeContainer bgColor={bgColor} textColor={textColor}>
      <img src={`/images/common/${type}.png`} alt={type} />
    </SkillBadgeContainer>
  )
}

export { SkillBadge }