import React, { useState, useEffect } from "react";
import Exhibit from "./Exhibit";
export default function MainTable(props) {

  const [listdata, setListData] = useState([])
  const defaultSelectTxt = 'sort by..'
  const [selectedItem, setSelectedItem] = useState(defaultSelectTxt)
  const [sortStyle, setSortStyle] = useState('Grail')





  // props.data.tags.sort((a, b) => (a.datetime < b.datetime) ? 1 : -1)
  let mosthams = () => {
    setListData(() => props.data.tags.concat().sort((a, b) => (a.hamcount < b.hamcount) ? 1 : -1))
    console.log('WE JUST SORTED BY HAM')

  }
  let mostGrails = () => {
    setListData(() => props.data.tags.concat().sort((a, b) => (a.grailcount < b.grailcount) ? 1 : -1))
  }
  let leasttomatos = () => {
    setListData(() => props.data.tags.concat().sort((a, b) => (a.tomatocount > b.tomatocount) ? 1 : -1))
  }
  let newest = () => {
    setListData(() => props.data.tags.concat().sort((a, b) => (a.datetime < b.datetime) ? 1 : -1))
  }


  const items2 = {
    'Grail': mostGrails,
    'Ham': mosthams,
    'Cleanest': leasttomatos,
    'Newest': newest
  }
  const items = Object.keys(items2)

  useEffect(() => {
    console.log('sort style for MT is ' + props.sortstyle)
    console.log(sortStyle + ' is in state')
    setListData(props.data.tags)
    console.log('props changed and sortstyle:' + sortStyle)
    console.log('props changed and propsdat:' + props.data.tags)
    if (sortStyle && props.data.tags != undefined) {
      console.log('CELEBRATE??')
      console.log('props changed and propsdat:' + props.data.tags)
      
        
      
      items2[sortStyle]()
      
    }


  }, [props])

  useEffect(() => {
    console.log(sortStyle)
    console.log(props.data.tags)
    if (props.data.tags) { items2[sortStyle]() }

  }, [sortStyle])

  useEffect(() => setSortStyle(props.sortstyle || 'Grail'), [])




  let handleIt = (event) => {

    setSortStyle(event.target.value)


  }
  return (
    <div className={"bigtable-" + props.theme} key="big1">-
      <div><h2>{props.title}</h2></div>


      <label>Sort by:&nbsp;
        <select value={sortStyle} onChange={handleIt} className={"dropdown-" + props.theme}>
          {items.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>

      {(typeof listdata === 'undefined') ? (
        <p>Loading..</p>
      ) : (
        <Exhibit listdata={listdata} author={props.author} authorvotes={props.authorvotes} theme={props.theme} />


      )}


    </div>
  )

}

