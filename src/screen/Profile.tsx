import React from 'react'
import styled from 'styled-components'
// header
const Title = styled.h2``;

// info
const InfoContainer = styled.div`
display: flex;
`;

const InfoImg = styled.div`
position: relative;
flex: 2 1;
margin: 0 auto;
`;

const ImageContainer = styled.div`
width: 100%;
height: 100%;
border-radius: 80% 55% 45% 70% / 90% 60% 35% 60%;
border: 1px solid gray;
overflow: hidden;

img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
`;
const InfoLeft = styled.div`
flex-direction: column;
flex: 1;
margin-right: 24px;

`;

// skill
const SkillContainer = styled.div``;


const Profile = () => {

  return (
    <>
      <Title>
        안녕하세요.<br /> 프론트엔드 개발자 김민우 입니다.
      </Title>
      <InfoContainer>
        <InfoLeft>
          <div>
            <h3>
              BIOGRAPHY
            </h3>
            <p>

            </p>
          </div>
          <div>
            <h3>
              BIOGRAPHY
            </h3>
            <p>

            </p>
          </div>
          <div>
            <h3>
              BIOGRAPHY
            </h3>
            <p>

            </p>
          </div>
        </InfoLeft>
        <InfoImg>
          <ImageContainer>
            <img src="/images/profile_img.jpg" alt="profile" />
          </ImageContainer>
        </InfoImg>

      </InfoContainer>
      <SkillContainer>
        <Title>
          Skill
        </Title>

      </SkillContainer>
    </>
  )
}


export default Profile