import React from 'react'
import gooser from '/img/goosememe.png'
import confused from '/img/confused.png'
import { Link } from 'react-router-dom'

function About(props) {

  return (
<div>
  <div className={'general-' + props.theme}>
   <p><h3>TLDR: give art a title. appreciate yours and others'. vote on others. enjoy.</h3></p>
    <p>
      Flashbulb allows you to <Link to="/newtag">add your own interpretation</Link> for the title of any artwork from Art Blocks. Users are encouraged to submit nominal suggestions for their chosen generative tokens. Elevating an artwork with a creative contribution can give a piece the attention it deserves.
    </p>
    <p>
      Emotive buttons are available to provide feedback on the title suggestions of others. The collective tallies beget the ranking order.
    </p>
    <p>
      The most compelling efforts will be rewarded with the utmost regard. Don't strive to create The Goose. Strive to deliver the Mona Lisa.
    </p>

    <img src={gooser} width='90%' align="center"/>
  </div>
</div>


  )

}

export default About