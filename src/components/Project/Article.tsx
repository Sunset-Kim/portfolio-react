import React from 'react'
import styled from 'styled-components'
import LinkButton from '../LinkButton';
import Dialog from '../Dialog';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const ProjectContainer = styled.div`
position: relative;
padding-top: 100%;
border-bottom: ${props => `1px solid ${props.theme.color.foreground}`};

/* md */
${({theme: {media}}) => media.tablet`
  padding-top: 70%;
`}
`;

const ProjectContents = styled.div`
position: absolute;
width: 100%;
height: 100%;
left: 0;
top: 0;
display: flex;
justify-content: space-between;
padding: 15px 0;

/* md */
${({theme: {media}}) => media.tablet`
  padding: 25px 0;
`}
`;

const Info = styled.div`
margin-right: 16px;
flex: 1;
display: flex;
flex-direction: column;
justify-content: space-between;

/* md */
${({theme: {media}}) => media.tablet`
margin-right: 32px;
`}
`;

const Header = styled.div``;

const Title = styled.h2`
font-size: 16px;
line-height: 24px;
margin: 0;
font-weight: 600;
margin-bottom: 1em;

/* md */
${({theme: {media}}) => media.tablet`
font-size: 28px;
line-height: 38px;
margin-bottom: 0.5em;
`}
`;

const SubTitle = styled.h5`
font-size: 13px;
line-height: 18px;
font-weight: 600;
margin: 0;
margin-bottom: 1em;

span {
  display: block;
  width: fit-content;
  position: relative;
  z-index: 2;
  margin-bottom: 0.1em;
  &::after {
    content: '';
    position: absolute;
    bottom: -0.05em;
    left: 0;
    border-radius: 10px;
    z-index: -1;
    background-color: ${props => props.theme.color.primary};
    opacity: 0.35;
    width: 100%;
    height: 0.3em;
  }
}

/* md */
${({theme: {media}}) => media.tablet`
font-size: 14px;
line-height: 18px;
margin-bottom: 1em;
`}
`;

const Desc = styled.p`
font-size: 13px;
line-height: 22px;
margin-top: 0;

${({theme: {media}}) => media.tablet`
font-size: 15px;
line-height: 24px;
`}
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
  id: number
  title: string
  subtitle?: string
  desc: string
  thumbnail?: string
  keywords: string[]
  url?: string[]
  video?: string
}

const Article: React.FC<ArticleProps> = ({ id,title, subtitle, desc, thumbnail, keywords,url, video }) => {

  return (
    <ProjectContainer>
      <ProjectContents>
        <Info>
          <Header>
          {
            subtitle &&
            <SubTitle>
              {subtitle.split(' ').map((item,index) => <span key={id + item}>{item}</span>)}
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
            <LinkContainer title='Links'>
              {url.map(link => <LinkButton key={id + link} url={link} >
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
