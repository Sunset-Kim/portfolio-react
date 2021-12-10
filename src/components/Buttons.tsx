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
background-color: ${props => props.bgColor ?? props.theme.color.backgorund};
color: ${props => props.textColor ?? props.theme.color.text1};
`
const Link = styled.a<ButtonStyleProps>`
padding: 8px 24px;
font-size: 14px;
text-decoration: none;
border-radius: 100px;
background-color: ${props => props.bgColor ?? props.theme.color.backgorund};
color: ${props => props.textColor ?? props.theme.color.text1};
`;

interface BasicButtonProps {
  name: string
  bgColor?: string
  textColor?: string
}

const BasicButton: React.FC<BasicButtonProps> = ({ name, bgColor, textColor }) => {
  return (
    <Button bgColor={bgColor} textColor={textColor}>
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
    <Link href={href} target={url ? "_blank" : ""} >
      {name}
    </Link>
  )
}

export { BasicButton, LinkButton }
