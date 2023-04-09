import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <header className='container'>
      <nav>
        <div className='left'>
          <Link to='/'>Zira</Link>
        </div>
        <div className='right'>
          <ul>
            <li>
              <Link to='/dashboard'>Dashboard</Link>
            </li>
            <li>
              <Link to='/issues'>Issues</Link>
            </li>
            <li>
              <Link to='/projects'>Projects</Link>
            </li>
            <li>
              <Link to='/users'>Users</Link>
            </li>
            <li>
              <Link to='/settings'>Settings</Link>
            </li>
          </ul>
        </div>
        <div className='login'>
          <Link to='/login'>
            <button className='button'>Login</button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
