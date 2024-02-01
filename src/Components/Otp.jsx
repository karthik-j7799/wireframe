import React from 'react'

function Otp() {
  return (
    <div className='wholee'>    
    <form className='otp'>
    <h1>OTP</h1><br/>
        <div className="mb-3">
        <label for="exampleInputEmail1" class="form-label">
            Please Enter your OTP
        </label><br/>
            <input
            type="text"
            pattern="[0-9]"
            inputMode="numeric"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            required
        />
        <div className="emailHelpp">
            Didn't Receive OTP? Try again
        </div>
        </div>
        
        <button type="submit" class="btn btn-primary">
         Continue
        </button>
      </form>
   </div>
  )
}

export default Otp