import React from 'react'
import gooser from '/img/goosememe.png'
import photo from '/img/flashe.png'
import { Link } from 'react-router-dom'

function About(props) {
  const bulletstyle = "mb-2 bg-yellow-300 text-skin-base"

  return (
    <div className='general-light text-lg'>
      <div className="min-h-screen flex flex-col items-center justify-start ">
        <div className=" p-8 max-w-2xl w-full ">
          <h3 className="text-2xl sm:text-4xl font-bold mb-4">We believe in illuminating digital art</h3>

          <div>
            <p className="text-skin-base text-xl mb-2">Flashbulb aims are threefold: </p>
            <div class="px-2 m-2">
              <ul className="list-disc list-inside  pb-3">
                <li className={bulletstyle}>Empower community with engaging tools</li>
                <li className={bulletstyle}>Document the onchain generative art movement</li>
                <li className={bulletstyle}>Spread love and inspire joy with art and code</li>
              </ul>
            </div>

          </div>
          <p className="mb-2">Flashbulb's first app is <Link className='text-skin-link' to="/monikers">Monikers</Link>, which is takes tremendous inspiration from The Goose which you can read more about. Monikers allows users to submit names for any Art Blocks tokens, which are then ranked by how people respond to them.</p>
          <p className='mb-2'>
            <Link to="/posts" className='text-skin-link'>Chronicle</Link> is where we  attempt to fill in
            some of the gap between onchain ledger and the social layer. In such mercurial environment, documenting the culture can reinforce the social layer by preserving the narratives around onchain behavior. With time we hope to broaden the scope of the discourse around digital artwork to include more rigorous criticism and artistic interpration.</p>
          <p className='mb-5'>Our core belief is that the chain art movement is simultaneously quite important and quite immature, and we will be here shining a light.</p>
          <p><img className='p-1 m-1' src={photo} /></p>
        </div>
      </div>
    </div>


  )

}

export default About