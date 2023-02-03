import React, {useState,useEffect} from 'react'
import MainTable from "./MainTable"

function Rankings(props) {
    const [data,setData] = useState([{}])
    const [author,setAuthor] = useState(props.author)

    useEffect ( () => {
      setAuthor(props.author)
    },[props.author])
    
    useEffect( () => {
      console.log('sort style for rankings is ' + props.sortstyle )
      fetch("https://disco.pythonanywhere.com/rankings").then(
        res => res.json()
      ).then(
        dat=> {
          setData(dat)
        }
      )
    },[])
  return (
      
   
    <div>
      
       <MainTable data={data} author={author} sortstyle={props.sortstyle} title="All" authorvotes={props.authorvotes } theme={props.theme} />
    
    </div>
  )
  
}

export default Rankings