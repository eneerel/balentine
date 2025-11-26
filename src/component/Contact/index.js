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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2731.123456789!2d106.912345!3d47.921234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d9692c5b1b1b1b1%3A0x1234567890abcdef!2sYour+Company+Address!5e0!3m2!1sen!2smn!4v1700000000000!5m2!1sen!2smn"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Right - Contact info */}
        <div className="contact-info">
          <h3>Хаяг:</h3>
          <p>Улаанбаатар, Монгол Улс</p>

          <h3>Утас:</h3>
          <p>+976 9999 9999</p>

          <h3>И-мэйл:</h3>
          <p>info@tandy.mn</p>

          <h3>Ажиллах цаг:</h3>
          <p>Даваа - Баасан: 09:00 - 18:00</p>
        </div>
      </div>
    </section>
  );
}
