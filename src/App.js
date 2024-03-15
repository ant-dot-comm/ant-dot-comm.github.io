import classNames from 'classnames';
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

import { knowledgePills, interestIcons, themeIcons } from "./data"
import SiteContext from "./SiteContext"

import 'semantic-ui-css/semantic.min.css'
import './scss/App.scss';

function App() {
  const { modalContent, theme, setTheme } = useContext(SiteContext)
  const [ mainImage, setMainImage ] = useState(<CodingAnimated />)
  const [ featureText, setFeatureText ] = useState('')
  const [ themeOptionsOpen, setThemeOptionsOpen ] = useState(true)

  useEffect(() => {
    
    document.querySelectorAll('.fixed-menu-list-item').forEach(el=>el.classList.remove('active'));
    document.getElementById(theme).classList.add('active');
    
    document.getElementById("root").removeAttribute('class');
    if (theme === "sports") {

      document.getElementById("root").classList.add('theme-sports');
      setMainImage(<img src={`${process.env.PUBLIC_URL + "/images/mancave.svg"}`} alt="man cave" />)
      setFeatureText(
          <>
            <div>"Nothing that comes easy is worth a dime."</div>
            <div className='font-base'> - Woody Hayes</div>
          </>
        )
      
    } else if (theme === "batman") {
      
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
      setFeatureText('Blending tech expertise with a flair for design, I enjoy brining new ideas to life in the browser.')

    }
  }, [theme]);

  return (
    <>
    <GlobalModal>
      {modalContent}
    </GlobalModal>

    <div className={classNames('fixed-menu', { 'fixed-menu--open': themeOptionsOpen})}>
      <div class="fixed-menu-trigger">
        <BaseIcon className="fixed-menu-trigger-icon" href={`${svgFile}#${'icon-caret'}`} onClick={() => setThemeOptionsOpen(!themeOptionsOpen)} />
      </div>
      <ul className='fixed-menu-list list-unstyled '>
        {
          themeIcons.map((item, key)=>{   
            return (
                <li key={key} id={item.theme} className='fixed-menu-list-item' style={{ transitionDelay: `${key}00ms` }} onClick={() => setTheme(item.theme)}>
                  <BaseIcon className="fixed-menu-icon grow" href={`${svgFile}#${item.icon}`}  />
                </li>
            );   
          })  
        }
      </ul>
    </div>

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
              href={`${svgFile}#${icon}`}
          />
          ))}
        </div>
      </div>

      <div className='section-avatars'>
        <h2 className='font-lg mb2x'>Family Avatars</h2>
        <div className='section-avatars-items'>
          {theme === "batman" ? (
            <>
              <Avatar imageUrl={`${process.env.PUBLIC_URL + "/icons/avatar-dad-bat.svg"}`} />
              <Avatar imageUrl={`${process.env.PUBLIC_URL + "/icons/avatar-mom-bat.svg"}`} />
              <Avatar imageUrl={`${process.env.PUBLIC_URL + "/icons/avatar-girl-bat.svg"}`} />
              <Avatar imageUrl={`${process.env.PUBLIC_URL + "/icons/avatar-boy-bat.svg"}`} />
            </>
          ) : theme === "sports" ? (
            <>
              <Avatar imageUrl={`${process.env.PUBLIC_URL + "/icons/avatar-dad-sports.svg"}`} />
              <Avatar imageUrl={`${process.env.PUBLIC_URL + "/icons/avatar-mom-sports.svg"}`} />
              <Avatar imageUrl={`${process.env.PUBLIC_URL + "/icons/avatar-girl-sports.svg"}`} />
              <Avatar imageUrl={`${process.env.PUBLIC_URL + "/icons/avatar-boy-sports.svg"}`} />
            </>
          ) : (
            <>
              <Avatar imageUrl={`${process.env.PUBLIC_URL + "/icons/avatar-dad.svg"}`} />
              <Avatar imageUrl={`${process.env.PUBLIC_URL + "/icons/avatar-mom.svg"}`} />
              <Avatar imageUrl={`${process.env.PUBLIC_URL + "/icons/avatar-girl.svg"}`} />
              <Avatar imageUrl={`${process.env.PUBLIC_URL + "/icons/avatar-boy.svg"}`} />
            </>
          )}
          
        </div>
      </div>

      <div className='section-projects'>
        <h2 className='font-lg mb2x'>Project Cards</h2>

        <div className='section-projects-items section-projects-items--2-column'>
          <MediaCard
            title="The Grails Club"
            url="http://thegrailsclub.com"
            image={`${process.env.PUBLIC_URL + "/images/grails.png"}`} 
          >
            Blender & ThreeJS project creating unique cars based on my favorite sneakers.
          </MediaCard>
          <MediaCard
            title="BatDadMobiles"
            url="https://www.instagram.com/batdadmobiles/"
            image={`${process.env.PUBLIC_URL + "/images/customs.png"}`} 
          >
            A showcase of the Hotwheels I customize as well as other cool cars and batmobiles I collect.
          </MediaCard>
        </div>

        {/* <div className='section-projects-items section-projects-items--3-column'>
          <MediaCard
            title="Logos"
            url="https://www.behance.net/gallery/162760141/Logos"
            image={`${process.env.PUBLIC_URL + "/images/logos-group.png"}`} 
          >
            I really enjoy doing logo work. Here a few I've worked on over the years.
          </MediaCard>
          <MediaCard
            title="LoremPickSum"
            url="http://lorempicksum.com/"
            image={`${process.env.PUBLIC_URL + "/images/LoremPickSum.png"}`} 
          >
            Tired of using same old Lorem Ipsum? This is the site for you!
          </MediaCard>
        </div> */}
      </div>

      <div className='section-color'>
        <h2 className='font-lg mb2x'>Foundation Colors</h2>
        <div className="color-groups">
            <ColorTokenGroup theme={theme} />
        </div>
      </div>  
    </div>

    <div className='section-full section-gotham '>
      { theme === "batman" && (<CityAnimated />)}
    </div>

    </>
  );
}

export default App;
