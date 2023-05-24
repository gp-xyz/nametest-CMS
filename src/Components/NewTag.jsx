import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import { Link } from 'react-router-dom'
import NameNav from './NameNav'
import placeholder from '/img/mylogo.png'
export default function NewTag(props) {
  const [data, setData] = useState([])
  const [selection, setSelection] = useState({ 'sel': { value: 1, label: '' } })
  const [maxToken, setMaxToken] = useState(1)
  const [token, setToken] = useState(1)
  const [imgURL, setImgURL] = useState(placeholder)
  const [myName, setMyName] = useState("")
  const [tokex, setTokex] = useState(null)
  const [newID, setNewID] = useState(null)
  const handleImgError = () => {
    setImgURL(placeholder);
  };

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
    const value = Math.max(0, Math.min(Number(sel.found) - 2, token));
    setToken(value);

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
    let outobj = { 'project': selection.sel.label, 'number': token, 'token': selection.sel.value * (10 ** 6) + token, "name": myName, 'author': props.author, type: '1' };
    console.log(selection.sel);
    console.log(outobj);
    fetch(`https://disco.pythonanywhere.com/newtag`, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(outobj)
    })
      .then(response => response.json())
      .then(data => {
        setNewID(data['id'])
        console.log(newID); // do something with the new ID
        // navigate('/')
      })
      .catch(error => console.error(error));
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
    <div className=''>


      <div className={'general-' + props.theme}>
        <NameNav type="New" />



        {(typeof data === 'undefined') ? (
          <p>Loading..</p>
        ) : (
          <div className='max-w-5xl'>

            <div className='instructions py-10 container items-center'>
              <div className='bullet'>• Select an Art Blocks Project from the dropdown list</div>
              <div className='bullet'>• Specify a Token number, or browse through the numbers</div>
              <div className='bullet'>• Enter your suggested moniker in the provided input field.</div>
              <div className='bullet'>• Click on the Submit button after filling all the details.</div>
            </div>
            <h3 className='text-2xl'>Add Artwork</h3>


            <div className='w-full'>
              <div className='bg-skin-comp flex flex-col md:flex-row '>
                <div className='flex flex-col p-1 w-full'>
                  <label>AB Project</label>
                  <Select options={data} onChange={handleProjectSelect} placeholder="Select project..." />
                </div>
                <div className='flex flex-col p-1 w-full md:w-1/3'>
                  <label>Token #(0-{selection.sel.found - 1})</label>

                  <input type="number" value={token} onChange={handleTokenSelect} className='text-xl p-1 m-0 border-xl border-slate-200 ' />
                </div>

              </div>

              <div className='py-3'>
                <input type="text" values={myName} onChange={handleNameChange} placeholder='Enter your moniker here' className='text-4xl w-full py-3 px-1 border-2 border-slate-200 border-opacity-35'></input>




              </div>

              <div className='grid grid-cols-3'>
                <div className='py-1 h-auto col-span-3'>
                  <img alt="select art" width="auto" height="auto" src={imgURL} onError={handleImgError} />

                  <p className='artblockstext'><a href={"https://generator.artblocks.io/" + tokex} target="_blank">watch on artblocks &rarr;</a>  </p>
                </div>

                


              </div><div className="w-full">
                  <Link to={{ pathname: '/token/' + tokex, key: new Date().getTime(), hash: '#' + newID }}>
                    <button className="actionbutton w-full" onClick={submitObj} disabled={myName.length === 0}>Submit</button>
                  </Link>
                </div></div></div>

        )
        }

      </div>
    </div>
  )
}