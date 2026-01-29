import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import S from "./header.module.scss";

export default function Header() {
 
  const [menuOpen, setMenuOpen] = useState(false);

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
       <div className={S.usuarioContainer}>
  <img 
    className={S.perfil} 
    src="https://avatars.githubusercontent.com/u/50721486?v=4" 
    alt="Perfil" 
    onClick={() => setMenuOpen(!menuOpen)} // Inverte o estado (abre/fecha)
  />

  {/* O menu só aparece se menuOpen for true */}
  {menuOpen && (
    <nav className={S.menuDropdown}>
      <ul>
        <li><Link to="/usuario"> Usuário</Link></li>
        <li><Link to="/voluntariado">Voluntariados</Link></li>
           <li><Link to="">Configurações de conta</Link></li>
              <li><Link to="/paginaLogin">Sair</Link></li>
      </ul>
    </nav>
  )}
</div>
      </div>
    </header>


    </>
  );
}

