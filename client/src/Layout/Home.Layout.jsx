import React from "react";

// Components
import Navbar from "../Components/Navbar/Navbar";
import Carousals from "../Components/Carousals/Carousals";
import SelectVillage from "../Components/SelectVillage/SelectVillage";

const HomeLayout = () => {
  return (
    <>
      <div className="container m-auto">
        <Navbar />
        <Carousals />
        <SelectVillage />
      </div>
    </>
  );
};

export default HomeLayout;
