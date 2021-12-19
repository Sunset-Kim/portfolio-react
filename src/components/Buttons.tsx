import React from 'react'
import styled from 'styled-components'

interface ButtonStyleProps {
  bgColor?: string
  textColor?: string
}

const Button = styled.button<ButtonStyleProps>`
padding: 8px 24px;
font-size: 14px;
text-decoration: none;
border-radius: 100px;
background-color: ${props => props.bgColor ?? props.theme.color.background};
color: ${props => props.textColor ?? props.theme.color.text1};
border: 1px solid ${props => props.theme.color.foreground};
`
const Link = styled.a<ButtonStyleProps>`

`;

interface BasicButtonProps {
  name: string
  bgColor?: string
  textColor?: string
  onClick?: React.MouseEventHandler;
}

const BasicButton: React.FC<BasicButtonProps> = ({ name, bgColor, textColor, onClick }) => {
  return (
    <Button bgColor={bgColor} textColor={textColor} onClick={onClick}>
      {name}
    </Button>
  )
}

interface LinkButtonProps extends BasicButtonProps {
  url?: string
}

const LinkButton: React.FC<LinkButtonProps> = ({ name, bgColor, url }) => {
  const href = url ?? 'javascript:;';
  return (
    <Button as={Link} href={href} target={url ? "_blank" : ""} >
      {name}
    </Button>
  )
}

export { BasicButton, LinkButton }
