import React, { useContext } from 'react';
import classNames from "classnames"

import SiteContext from "../../SiteContext"
import { AboutContent, Resume } from "../../components"

import { Button } from "semantic-ui-react"
import {ReactComponent as IG} from "./instagram.svg"
import {ReactComponent as BE} from "./behance.svg"
import {ReactComponent as LI} from "./linkedin-in.svg"

export function About(props) {
  const {
    className,
  } = props

  const aboutClasses = classNames(
    className, 
    "section-about",
  )
    
  const { modal, setModalOpen, handleModalContent } = useContext(SiteContext)

  const handleAbout = () => {
    setModalOpen(!modal)
    handleModalContent(<AboutContent />)
  }
  
  const handleResume = () => {
    setModalOpen(!modal)
    handleModalContent(<Resume />)
  }

  return (
      <div className={aboutClasses}>
        <div className="about-buttons">
          <Button className="primary large" onClick={() => handleResume()}>Resume</Button>
          <Button as="a" className="basic primary large" href="https://www.linkedin.com/in/antonicommodore" target="_blank" rel='noreferrer'>
            <LI />
          </Button>
          <Button as="a" className="basic primary large" href="https://www.instagram.com/antdotcomm/" target="_blank" rel='noreferrer'>
            <IG />
          </Button>
          <Button as="a" className="basic primary large" href="https://www.behance.net/antonicommodore" target="_blank" rel='noreferrer'>
            <BE />
          </Button>
          <Button className="basic primary large" onClick={() => handleAbout()}>About</Button>
        </div>
      </div>
  );
}