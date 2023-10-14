import React from "react";
import Firma from "../components/Firma";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Oferta from "../components/Oferta";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Header currentPage="Strona główna" />
      <Oferta />
      <Firma />
    </>
  );
};

export default Home;
