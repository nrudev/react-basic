import React from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import classes from "../styles/Main.module.css";
import { Outlet } from "react-router-dom";

function Main() {
  return (
    <div className={classes.container}>
      <Header />
      <div className={classes.contents}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Main;
