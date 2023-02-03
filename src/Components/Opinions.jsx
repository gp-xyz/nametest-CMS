import React, { useState, useEffect } from 'react'
import MainTable from "./MainTable"
import { useParams } from 'react-router-dom'

function Opinions(props) {
  const [data, setData] = useState([{}])
  const { opinionAuthor } = useParams()
  const [author, setAuthor] = useState(props.author)
  useEffect(() => {
    setAuthor(props.author)
  }, [props.author])

  useEffect(() => {
    console.log('opinions from:')
    console.log(opinionAuthor)
    fetch("https://disco.pythonanywhere.com/opinions/" + opinionAuthor).then(
      res => res.json()
    ).then(
      dat => {
        setData(dat)
      }
    )
  }, [opinionAuthor])
  return (


    <div>

      <MainTable data={data} author={author} sortstyle={props.style} title="Opinions" authorvotes={props.authorvotes} theme={props.theme} />

    </div>
  )

}

export default Opinions