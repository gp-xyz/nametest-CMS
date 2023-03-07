import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SIWE from "./SIWE";
import Theme from "./Theme"
import logo from "/img/fb-dk-100px.png";
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

    <div className="grid grid-cols-1 md:grid-cols-5 my-3 w-full">
      <div className="header-nav w-full col-span-4">



        <ul className="menu">

          <li className="bg-orange-500 menuitem"><Link className="nav-link" to="/">Home</Link></li>
          <li className="bg-yellow-300 menuitem"><Link className="nav-link" to="/posts">Chronicle</Link></li>
          <li className="bg-blue-300 menuitem"><Link className="nav-link" to="/monikers">Monikers</Link></li>
          <li className="bg-purple-300 menuitemr"><Link className="nav-link" to="/about">about</Link></li>


        </ul>




      </div>
      <div className="logo relative hidden md:inline-flex h-full">
        <div className="flex items-center w-52 bg-slate-700 rounded-md h-full">
          <div className="text-white font-bold text-6xl md:text-8xl mx-3">F</div>
          <div className="bg-red-500 w-20 h-20 rounded-full"> </div>
        </div>

      </div>
      <SIWE onSignIn={handleIt} hidden="true" />




    </div>



  );
}
