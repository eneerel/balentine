import React, { useEffect } from "react";
import Navbar from "./component/Navbar";
import Home from "./component/Home ";
import "./App.css";
import Footer from "./component/Footer";

function App() {

  return (
    <div className="App">
     <Navbar/>
     <Home/>
     <Footer/>
    </div>
  );
}
export default App;