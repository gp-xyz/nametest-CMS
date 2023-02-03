import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Rankings from './Rankings';
import Weekly from './Weekly';
import NewTag from './NewTag';
import About from './About';
import Nav from './Nav';
import Footer from './Footer';
import Project from './Project';
import ProjectList from './ProjectList';
import Opinions from './Opinions';
import MyTitles from './MyTitles';
import Profile from './Profile'

function Router() {
  const [author,setAuthor] = useState(null)
  const [authorVotes,setAuthorVotes] = useState({})
  const [myTheme,setMyTheme] = useState('light')
  const recvNavSignIn = (addr) => {
    setAuthor(addr)
    fetch("https://disco.pythonanywhere.com/authordata/" + addr).then(
      res => res.json()
    ).then(
      dat=> {
        setAuthorVotes(dat)
        console.log('authore votes:')
        console.log(dat)
      }
    )
  }
 
  return (
    <BrowserRouter>
     
        <Nav navSignedIn={recvNavSignIn} assignTheme={ (parm) => {
      console.log('wtf' + parm)
      setMyTheme(parm)
    }}/>
       
        <Routes>
        <Route exact path="/" element={<Rankings sortstyle='Grail' author={author} authorvotes={authorVotes} theme={myTheme}/>} />
          
        <Route path="/weekly" element={<Weekly sortstyle='Grail'  author={author} authorvotes={authorVotes} theme={myTheme}/>} />
          
        <Route path="/newtag" element={<NewTag  author={author} theme={myTheme}/>} />
          
        <Route path="/about" element={<About theme={myTheme} />} />
          
        <Route path="/project/:projectName" element={<Project author={author} authorvotes={authorVotes}  theme={myTheme}/>} />
          
        <Route path="/projects" element={<ProjectList authorvotes={authorVotes} theme={myTheme}/>} />
          
        <Route path="/titles/:titleAuthor" element={<MyTitles author={author} authorvotes={authorVotes} theme={myTheme}/>} />
          
        <Route path="/opinions/:opinionAuthor" element={<Opinions author={author} authorvotes={authorVotes} theme={myTheme}/>} />
          
        <Route path="/profile" element={<Profile author={author} />} />
          
        </Routes> 
        <Footer theme={myTheme}/>
    
    </BrowserRouter>
  );
}

export default Router;
