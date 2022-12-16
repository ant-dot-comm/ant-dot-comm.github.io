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
          <div className='align-center'>
            <a className="social-icon mr" href="https://www.linkedin.com/in/antonicommodore" target="_blank" rel='noreferrer'>
              <img src={`${process.env.PUBLIC_URL + "/icons/social-linkedin.svg"}`} alt="linkedin"/>
            </a>
            <img className="header-image mb2x" src={`${process.env.PUBLIC_URL + "/images/antoni.jpeg"}`} alt="antoni commodore"/>
            <a className="social-icon ml" href="https://www.instagram.com/antdotcomm/" target="_blank" rel='noreferrer'>
              <img src={`${process.env.PUBLIC_URL + "/icons/social-ig.svg"}`} alt="instagram"/>
            </a>
          </div>
          <h1 className="heading-1 mb2x">Antoni Commodore</h1>
          <p className="font-lg mb3x">Front-End Developer &nbsp;|&nbsp; Husband & Father &nbsp;|&nbsp; Design System Enthusiast</p>
          <About />
        </div>
      </header>
  );
}