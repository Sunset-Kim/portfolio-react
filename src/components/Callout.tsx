import styled from 'styled-components'

const CalloutContainer = styled.div`
  padding: 16px;
  font-size: 15px;
  background-color: ${({theme}) => theme.color.foreground};
  color: ${({theme}) => theme.color.background};
  border-radius: 999px;
  font-weight: bold;
`;

const Callout:React.FC = ({children}) => {
  return (
    <CalloutContainer>
      {children}
    </CalloutContainer>
  )
}

export default Callout
