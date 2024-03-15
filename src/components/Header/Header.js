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
          <img className="header-image mb2x" src={`${process.env.PUBLIC_URL + "/images/antoni.jpeg"}`} alt="antoni commodore"/>
          <h1 className="heading-1 mb">Antoni Commodore</h1>
          <p className="font-lg mb2x">Husband & Father &nbsp;|&nbsp; UX/UI Developer &nbsp;|&nbsp; Design System Enthusiast</p>
          <About />
          <div className='header-content-contact'>
            <a className="social-icon" href="https://www.linkedin.com/in/antonicommodore" target="_blank" rel='noreferrer'>
              <img src={`${process.env.PUBLIC_URL + "/icons/social-linkedin.svg"}`} alt="linkedin"/>
            </a>
            <a className="social-icon ml" href="https://www.instagram.com/antdotcomm/" target="_blank" rel='noreferrer'>
              <img src={`${process.env.PUBLIC_URL + "/icons/social-ig.svg"}`} alt="instagram"/>
            </a>
            <a className="social-icon ml" href="https://www.behance.net/antonicommodore" target="_blank" rel='noreferrer'>
              <img src={`${process.env.PUBLIC_URL + "/icons/social-behance.svg"}`} alt="behance"/>
            </a>
          </div>
        </div>
      </header>
  );
}