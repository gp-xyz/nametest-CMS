import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SIWE from "./SIWE";
import Theme from "./Theme"
import logo from "/img/sticker.png";
import { getCTA } from './util/RandomCTA'
import "../App.css"

export default function Nav({ navSignedIn, assignTheme }) {
  const [author, setAuthor] = useState(null)
  const [gauthor, gsetAuthor] = useState(null)
  const [myTheme, setMytheme] = useState('light')
  const [titleLink, setTitlelink] = useState("/titles/")
  const [opLink, setOpLink] = useState("/opinions/")
  const [cta, SetCTA] = useState('GO')

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
    const outobj = { 'button': 'menu1', 'author': author, 'cta_text': cta }
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
    <div className="flex flex-row  max-w-6xl items-center justify-between bg-skin-menu py-3 px-2  w-full">
      <div className="logo flex items-center justify-center w-1/4 hover:cursor-help hidden sm:contents">
        <div className="text-black font-bold text-6xl md:text-8xl flex items-center justify-center z-20 w-16">
          <img src={logo}  />
        </div>
      </div>
      <ul className="flex flex-row justify-start w-full md:w-3/4 ">
        <li className="mr-6"><Link className="nav-link" to="/">Home</Link></li>
        <li className="mr-6"><Link className="nav-link" to="/posts">Chronicle</Link></li>
        <li className="mr-6"><Link className="nav-link" to="/monikers">Monikers</Link></li>
        <li className="mr-6"><Link className="nav-link" to="/about">About</Link></li>
        <li className="mr-6"><Link className="nav-link" to="/test">test</Link></li>
      </ul>
      <SIWE onSignIn={handleIt} hidden="true" />
    </div>
  );
}
