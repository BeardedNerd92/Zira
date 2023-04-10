import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <section className='container'>
      <div className='login-page'>
        <h1>Welcome to Zira</h1>
        <p>Please sign in or create an account to start using our platform.</p>
        <form action=''>
          <div class='form-group'>
            <label for='username'>Username</label>
            <input
              type='text'
              id='username'
              name='username'
              placeholder='Enter your username'
              required='required'
            />
          </div>
          <div class='form-group'>
            <label for='password'>Password</label>
            <input
              type='password'
              id='password'
              name='password'
              placeholder='Enter your password'
              required='required'
            />
          </div>
          <button type='submit'>Login</button>
        </form>
        <Link to='/register'>Create an account</Link>
      </div>
    </section>
  );
}
