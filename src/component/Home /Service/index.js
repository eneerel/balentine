import React from "react";
import "./style.css";

export default function Service() {
  const services = [
    {
      title: "Амталгаа",
      description: "Өгөгдсөн бүтээгдэхүүнийг эрүүл ахуйн шаардлага дээр анхааран хэрэглэчдэд амт чанар орц найрлага зэргийг бодитойгоор мэдрүүлэн сурталчлах."
    },
    {
      title: "Бараа бүтээгдэхүүний танилцуулга",
      description: "Хамтаран ажилж буй байгууллагын сонгогдсон бүтээгдэхүүнийг олон хэрэглэгчдэд танилцуулах, сурталчлах, худалдан авалтыг нэмэгдүүлэх."
    },
    {
      title: "Бэлэг боох үйлчилгээ",
      description: "Туршилгатай түргэн шуурхай сэрэглэн цовоо залуустай хамтран өгөгдсөн бэлэгний тоо ширхэг орцны дагуу бэлэг боох бэлэг задлах зэрэг үйлчилгээг зохион байгуулалттайгаар явуулах. "
    },
    {
      title: "Мэргэшсэн ажилтан зуучлал",
      description: "Үйл ажилгааны чиглэл, гоо зүй, ярианы болон харилцааны чадвар дээр суурилсан сургалтаар бэлтгэгдэж сертификат эзэмшсэн promotion охид залуусыг зуучилна ."
    }
  ];

  return (
    <section className="services-section">
      <h2 className="section-title">Манай Үйлчилгээ</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-box" key={index}>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
