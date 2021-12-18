import React from 'react'
import styled from 'styled-components'
import LinkButton from '../LinkButton';
import Dialog from '../Dialog';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const ProjectContainer = styled.div`
position: relative;
padding-top: 75%;
`;

const ProjectContents = styled.div`
position: absolute;
width: 100%;
height: 100%;
left: 0;
top: 0;
display: flex;
justify-content: space-between;
padding: 25px 0;
`;

const Info = styled.div`
margin-right: 32px;
flex: 1;
height: 400px;
display: flex;
flex-direction: column;
justify-content: space-between;
`;

const Header = styled.div``;

const Title = styled.h2`
font-size: 28px;
line-height: 38px;
margin: 0;
font-weight: 600;
margin-bottom: 0.5em;
`;

const SubTitle = styled.h5`
font-size: 14px;
line-height: 18px;
font-weight: 400;
margin: 0;
margin-bottom: 1em;

span {
  display: block;
  margin-bottom: 0;
}
`;

const Desc = styled.p`
font-size: 15px;
line-height: 24px;
`;

const LinkContainer = styled(Dialog)`
display: flex;
flex-wrap: wrap;
`;

const Img = styled.div`
flex: 1;
display: flex;
align-items: flex-end;

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: left top;
}
`;

const VideoContainer = styled(Img)`
  video {
    width: 100%;
  }
`;

interface ArticleProps {
  title: string
  subtitle?: string
  desc: string
  thumbnail?: string
  keywords: string[]
  url?: string[]
  video?: string
}

const Article: React.FC<ArticleProps> = ({ title, subtitle, desc, thumbnail, keywords,url, video }) => {
  

  return (
    <ProjectContainer>
      <ProjectContents>
        <Info>
          <Header>
          {
            subtitle &&
            <SubTitle>
              {subtitle.split(' ').map(item => <span>{item}</span>)}
            </SubTitle>
          }
          <Title>
            {title}
          </Title>

          <Desc>
            {desc}
          </Desc>

          </Header>
          {
            url &&
            <LinkContainer title='Links' mb={0}>
              {url.map(link => <LinkButton url={link} >
                <FontAwesomeIcon icon={faPaperPlane} />
              </LinkButton>
              )}
            </LinkContainer>
          }
        </Info>

          {
            thumbnail && 
            <Img>
              <img src={thumbnail} alt="프로필" />
            </Img>
          }

          {
            video && 
            <VideoContainer>
              <video src={video} autoPlay muted loop/>
            </VideoContainer>
          }
       
      </ProjectContents>
    </ProjectContainer>
  )
}

export default Article
