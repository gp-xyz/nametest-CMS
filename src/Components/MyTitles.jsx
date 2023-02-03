import React, {useState,useEffect} from 'react'
import MainTable from "./MainTable"
import {useParams} from 'react-router-dom'

function MyTitles(props) {
    const [data,setData] = useState([{}])
    const {titleAuthor} = useParams()
    const [author,setAuthor] = useState(props.author)
    useEffect ( () => {
      setAuthor(props.author)
    },[props.author])
    
    useEffect( () => {
      console.log('titles from:')
      console.log(titleAuthor)
      fetch("https://disco.pythonanywhere.com/titles/" + titleAuthor).then(
        res => res.json()
      ).then(
        dat=> {
          setData(dat)
        }
      )
    },[titleAuthor])
  return (
      
   
    <div>
      
       <MainTable data={data} author={author} sortstyle={props.style} title={"Contributions from " + titleAuthor} authorvotes={props.authorvotes} theme={props.theme}/>
    
    </div>
  )
  
}

export default MyTitles