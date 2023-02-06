import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SIWE from "./SIWE";
import Theme from "./Theme"
import logo from "/img/fb-dk-100px.png";
import { getCTA } from './util/RandomCTA'
export default function Nav({ navSignedIn, assignTheme }) {
  const [author, setAuthor] = useState(null)
  const [gauthor, gsetAuthor] = useState(null)
  const [myTheme, setMytheme] = useState('light')
  const [titleLink, setTitlelink] = useState("/titles/")
  const [opLink, setOpLink] = useState("/opinions/")
  const [cta,SetCTA] = useState('GO')

  useEffect(() => {
    SetCTA(getCTA())
  })
  useEffect(() => {
    setTitlelink("/titles/" + author)
    setOpLink("/opinions/" + author)
  }, [author])

  const handleIt = (addr) => {
   
    navSignedIn(addr)
    setAuthor(addr)
  }
  const broadcastTheme = (theme) => {
    assignTheme(theme)
    setMytheme(theme)
    console.log('assigned theme:' + theme)
  }

  const handleArtButton = () => {
    const outobj = { 'button':'menu1','author':author,'cta_text': cta }
    console.log('arting:')
    console.log(outobj)
    fetch(`https://disco.pythonanywhere.com/click`,
      {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(outobj)
      })
  }
  return (
    <nav className={"nav-"+myTheme}>

		<div className="logo"> <img alt="bottomlogo" src={logo} width="150" /> <div className="tagline"> <h1>flashbulb</h1> illuminating digital artwork</div></div>     
  
<div className="header-nav">
		
  <div className="menuToggle">
    
    <input type="checkbox" />
    <span> </span>
    <span> </span>
    <span> </span>
    
  <ul className="menu">
        <li><div className="name-m"><h1>flashbulb</h1></div></li>  
        <li><div className="tagline-m">illuminating digital artwork</div></li>
        <li><Link to="/">best titles ever 🐐🐐</Link></li>
        <li><Link to="/newest">brand new 🔥</Link></li>
        <li><Link to="/about">what's this all about?</Link></li>
        <li><Link to="/newtag"><button className="addbutton" onClick={handleArtButton}>{cta}</button></Link></li>

      </ul>
       
  
{gauthor && <ul>
          <li><Link to={titleLink}>[My Contributions]</Link></li>

          <li><Link to={opLink}>[My Opinions]</Link></li>
      </ul>}
  
        </div>  
			
    </div>
       
      <Theme callThemeBack={broadcastTheme} />
  
      <SIWE onSignIn={handleIt} />
	

		
    </nav>
    
  );
}
