import React from 'react'
import './testimonial.css';
import 'swiper/css'
import {Swiper, SwiperSlide} from 'swiper/react';
import profilePic1 from '../../img/pp1.jpg';
import profilePic2 from '../../img/pp2.png';
import profilePic3 from '../../img/pp3.png';
import profilePic4 from '../../img/pp4.jpeg';
import {Pagination} from "swiper";
import 'swiper/css/pagination'
const testimonials = () => {
    const clients = [
    {
     img: profilePic1,
     reviews:
     "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt corrupti nostrum aliquam commodi dolores qui laborum error, inventore distinctio incidunt laudantium dicta similique impedit."
    },
    {
        img: profilePic2,
        reviews:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt corrupti nostrum aliquam commodi dolores qui laborum error, inventore distinctio incidunt laudantium dicta similique impedit."
       },
       {
        img: profilePic3,
        reviews:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt corrupti nostrum aliquam commodi dolores qui laborum error, inventore distinctio incidunt laudantium dicta similique impedit."
       },
       {
        img: profilePic4,
        reviews:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt corrupti nostrum aliquam commodi dolores qui laborum error, inventore distinctio incidunt laudantium dicta similique impedit."
       }
]
  return (
    <div className='t-wrapper' id='Testimonials'>
        <div className="t-heading">
            <span>Clients always get</span>
            <span>Exceptional Work</span>
            <span>from me...</span>
            <div className="blurEffect t-blur1" style={{ background: "#f6da08" }}></div>
            <div className="blurEffect t-blur2" style={{ background: "rgb(58, 159, 73)" }}></div>
        </div>
        <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        Pagination={{clickable: true}}
        autoplay={true}
        >
        {clients.map((clients, index)=>{
          return(
            
            <SwiperSlide key={index}>
              <div className="testimonial">
             <img src={clients.img} alt="" />
             <span>{clients.reviews}</span>
             </div>
             
            </SwiperSlide>
          );
        })}
        </Swiper>
    </div>
  )
}

export default testimonials