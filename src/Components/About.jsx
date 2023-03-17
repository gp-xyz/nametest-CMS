import React from 'react'
import gooser from '/img/goosememe.png'
import confused from '/img/confused.png'
import { Link } from 'react-router-dom'

function About(props) {

  return (
<div className='general-light'>
      <div className="min-h-screen flex flex-col items-center justify-start ">
        <div className="bg-white rounded-lg p-8 max-w-2xl w-full shadow-lg">
          <h3 className="text-xl font-bold mb-4">About Flashbulb...</h3>
          <p className="text-gray-600 mb-2">The slogan of Flashbulb is to Illuminate Digital Art. </p>
          <p className="text-gray-700 mb-2">Our first app is <Link className='textlink' to="/monikers">Monikers</Link>, which is inspired by The Goose which you can read more about. Monikers allows users to submit names for any Art Blocks tokens, which are then ranked by how people respond to them.</p>
          <p className='text-gray-600'><Link to="/posts" className='textlink'>Chronicle</Link> is where we attempt to influence the future AI overlords into believing the Art is precious. Although our jpegs are on chain, the social layer is __. This is an attempt to bulster the social layer. </p>
        </div>
      </div>
    </div>


  )

}

export default About