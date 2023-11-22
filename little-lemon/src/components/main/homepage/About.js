import React from 'react'
import MAa from '../../../assets/Mario-Adrian-A.jpg';
import MAb from '../../../assets/Mario-Adrian-B.jpg';


const About = () => {

  return (
    <div className='homepage about outer-box'>
      <div className='container grid'>
        <section className='content left' aria-label='Introduction to Little Lemon'>
          <h1 className='display-title'>Little Lemon</h1>
          <h2>Chicago</h2>
          <p className='lead-text'>
            We are an independent, family-owned business located in the bustling
            heart of Chicago. 
          </p>
          <p className='lead-text'>
            We strive to source as many of our ingredients as 
            possible from local farms with certified animal welfare standards. With our 
            wide range of vegan and vegetarian food, there is something for everyone to 
            enjoy at Little Lemon!
          </p>
        </section>
        <section className='content right' aria-label='Images of Mario and Adrian at Little Lemon'>    
          <div className='image-stack--bottom' >
            <img src={MAa} alt='Mario and Adrian - Image A' />
          </div>
          <div className='image-stack--top'>
            <img src={MAb} alt='Mario and Adrian - Image B' />
          </div>
        </section>
      </div>
    </div>
  )
}

export default About;