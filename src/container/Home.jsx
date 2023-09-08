import React from "react";
import Header from "../shared/Header";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate();

  const goToLearn = () => {
    navigate("/Learn")
  }

  return (
    <>
      <Header></Header>
      <div className="h-screen flex flex-col items-center justify-center text-center ">
        <h1 className="text-primaryBlue uppercase text-8xl font-extrabold leading-tight">
          <div>The Kid's</div>
          <div>Future</div>
        </h1>
        <button
         onClick={() => goToLearn()}
         className="gradient-btn" >Start It's free</button>
      </div>
    </>
  );
};

export default Home;
