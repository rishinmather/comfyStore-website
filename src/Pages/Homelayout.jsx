import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import { GloabalLoading } from "../Components/GloabalLoading";
const Homelayout = () => {
  const navigate = useNavigation();
  const isNavigate = navigate.state === "loading";

  return (
    <>
      <Header />
      <Navbar />
      {isNavigate ? (
        <GloabalLoading />
      ) : (
        <section className="align-element py-20">
          <Outlet />
        </section>
      )}
    </>
  );
};

export default Homelayout;
