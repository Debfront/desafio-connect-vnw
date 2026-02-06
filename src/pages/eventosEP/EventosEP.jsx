import React from "react";
import S from "./eventosEp.module.scss";
import Footer from "../../components/footer/Footer";
import EmpoderandoJovens from "../../assets/images/empoderando-jovens-futuro.png";
import TecnologiaTransforma from "../../assets/images/tecnologia-que-transforma.png";
import CarreiraEmprego from "../../assets/images/carreira-primeiro-emprego.png";

export default function EventosEP() {
  const cards = [
    {
      id: 1,
      titulo: "Empoderando Jovens para o Futuro",
      descricao:
        "Atividade: Palestra motivacional sobre liderança jovem e transformação social.Impacto: Inspirar adolescentes a se tornarem agentes de mudança em suas comunidades.",
      imagem: EmpoderandoJovens,
    },
    {
      id: 2,
      titulo: "Tecnologia que Transforma",
      descricao:
        "Atividade: Workshop de introdução à programação e inovação digital.Impacto: Preparar jovens para o mercado de trabalho através da tecnologia.",
      imagem: TecnologiaTransforma,
    },
    {
      id: 3,
      titulo: "Carreira e Primeiro Emprego",
      descricao:
        "Atividade: Palestra com profissionais de RH sobre como preparar currículo, entrevistas e postura no mercado.Impacto: Ajudar jovens a conquistar oportunidades de trabalho.",
      imagem: CarreiraEmprego,
    },
  ];

  return (
    <div>
          <main className={S.eventosContainer}>
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
                 <Footer/>
          </main>
    
       
        </div>
  );
}
