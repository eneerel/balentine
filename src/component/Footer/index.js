import React from "react";
import "./style.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p>© 2025 Tandy Promotion Agency. Бүх эрх хуулиар хамгаалагдсан.</p>
        <div className="footer__social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
