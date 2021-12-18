import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import useTab from '../hooks/useTab';
import { BasicButton } from './Buttons';



const PrimaryButton = css`
  background-color: ${props => props.theme.color.foreground};
  color: ${props => props.theme.color.backgorund};

  &.active {
    background-color: ${props => props.theme.color.secondary};
  }
`

const Button = styled.button`
height: fit-content;
display: inline-block;
border: none;
font-size: 14px;
cursor: pointer;
appearance: none;
background-color: transparent;
padding: 8px 16px;
border-radius: 999px;
${PrimaryButton}
`;

const Container = styled.div`
display: flex;
height: fit-content;
max-width: 640px;
overflow-x: auto;
margin: 0 auto;

${Button} {
  margin-right: 5px;
  &:last-child {
    margin-right: 0;
  }
}
`;

interface TabContainerProps {
  onChange: (currentItem:string) => void
}

const TabContainer:React.FC<TabContainerProps>= ({onChange}) => {
  const tabList = ["전체", "React", "React-Native", "Jquery", "Javascript", "sass", "css"];
  const { currentItem, changeItem } = useTab(0, tabList);

  const onClick = (index: number) => {
    changeItem(index);
  }

  useEffect(() => {
    onChange(currentItem)
  }, [currentItem])

  return (
    <Container>
      {tabList.map((item, index) =>
        <Button key={`keyword${index}`} className={currentItem === item ? 'active' : undefined} onClick={e => onClick(index)} >
          <span>
          {item}
          </span>
        </Button>)}
    </Container>
  )
}

export default TabContainer
