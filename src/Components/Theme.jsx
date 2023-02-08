import React, { useState, useEffect } from 'react'
import logo1 from "/img/bulb-on-txt-200.png";
import logo2 from "/img/bulb-off-txt-200.png";
import { Link } from "react-router-dom";
function Theme({ callThemeBack }) {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')
  const [currentSource, setSource] = useState(logo1)
  
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setTheme(savedTheme)
    }
  }, [])
  useEffect(() => {
    callThemeBack(theme)
    setSource(theme === 'light' ? logo1 : logo2);
    localStorage.setItem('theme', theme);
  }, [theme])
  const themeclick = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }
  const handleArtButton = () => {
    // const outobj = { 'button':'menu1','author':author,'cta_text': cta }
    // console.log('arting:')
    // console.log(outobj)
    // fetch(`https://disco.pythonanywhere.com/click`,
    //   {
    //     method: 'POST',
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(outobj)
    //   })
  }
  return (
    <div className='themebox'>
      <button key="themeswitch" onClick={themeclick}><img width="100" height="100px" src={currentSource} /></button>

     <button className="addbutton" 
       onClick={handleArtButton}><Link to="/newtag">ADD ART</Link></button>
    </div>
  )
}

export default Theme
