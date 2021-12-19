import React from 'react'
import styled from 'styled-components';

const Link = styled.a<{size?:number}>`
  
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: ${props => props.size ? props.size + 'px' : '35px'};
  height: ${props => props.size ? props.size + 'px' : '35px'};
  margin-right: 5px;
  margin-bottom: 5px;
  border-radius: 50%;
  text-decoration: none;
  color: ${props => props.theme.color.backgorund};
  background: ${props => props.theme.color.foreground};
  transition: background 0.3s ease-in-out, color 0.3s ease-in-out;

  &:hover {
    color: ${props => props.theme.color.foreground};
    background: ${props => props.theme.color.primary};
  }

  &:last-child {
    margin-right: 0;
  }
`;

interface LinkButtonProps {
 url?: string
 size?: number
 
}

const LinkButton:React.FC<LinkButtonProps>= ({url, size, children}) => {
  
  return (
  <Link href={url} target={"_blank"} size={size}>
      {children}
  </Link>
  )
}

export default LinkButton
