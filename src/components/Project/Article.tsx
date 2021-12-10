import React from 'react'
import styled from 'styled-components'

const ProjectContainer = styled.div`
position: relative;
width: 100%;
padding-top: 80%;
border: 1px solid black;
`;

const ProjectChild = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
`;

const ProjectInfo = styled(ProjectChild)`
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 24px;
`;

const InfoHeader = styled.div``;
const InfoBottom = styled.div``;

const BadgeContainer = styled.div`
margin-bottom: 24px;
span {
  margin-right: 8px;
  &:last-child {
    margin-right: 0;
  }
}
`;

const Title = styled.h2``;
const Desc = styled.p``;

const ProjectBackground = styled(ProjectChild)`
z-index: -1;
`;

const RectLeft = styled(ProjectChild) <{ deg: string }>`
z-index: 1;
background: ${props => props.theme.color.backgorund};
transform: ${props => `skew(${props.deg}) translate3d(-50%,0,0)`};
`;

const RectRight = styled(RectLeft) <{ deg: string }>`
transform: ${props => `skew(${props.deg}) translate3d(80%,0,0)`};
`;

const Background = styled(ProjectChild)`

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
`;

interface ArticleProps {
  title: string
  desc: string
  img: string
  direction?: 'right' | 'left'
  badge: Array<() => JSX.Element>
}

const Article: React.FC<ArticleProps> = ({ title, desc, img, badge, direction = 'right' }) => {

  const deg = direction === 'right' ? '-20deg' : '20deg'

  return (
    <ProjectContainer>
      <ProjectInfo>
        <InfoHeader>
          <BadgeContainer>
            {badge.map(item => item())}
          </BadgeContainer>
          <Title>
            {title}
          </Title>
          <Desc>
            {desc}
          </Desc>
        </InfoHeader>
        <InfoBottom>
          link
        </InfoBottom>
      </ProjectInfo>
      <ProjectBackground>
        <RectLeft deg={deg} />
        <RectRight deg={deg} />

        <Background>
          <img src={img} alt="프로필" />
        </Background>
      </ProjectBackground>
    </ProjectContainer>
  )
}

export default Article
