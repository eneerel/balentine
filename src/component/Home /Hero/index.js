import React from "react";
import "./style.css";

export default function Hero() {
  return (
    <section className="hero">
      <img 
        src="/hero.jpeg" 
        alt="Hero banner" 
        className="hero__img"
      />
      <div className="hero__overlay" />

      <div className="hero__content">
        <h1>Tandy Promotion Agency</h1>
        <p>Амталгаа, идэвхжүүлэлт, танилцуулга үйлчилгээ</p>
      </div>
    </section>
  );
}
