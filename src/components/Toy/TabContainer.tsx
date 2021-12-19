import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import useTab from '../../hooks/useTab';

const PrimaryButton = css`
  background-color: ${props => props.theme.color.foreground};
  color: ${props => props.theme.color.background};

  &.active {
    background-color: ${props => props.theme.color.primary};
  }
`

const Button = styled.button`
height: fit-content;
display: inline-block;
border: none;
font-size: 12px;
cursor: pointer;
appearance: none;
background-color: transparent;
padding: 8px 16px;
border-radius: 999px;
${PrimaryButton}

span {
white-space: nowrap;
}

/* md */
  ${({theme: {media}}) => media.tablet`
  font-size: 14px;
  `}
`;

const Container = styled.div`
height: fit-content;
max-width: 640px;
overflow-x: hidden;
margin: 8px auto 16px;
`;

const ScrollContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: flex-start;
overflow-x: scroll;
height: 100%;

&::-webkit-scrollbar {
  display: none;
}

${Button} {
  margin-right: 5px;
  margin-bottom: 5px;
  &:last-child {
    margin-right: 0;
  }
}

/* md */
${({theme: {media}}) => media.tablet`
justify-content: center;

${Button} {
  margin-bottom: 0;
}
`}
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
      <ScrollContainer>
      {tabList.map((item, index) =>
        <Button key={`keyword${index}`} className={currentItem === item ? 'active' : undefined} onClick={e => onClick(index)} >
          <span>
          {item}
          </span>
        </Button>)}
      </ScrollContainer>
    </Container>
  )
}

export default TabContainer
