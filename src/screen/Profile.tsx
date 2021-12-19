import React from 'react'
import styled, { useTheme } from 'styled-components'
import Dialog from '../components/Dialog';
import {Keywords, SkillBadge} from '../components/Badges'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons"
import {faBlog, faEnvelope} from "@fortawesome/free-solid-svg-icons"
import LinkButton from '../components/LinkButton';

// header
const Title = styled.h1`
font-family: 'Roboto';
font-size: 13px;
margin: 0;
margin-bottom: 1em;

/* md */
${({theme: {media}}) => media.tablet`
  font-size: 16px;
`}

`;

const SubTitle = styled.h2`
font-family: 'Norwester', 'Roboto';
font-size: ${({theme}) => theme.fontsize[32]};
margin: 0;
margin-bottom: ${({theme}) => theme.margin[16]};

${({theme: {media, margin}}) => media.tablet`
  font-size: 48px;
  margin-bottom: 32px;
`}
`;

// info
const Section = styled.section`
display: flex;
flex-direction: column;
padding: 8px 0;

${({theme: {media}}) => media.tablet`
  flex-direction: row;
  padding: 24px 0;
`}

`;

const Left = styled.div`
flex-direction: column;
flex: 1 1;

${({theme: {media}}) => media.tablet`
  margin-right: 24px;
`}
`;

const Right  = styled.div`
position: relative;
flex: 1 1;
margin: 0 auto;
`;


const DialogChild = styled.div`
margin-bottom: ${({theme}) => theme.margin[16]};

  ${({theme: {media}}) => media.tablet`
    margin-bottom: 24px;
  `}
`;

const ImageContainer = styled.div`
width: 100%;
height: 100%;
border-radius: 5px;
overflow: hidden;
margin-top: ${({theme}) => theme.margin[16]};;

img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

  ${({theme: {media}}) => media.tablet`
    margin-top: 0;
  `}
`;


const SkillContainer = styled.div`
display: flex;
flex-wrap: wrap;
padding: 24px;
border-radius: 10px;
background-color: ${props => props.theme.color.foreground};

span {
  margin: 5px;
}
`;

const Profile = () => {
  const theme = useTheme();
  return (
    <>
    {/* about */}
      <Section>
        <Left>
          <Title>
            Frontend Delveloper Portpolio
          </Title>

          <SubTitle>
            About
          </SubTitle>

          <Dialog title='Greeting' >
            <DialogChild>
              {`안녕하세요.\n프론트엔드 개발자 김민우입니다.\n해당 사이트는 React 반응형 웹으로 제작되었으며 chrome, safari에 최적화 되었습니다`}
            </DialogChild>
          </Dialog>
          
          <Dialog title='Contact Me'>
            <LinkButton url='#none' size={35} >
              <FontAwesomeIcon icon={faGithub} size='lg'/>
            </LinkButton>
            <LinkButton url='#none' size={35} >
              <FontAwesomeIcon icon={faEnvelope} size='lg'/>
            </LinkButton>
            <LinkButton url='#none' size={35} >
              <FontAwesomeIcon icon={faBlog} size='lg'/>
            </LinkButton>
          </Dialog>
        </Left>
        <Right>
          <ImageContainer>
            <img src="/images/profile.jpeg" alt="profile" />
          </ImageContainer>
        </Right>

      </Section>

      <Section>
        <Left>
          <SubTitle>
            Skills
          </SubTitle>
        </Left>
        <Right>
          <SkillContainer>
          {
              ['html', 'css', 'jquery', 'javascript', 'typescript', 'react', 'react-native']
              .map(item => <SkillBadge key={item} type={item as Keywords} bgColor={theme.color.background} />)
            }
          </SkillContainer>
            
        </Right>

      
        
      </Section>
    </>
  )
}


export default Profile