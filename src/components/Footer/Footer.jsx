import React from "react";
import "../Common/style.css";
import { footerMapping } from "../../contants/constants";

export default function Footer() {
  return (
    <div className="footer">
      {footerMapping.map((item, index) => (
        <div key={item.id} className="footer-child">
          <span className="footer-child-icon">
            <img src={item.path} alt={item.name} />
          </span>
          <span className="footer-child-text">{item.name}</span>
        </div>
      ))}
    </div>
  );
}
