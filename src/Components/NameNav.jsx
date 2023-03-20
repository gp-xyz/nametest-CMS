import React from 'react';
import { Link } from 'react-router-dom';

function NameNav(props) {
  const linkClass = "p-4 mr-3 text-gray-600 hover:text-gray-800 text-sm hover:bg-cyan-100 hover:text-purple-400";
  const selectedClass = "p-4 mr-3 text-gray-600 underline hover:text-gray-800 text-sm";
  const button_default = "px-3 p-4 bg-blue-400 text-white rounded-md hover:bg-blue-500 text-sm";

  return (
    <div className="flex items-center justify-between bg-gray-100 py-2 px-3 max-w-5xl">
      <div className="flex justify-center w-full">
      
        <Link to="/monikers" className={props.type === "All" ? selectedClass : linkClass}>All Titles</Link>
        <Link to="/newest" className={props.type === "Weekly" ? selectedClass : linkClass}>Latest</Link>
        <Link to="/projects" className={props.type === "Project" ? selectedClass : linkClass}>By Project</Link>

        <Link to="/newtag" className={props.type === "New" ? selectedClass : button_default}>Add yours</Link>
      </div>
      
    </div>
  );
}

export default NameNav;
