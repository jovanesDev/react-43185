import React from "react";
import NavbarItem from "./NavbarItem";
import "./Navbar.css";





const Navbar = (props) => {
  //const navbarLogo = "CODER HOUSE";
  console.log(props);

  const items = ['Inicio','Categoria','Sobre Nosotros','Inicio']
  return (
    <nav
      className={
        props.className || "navbar navbar-expand-lg navbar-light bg-light"
      }
    >
      <div className="container-fluid">
        <p style={{color:props.textRed ? 'red' : 'inherit'}} className={ props.navbarLogoCss || "navbar-brand"}>
          {props.navbarLogo}
        </p>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {props.items?.map((texto,index) => (
              <NavbarItem key={index} texto={texto} />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
