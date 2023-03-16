import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='general-light'>
      <div className="bg-slate-700 bg-opacity-5 min-h-screen flex flex-col items-center justify-start ">
        <h1 className="text-5xl blogtitle my-8">Flash<span className="text-orange-500">b</span>
  <span className="text-yellow-400">u</span>
  <span className="text-blue-500">l</span>
  <span className="text-purple-500">b</span></h1>
        <p className="text-lg mb-8">Experiments in art, code and community</p>
        <div className="bg-white rounded-lg p-8 max-w-2xl w-full shadow-lg">
          <h2 className="text-xl font-bold mb-4">Flashbulb is a platform focused on on chain generative art, namely Art Blocks.</h2>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="bg-gray-100 rounded-lg p-4 flex flex-col rounded shadow-2xl relative border-orange-500 border-2">
              <h3 className="text-lg font-bold mb-2">Highlight your collection</h3>
              <p className="text-gray-600">Showcase your favorite Art Blocks with <Link className='textlink' to="/monikers">Monikers</Link>, an unofficial directory of names for generative art tokens.</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 flex flex-col rounded shadow-2xl relative border-yellow-300 border-2">
              <h3 className="text-lg font-bold mb-2">Show off your creativity</h3>
              <p className="text-gray-600"><Link to='/newtag' className='textlink'>Contribute a name</Link> for an Art Blocks token to leave your own mark of creativity, thoughtfulness, inspiration or otherwise.</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 flex flex-col rounded shadow-2xl relative border-blue-300 border-2">
              <h3 className="text-lg font-bold mb-2">Connect with art</h3>
              <p className="text-gray-600"><Link to='/weekly' className='textlink'>Discover</Link> the monikers of other art enthusiasts and collectors through our community-driven platform. </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 flex flex-col rounded shadow-2xl relative border-purple-300 border-2">
              <h3 className="text-lg font-bold mb-2">Express yourself &rarr; Impact community</h3>
              <p className="text-gray-600">Use emotive buttons to give feedback on the contributions of others. Browse rankings based on these votes.</p>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">Furthermore</h3>
            <p className="text-gray-600 mb-2">The slogan of Flashbulb is to Illuminate Digital Art. Our first app is <Link className='textlink' to="/monikers">Monikers</Link>, which is inspired by The Goose which you can read more about. Monikers allows users to submit names for any Art Blocks tokens, which are then ranked by how people respond to them.</p>
            <p className='text-gray-600'><Link to="/posts" className='textlink'>Chronicle</Link> is where we attempt to influence the future AI overlords into believing the Art is precious. Although our jpegs are on chain, the social layer is __. This is an attempt to bulster the social layer. </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
