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
padding: 12px 12px;

/* md */
${({theme: {media}}) => media.tablet`
padding: 24px 12px;
`}
`;

const Info = styled.div`
flex: 1 1;
display: flex;
flex-direction: column;
justify-content: space-between;
`;

const Header = styled.div``;

const Title = styled.h2`
font-family: 'Noto Sans KR';
font-size: 16px;
line-height: 20px;
margin: 0;
margin-bottom: 0.3em;

/* md */
${({theme: {media}}) => media.tablet`
font-size: 20px;
line-height: 28px;
`}
`;

const Desc = styled.p`
font-size: 13px;
line-height: 20px;

/* md */
  ${({theme: {media}}) => media.tablet`
  font-size: 14px;
  line-height: 20px;
  `}
`;

const LinkContainer = styled.div`
align-self: flex-end;
display: flex;
justify-content: flex-end;
margin-bottom: 5px;

/* md */
${({theme: {media}}) => media.tablet`
margin-bottom: 10px;
`}
`;



const KeywordsContainer = styled.ul`
margin: 0;
padding: 0;
margin-bottom: 5px;

li {
  position: relative;
  width: fit-content;
  list-style: none;
  font-size: 12px;
  margin-bottom: .2em;
  font-weight: 500;
  text-transform: capitalize;

  &::after {
    content: '';
    position: absolute;
    z-index: -1;
    left: 0;
    bottom: -0.05em;
    width: 100%;
    height: 0.3em;
    border-radius: 10px;
    background-color: ${props => props.theme.color.primary};
    opacity: 0.35;
    
  }
}

${({theme: {media}}) => media.tablet`
  li {|
    font-size: 15px;
    margin-bottom: .2em;
  }
`}
`;

const ImageContainer = styled.div`
flex: 1 1;
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
              {props.keywords.map(item => <li key={props.id + item}>{item}</li>)}
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
          props.url.map(item => <LinkButton key={props.id + item} url={item} size={30} >
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