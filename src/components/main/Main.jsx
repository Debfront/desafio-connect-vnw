import React from "react";
import S from "./main.module.scss";
import Mundo from "../../assets/images/mundo.png";
import img500 from "../../assets/images/img500.png";
import img1200 from "../../assets/images/img1200.png";
import img50 from "../../assets/images/img50.png";
import Footer from "../footer/Footer";

export default function Main() {
  return (
    <>
      <div className={S.main}>
        <section className={S.esquerda}>
          <h1> Projetos Sociais que tansformam</h1>
          <p>
            Conectamos sua empresa com projetos sociais impactantes. Juntos,
            criamos mudanças reais na comunidade.
          </p>
          <button>Cadastrar empresa </button>

         
 <div className={S.numeros}>
         <div className={S.infos}>
      <img src={img500} alt="" srcset="" />
            <p>Empresas voluntarias</p>
         </div>
          <div className={S.infos}>
          <img src={img1200} alt="" srcset="" />
          <p>Projetos realizados</p>
          </div>
            <div className={S.infos}>
           <img src={img50} alt="" srcset="" />
           <p>Vidas impactadas</p>
            </div>

          </div>
        </section>


        <section className="imgMundo">
          <img src={Mundo} alt="" srcset="" />
        </section>
      </div>
      <Footer/>
    </>
  );
}
