import React from "react";
import Header from "../Header/Header";
import Promo from "../Promo/Promo";
import Projects from "../Projects/Projects";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Architecture from "../Architecture/Architecture";
import Clients from "../Clients/Clients";
import Footer from "../Footer/Footer";

const App = () => {
  return (
    <main>
      <Header />
      <Promo />
      <Projects />
      <About />
      <Contact />
      <Architecture />
      <Clients />
      <Footer />
    </main>
  );
};

export default App;
