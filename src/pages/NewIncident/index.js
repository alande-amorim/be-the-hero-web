import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function NewIncident() {

  const [ title, setTitle ] = useState('');
  const [ description, setDescription ] = useState('');
  const [ value, setValue ] = useState('');

  const history = useHistory();

  const ongId = localStorage.getItem('ongId');

  async function handleNewIncident(e) {
    e.preventDefault();

    const data = { title, description, value };

    try {
      const response = await api.post('incidents', data, {
        headers: {
          Authorization: ongId
        }
      });

      history.push('/profile');
    } catch (error) {
      alert('Erro ao cadastrar caso. Tente novamente.');
    }
  }

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

        <form onSubmit={ handleNewIncident }>
          <input
            type="text"
            placeholder="Título do caso"
            value={ title }
            onChange={ e => setTitle(e.target.value) }
          />

          <textarea
            placeholder="Descrição"
            value={ description }
            onChange={ e => setDescription(e.target.value) }
          ></textarea>

          <input
            type="text"
            placeholder="Valor em reais"
            value={ value }
            onChange={ e => setValue(e.target.value) }
          />

          <button className="button">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}
