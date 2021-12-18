import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons"
import {faBlog, faEnvelope} from "@fortawesome/free-solid-svg-icons"

interface Container {
  bgColor?: string
  textColor?: string
  width? :number
  height?: number
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
color: ${props => props.textColor ?? props.theme.color.backgorund};

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
width: ${props => props.width ?? '50px'};
height: ${props => props.height ?? '50px'};
padding: 3px;
border-radius: 50%;
background-color: ${props => props.bgColor ?? props.theme.color.foreground};
color: ${props => props.textColor ?? props.theme.color.backgorund};
overflow: hidden;

img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
}
`;

const Icon = styled(FontAwesomeIcon)``;

const LinkContainer = styled(SkillBadgeContainer)`
display: inline-flex;
padding: 0;
margin-right: 5px;
transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
&:hover {
  background-color: ${props => props.theme.color.secondary};
  color: ${props => props.theme.color.foreground};
}

${Icon} {
  font-size: 28px;  
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

interface LinkBadgeProps extends Container  {
  url: string,
  width?: number,
  height?: number,
}

const GithubBadge: React.FC<LinkBadgeProps> = ({ url, bgColor, textColor, width,height }) => {

  return (
    <LinkContainer as="a" href={url} bgColor={bgColor} textColor={textColor} width={width} height={height} target="_blank">
      <Icon icon={faGithub} />
    </LinkContainer>
  )
}

const BlogBadge: React.FC<LinkBadgeProps> = ({ url, bgColor, textColor, width,height }) => {

  return (
    <LinkContainer as="a" href={url} bgColor={bgColor} textColor={textColor} width={width} height={height} target="_blank">
      <Icon icon={faBlog} />
    </LinkContainer>
  )
}

const MailBadge: React.FC<LinkBadgeProps> = ({ url, bgColor, textColor, width,height }) => {

  return (
    <LinkContainer as="a" href={url} bgColor={bgColor} textColor={textColor} width={width} height={height} target="_blank">
      <Icon icon={faEnvelope} />
    </LinkContainer>
  )
}

export { SkillBadge,GithubBadge, MailBadge, BlogBadge }