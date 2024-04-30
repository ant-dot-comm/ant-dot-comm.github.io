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
        </div>
      </header>
  );
}