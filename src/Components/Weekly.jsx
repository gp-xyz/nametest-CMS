import React, {useState,useEffect} from 'react'
import MainTable from "./MainTable"

function Weekly(props) {
    const [data,setData] = useState([{}])
    const [author,setAuthor] = useState(props.author)

    useEffect ( () => {
      setAuthor(props.author)
    },[props.author])
    
    useEffect( () => {
      fetch("https://disco.pythonanywhere.com/weekly").then(
        res => res.json()
      ).then(
        dat=> {
          setData(dat)
        }
      )
    },[])
  return (
      
   
    <div>
      
       <MainTable data={data} author={author} sortstyle={props.sortstyle} title="Weekly" authorvotes={props.authorvotes } theme={props.theme} />
    
    </div>
  )
  
}

export default Weekly