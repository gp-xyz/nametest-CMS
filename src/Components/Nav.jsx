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
    <div className="w-full">
      <div className="flex flex-col items-center ">
        <div className="text-5xl sm:text-7xl blogtitle mt-3 sm:mt-8 mb-3 sm:mb-4">Flash<span className="text-skin-comp">bulb</span>
        </div>
        <p className="pb-2 sm:pb-5 font-serif">Original experiments with art, code and community</p>

      </div>

      <div className="flex flex-row items-center bg-skin-menu py-3 px-2">

        <ul className="flex flex-row justify-center w-full">
          <li className="mr-6"><Link className="nav-link" to="/">Home</Link></li>
          <li className="mr-6"><Link className="nav-link special" to="/monikers">Monikers</Link></li>
          <li className="mr-6"><Link className="nav-link" to="/posts">Chronicle</Link></li>          
          <li className="mr-6"><Link className="nav-link" to="/about">About</Link></li>
        </ul>
        <SIWE onSignIn={handleIt} hidden="true" />
      </div>

    </div>
  );
}
