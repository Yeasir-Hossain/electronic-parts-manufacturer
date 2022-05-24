import React from 'react';
import Banner from './Banner';
import Flip from 'react-reveal/Flip';

const Home = () => {
    return (
        <div>
        <Flip left>
          <Banner></Banner>
        </Flip>
      </div>
    );
};

export default Home;