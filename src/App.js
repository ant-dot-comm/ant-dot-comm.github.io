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
      <div className="site-container site-container--illustration mb0">
          {mainImage}
      </div>
    </div>

    <div className="section-full section-text pt3x pb3x">
      <div className="site-container mt0 mb0">
        <p className='font-xl'>
          {featureText} 
        </p>
      </div>
    </div>

    <div className="site-container site-container--grid">
      <div className='section-knowledge mb3x'>
        <h2 className='font-lg mb2x'>Knowledge Pills</h2>
        <ul className="section-knowledge-list">
          {knowledgePills.map((item, i) => (
            <Pill key={i} style={item.style}>{item.text}</Pill>
          ))}
        </ul>
      </div>

      <div className='section-me-system'>
        <div className="section-icon mb3x">
          <h2 className='font-lg mb2x'>Interest Icons</h2>
          <div className='section-icon-items'>
            {interestIcons.map((icon, i) => (
              <BaseIcon
              href={`${svgFile}#${icon}`}
            />
            ))}
          </div>
        </div>

        <div className="section-avatars mb3x">
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
      </div>

      <div className='section-projects mb3x'>
        <h2 className='font-lg mb2x'>Project Cards</h2>
        <div className='section-projects-items section-projects-items--2-column mb'>
          <MediaCard
            title="LeagueSpot"
            url="https://www.behance.net/gallery/196153135/LeagueSpot"
            image={`${process.env.PUBLIC_URL + "/images/Cover.jpg"}`} 
          >
            During my tenure at LeagueSpot, I led the creation and implementation of a comprehensive design system, product features, and custom theming capabilities.
          </MediaCard>
          <MediaCard
            title="F1NSIGHT"
            url="https://www.f1nsight.com/"
            image={`${process.env.PUBLIC_URL + "/images/F1nsightMeta.jpg"}`} 
          >
            Welcome to F1NSIGHT! This project is dedicated to providing Formula 1 enthusiasts with detailed analyses of past race data, including leaderboards, lap times, tire strategies, and the fastest laps for each driver
          </MediaCard>
        </div>
        <div className='section-projects-items section-projects-items--2-column mb'>
          <MediaCard
            title="The Grails Club"
            url="http://thegrailsclub.com"
            image={`${process.env.PUBLIC_URL + "/images/grails.png"}`} 
            >
            I embarked on a creative project using Blender and Three.js to design and render custom cars inspired by my favorite sneakers.
          </MediaCard>
          <MediaCard
            title="BatDadMobiles"
            url="https://www.instagram.com/batdadmobiles/"
            image={`${process.env.PUBLIC_URL + "/images/customs.png"}`} 
          >
            I love customizing Hot Wheels and collecting unique cars and Batmobiles. Here's a showcase of some of my favorite creations and collectibles.
          </MediaCard>
        </div>
        <div className='section-projects-items section-projects-items--2-column'>
          <MediaCard
            title="Logos"
            url="https://www.behance.net/gallery/162760141/Logos"
            image={`${process.env.PUBLIC_URL + "/images/logos-group.png"}`} 
          >
            I have a genuine passion for logo design, and over the years, I've had the pleasure of working on several projects. 
          </MediaCard>
          <MediaCard
            title="LoremPickSum"
            url="http://lorempicksum.com/"
            image={`${process.env.PUBLIC_URL + "/images/LoremPickSum.png"}`} 
          >
            If you're tired of the same old Lorem Ipsum, look no further! Welcome to LoremPickSum, where you'll find a refreshing alternative to spice up your placeholder text needs.
          </MediaCard>
        </div>
      </div>

      <div className='section-color mb3x'>
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
