import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag, faStar } from "@fortawesome/free-regular-svg-icons"; // Free icons import

export default function Tandy() {
  return (
    <main className="home-container">
      {/* Зүүн тал */}
      <section className="left">
        <div className="intro">
          <FontAwesomeIcon className="icon" icon={faFlag} />
          <h1 className="title">Эрхэм зорилго</h1>
          <p className="subtitle">
            Брэнд бүтээгдэхүүний сурталчилгаа, идэвхжүүлэлт, амталгаат худалдаа,
            мэргэшсэн ажилтан зуучлах үйлчилгээг үзүүлдэг агентлаг.
          </p>
        </div>
      </section>

      {/* Баруун тал */}
      <div className="right">
        <FontAwesomeIcon className="icon" icon={faStar} />  
        <h1 className="title">Давуу тал</h1>
        <p className="subtitle">
          Брэнд бүтээгдэхүүний сурталчилгаа, идэвхжүүлэлт, амталгаат худалдаа,
          мэргэшсэн ажилтан зуучлах үйлчилгээг үзүүлдэг агентлаг.
        </p>
      </div>
    </main>
  );
}
