import React from "react";
import "./style.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCookieBite, faBoxOpen, faGift, faUserTie } from "@fortawesome/free-solid-svg-icons";

export default function Service() {
  const services = [
    {
      icon: faCookieBite,
      title: "Амталгаа",
      description:
        "Өгөгдсөн бүтээгдэхүүнийг эрүүл ахуйн шаардлага дээр анхааран хэрэглэчдэд амт чанар орц найрлага зэргийг бодитойгоор мэдрүүлэн сурталчлах."
    },
    {
      icon: faBoxOpen,
      title: "Бараа бүтээгдэхүүний танилцуулга",
      description:
        "Хамтаран ажилж буй байгууллагын сонгогдсон бүтээгдэхүүнийг олон хэрэглэгчдэд танилцуулах, сурталчлах, худалдан авалтыг нэмэгдүүлэх."
    },
    {
      icon: faGift,
      title: "Бэлэг боох үйлчилгээ",
      description:
        "Туршилгатай түргэн шуурхай сэрэглэн цовоо залуустай хамтран өгөгдсөн бэлэгний тоо ширхэг орцны дагуу бэлэг боох бэлэг задлах зэрэг үйлчилгээ."
    },
    {
      icon: faUserTie,
      title: "Мэргэшсэн ажилтан зуучлал",
      description:
        "Сургалтаар бэлтгэгдэж сертификат эзэмшсэн promotion охид залуусыг зуучилна."
    }
  ];

  return (
    <section className="services-section">
      <h2 className="section-title">Манай Үйлчилгээ</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-box" key={index}>
            <FontAwesomeIcon icon={service.icon} className="service-icon" />
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
