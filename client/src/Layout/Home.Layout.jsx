import React from "react";

// Components
import Navbar from "../Components/Navbar/Navbar";
import Carousals from "../Components/Home/Carousals/Carousals";
import SelectVillage from "../Components/Home/SelectVillage/SelectVillage";
import Highlights from "../Components/Home/Highlights/Highlights";
import StateInfo from "../Components/Home/StateInfo/StateInfo";
import Categories from "../Components/Home/Categories/Categories";
import TreasureCards from "../Components/Home/Treasures/TreasureCard";
import Achievements from "../Components/Home/Achievements/Achievements";
import PressCards from "../Components/Home/PressCards/PressCards";
import Footer from "../Components/Footer/Footer";

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <Carousals />
      <div className="container m-auto">
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
      <Footer />
    </>
  );
};

export default HomeLayout;
