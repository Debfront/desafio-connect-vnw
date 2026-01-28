import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import S from "./header.module.scss";

export default function Header() {
  return (
    <>
    
    
    <header className= {S.header}>
      <section>
        <Link to="/">
          <img src={Logo} alt="imagem do logo do site, uma mão segurando um coração" />
        </Link>
      </section>

      <nav>
        <ul>
          <Link to="/doacao">Doação</Link>
          <Link to="/voluntariado"> Voluntariado</Link>
          <Link to="/mentoria">Mentorias</Link>
          <Link to="/eventosEP">Eventos</Link>
        </ul>
      </nav>
      <img src="https://avatars.githubusercontent.com/u/50721486?v=4" alt="" />
    </header>
    <Link to="/usuario">Débora Monteiro</Link>
    </>
  );
}

