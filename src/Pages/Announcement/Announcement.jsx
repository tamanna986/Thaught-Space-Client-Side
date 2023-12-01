import SectionTitle from "../../components/SectionTitle/SectionTitle";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styles.css';
// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import useAnnouncement from "../../hooks/useAnnouncement";
import SingleAnnouncement from "../SingleAnnouncement/SingleAnnouncement";


const Announcement = () => {
    const [announcements] = useAnnouncement();
    console.log("announcements is now ", announcements, announcements.length)
    return (
        <div className="mt-32">
            <SectionTitle heading = {"Announcement"}></SectionTitle>

            <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {announcements.map(announcement => (
                    <SwiperSlide key={announcement.id}>
                        <SingleAnnouncement announcement={announcement} />
                    </SwiperSlide>
                ))}

              
             
    
        
      </Swiper>
        </div>
    );
};

export default Announcement;