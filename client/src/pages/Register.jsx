import React from "react";

export default function Register() {
  return (
    <section>
      <div className='login-page container'>
        <h1>Join the Elite:</h1>
        <p>Register Now for Exclusive Access to Zira</p>
        <form className=''>
          <div className='form-group'>
            <label for='username'>Username</label>
            <input
              type='text'
              id='username'
              name='username'
              placeholder='Enter your username'
              required='required'
            />
          </div>
          <div className='form-group'>
            <label for='password'>Password</label>
            <input
              type='password'
              id='password'
              name='password'
              placeholder='Enter your password'
              required='required'
            />
          </div>
          <div className='form-group'>
            <label for='password2'>Confirm Password</label>
            <input
              type='password'
              id='password2'
              name='password2'
              placeholder='Confirm your password'
              required='required'
            />
          </div>
          <button type='submit'>Register</button>
        </form>
      </div>
    </section>
  );
}
