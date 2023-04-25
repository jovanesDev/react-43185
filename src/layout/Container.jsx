import React, { Fragment } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Container = (props) => {
    // Children
  return (
    <Fragment>
      <Navbar
        items={["Inicio", "Categorias", "Sobre Nosotros", "Contacto"]}
        navbarLogoCss={"text-danger navbar-brand"}
        navbarLogo={"Coder House"}
      />
      {/* Aca va el contenido dinamico */}
        {props.children}
      <Footer/>
    </Fragment>
  );
};

export default Container;
