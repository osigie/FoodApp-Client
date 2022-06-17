import React from "react";
import { Outlet } from "react-router-dom";
import Wrappers from "../../../assets/wrappers/SharedLayout";
import BigSideBar from "../../../components/BigSideBar";
import SmallSideBar from "../../../components/SmallSideBar";
import NavbarComponent from "../../../components/NavbarComponent";

type Props = {};

const SharedPage = (props: Props) => {
  return (
    <Wrappers>
      <main className="dashboard">
        <SmallSideBar />
        <BigSideBar />
        <div>
          <NavbarComponent />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrappers>
  );
};

export default SharedPage;
