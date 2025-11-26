import React, { useEffect } from "react";
import Navbar from "./component/Navbar";
import Home from "./component/Home ";
import "./App.css";
import Footer from "./component/Footer";
import Contact from "./component/Contact";

function App() {

  return (
    <div className="App">
     <Navbar/>
     <Home/>
     <Contact/>
     <Footer/>
    </div>
  );
}
export default App;