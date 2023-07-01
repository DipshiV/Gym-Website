import React from 'react'
import '../../styles/TrainerSection.css';
import  { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import timage1 from '../../assets/images/t-image1.png'
import timage2 from '../../assets/images/t-image2.jpg'
import timage3 from '../../assets/images/t-image3.jpg'

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";




const TrainerSection = () => {
  return (
    <>
    <section id='classes' >
    <div className='container sliders'  data-aos='fade-up'
    data-aos-duration='1800'>
    <h2 className='section__title highlights'  data-aos='fade-up'
    data-aos-duration='1800'> Meet Our Team</h2>
    <p>Lorem Ipsum is simply dummy text of the <br/>
    printing and typesetting industry. </p>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
      <SwiperSlide>
      <div className='slide__item'>
      <div className='slide__img-01'>
      <img src='https://img.freepik.com/premium-photo/sport-man-isolated-blue-background-making-weightlifting_1368-117611.jpg?size=626&ext=jpg&ga=GA1.1.1305938117.1682340521&semt=ais'alt=''/>
      </div>
      <h4> Jordan joe</h4>
      <p>FITNESS COACH</p>
      </div>
      </SwiperSlide>


        <SwiperSlide>
        <div className='slide__item'>
        <div className='slide__img-02'>
        <img src='https://img.freepik.com/free-photo/portrait-brazil-football-fan-support-brazil-national-team-white-background-football-fans-concept_231208-7253.jpg?size=626&ext=jpg&ga=GA1.1.1305938117.1682340521&semt=ais' alt=''/>
        </div>
        <h4> Jordan joe</h4>
        <p>FITNESS COACH</p>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className='slide__item'>
        <div className='slide__img-03'>
        <img src='https://img.freepik.com/free-photo/shirtless-male-bodybuilder-holding-dumbbells_7502-4802.jpg?size=626&ext=jpg&ga=GA1.1.1305938117.1682340521&semt=ais' alt=''/>
        </div>
        <h4>Jesica Fernandes</h4>
        <p>FITNESS FREAK</p>
        </div>
        </SwiperSlide>

        <SwiperSlide><div className='slide__item'>
        <div className='slide__img-04'>
        <img src='https://img.freepik.com/premium-photo/sport-brazilian-man-with-towel-isolated-white-background-pointing-with-index-finger-great-idea_1368-272200.jpg?size=626&ext=jpg&ga=GA1.1.1305938117.1682340521&semt=ais' alt=''/>
        </div>
        <h4>Andreo sunom</h4>
        <p>YOGA TEACHER</p>
        </div>
        </SwiperSlide>

        <SwiperSlide><div className='slide__item'>
        <div className='slide__img-05'>
        <img src='https://img.freepik.com/premium-photo/education-opportunities-gadget-making-life-much-easier-leisure-fun-portable-gadget-man-use-modern-technologies-gadget-guy-with-headphones-laptop-student-life-online-entertainment_474717-122481.jpg?size=626&ext=jpg&ga=GA1.1.1305938117.1682340521&semt=ais'alt=''/>
        </div>
        <h4>Josef Fernandes</h4>
        <p>FITNESS FREAK</p>
        </div>
        </SwiperSlide>


        <SwiperSlide><div className='slide__item'>
        <div className='slide__img-06'>
        <img src='https://img.freepik.com/free-photo/close-up-portrait-serious-sweaty-athletic-man-lifting-dumbbell_171337-7573.jpg?size=626&ext=jpg&ga=GA1.1.1305938117.1682340521&semt=ais'alt=''/>
        </div>
        <h4>Josef Fernandes</h4>
        <p>FITNESS FREAK</p>
        </div>
        </SwiperSlide>

        <SwiperSlide><div className='slide__item'>
        <div className='slide__img-07'>
        <img src='https://img.freepik.com/free-photo/smiling-young-handsome-sporty-man-wearing-headband-wristbands-showing-empty-hand-pointing-it-isolated-white-space_141793-44911.jpg?size=626&ext=jpg&ga=GA1.1.1305938117.1682340521&semt=ais'alt=''/>
        </div>
        <h4>Josef Fernandes</h4>
        <p>FITNESS FREAK</p>
        </div>
        </SwiperSlide>

        <SwiperSlide><div className='slide__item'>
        <div className='slide__img-08'>
        <img src='https://img.freepik.com/premium-photo/handsome-blonde-man-isolated-white-background-with-sport-towel_1368-205274.jpg?size=626&ext=jpg&ga=GA1.1.1305938117.1682340521&semt=ais'alt=''/>
        </div>
        <h4>Josef Fernandes</h4>
        <p>FITNESS FREAK</p>
        </div>
        </SwiperSlide>
       
       
      </Swiper>
      </div>
      </section>
    </>
  )
}

export default TrainerSection