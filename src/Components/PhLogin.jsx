import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function PhLogin() {
    return (
    <div className='whole'>    
    <form className='login'>
        <h1>Login</h1><br/>
        <div className="mb-3">
        <label for="exampleInputEmail1" class="form-label">
            Please Enter your Phone Number
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
        <div className="emailHelp">
            You will receive an OTP on this number
        </div>
        </div>
        
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
   </div>

  )
}

export default PhLogin