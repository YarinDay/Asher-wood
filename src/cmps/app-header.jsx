import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import whatsapp from "../assets/img/whatsapp.png"
import googleMaps from "../assets/img/google-maps.png"
import phoneCall from "../assets/img/phone-call.png"
import AYLogo from "../assets/img/AY-logo.webp"

export function AppHeader({ scrollTop }) {
  const [isHomeActive, setIsHomeActive] = useState(false)
  const [isProjectsActive, setProjectsIsActive] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()
  const onHome = () => {
    navigate("/")
  }
  const toggleNavBar = () => {
    setIsOpen(!isOpen)
  }
  const iBtnActive = (btn) => {
    switch (btn) {
      case 'home':
        setIsHomeActive(true)
        setProjectsIsActive(false)
        break;
      case 'projects':
        setProjectsIsActive(true)
        setIsHomeActive(false)
        break;
      default:
        break;
    }
  }

  return (
    <header className='app-header main-layout full'>
      <div className="main-logo" onClick={() => {
        iBtnActive('home')
        onHome()
      }}><img src={AYLogo} alt="" /></div>
      <div className={`nav-bar-container ${isOpen ? 'open' : ''}`}>
        <NavLink onClick={() => iBtnActive('home')} to='/' className={`nav-home ${isHomeActive ? 'isActive' : ''}`}> <span>עמוד הבית</span></NavLink>
        <NavLink onClick={() => iBtnActive('projects')} to='/projects' className={`nav-projects  ${isProjectsActive ? 'isActive' : ''}`}><span>פרוייקטים</span></NavLink>
        <a href="https://wa.link/s7g0fa"><img src={whatsapp} /></a>
        <a href="https://www.waze.com/he/live-map/directions/il/%D7%9E%D7%97%D7%95%D7%96-%D7%94%D7%9E%D7%A8%D7%9B%D7%96/%D7%A0%D7%A1-%D7%A6%D7%99%D7%95%D7%A0%D7%94/%D7%94%D7%9E%D7%96%D7%9E%D7%A8%D7%94-13?navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location&to=place.ChIJmxdKScK2AhURVtvN7GhV8q0"><img src={googleMaps} /></a>
        <a className="phone-call" href="tel:0522507519">052-250-7519 &nbsp;<img src={phoneCall} /></a>
        <a className="phone-call" href="tel:089301140">08-930-1140 &nbsp;<img src={phoneCall} /></a>
      </div>
      <button class="toggle-nav" onClick={toggleNavBar}>☰</button>
    </header>
  );
}