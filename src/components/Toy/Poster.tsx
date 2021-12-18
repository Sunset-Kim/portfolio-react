import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import LinkButton from '../LinkButton';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { project } from '../../data/projectData';

const Container = styled.div`
position: relative;
width: 100%;
padding-top: 200%;
`;

const ContainerChild = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
`;

const Front = styled(ContainerChild)`
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 24px 12px;
`;

const Info = styled.div`
flex: 1;
display: flex;
flex-direction: column;
justify-content: space-between;
`;
const Header = styled.div``;

const Desc = styled.p`
font-size: 14px;
line-height: 20px;
`;

const LinkContainer = styled.div`
align-self: flex-end;
display: flex;
justify-content: flex-end;
margin-bottom: 10px;
`;

const Link = styled.a`
display: inline-flex;
justify-content: center;
align-items: center;
width: 30px;
height: 30px;
border-radius: 50%;
background-color: wheat;
`;

const Title = styled.h2`
font-family: 'Noto Sans KR';
font-size: 20px;
line-height: 28px;
margin: 0;
margin-bottom: 0.3em;
`;

const KeywordsContainer = styled.div``;

const ImageContainer = styled.div`
display: flex;
align-items: flex-end;
height: 50%;
overflow: hidden;

img {
  width: 100%;
  height: 100%;
  object-position: top;
  object-fit: cover;
}
`;

const VideoContainer = styled(ImageContainer)`
position: relative;

video {
  position: absolute;
  top: 0;

width: 100%;

}
`;

const Poster:React.FC<project> = ({...props}) => {
  return (
    <Container>
      <Front>
      <Info>
        <Header>
            <Title>{props.title}</Title>
            <Desc>{props.desc}</Desc>
            <KeywordsContainer>
              {props.keywords.map(item => <span>{item}</span>)}
            </KeywordsContainer>
        </Header>
        
        <LinkContainer>
        {
          // github link
          props.github &&
          <LinkButton url={props.github} size={30}>
            <FontAwesomeIcon icon={faGithub} size='1x'/>
          </LinkButton>
        }

        {
          // project links
          props.url.length > 0 &&
          props.url.map(item => <LinkButton key={item} url={item} size={30} >
          <FontAwesomeIcon icon={faPaperPlane} size='1x'/>
          </LinkButton>)
        }
        </LinkContainer>
      </Info>

      
        {
          props.thumbnail &&
          <ImageContainer>
            <img src={props.thumbnail} alt={props.title} />
          </ImageContainer>
        }

      
      {
          props.video &&
          <VideoContainer>
            <video src={props.video} autoPlay muted loop/>
          </VideoContainer>
          
        }
    

      </Front>


    </Container>
  )
}

export default Poster