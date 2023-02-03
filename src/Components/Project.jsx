import React, {useState,useEffect} from 'react'
import MainTable from "./MainTable"
import {useParams} from 'react-router-dom'

function Project(props) {
    const [data,setData] = useState([{}])
    const {projectName} = useParams()
    const [author,setAuthor] = useState(props.author)
    useEffect ( () => {
      setAuthor(props.author)
    },[props.author])
    useEffect( () => {
      console.log('project component')
      console.log(projectName)
      fetch("https://disco.pythonanywhere.com/rankings/" + projectName).then(
        res => res.json()
      ).then(
        dat=> {
          setData(dat)
        }
      )
    },[])
  return (
      
   
    <div>
      
       <MainTable data={data} author={author} sortstyle={props.style} title={projectName} authorvotes={props.authorvotes} theme={props.theme} />
    
    </div>
  )
  
}

export default Project