import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  const [showMenu, setShowMenu] = useState(false);

  function handleLinkClick() {
    setShowMenu(false);
  }

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <header>
      <nav>
        <div className='left'>
          <Link to='/'>Zira</Link>
        </div>

        <div className={`menu ${showMenu ? "show" : ""}`}>
          <ul>
            <li>
              <Link to='/dashboard' onClick={handleLinkClick}>
                Dashboard
              </Link>
            </li>
            <li>
              <Link to='/issues' onClick={handleLinkClick}>
                Issues
              </Link>
            </li>
            <li>
              <Link to='/projects' onClick={handleLinkClick}>
                Projects
              </Link>
            </li>
            <li>
              <Link to='/users' onClick={handleLinkClick}>
                Users
              </Link>
            </li>
            <li>
              <Link to='/settings' onClick={handleLinkClick}>
                Settings
              </Link>
            </li>
            <div className='login'>
              <Link to='/login' onClick={handleLinkClick}>
                <button className='button'>Login</button>
              </Link>
            </div>
          </ul>
        </div>

        <div className='hamburger' onClick={toggleMenu}>
          <button>
            <span className={`line ${showMenu ? "line1" : ""}`}></span>
            <span className={`line ${showMenu ? "line2" : ""}`}></span>
            <span className={`line ${showMenu ? "line3" : ""}`}></span>
          </button>
        </div>
      </nav>
    </header>
  );
}
