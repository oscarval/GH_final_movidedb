import React from "react";
import Billboard from "../Billboard/Billboard";
import Popularity from "../Popularity/Popularity";

const Home = () => {
  return (
    <div className='Home'>
      <Billboard />
      <Popularity />
    </div>
  );
};

export default Home;
