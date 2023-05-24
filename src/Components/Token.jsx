import React, {useState,useEffect} from 'react'
import MainTable from "./MainTable"
import {useParams} from 'react-router-dom'

function Token(props) {
    const [data,setData] = useState([{}])
    const {tokex} = useParams()
    const [author,setAuthor] = useState(props.author)
    useEffect ( () => {
      setAuthor(props.author)
    },[props.author])
    useEffect( () => {
      console.log('tokex component')
      console.log(tokex)
      fetch("https://disco.pythonanywhere.com/token/" + tokex).then(
        res => res.json()
      ).then(
        dat=> {
          setData(dat)
        }
      )
    },[])
  return (
      
   
    <div>
      
       <MainTable data={data} author={author} sortstyle={props.style} title={"T:" + tokex} authorvotes={props.authorvotes} theme={props.theme} />
    
    </div>
  )
  
}

export default Token