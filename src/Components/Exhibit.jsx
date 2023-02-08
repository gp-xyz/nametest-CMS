import React, { useState, useEffect } from 'react'
import VoteButton from "./VoteButton";
import { Link } from 'react-router-dom'
function Exhibit(props) {
  const [authorVotes, setAuthorVotes] = useState(props.authorvotes)
  useEffect(() => {
    setAuthorVotes(props.authorvotes)

  }, [props])
  const { listdata } = props

  let updateOpinions = (data) => setAuthorVotes(data)

  return (
    listdata.map((NameEntry, id) => (
      // const imglink = 
      <div className={"artcontainer-" + props.theme} key={NameEntry.id + 'div'}>
        <span className='tagrank'> {(id + 1) } </span>
        <span className='tagtitle'> {NameEntry.name} </span> 


        <div className="art">
          <img alt="art" src={"https://media.artblocks.io/" + NameEntry.token + ".png"} />
        </div>
        
        <div className='projectName'> 
              <Link to={'/project/' + NameEntry.project}>[{NameEntry.project}]</Link> #{NameEntry.number} 
              <br />
              <p className="artblockstext"><a href={"https://generator.artblocks.io/" + NameEntry.token} target="_blank">watch on artblocks &rarr;</a>  </p> 
              <p className="artblockstext"><a href={"https://www.artblocks.io/token/" + NameEntry.token} target="_blank">visit page on artblocks &rarr;</a>  </p> 
        </div>
        
        <div className="votebox">
          <p>Reaction?</p>
          <VoteButton bstyle='grail' tagid={NameEntry.id} author={props.author} callback={updateOpinions} already={authorVotes[NameEntry.id + 'grail']} />
          <VoteButton bstyle='ham' tagid={NameEntry.id} author={props.author} callback={updateOpinions} already={authorVotes[NameEntry.id + 'ham']} />
          <VoteButton bstyle='tomato' tagid={NameEntry.id} author={props.author} callback={updateOpinions} already={authorVotes[NameEntry.id + 'tomato']} />
        </div>
      </div>
        
    )
    ))
}


export default Exhibit