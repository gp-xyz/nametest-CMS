import React from 'react';
import { Link } from 'react-router-dom';

function NameNav(props) {
  const linkClass = "py-0 mx-2 text-skin-link text-md bg-none hover:bg-skin-comp hover:underline ";
  const selectedClass = "py-0 mx-2 my-1 text-skin-link  underline text-lg";
  const button_default = "actionbutton m-2";

  return (
    <div className="flex md:items-center justify-center bg-skin-menu2 p-1 md:py-2 md:px-3 max-w-5xl max-h-36">
      <div className="flex items-center md:justify-center w-full ">
      
        <Link to="/monikers" className={props.type === "All" ? selectedClass : linkClass}>All Titles</Link>
        <Link to="/newest" className={props.type === "Weekly" ? selectedClass : linkClass}>This Week's</Link>
        <Link to="/projects" className={props.type[0] === "P" ? selectedClass : linkClass}>By Project</Link>

        <Link to="/newtag" className={props.type === "New" ? selectedClass : button_default}>Add yours</Link>
      </div>
      
    </div>
  );
}

export default NameNav;



