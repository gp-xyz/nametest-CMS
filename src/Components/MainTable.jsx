import React, { useState, useEffect } from "react";
import Exhibit from "./Exhibit";
import NameNav from "./NameNav";
import Loading from "./Loading";
export default function MainTable(props) {

  const [listdata, setListData] = useState([])
  const defaultSelectTxt = 'sort by..'
  const [selectedItem, setSelectedItem] = useState(defaultSelectTxt)
  const [sortStyle, setSortStyle] = useState('Grail')





  // props.data.tags.sort((a, b) => (a.datetime < b.datetime) ? 1 : -1)
  let mosthams = () => {
    setListData(() => props.data.tags.concat().sort((a, b) => {
      if (a.hamcount === b.hamcount) {
        if (a.grailcount === b.grailcount) {
          return (a.tomatocount > b.tomatocount) ? 1 : -1;
        }
        return (a.grailcount < b.grailcount) ? 1 : -1;
      }
      return (a.hamcount < b.hamcount) ? 1 : -1;
    }));


  }
  let mostGrails = () => {
    setListData(() => props.data.tags.concat().sort((a, b) => {
      if (a.grailcount === b.grailcount) {
        if (a.tomatocount === b.tomatocount) {
          return (a.hamcount < b.hamcount) ? 1 : -1;
        }
        return (a.tomatocount > b.tomatocount) ? 1 : -1;
      }
      return (a.grailcount < b.grailcount) ? 1 : -1;
    }));
  }
  let leasttomatos = () => {
    // setListData(() => props.data.tags.concat().sort((a, b) => (a.tomatocount > b.tomatocount) ? 1 : -1))
    setListData(() => props.data.tags.concat().sort((a, b) => {
      if (a.tomatocount === b.tomatocount) {
        return (a.grailcount + a.hamcount < b.grailcount + b.hamcount) ? 1 : -1;
      }
      return (a.tomatocount > b.tomatocount) ? 1 : -1;
    }));

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
    <div className={"general-" + props.theme} key="big1">
      <NameNav type={props.title}/>


      {(typeof listdata === 'undefined') ? (
        <Loading />
      ) : (
        <div className="text-2xl p-2">
          <div >{props.title} ({listdata.length})</div>
          <div >     
             <label>Sort by:&nbsp;
            <select value={sortStyle} onChange={handleIt} className="bg-skin-comp">
              {items.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label></div>



          <Exhibit listdata={listdata} author={props.author} authorvotes={props.authorvotes} theme={props.theme} />

        </div>
      )}


    </div>
  )

}

