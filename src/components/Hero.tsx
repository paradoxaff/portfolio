import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div id="hero" className='min-h-screen bg-no-repeat bg-[url(/image.png.png)] bg-left: lg:bg-[15%] bg-cover'
    style={{backgroundSize:"35%",backgroundPosition:"Left 100px top 100px"}}
    >
      <Navbar/>
      <div className='container grid lg:grid-cols-2 h-[calc(50vh-60px)]'>
      <div className='hidden lg:block'></div>
      <div className='text-[100px] sm:text-[130px] font-bold leading-tight flex justify-center items-center'>
      <div>
        <p data-aos="zoom-in-up">I'm</p>
        <p data-aos="zoom-in-up">Muhammad</p>
        <p data-aos="zoom-in-up">Affan</p>
      </div>
      </div>
    </div>
    </div>
  ) 
};

export default Hero
