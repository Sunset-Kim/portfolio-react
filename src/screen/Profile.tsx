import React from 'react'
import styled, { useTheme } from 'styled-components'
import Dialog from '../components/Dialog';
import {Keywords, SkillBadge} from '../components/Badges'
import { GithubBadge,MailBadge,BlogBadge } from '../components/Badges';

// header
const Title = styled.h1`
font-family: 'Roboto';
font-size: 16px;
margin: 0;
`;

const SubTitle = styled.h2`
font-family: 'Norwester';
font-size: 60px;
margin: 0;
margin-bottom: 20px;
`;

const DialogContainer = styled(Dialog)`
margin-bottom: 50px;
`;

// info
const Section = styled.section`
display: flex;
padding: 24px 0;
`;

const Left = styled.div`
flex-direction: column;
flex: 1;
margin-right: 24px;
`;

const Right  = styled.div`
position: relative;
flex: 1 1;
margin: 0 auto;
`;

const ImageContainer = styled.div`
width: 100%;
height: 100%;
border-radius: 5px;
overflow: hidden;
img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
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

          <DialogContainer title='Greeting' mb={20}>
            {`안녕하세요.\n프론트엔드 개발자 김민우입니다.\n적당한 고난과 역경은 감사합니다`}
          </DialogContainer>
          
          <DialogContainer title='Contact Me' mb={20}>
            <GithubBadge url='#none' />
            <BlogBadge url="#none" />
            <MailBadge url="#none" />
          </DialogContainer>
        </Left>
        <Right>
          <ImageContainer>
            <img src="/images/profile_img.jpg" alt="profile" />
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
              .map(item => <SkillBadge key={item} type={item as Keywords} bgColor={theme.color.backgorund} />)
            }
          </SkillContainer>
            
        </Right>

      
        
      </Section>
    </>
  )
}


export default Profile