import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag, faStar, faHandshake } from "@fortawesome/free-regular-svg-icons";

export default function About() {
  const info = [
    {
      icon: faFlag,
      title: "Эрхэм зорилго",
      description: " Залууст сурч хөгжих боломж олгон мэргэжлийн promotion охид залуусыг  бэлтгэж сертификат олгох, байгууллагуудад үр дүнтэй борлуулалт өсөлтийн шийдэл хүргэх, компанийнхаа хамт олныг халуун дулаан, хариуцлагатай, хамтын хүчээр хөгжин дэвших орчноор хангах."
    },
    {
      icon: faHandshake,
      title: "Хамтын ажиллагаа",
      description: "Байгууллагууд, жижиг бизнес, брэндүүдтэй хамтран ажиллах боломж."
    },
    {
      icon: faFlag,
      title: "Үр ашиг",
      description: "Бүтээгдэхүүн, үйлчилгээг танилцуулахад хамгийн оновчтой, үр дүнтэй арга."
    },
  ];

  return (
    <section className="company-intro">
      <h2 className="section-title">Компанийн Танилцуулга</h2>
      <p className="title">Манай Ти Энд Вая шайн ххк нь 2024.04.12ноос авхуулан 2025оны 11 сар хүртэл асралтгүй үйл ажиллагаагаа явуулж байгаа билээ.</p>
      <div className="intro-container">
        {info.map((item, index) => (
          <div className="intro-box" key={index}>
            <FontAwesomeIcon icon={item.icon} className="intro-icon" />
            <h3 className="intro-title">{item.title}</h3>
            <p className="intro-description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
