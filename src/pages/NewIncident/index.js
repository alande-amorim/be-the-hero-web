import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function NewIncident() {
  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero"/>

          <h1>Cadastrar novo caso</h1>
          <h2>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</h2>

          <Link to="/profile" className="back-link">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar para Home
          </Link>
        </section>

        <form action="">
          <input type="text" placeholder="Título do caso"/>
          <textarea placeholder="Descrição"></textarea>
          <input type="text" placeholder="Whatsapp"/>
          <input type="text" placeholder="Valor em reais" />

          <button className="button">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}
