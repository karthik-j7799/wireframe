import React from 'react'
import cross from '../Assets/cross.png'

function Failed() {
  return (
    <div className='failed'>
        <div className='image-success'> 
            <img src={cross} style={{height:"300px", width:"300px"}} alt='failed'/>
        </div>
        <div className='content'>
            <p>You have already used this phone number<br/> To raise a request, Please Enter a <br/>New Phone Number</p>
        </div>
    </div>
  )
}

export default Failed