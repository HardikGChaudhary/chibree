import React from "react";
import Header from "../shared/Header";
import ThingsData from "./things/ThingsData";
import Cards from "./things/Cards";

const Learn = () => {
  return (
    <>
      <Header></Header>
      <h1>Hi I am Learn page</h1>
      {ThingsData.map((val) => {
        return (
          <>
            <Cards key={val.id} imgsrc={val.imgsrc} title={val.title} />
          </>
        );
      })}
    </>
  );
};

export default Learn;
