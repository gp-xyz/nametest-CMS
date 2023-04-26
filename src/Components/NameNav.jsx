import React from 'react';
import { Link } from 'react-router-dom';

function NameNav(props) {
  const linkClass = "p-4 m-3 text-skin-link text-lg bg-none hover:bg-skin-comp hover:underline";
  const selectedClass = "p-4 m-3 text-skin-link  underline text-lg bg-skin-comp";
  const button_default = "actionbutton m-3";

  return (
    <div className="flex md:items-center justify-center bg-skin-menu p-1 md:py-2 md:px-3 max-w-5xl ">
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
