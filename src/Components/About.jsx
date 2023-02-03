import React from 'react'
import gooser from '/img/gooser.png'
import confused from '/img/confused.png'
import { Link } from 'react-router-dom'

function About(props) {

  return (
<div>
  <div className={'general-' + props.theme}>
    <p style={{ display: 'flex'}}>
      Can you picture Ringers 789?
      <div style={{display: 'flex', justifyContent: 'flex-end', marginLeft: 'auto'}}>
        <img src={confused} width="100px" />
      </div>
    </p>
    <p style={{ display: 'flex'}}>
      Can you picture The Goose?
      <div style={{display: 'flex', justifyContent: 'flex-end', marginLeft: 'auto'}}>
        <img src={gooser} width="100px" />
      </div>
    </p>
    <p>
      Flashbulb allows you to <Link to="/newtag">add your own interpretation</Link> for the title of any artwork from Art Blocks. Users are encouraged to submit nominal suggestions for their chosen generative tokens. Elevating an artwork with a creative contribution can <i>give a piece the attention it deserves.</i>
    </p>
    <p>
      Emotive buttons are available to provide feedback on the title suggestions of others. The collective tallies beget the ranking order.
    </p>
    <p>
      The most compelling efforts will be rewarded with the utmost regard. Don't strive to create The Goose. Strive to deliver the Mona Lisa.
    </p>
  </div>
</div>


  )

}

export default About