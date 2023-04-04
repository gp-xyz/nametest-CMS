import React from 'react';
import { Link } from 'react-router-dom';

function NameNav(props) {
  const linkClass = "p-4 m-3 text-gray-600 hover:text-gray-800 text-lg bg-none hover:thebg hover:underline";
  const selectedClass = "p-4 m-3 text-gray-600 underline thebg text-lg";
  const button_default = "actionbutton m-3";

  return (
    <div className="flex md:items-center justify-between bg-gray-100 p-1 md:py-2 md:px-3 max-w-5xl">
      <div className="flex md:justify-center w-full ">
      
        <Link to="/monikers" className={props.type === "All" ? selectedClass : linkClass}>All Titles</Link>
        <Link to="/newest" className={props.type === "Weekly" ? selectedClass : linkClass}>Latest</Link>
        <Link to="/projects" className={props.type[0] === "P" ? selectedClass : linkClass}>By Project</Link>

        <Link to="/newtag" className={props.type === "New" ? selectedClass : button_default}>Add yours</Link>
      </div>
      
    </div>
  );
}

export default NameNav;
