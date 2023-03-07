import React from 'react';
import { Link } from 'react-router-dom';

function NameNav() {
  return (
    
      <div className="flex flex-col sm:flex-row justify-start ml-5">
        <Link to="/monikers" className="namenavbutton">All Titles, ranked</Link>
        <Link to="/newest" className="namenavbutton">The Latest</Link>
        <Link to="/projects" className="namenavbutton">By Project</Link>
        <Link to="/newtag" className="actionbutton">Add yours</Link>
      </div>
  
  );
}

export default NameNav;
