import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import S from "./header.module.scss";

export default function Header() {
 
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  useEffect(() => {
    function menuMobile(){
      setIsMobile(window.innerWidth <= 768)
      if(window.innerWidth > 768){
        setMenuOpen(false)
      }
    }

  window.addEventListener("resize", menuMobile)
  return () => window.removeEventListener('resize', menuMobile)

  },[])



  return (
    <>
    <header className= {S.header}>
      <section>
        <Link to="/">
          <img src={Logo} alt="imagem do logo do site, uma mão segurando um coração" />
        </Link>
      </section>
 { !isMobile && (
      <nav>
        <ul>
          <Link className={S.link}  to="/doacao">Doação</Link>
          <Link className={S.link}  to="/voluntariado"> Voluntariado</Link>
          <Link className={S.link}  to="/mentoria">Mentorias</Link>
          <Link className={S.link}  to="/eventosEP">Eventos</Link>
        </ul>
      </nav>
)}
      <div>
       <div className={S.usuarioContainer}>
  <img 
    className={S.perfil} 
    src="https://avatars.githubusercontent.com/u/50721486?v=4" 
    alt="Perfil" 
    onClick={() => setMenuOpen(!menuOpen)} 
  />
  
    <nav className={menuOpen ? S.menuDropdown : S.closedNav}>
      <ul>
        <li><Link to="/usuario"> Usuário</Link></li>
        <li><Link to="/voluntariado">Meu Voluntariado</Link></li>
           <li><Link to="">Configurações de conta</Link></li>

           {!isMobile && (

              
 <nav>
        <ul>
          <Link className={S.link}  to="/doacao">Doação</Link>
          <Link className={S.link}  to="/voluntariado"> Voluntariado</Link>
          <Link className={S.link}  to="/mentoria">Mentorias</Link>
          <Link className={S.link}  to="/eventosEP">Eventos</Link>
        </ul>
      </nav>
   )}
          
              <li><Link to="/paginaLogin">Sair</Link></li>
              
      </ul>
     
    </nav>
    
  
</div>
      </div>
    </header>
    </>
  );
}

