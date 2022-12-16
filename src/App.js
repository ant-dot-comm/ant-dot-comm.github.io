import React, { useContext, useState, useEffect } from 'react';

import {
  Avatar,
  BaseIcon,
  ColorTokenGroup,
  CityAnimated,
  Header,
  MediaCard,
  GlobalModal,
  Pill,
} from "./components"

import svgFile from "./components/Icons/iconSprite.svg";

import CodingAnimated from "./components/AnimatedSvgs/CodingAnimated"
import BatmanAnimated from "./components/AnimatedSvgs/BatmanAnimated"

import { knowledgePills, interestIcons } from "./data"
import SiteContext from "./SiteContext"

import 'semantic-ui-less/semantic.less'
import './scss/App.scss';

function App() {
  const { modalContent, theme } = useContext(SiteContext)
  const [ mainImage, setMainImage ] = useState(<CodingAnimated />)
  const [ featureText, setFeatureText ] = useState(<CodingAnimated />)

  const sports = theme === "sports"
  const batman = theme === "batman"

  useEffect(() => {
    document.getElementById("root").removeAttribute('class');
    if (sports) {

      document.getElementById("root").classList.add('theme-sports');
      setMainImage(<img src="./images/mancave.svg" alt="man cave" />)
      setFeatureText(
          <>
            <div>"Nothing that comes easy is worth a dime."</div>
            <div className='font-base'> - Woody Hayes</div>
          </>
        )
      
    } else if (batman) {
      
      document.getElementById("root").classList.add('theme-batman');
      setMainImage(<BatmanAnimated />)
      // setFeatureText('I rediscovered the brilliance of Batman the Animated Series a few years ago and a certain painting in the episode "Cold Comfort" caught my eye. The illustration above is my recreation of that painting called "Twilight in Gotham". Mr. Freeze destroyed that painting and I promised myself at that moment I would honor the great artist Guiseppe Bianci and recreate his masterpiece (for my own personal use of course, I do not have copyright privileges, please do not come after me DC).')
      setFeatureText(
        <>
          <div>"Twilight in Gotham"<span className='font-base'> - Guiseppe Bianci</span></div>
          <a className='font-base' href="https://dcau.fandom.com/wiki/Twilight_in_Gotham"  target="_blank" rel='noreferrer'>( Probably worth a google )</a>
        </>
      )
      
    } else {
      
      document.getElementById("root").classList.add('theme-developer');
      setMainImage(<CodingAnimated />)
      setFeatureText('Clean design patterns and thoughtful interactions make me a happy guy. I enjoy learning new ways of bringing ideas to life in the browser. ')

    }
  }, [theme]);


  return (
    <>
    <GlobalModal>
      {modalContent}
    </GlobalModal>

    <div className="site-container">
      <Header className="section-header"/>
    </div>

    <div className="section-full section-illustration mb0">
      <div className="site-container site-container--illustration pt2x pb0">
          {mainImage}
      </div>
    </div>

    <div className="section-full section-text">
      <div className="site-container">
        <p className='font-xl'>
          {featureText} 
        </p>
      </div>
    </div>

    <div className="site-container site-container--grid">
      <div className='section-knowledge'>
        <h2 className='font-lg mb2x'>Knowledge Pills</h2>
        <ul className="section-knowledge-list">
          {knowledgePills.map((item, i) => (
            <Pill key={i} style={item.style}>{item.text}</Pill>
          ))}
        </ul>
      </div>

      <div className='section-icon'>
        <h2 className='font-lg mb2x'>Interest Icons</h2>
        <div className='section-icon-items'>
          {interestIcons.map((icon, i) => (
            <BaseIcon
              className="grow"
              href={`${svgFile}#${icon}`}
          />
          ))}
        </div>
      </div>

      <div className='section-avatars'>
        <h2 className='font-lg mb2x'>Family Avatars</h2>
        <div className='section-avatars-items'>
          {batman ? (
            <>
              <Avatar imageUrl="/icons/avatar-dad-bat.svg" />
              <Avatar imageUrl="/icons/avatar-mom-bat.svg" />
              <Avatar imageUrl="/icons/avatar-girl-bat.svg" />
              <Avatar imageUrl="/icons/avatar-boy-bat.svg" />
            </>
          ) : sports ? (
            <>
              <Avatar imageUrl="/icons/avatar-dad-sports.svg" />
              <Avatar imageUrl="/icons/avatar-mom-sports.svg" />
              <Avatar imageUrl="/icons/avatar-girl-sports.svg" />
              <Avatar imageUrl="/icons/avatar-boy-sports.svg" />
            </>
          ) : (
            <>
              <Avatar imageUrl="/icons/avatar-dad.svg" />
              <Avatar imageUrl="/icons/avatar-mom.svg" />
              <Avatar imageUrl="/icons/avatar-girl.svg" />
              <Avatar imageUrl="/icons/avatar-boy.svg" />
            </>
          )}
          
        </div>
      </div>

      <div className='section-projects'>
        <h2 className='font-lg mb2x'>Project Cards</h2>
        <div className='section-projects-items'>
          <MediaCard
            title="The Grails Club"
            url="http://www.thegrailsclub.com"
            image="./images/grails.png"
          >
            Blender & ThreeJS project creating unique cars based on my favorite sneakers.
          </MediaCard>
          <MediaCard
            title="BatDadMobiles"
            url="https://www.instagram.com/batdadmobiles/"
            image="./images/customs.png"
          >
            A showcase of the Hotwheels I customize as well as other cool cars and batmobiles I collect.
          </MediaCard>
        </div>
      </div>

      <div className='section-color'>
        <h2 className='font-lg mb2x'>Foundation Colors</h2>
        <div className="color-groups">
            <ColorTokenGroup theme={theme} />
        </div>
      </div>  
    </div>

    <div className='section-full section-gotham '>
      { batman && (<CityAnimated />)}
    </div>

    {/* <div className="section-full section-footer">
      <div className="site-container">
          antonicommodore@gmail.com
      </div>
    </div> */}
    </>
  );
}

export default App;
