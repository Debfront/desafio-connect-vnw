import React, { useState } from "react";
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
          <Link className={S.link}  to="/doacao">Doação</Link>
          <Link className={S.link}  to="/voluntariado"> Voluntariado</Link>
          <Link className={S.link}  to="/mentoria">Mentorias</Link>
          <Link className={S.link}  to="/eventosEP">Eventos</Link>
        </ul>
      </nav>
      <div>
          <Link to="/usuario">
   <img className={S.perfil} src="https://avatars.githubusercontent.com/u/50721486?v=4" alt=""/>
   </Link>
      </div>
      
    </header>


    </>
  );
}

