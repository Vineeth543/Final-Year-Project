import React from "react";

// Components
import Navbar from "../Components/Navbar/Navbar";
import Carousals from "../Components/Carousals/Carousals";
import SelectVillage from "../Components/SelectVillage/SelectVillage";
import Highlights from "../Components/Highlights/Highlights";
import StateInfo from "../Components/StateInfo/StateInfo";
import Categories from "../Components/Categories/Categories";
import TreasureCards from "../Components/Treasures/TreasureCard";
import Achievements from "../Components/Achievements/Achievements";
import PressCards from "../Components/PressCards/PressCards";

const HomeLayout = () => {
  return (
    <>
      <div className="container m-auto">
        <Navbar />
        <Carousals />
        <StateInfo />
        <SelectVillage />
        <Highlights />
        <Categories />
        <TreasureCards />
      </div>
      <Achievements />
      <div className="container m-auto">
        <PressCards />
      </div>
    </>
  );
};

export default HomeLayout;
