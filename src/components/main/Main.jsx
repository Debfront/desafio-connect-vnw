import React from 'react'
import S from './main.module.scss'
import Mundo from '../../assets/images/mundo.png'
 



export default function Main() {
  return (
   <>
   
    <div className= {S.main}>
      <section className= {S.esquerda}>
<h1> Projetos Sociais que tansformam</h1>
<p>Conectamos sua empresa com projetos sociais impactantes. Juntos, criamos mudanças reais na comunidade.</p>
   <button>Cadastrar empresa  </button>
      
      </section>

<section>
  <img src={Mundo} alt="" srcset="" />
</section>
    </div>
   </>
  )
}



