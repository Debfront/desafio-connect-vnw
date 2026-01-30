import React from 'react'
import S from './doacao.module.scss'
import Footer from "../../components/footer/Footer";
import InstitutoFamilia from "../.././assets/images/instituto-grande-familia.png";
import ProjetoEscola from "../.././assets/images/projeto-futuro-escola.png";
import InstitutoConecta from "../.././assets/images/instituto-conecta-jovem.png";

export default function Doacao() {

const cards = [
  {
    id:1,
    titulo: "Instituto grande familia",
    descricao: "Contribua com alimentos não perecíveis e ajude famílias em situação de vulnerabilidade.",
    imagem: InstitutoFamilia,
  },
  {
    id:2,
    titulo: "Projeto Futuro na Escola",
    descricao: "Doe livros, cadernos, lápis, mochilas e canetas para ajudar jovens a continuarem seus estudos com mais estrutura.",
    imagem: ProjetoEscola,
  },
 {
    id:3,
    titulo: "Instituto Conecta Jovem",
    descricao: "Doe computadores usados, tablets ou celulares em bom estado para permitir que jovens tenham acesso ao mundo digital e novas oportunidades.",
    imagem: InstitutoConecta,
  },

]

  return (
    <div>
      <main className={S.doacaoContainer}>
      <h2>Doação</h2>

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
