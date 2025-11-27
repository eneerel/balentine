import React from "react";
import "./style.css";

// Жишээ байгууллагуудын логонуудыг public/images дотор байрлуулна
const partners = [
  { name: "Company A", logo: "/images/companyA.png", link: "#" },
  { name: "Company B", logo: "/images/companyB.png", link: "#" },
  { name: "Company C", logo: "/images/companyC.png", link: "#" },
  { name: "Company D", logo: "/images/companyD.png", link: "#" },
];

export default function Partners() {
  return (
    <section className="partners">
      <h2 className="partners__title">Бид хамтран ажилласан байгууллагууд</h2>
      <div className="partners__list">
        {partners.map((partner, index) => (
          <a
            key={index}
            href={partner.link}
            target="_blank"
            rel="noopener noreferrer"
            className="partners__item"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="partners__logo"
            />
          </a>
        ))}
      </div>
    </section>
  );
}
