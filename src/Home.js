import "./App.css";
import React from "react";
import Navbar from "./Navbar";
import Slider from "./Slider";
import Categories from "./Categories";
import Announcement from "./Announcement";
import Products from "./Products";

const Home = () => {
  return (
    <React.StrictMode>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
    </React.StrictMode>
  );
};
export default Home;
