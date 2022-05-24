import React from 'react';
import Banner from './Banner';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import Refund from './Refund';
import Summary from './Summary';

const Home = () => {
    return (
        <div>
        <Flip left>
          <Banner></Banner>
        </Flip>
        <Fade left>
        <Refund></Refund>
        <Summary></Summary>
        </Fade>
      </div>
    );
};

export default Home;