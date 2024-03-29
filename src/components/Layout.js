import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

export default function Layout(props) {
  return (
    <>
      <Header />
      <div className="content-wrap">{props.children}</div>
      <Footer />
    </>
  );
}
