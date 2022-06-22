import React , {useState} from 'react'

import sourcetodistance from "./../assets/sourcetodistance.PNG"
import isodistance from "./../assets/isodistance.PNG"
import {  Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

const Home = () => {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500
    };
   
    return (
        <div className='w-full mt-20 h-screen text-white  bg-black mb-[8%] md:mb-[8%]'>
            <div className='flex  w-[80%] md:w-[60%] lg:w-[45%] m-auto'>
                <div className='m-auto'>
                    <h1 className='font-bold text-7xl'>Maps and location for developers</h1>
                    <h3 className='mt-5 text-2xl text-gray-400'>Precise location data and powerful developer tools to change the way we navigate the world.</h3>
                </div>
            </div>
            <div className=' flex items-center'>
                <button className="  m-auto mt-5 px-8 py-2 border border-blue-600 bg-blue-600 rounded-full text-sm text-white font-bold">Start routing</button>
            </div>
            
            <div className='flex items-center justify-center w-[50%] m-auto mt-20'>
                    <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                            }}
                        
                            navigation={true}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper">
                        
                                <SwiperSlide> <img src={sourcetodistance} alt="" className='w-full h-[400px]' /> </SwiperSlide>
                                <SwiperSlide><img src={isodistance} alt="" className='w-full h-[400px]'/></SwiperSlide>
                                <SwiperSlide><img src={sourcetodistance} alt="" className='w-full h-[400px]'/></SwiperSlide>
                                <SwiperSlide><img src={isodistance} alt="" className='w-full h-[400px]'/></SwiperSlide>
                                <SwiperSlide><img src={sourcetodistance} alt="" className='w-full h-[400px]'/></SwiperSlide>
                                <SwiperSlide><img src={isodistance} alt="" className='w-full h-[400px]' /></SwiperSlide>
                                <SwiperSlide><img src={sourcetodistance} alt="" className='w-full h-[400px]'/></SwiperSlide>
                                <SwiperSlide><img src={isodistance} alt="" className='w-full h-[400px]' /></SwiperSlide>
                                <SwiperSlide><img src={sourcetodistance} alt="" className='w-full h-[400px]' /></SwiperSlide>
                    </Swiper>
            </div>
              

        </div>
    )
}

export default Home