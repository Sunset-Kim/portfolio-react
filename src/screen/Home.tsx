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

const Header = styled.div`

`;

const HeaderTabContainer = styled.div`
height: 50px;
width: 640px;
margin: 0 auto;
background-color: red;
`;

const HeaderSlide = styled(Swiper)`
  position: relative;
  max-width: 640px;
  .swiper-slide {
    width: auto;
    text-align: center;
    opacity: 0.6;
  }
  .swiper-slide-active {
    opacity: 1;
  }
  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
    background: linear-gradient(-90deg, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 100%);
    height: 100%;
    width: 60px;
  }
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
    background: linear-gradient(90deg, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 100%);;
    height: 100%;
    width: 60px;
  }
`;

const HomeHeader = styled.div`
margin: 0 60px;

span {
  display: inline-block;
  padding: 24px 0;
  font-size: 16px;
}

`;

const Body = styled(Swiper)`
background: black;

.swiper-slide {
  padding: 5px 10px;
  color: white;
  
}

`;

const Home = ({ ...props }) => {
  const { pathname } = useLocation();

  const [headerSwiper, setHeaderSwiper] = useState<SwiperCore>();
  const [bodySwiper, setBodySwiper] = useState<SwiperCore>();
  const navigate = useNavigate();

  const changeTabIndex = () => {

    switch (pathname) {
      case '/':
        return 0;
      case '/project':
        return 1;
      case '/toy':
        return 2;
      default:
        return 0;
    }

  }

  useEffect(() => {

  }, [])

  const onSlideChange = ({ realIndex }: any) => {
    switch (realIndex) {
      case 0:
        navigate('/')
        break;
      case 1:
        navigate('/project')
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

    if (index) {
      headerSwiper?.slideTo(index);
    }

    return
  }

  return (
    <>
      <Header>
        <HeaderSlide
          initialSlide={changeTabIndex()}
          modules={[Controller]}
          onSwiper={setHeaderSwiper}
          controller={{ control: bodySwiper }}
          slidesPerView={'auto'}
          onSlideChange={onSlideChange}
          watchSlidesProgress={true}
          centeredSlides={true}
          threshold={10}
          loop={true}
        >
          <SwiperSlide onClick={onClick}>
            <HomeHeader>
              <span>
                프로필
              </span>
            </HomeHeader>

          </SwiperSlide>
          <SwiperSlide onClick={onClick}>
            <HomeHeader>
              <span>
                프로젝트
              </span>
            </HomeHeader>

          </SwiperSlide>
          <SwiperSlide onClick={onClick}>
            <HomeHeader>
              <span>
                토이프로젝트
              </span>
            </HomeHeader>

          </SwiperSlide >
        </HeaderSlide >
        {
          (pathname === '/project' || pathname === '/toy') &&
          <HeaderTabContainer />
        }
      </Header>

      <Body
        modules={[Controller]}
        onSwiper={setBodySwiper}
        controller={{ control: headerSwiper }}
        slidesPerView={'auto'}
        watchSlidesProgress={true}
        centeredSlides={true}
        loop={true}
      >
        <SwiperSlide>
          <BodyContainer>
            <Profile />
          </BodyContainer>
        </SwiperSlide>
        <SwiperSlide>
          <BodyContainer>
            <Project />
          </BodyContainer>
        </SwiperSlide>
        <SwiperSlide>
          <BodyContainer>
            <ToyProject />
          </BodyContainer>
        </SwiperSlide >
      </Body >
    </ >
  );
}

export default Home;