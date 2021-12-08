import React, { useState, useRef, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from './style/global';
import { lightTheme } from './style/theme';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import { Controller } from 'swiper';
import 'swiper/modules/controller/controller.min.css'
import 'swiper/swiper-bundle.min.css'
import SwiperCore from 'swiper';

const Header = styled(Swiper)`
.swiper-slide {
  width: 33.333%;
  text-align: center;
}
`;

const Body = styled(Swiper)`
background: black;
.swiper-slide {
  padding: 5px 10px;
  color: white;
}
`;

const Container = styled.div`
padding: 5px;
`;

const App = () => {
  const [headerSwiper, setHeaderSwiper] = useState<SwiperCore>();
  const [bodySwiper, setBodySwiper] = useState<SwiperCore>();

  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Header
        modules={[Controller]}
        onSwiper={setHeaderSwiper}
        controller={{ control: bodySwiper }}
        slidesPerView={'auto'}
        watchSlidesProgress={true}
        centeredSlides={true}
        loop={true}
      >
        <SwiperSlide>
          About
        </SwiperSlide>
        <SwiperSlide>
          header2
        </SwiperSlide>
        <SwiperSlide>
          header3
        </SwiperSlide >
      </Header >

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
          About
        </SwiperSlide>
        <SwiperSlide>
          header2
        </SwiperSlide>
        <SwiperSlide>
          header3
        </SwiperSlide >
      </Body >


    </ThemeProvider >

  );
}

export default App;
