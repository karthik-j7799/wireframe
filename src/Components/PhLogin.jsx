import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

function PhLogin() {
  const [value,setValue]=useState(null)

  const navigate = useNavigate();
  const onSubmit =()=>{
    navigate('/Otp')
  }
    return (
    <div className='whole'>    
    <form className='login'>
        <h1>Login</h1><br/>
        <div className="mb-2">
        <label for="exampleInputEmail1" class="form-label ">
            Please Enter your Phone Number
        </label><br/>
            <input
            type="text"
            pattern="[0-9]"
            inputMode="numeric"
            className="form-control mt-4"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            value={value}
            onChange={(e) => setValue(e.target.value.replace(/[^0-9.]/g, '') )}

            required
        />
        <div className="emailHelp">
            You will receive an OTP on this number
        </div>
        </div>
        
        <button type="submit" class="btn btn-lg btn-primary" onClick={()=>onSubmit()}>
          Submit
        </button>
      </form>
   </div>

  )
}

export default PhLogin