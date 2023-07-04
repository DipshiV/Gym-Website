import React from 'react'
import '../../styles/Start.css'
import ReactPlayer from 'react-player'


const Start = () => {
  return (
    <section id='about'>
    <div className='container'>
    <div className='start__wrapper'>
    <div className='react-player'>
    <ReactPlayer width="120%"  url='https://www.youtube.com/watch?v=HnoPHqrdXQ8' tytle='Gym Video' />
    </div>
   
<div className='start__content' data-aos='fade-up'
data-aos-duration='1800'>
<h2 className='section__title highlights'>About Us</h2>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text ever since the
1500s, when an unknown printer took a galley of type and scrambled it to
make a type specimen book.</p>
<button className='register1_btn'>Learn more</button>
</div>
</div>




 <div className='start__wrapper1'>

<div className='start__content1' data-aos='fade-up'

data-aos-duration='1800'>
<h2 className='section__title highlights'>Why Choose Us</h2>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text ever since the
1500s, when an unknown printer took a galley of type and scrambled it to
make a type specimen book.</p>
</div>
<div className='react-player1'>
 <ReactPlayer width="120%"  url='https://www.youtube.com/watch?v=eaRQF-7hhmo' tytle='Gym Video' />
 </div>
</div>


    </div>
    </section>
  )
}

export default Start