import React from 'react'
import S from "./mentoria.module.scss"
import imgMentoria from "../../assets/images/mentoria-carreira.png"
import imgExperiencia from "../../assets/images/compartilhe-experiencia.png"
import imgAcompanhamento from "../../assets/images/acompanhamento.png"
import Footer from '../../components/footer/Footer'

export default function Mentoria() {
  return (
    <>
    <section className={S.principal}>
        <h2>Mentoria</h2>

        <div className= {S.cards}>
           <article>
            <img src={imgMentoria} alt="imagem de pessoas numa reunião de mentoria" />
            <h3>Mentoria de Carreira e Emprego</h3>
            <p>Orientação sobre currículo, entrevistas e primeiros passos no mercado de trabalho.</p>
            <button>Quero participar</button>
           </article>

            <article>
            <img src={imgExperiencia} alt="imagem pessoas compartilhando experiencias" />
            <h3>Compartilhe Experiência</h3>
            <p> Oriente jovens e profissionais iniciantes em sua área..</p>
            <button>Quero participar</button>
           </article>

          <article>
            <img src= {imgAcompanhamento} alt="imagem de profissional fazendo acompanhamento" />
            <h3>Acompanhamento</h3>
            <p>Participe como guia em jornadas de aprendizado e desenvolvimento.</p>
            <button>Quero participar</button>
           </article>

        </div>
    
          </section>
           <Footer/>
    </>
  )
}
