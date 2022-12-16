import React from 'react';
import classNames from "classnames"

import {
  About,
} from "../../components"

export function Header(props) {
  const {
    className,
  } = props
    
  const headerClasses = classNames(
    className, 
    "header",
  )

  return (
      <header className={headerClasses}>
        <div className='header-content'>
          <img className="header-image mb2x" src="./images/antoni.jpeg" alt="antoni commodore"/>
          <div className='align-baseline mb2x'>
            <a className="social-icon mr" href="https://www.linkedin.com/in/antonicommodore" target="_blank" rel='noreferrer'>
              <img src="./icons/social-linkedin.svg" alt="linkedin"/>
            </a>
            <h1 className="heading-1">Antoni Commodore</h1>
            <a className="social-icon ml" href="https://www.instagram.com/antdotcomm/" target="_blank" rel='noreferrer'>
              <img src="./icons/social-ig.svg" alt="instagram"/>
            </a>
          </div>
          <p className="font-lg mb3x">Front-End Developer &nbsp;|&nbsp; Husband & Father &nbsp;|&nbsp; Design System Enthusiast</p>
          <About />
        </div>
      </header>
  );
}