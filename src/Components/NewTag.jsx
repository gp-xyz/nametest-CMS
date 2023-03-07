import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import { Link } from 'react-router-dom'
import NameNav from './NameNav'
export default function NewTag(props) {
  const [data, setData] = useState([])
  const [selection, setSelection] = useState({ 'sel': { value: 1, label: 'default' } })
  const [maxToken, setMaxToken] = useState(1)
  const [token, setToken] = useState(1)
  const [imgURL, setImgURL] = useState("none")
  const [myName, setMyName] = useState("")
  const [tokex, setTokex] = useState(null)
  useEffect(() => {
    fetch("https://disco.pythonanywhere.com/projects").then(
      res => res.json()
    ).then(
      dat => {
        setData(dat['projects'])
        console.log(dat)
      }
    )
  }, [])

  let handleProjectSelect = (sel) => {
    console.log(sel)
    setSelection({ sel })
    setMaxToken(sel.found)
    console.log(sel)
    console.log(selection)
    let tokenexpression = sel.value * (10 ** 6) + token
    setTokex(tokenexpression)
    let urlguess = 'https://artblocks-mainnet.s3.amazonaws.com/' + tokenexpression + '.png'
    setImgURL(urlguess)

  }
  let handleTokenSelect = (sel) => {

    const value = Math.max(0, Math.min(maxToken, Number(sel.target.value)));
    setToken(value);
    let tokenexpression = selection.sel.value * (10 ** 6) + value
    setTokex(tokenexpression)
    let urlguess = 'https://artblocks-mainnet.s3.amazonaws.com/' + tokenexpression + '.png'
    setImgURL(urlguess)
  }
  let handleNameChange = (it) => {
    console.log(it.target.value)
    setMyName(it.target.value)
  }

  let submitObj = () => {
    let outobj = { 'project': selection.sel.label, 'number': token, 'token': selection.sel.value * (10 ** 6) + token, "name": myName, 'author': props.author, type: '1' }
    console.log(selection.sel)
    console.log(outobj)
    fetch(`https://disco.pythonanywhere.com/newtag`,
      {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(outobj)
      })

    // navigate('/')
  }
  let randomizeSel = () => {
    let randtoken = Math.floor(Math.random() * maxToken)
    let randproj = Math.floor(Math.random() * data.length)
    console.log(data[randproj])
    setSelection(data[randproj])
    handleProjectSelect(data[randproj])

    // handleTokenSelect({target:{value:randtoken},value:randproj})
    // return 0
  }
  return (
    <div>
      <NameNav />

      <div className={'general-' + props.theme}>



        {(typeof data === 'undefined') ? (
          <p>Loading..</p>
        ) : (
          <div>
            <h3 className='text-2xl'>Add Artwork</h3>


            <div className='w-3/4'>
              <div className='bg-orange-200 flex flex-col md:flex-row '>
                <div className='flex flex-col p-1 w-full md:w-4/5'>
                  <label>AB Project</label>
                  <Select options={data} onChange={handleProjectSelect} placeholder="Select project..." />
                </div>
                <div className='flex flex-col p-1'>
                  <label>{selection.sel.label}#</label>

                  <input type="number" value={token} onChange={handleTokenSelect} className='text-xl p-1 m-0 border-xl border-slate-200 ' />
                </div>

              </div>

              <div className='py-3'>
                <input type="text" values={myName} onChange={handleNameChange} placeholder='Enter your moniker here' className='text-4xl w-full py-3 px-1'></input>




              </div>


              <div className='py-1'>
                <img alt="select art" width="auto" height="auto" src={imgURL} />

                <p className='artblockstext'><a href={"https://generator.artblocks.io/" + tokex} target="_blank">watch on artblocks &rarr;</a>  </p>
              </div>

              <div className="flex justify-end">
                <Link to={{ pathname: '/newest', key: new Date().getTime() }}>
                  <button className="actionbutton" onClick={submitObj} disabled={myName.length === 0}>Submit</button>
                </Link>
              </div>


            </div></div>

        )
        }

      </div>
    </div>
  )
}