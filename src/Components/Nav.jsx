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



        <ul className="menu ">

          <li className="bg-orange-500 menuitem"><Link className="nav-link" to="/">Home</Link></li>
          <li className="bg-yellow-300 menuitem"><Link className="nav-link" to="/posts">Chronicle</Link></li>
          <li className="bg-blue-300 menuitem"><Link className="nav-link" to="/monikers">Monikers</Link></li>
          <li className="bg-purple-300 menuitemr"><Link className="nav-link" to="/about">About</Link></li>


        </ul>




      </div>
      <div className="logo relative hidden md:inline-flex h-full hover:cursor-help">
  <div className="flex items-center justify-center w-52 bg-slate-700 rounded-md h-full">
    <div className="relative z-10 w-48 h-48 flex items-center justify-center ">
      <div className="bg-orange-500 w-48 h-48 rounded-full absolute inset-0 "></div>
      <div className="bg-yellow-300 w-42 h-42 rounded-full absolute inset-3"></div>
      <div className="bg-blue-300 w-36 h-36 rounded-full absolute inset-6"></div>
      <div className="bg-purple-300 w-30 h-30 rounded-full absolute inset-9 "></div>
      <div className="text-black font-bold text-6xl md:text-8xl absolute inset-0 flex items-center justify-center z-20 hover:text-white ">F</div>
    </div>
  </div>
</div>



      <SIWE onSignIn={handleIt} hidden="true" />




    </div>



  );
}
