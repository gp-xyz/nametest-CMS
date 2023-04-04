import React from 'react';
import { Link } from 'react-router-dom';
import woodframe from "/img/woodframe.png";
import bulbs from "/img/bulbs.png";


const Home = () => {
  const bubstyle1 = "border-color-slate-500 border-0 pl-2 my-2"
  const subhead = "text-xl text-skin-comp"
  const subtxt = "text-l text-skin-base pl-1"
  return (
    <div className='general-light max-w-4xl'>
      <div className=" min-h-screen flex flex-col items-center justify-start ">
        <div className="text-5xl sm:text-7xl blogtitle my-8">Flash<span className="text-skin-comp">bulb</span>
        </div>
        <p className="pl-1 text-xl sm:text-4xl mb-3 sm:mb-5 md:mb-8 ">Original experiments in art, community and code</p>
        <div className="p-8 max-w-4xl w-full ">


          <div>
            <div className='flex flex-row'>
              <div className='text-3xl pr-3'>
                <span className="text-skin-comp font-extrabold">Monikers</span> is an unofficial directory of names for generative art tokens.
              </div>
              <img className='rounded-xl w-48 md:w-60' src={woodframe} />
            </div>


            <div className='text-xl pt-2'>With Monikers, you can:</div>
            <div>


              <div className={bubstyle1}>
                <div className={subhead}>Show off your creativity</div>
                <div className={subtxt}><div>Contribute a name for an Art Blocks token to leave your own mark of creativity, thoughtfulness, inspiration or otherwise.</div></div>
              </div>
              <div className={bubstyle1}>
                <div className={subhead}>Connect with art</div>
                <div className={subtxt}><div>Discoverthe monikers of other art enthusiasts and collectors through our community-driven platform.</div></div>
              </div>
              <div className={bubstyle1}>
                <div className={subhead}>Express yourself &rarr; Impact community</div>
                <div className={subtxt}>Use emotive buttons to give feedback on the contributions of others. Browse rankings based on these votes.</div>
              </div>

              <Link to="/monikers">
                <div className='actionbutton p-0 text-center'>
                  <span className='text-white text-3xl'>EXPLORE MONIKERS &rarr;</span>
                </div>
              </Link>

            </div>
          </div>

          <img className='mt-5' src={bulbs} />

        </div>

      </div>
    </div>
  );
};

export default Home;
