import React from 'react'
import './Portfolio.css';
import 'swiper/css'
import {Swiper, SwiperSlide} from 'swiper/react';
import FashionMart from '../../img/Fashion_Mart.png'
import Spotify from '../../img/spotify.png'
import OTP from '../../img/otp.png'
import WeatherApp from '../../img/weather-app.png'
import { themeContext } from '../../context';
import { useContext as UseContext } from 'react';
const Portfolio = () => {
  const theme = UseContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='Project' id='Portfolio'>

        {/*heading*/}
        <span style={{color: darkMode ? 'white': ''}}>Recent Projects</span>
        <span>Portfolio</span>

        {/*Slider*/}
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          grabCursor= {true}
          className='Project-slider'
        >
          <SwiperSlide>
            <img src={WeatherApp} alt="" />
            </SwiperSlide>
            
            <SwiperSlide>
            <img src={Spotify} alt="" />
            </SwiperSlide>
            <SwiperSlide>
            <img src={OTP} alt="" />
            </SwiperSlide>
            <SwiperSlide>
            <img src={FashionMart} alt="" />
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Portfolio