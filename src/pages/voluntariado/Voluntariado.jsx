import React from 'react'
import S from './voluntariado.module.scss';
import Footer from "../../components/footer/Footer";
import MultiraoReciclagem from '../../assets/images/multirao-reciclagem.png';
import AulasTecnologia from '../../assets/images/aulas-tecnologia.png';
import EsporteInclusao from '../../assets/images/esporte-inclusao.png';

export default function Voluntariado() {
 const cards = [
   {
     id:1,
     titulo: "Mutirão de reciclagem",
     descricao: "Coletar materiais recicláveis e orientar sobre descarte consciente.",
     imagem: MultiraoReciclagem,
   },
   {
     id:2,
     titulo: "Aulas de Tecnologia",
     descricao: "Ensinar noções básicas de informática, internet segura e programação. Preparar jovens para o mercado de trabalho digital.",
     imagem: AulasTecnologia,
   },
  {
     id:3,
     titulo: "Esporte e Inclusão",
     descricao: "Organizar treinos e jogos que incentivem a participação de todos. Promover disciplina, saúde e trabalho em equipe entre jovens.",
     imagem: EsporteInclusao,
  }
 ]
 
 
  return (
      <div>
          <main className={S.voluntariadoContainer}>
          <h2>Voluntariado</h2>
    
    <section className={S.cardsGrid}>
            {cards.map(card => (
              <article key={card.id} className={S.card}>
                <img src={card.imagem} alt={card.titulo} />
                <h3>{card.titulo}</h3>
                <p>{card.descricao}</p>
                <button>Quero Doar</button>
              </article>
            ))}
          </section>
          </main>
           <Footer/>
       
        </div>
  )
}
