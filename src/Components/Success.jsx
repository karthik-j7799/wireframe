import React from 'react'
import trophy from '../Assets/trophy.png';

function Success() {
  return (
    <div className='success align-middle'>
        <div className='image-success'> 
            <img src={trophy} alt='Successful' className='image-success-img'/>
        </div>
        <div className='content'>
            <p>Thankyou for Submitting your problem,<br/> We will get back to you.</p>
        </div>
    </div>
  )
}

export default Success