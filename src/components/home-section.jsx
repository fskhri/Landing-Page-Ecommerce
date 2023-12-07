import React from 'react';
import { Link } from 'react-router-dom';
import Pic from '../assets/img-home.png';

function Home() {
  return (
    <div className="my-6 p-5 flex flex-wrap gap-12 items-center">
      <div className="flex my-6 justify-start">
        <div className="flex justify-center m-3">
          <img src={Pic} alt="home section" />
        </div>
      </div>
      <div className="flex justify-center my-6 items-center w-1/2">
        <div className="p-6">
          <h1 className="text-2xl font-bold">Best seller SmartPhone</h1>
          <p className="my-5 text-slate-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, ipsam! Eligendi
            quibusdam impedit labore consequatur harum repudiandae dolor, reiciendis ducimus
            deserunt, dolores assumenda odio ratione. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Praesentium, recusandae!
          </p>
          <Link to="/products">
            <button className="bg-transparent mt-6 py-2 px-4 rounded-3xl border-2 border-blue-400 hover:bg-blue-400 hover:text-white fa-solid fa-use">
              Start Shopping
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
