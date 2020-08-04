import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem() {
  return (
    <article className="teacher-item">
    <header>
      <img src="https://scontent.fxap1-1.fna.fbcdn.net/v/t1.0-9/116265002_343934986598488_2492856771869200701_n.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_eui2=AeEEx3KlOBwqykM8v016Nj98ceqMj3Tw2GRx6oyPdPDYZLkMNSjZ3HQx3CLFp7tPf1IOwOTtlARW9yQ0pPlNljv_&_nc_ohc=cTBja8AkEtwAX9KNvps&_nc_ht=scontent.fxap1-1.fna&oh=6dc7c3a06319986bb883112c02d43a20&oe=5F4C7C3C" alt="Victor Hugo"/>
      <div>
        <strong>Victor Hugo</strong>
        <span>Química</span>
      </div>
    </header>

    <p>
      Entusiasta das melhores tecnologias de química avançada.
      <br /><br />  
      Apaixonado por explodir cosias em laboratório e por mudar a vida das pessoas através de experiências.
    </p>

    <footer>
      <p>
        Preço/hora
        <strong>R$ 80,00</strong>
      </p>
      <button type="button">
        <img src={whatsappIcon} alt="Whatsapp"/>
        Entrar em contato
      </button>
    </footer>
  </article>
  );
}

export default TeacherItem;