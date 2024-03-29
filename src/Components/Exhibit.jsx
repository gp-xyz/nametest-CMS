import React, { useState, useEffect } from 'react'
import VoteButton from "./VoteButton";
import { Link } from 'react-router-dom'
function Exhibit(props) {
  const [authorVotes, setAuthorVotes] = useState(props.authorvotes)
  useEffect(() => {
    setAuthorVotes(props.authorvotes)
    console.log('we set new author')

  }, [props])
  const { listdata } = props

  let updateOpinions = (data) => setAuthorVotes(data)

  return (
    listdata.map((NameEntry, id) => (
      // const imglink = 
      <div className='grid-auto-flow-dense max-w-5xl grid-rows-3 py-10 px-1 pb-12 my-1 ' id={NameEntry.id}>
        <div className='flex flex-row items-center '>
          <span className='tagrank text-6xl text-slate-600'> {(id + 1)} </span>
          <span className='text-4xl p-2 m-1'> {NameEntry.name} </span>
        </div>

        <div className="flex my-4 pb-1 md:pb-12 ">
          <img
            alt="w-full object-none object-contain"
            src={"https://media.artblocks.io/" + NameEntry.token + ".png"}
          />
        </div>


        <div className='bottomthird pl-2 grid grid-auto-flow-dense grid-cols-2 md:grid-cols-2 '>
          <div className=''>
          
          <Link className='underline hover:cursor-pointer hover:text-red-400' to={'/project/' + NameEntry.project}>{NameEntry.project}</Link> {' | '}
          <Link className='underline hover:cursor-pointer hover:text-red-400' to={'/token/' + NameEntry.token}>#{NameEntry.number}</Link> 
          
            <p className="artblockstext"><a href={"https://generator.artblocks.io/" + NameEntry.token} target="_blank">Art Blocks generator &rarr;</a>  </p>
            <p className="artblockstext"><a href={"https://www.artblocks.io/token/" + NameEntry.token} target="_blank">visit token on Art Blocks &rarr;</a>  </p>
          </div>

          <div className="pr-5 pb-0">
            <p className='text-sm md:text-lg'>Reaction?</p>
            <div className='flex flex-row'>
              <VoteButton bstyle='grail' tagid={NameEntry.id} author={props.author} callback={updateOpinions} already={authorVotes[NameEntry.id + 'grail']} />
              <VoteButton bstyle='ham' tagid={NameEntry.id} author={props.author} callback={updateOpinions} already={authorVotes[NameEntry.id + 'ham']} />
              <VoteButton bstyle='tomato' tagid={NameEntry.id} author={props.author} callback={updateOpinions} already={authorVotes[NameEntry.id + 'tomato']} />
            </div>
          </div>
        </div>

      </div>

    )
    ))
}


export default Exhibit