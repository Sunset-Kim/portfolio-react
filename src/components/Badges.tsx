import React from "react";
import styled from "styled-components";
interface Container {
  bgColor: string
  textColor: string
}


const BadgeContainer = styled.span<Container>`
display: inline-flex;
justify-content: center;
align-items: center;
padding: 4px 16px;
border-radius: 100px;
background: ${props => props.bgColor};
color: ${props => props.textColor};
`;

interface BasicBadgeProps {
  name: string
  bgColor: string
  textColor: string
  key?: any
}

const BasicBadge: React.FC<BasicBadgeProps> = ({ name, bgColor, textColor, key = undefined }) => {
  if (key) {
    return (
      <BadgeContainer key={key} bgColor={bgColor} textColor={textColor}>
        {name}
      </BadgeContainer>
    )
  } else {
    return (

      <BadgeContainer bgColor={bgColor} textColor={textColor}>
        {name}
      </BadgeContainer>
    )
  }

}

const ReactBadge = () => {
  return <BasicBadge name="React" bgColor="crimson" textColor="white" />
}

const HtmlBadge = () => {
  return <BasicBadge name="Html" bgColor="orange" textColor="white" />
}

const JSBadge = () => {
  return <BasicBadge name="JS" bgColor="gold" textColor="white" />
}

const JQBadge = () => {
  return <BasicBadge name="JQuery" bgColor="dodgerblue" textColor="white" />
}

export { BasicBadge, ReactBadge, HtmlBadge, JSBadge, JQBadge }