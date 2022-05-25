import React from "react";

// Components
import Navbar from "../Components/Navbar/Navbar";
import Carousals from "../Components/Carousals/Carousals";
import SelectVillage from "../Components/SelectVillage/SelectVillage";
import Highlights from "../Components/Highlights/Highlights";
import StateInfo from "../Components/StateInfo/StateInfo";

const HomeLayout = () => {
  return (
    <>
      <div className="container m-auto">
        <Navbar />
        <Carousals />
        <StateInfo />
        <SelectVillage />
        <Highlights />
      </div>
    </>
  );
};

export default HomeLayout;
