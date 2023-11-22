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
            Amet minim mollit non deserunt ullamco est sit aliqua dolor 
            do amet sint. Velit officia consequat duis enim velit mollit. 
            Exercitation veniam consequat sunt nostrud amet.
          </p>
          <p className='lead-text'>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor 
            do amet sint. Velit officia consequat duis enim velit mollit. 
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