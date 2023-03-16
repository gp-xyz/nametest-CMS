import React from 'react';
import { Link } from 'react-router-dom';

function NameNav() {
  return (
    
      <div className='grid grid-colos-1 md:grid-cols-5'>
      <div className="flex flex-col sm:flex-row justify-center ml-0 md:ml-5 w-full col-span-4">
        <Link to="/monikers" className="namenavbutton">All Titles, ranked</Link>
        <Link to="/newest" className="namenavbutton">The Latest</Link>
        <Link to="/projects" className="namenavbutton">By Project</Link>
        <Link to="/newtag" className="actionbutton">Add yours</Link>
      </div>

      </div>
  
  );
}

export default NameNav;
