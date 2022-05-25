import React from 'react';
import Banner from './Banner';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import Refund from './Refund';
import Summary from './Summary';
import Tools from './Tools';
import Reviews from './Reviews';

const Home = () => {
  return (
    <div>
      <Flip left>
        <Banner></Banner>
      </Flip>
      <Fade left>
        <Tools></Tools>
        <Reviews></Reviews>
        <Refund></Refund>
        <Summary></Summary>
      </Fade>
    </div>
  );
};

export default Home;