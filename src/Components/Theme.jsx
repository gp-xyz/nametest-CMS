import React, { useState, useEffect } from 'react'
import logo1 from "/img/bulb-on-txt-200.png";
import logo2 from "/img/bulb-off-srsly-txt-200.png";

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
  return (
    <div className='themebox'>
      <button key="themeswitch" onClick={themeclick}><img width="100" height="100px" src={currentSource} /></button>
    </div>
  )
}

export default Theme
