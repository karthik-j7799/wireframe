import React from 'react'
import trophy from '../Assets/trophy.png';

function Success() {
  return (
    <div className='success'>
        <div className='image-success'> 
            <img src={trophy} style={{height:"300px", width:"300px"}} alt='Successful'/>
        </div>
        <div className='content'>
            <p>Thankyou for Submitting your problem,<br/> We will get back to you.</p>
        </div>
    </div>
  )
}

export default Success