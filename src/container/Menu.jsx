import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <div>
        <div className="text-darkblack space-x-4 font-semibold">
          <NavLink to="/Learn">Learn</NavLink>
          <NavLink to="/Practice">Practice</NavLink>
          <NavLink to="/GKQuiz">GK Quiz</NavLink>
          <button>Setting</button>
          <button>Score</button>
        </div>
      </div>
    </>
  );
};

export default Menu;
