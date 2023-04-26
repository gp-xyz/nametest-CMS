import React from 'react';
import { Link } from 'react-router-dom';

import statue from "/img/statue.png";
import polaroid from "/img/polaroid1.png";
import ladyframe from "/img/ladyframe.png";
import balloons from "/img/balloons.png";
import bulbs from "/img/bulbs.png";

const fullCardStyle = "flex py-2 md:py-5 my-3 flex-col px-1 sm:px-2";
const imgStyle = "rounded-xl";
const imgDiv = "mt-3";
const subTxt = "text-md sm:-text-l text-skin-base pt-2";

const Card = ({ imgSrc, text }) => (

  <div className={fullCardStyle}>
    <div className={imgDiv}>
      <img className={imgStyle} src={imgSrc} />
    </div>
    <div className={subTxt}>{text}</div>
  </div>
);
const Home = () => {
  const cards = [
    {
      imgSrc: statue,
      text:
        "Show off your creativity by contributing a name for an Art Blocks token",
    },
    {
      imgSrc: polaroid,
      text:
        "Discover the monikers of others in our community-driven platform",
    },
    {
      imgSrc: ladyframe,
      text:
        "Use emotive buttons to vote and impact the display rankings",
    },
    {
      imgSrc: balloons,
      text:
        "Connect, explore and inspire!",
    },
  ];

  return (
    <div className="general-light">
      <div className="min-h-screen flex flex-col items-center">
        <div className="p-1 sm:p-8 max-w-6xl w-full">
          <div className="grid grid-cols-1">
            <div className="text-3xl font-serif sm:text-4xl px-3 sm:px-6">
              
              <span className="text-black font-extrabold">Monikers</span> -  an
              unofficial directory of names for generative art tokens
            </div>
            <div className="pt-3 md:pt-5 grid grid-cols-2 sm:flex sm:flex-row px-3 sm:px-6">
              {cards.map((card) => (
                <Card imgSrc={card.imgSrc} text={card.text} key={card.imgSrc} />
              ))}
            </div>
            <Link to="/monikers">
              <div className="actionbutton p-0 text-center">
                <span className="text-white text-3xl">
                  EXPLORE MONIKERS →
                </span>
              </div>
            </Link>
          </div>
          <img className="mt-5" src={bulbs} />
        </div>
      </div>
    </div>
  );
};

export default Home;