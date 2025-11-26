import React from "react";
import "./index.css";
import Hero from "./Hero";
import Tandy from "./Tandy";
import Service from "./Service";
import About from "./About";
import Contact from "../Contact";

export default function Home() {
  return (
    <div className="Home">
       <Hero/>
      <Tandy />
      <Service/>
      <About/>
      <Contact/>
    </div>
  );
}
