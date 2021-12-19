import React, { ReactEventHandler, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import { Controller } from 'swiper';
import 'swiper/modules/lazy/lazy.min.css';
import 'swiper/modules/controller/controller.min.css'
import 'swiper/swiper-bundle.min.css'
import SwiperCore from 'swiper';
import { useLocation, useNavigate } from 'react-router-dom';
import BodyContainer from '../components/BodyContainer';
import Profile from './Profile';
import ToyProject from './ToyProject';
import Project from './Project';
import ScrollContainer from '../components/ScrollContainer';
import CommonHeader from '../components/Common/CommonHeader';


const App = styled.div`
height: 100%;
`;

const Header = styled.div`
position: fixed;
width: 100%;
top: 0;
z-index: 100;
`;

const HeaderSlide = styled(Swiper)`
  position: relative;
  max-width: 640px;
  
  .swiper-slide {
    width: auto;
    text-align: center;
    opacity: 0.6;
    cursor: pointer;

    &:hover,
    &.swiper-slide-active {
      opacity: 1;
    }
  }
`;

const HomeHeader = styled.div`
  width: calc((100vw - (100vw - 640px))/5);

  span {
    font-family: 'Norwester, Roboto';
    display: inline-block;
    height: 24px;
    line-height: 24px;
    font-size: 20px;
  }

  /* tablet */
  ${({theme:{media}}) => media.tablet`
  width: calc((100vw - (100vw - 640px))/3);
    span {
      height: 36px;
      line-height: 36px;
      font-size: 24px;
    }
  `}
  
  /* desktop */
  ${({theme:{media}}) => media.desktop`
    span {
      height: 48px;
      line-height: 48px;
      font-size: 24px;
    }
  `}
  
`;

const Body = styled(Swiper)`
  padding-top: 84px;
  height: 100%;
  
  .swiper-wrapper {
    width: 100%;
    height: 100%;
  }

  ${({theme: {media}}) => media.tablet`
  
  ` }
`;

const Home = ({ ...props }) => {
  const { pathname } = useLocation();
  const [headerSwiper, setHeaderSwiper] = useState<SwiperCore>();
  const [bodySwiper, setBodySwiper] = useState<SwiperCore>();
  const navigate = useNavigate();

  const changeTabIndex = () => {
    switch (pathname) {
      case '/':
        return 1;
      case '/project':
        return 0;
      case '/toy':
        return 2;
      default:
        return 1;
    }
  }

  const onSlideChange = ({ realIndex }: any) => {
    switch (realIndex) {
      case 0:
        navigate('/project')
        break;
      case 1:
        navigate('/')
        break;
      case 2:
        navigate('/toy')
        break;
      default:
        break;
    }
  }

  const onClick: ReactEventHandler = (e) => {
    let index: number | undefined;
    headerSwiper?.slides.filter((item, itemIndex) => {
      if (item === e.currentTarget) {
        index = itemIndex;
        return item
      }
    });
    if(typeof index === 'number')  {
      headerSwiper?.slideTo(index);
    }
    
    

    return
  }

  return (
    <App>
      <Header>
        <CommonHeader onChangeTheme={props.onChangeTheme} />
        <HeaderSlide
          initialSlide={changeTabIndex()}
          modules={[Controller]}
          onSwiper={setHeaderSwiper}
          controller={{ control: bodySwiper }}
          slidesPerView={'auto'}
          onSlideChange={onSlideChange}
          watchSlidesProgress={true}
          threshold={10}
          centeredSlides={true}
        >
           <SwiperSlide onClick={onClick}>
            <HomeHeader>
              <span>
                Project
              </span>
            </HomeHeader>

          </SwiperSlide>
          <SwiperSlide onClick={onClick}>
            <HomeHeader>
              <span>
                Profile
              </span>
            </HomeHeader>

          </SwiperSlide>
         
          <SwiperSlide onClick={onClick}>
            <HomeHeader>
              <span>
                Toy Project
              </span>
            </HomeHeader>

          </SwiperSlide >
        </HeaderSlide >
      </Header>

      <Body
        modules={[Controller]}
        onSwiper={setBodySwiper}
        controller={{ control: headerSwiper }}
        slidesPerView={'auto'}  
        watchSlidesProgress={true}
        centeredSlides={true}
        threshold={10}
      >
        <SwiperSlide>
          <BodyContainer>
            <ScrollContainer>
            <Project />
            </ScrollContainer>
          </BodyContainer>
        </SwiperSlide>
        <SwiperSlide>
          <BodyContainer>
            <ScrollContainer>
            <Profile />
            </ScrollContainer>
          </BodyContainer>
        </SwiperSlide>
     
        <SwiperSlide>
          <BodyContainer>
            <ScrollContainer>
              <ToyProject/>
            </ScrollContainer>
          </BodyContainer>
        </SwiperSlide >
      </Body >
    </App>
  );
}

export default Home;