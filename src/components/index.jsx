import React from "react";
import Header from "./Header/Header";
import MyAudioList from "./Container/Container";
import Footer from "./Footer/Footer";

export default function () {
  return (
    <React.Fragment>
      <Header />
      <MyAudioList />
      <Footer />
    </React.Fragment>
  );
}
