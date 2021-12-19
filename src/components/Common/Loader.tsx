import React from 'react'
import styled from 'styled-components'
import  {ReactComponent as Spinner} from '../../assets/spinner.svg'

const Container = styled.div`
  position: absolute;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.color.background};
  display: flex;
  justify-content: center;
`;

const Loader = () => {
  return (
    <Container>
      <Spinner></Spinner>
    </Container>
  )
}

export default Loader
