import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Otp() {
    const navigate = useNavigate();
    const [value,setValue]=useState(null)
    const onSubmit =()=>{
      if(value==='AB1010'){
        navigate('/Chat')
      }
      else if(value===null){
        alert('Please enter a valid otp')
      }
      else{
        navigate('/Failed')

      }
    }
    
      return (
      <div className='whole'>    
      <form className='login'>
          <h1>OTP</h1><br/>
          <div className="mb-2">
          <label for="exampleInputEmail1" class="form-label ">
          Please Enter your OTP          </label><br/>
              <input
              type="text"
              pattern="[0-9]"
              inputMode="numeric"
              className="form-control mt-4"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              required
              value={value}
              onChange={(e) => setValue(e.target.value)}
              />
        <div className="emailHelpp">
            Didn't Receive OTP? Try again
        </div>
          </div>
          
          <button type="submit" class="btn btn-lg btn-primary" onClick={()=>onSubmit()}>
          Continue
          </button>
        </form>
     </div>
  


  )
}

export default Otp