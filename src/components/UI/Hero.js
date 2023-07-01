import React from 'react'
import '../../styles/Hero.css'
import {AiFillPlayCircle} from 'react-icons/ai'
import {HiLocationMarker} from 'react-icons/hi'
import {BsFillHeartPulseFill} from 'react-icons/bs'
import heroImage from '../../../src/assets/images/herosectionimg.png'

const Hero = () => {
  return (
    <section id="home"><div className='container'>
    <div className='hero__wrapper'>
    {/*hero section */}
    <div className='hero__content'  data-aos='fade-up'
    data-aos-delay='100'
    data-aos-duration='1800'>
    <h2 className='section__title'
   >"Take care of <span className='highlights'>your body."</span></h2>
    <p> It's the only place you have to live.</p>
     <div className='hero__btns'  data-aos='fade-up'
     data-aos-delay='200'
     data-aos-duration='2000'>
     <button className='register1_btn'>Join with Us</button>
     <button className='watch__btn'>
     <span><AiFillPlayCircle/></span> Watch Video</button>
     </div>
    </div>
    <div className='hero__img'>
    <div className='hero__img-wrapper'>

    <div className='box-01'>
    <div className='box-02'>
    <div className='box-03'>
    <div className='box__img'>
    <img src={heroImage} alt=''/>
    </div>
    </div>
    </div>
    </div>

  <div className='heart__rate'  data-aos='fade-right'

  data-aos-duration='1800'>
  <h5>Heart rate</h5>

  <span><BsFillHeartPulseFill/></span>
  <h6>2567 BPS</h6>
  </div>

  <div className='gym__location'  data-aos='fade-left'
  data-aos-duration='1800'>
  <span><HiLocationMarker/></span>
  <h6>Find a gym near you</h6>
  </div>

  

    </div>
    </div>
    </div>
    </div>
    </section>
  )
}

export default Hero