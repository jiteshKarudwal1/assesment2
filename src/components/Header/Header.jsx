import React from "react";
import Setting from "../../assets/Header/Iconly/Light-outline/Setting.svg";
import Logo1 from "../../assets/Header/Logo.png";
import AudiBooks from "../../assets/Header/AudiBooks.svg";
import "../Common/style.css";

export default function Header() {
  return (
    <nav>
      <div className="logo">
        <img className="small-logo" src={Logo1} alt="logo" />
        <img className="logo-text" src={AudiBooks} alt="logoText" />
      </div>
      <img src={Setting} alt="settings" />
    </nav>
  );
}
