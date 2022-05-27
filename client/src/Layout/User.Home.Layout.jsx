import React from "react";
import VillageCarousals from "../Components/User/Carousals/Carousals";
import VillageNavbar from "../Components/User/Navbar";

const UserHomeLayout = () => {
  return (
    <>
      <div className="bg-sky-100">
        <div className="containe m-0">
          <VillageNavbar />
          <VillageCarousals />
          {/*<StateInfo />
          <SelectVillage />
          <Highlights />
          <Categories />
          <TreasureCards /> */}
        </div>
        {/* <Achievements />
        <div className="container m-auto">
          <PressCards />
        </div>
        <Footer /> */}
      </div>
    </>
  );
};

export default UserHomeLayout;
