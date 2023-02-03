import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom'
function ProjectList(props) {
    const [data,setData] = useState([{}])
    
    
    useEffect( () => {
      fetch("https://disco.pythonanywhere.com/rankings").then(
        res => res.json()
      ).then(
        dat=> {
        //   let temp1 = 
          let data1 = dat['tags'].map( item => item.project )
          console.log(data1)
          const counts = data1.reduce((acc, cur) => {
            if (acc[cur]) {
              acc[cur]++;
            } else {
              acc[cur] = 1;
            }
            return acc;
          }, {});
          
          const objects = Object.entries(counts).map(([name, count]) => ({ name, count }));
          objects.sort((a, b) => b.count - a.count);
          setData(objects)
        //   console.log(temp1)
          console.log(objects)
        }
      )
    },[])

  return (
      
   
    <div className={"projectlist-" + props.theme}>
      theme should be {props.theme}
      {(typeof data === 'undefined') ? (
        <p>Loading..</p>
      ) : (
        
        <ul>
            {data.map(item => (
                <li key={item.name}> <Link to={'/project/'+item.name}>{item.name} ({item.count}) </Link></li>
            ))}
        </ul>
        
        
       
      )}


    </div>
  )
}

export default ProjectList