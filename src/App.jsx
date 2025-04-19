import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Introduce from "./components/introduce";
import Navbar from "./components/Navbar";
import Recipes from "./components/Recipes";
import Editors from "./components/Editors";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Introduce></Introduce>
      <Recipes
        apiUrl="http://localhost:3001/recipes"
        title="This Summer Recipes"
        description="We have your independence Day sweets covered"
      ></Recipes>
      <Recipes
        apiUrl="http://localhost:3001/recipes-video"
        title="Delicious Desserts"
        description="Explore our collection of sweet treats"
      />
      <Editors></Editors>
      <Footer></Footer>
    </>
  );
}

export default App;
