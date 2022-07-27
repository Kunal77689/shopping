import "./App.css";
import React from "react";
import Navbar from "./Navbar";
import Slider from "./Slider";
import Categories from "./Categories";
import Announcement from "./Announcement";
import Products from "./Products";
import Newsletter from "./Newsletter";
import Footer from "./Footer";

const Home = () => {
  return (
    <React.StrictMode>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </React.StrictMode>
  );
};
export default Home;
