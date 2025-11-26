import React from "react";
import "./style.css";

export default function Contact() {
  return (
    <section className="contact-section">
      <h2 className="section-title">Байршил & Холбоо барих</h2>

      <div className="contact-container">
        {/* Left - Map */}
        <div className="map-container">
         <iframe
  title="Tandy Office Location"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2673.9749994183585!2d106.91892108882999!3d47.91752119701309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d9693070c94f155%3A0xb6b995b92847a6a4!2sUBH%20center%20MJC%20consulting%20agensy!5e0!3m2!1smn!2smn!4v1764141143388!5m2!1smn!2smn"
  width="100%"
  height="450"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>
        </div>

        {/* Right - Contact info */}
        <div className="contact-info">
          <h3>Хаяг:</h3>
          <p>Улаанбаатар, UBH center 9 давхар 916 тоот</p>

          <h3>Утас:</h3>
          <p>+ 69661999</p>
          <p>+ 69662999</p>

          <h3>И-мэйл:</h3>
          <p>tandypromotionagency@gmail.com</p>

          <h3>Ажиллах цаг:</h3>
          <p>Даваа - Баасан: 11:00 - 18:00</p>
        </div>
      </div>
    </section>
  );
}
