import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Bg from '../../assets/bg-1.png';
import './styles.scss';

function RequestPage() {
  return (
    <div className='request-page'>
        <Header />
        <main>
          <h2>Para onde você precisa de suporte?</h2>
          <div className='request-buttons'>
            <Link to="https://google.com.br" target="_blank" rel='noopener noreferrer' className='btn'>Àrea de serviço</Link>
            <Link to="https://google.com.br" target="_blank" rel='noopener noreferrer' className='btn'>Àrea privada</Link>
            <Link to="https://google.com.br" target="_blank" rel='noopener noreferrer' className='btn'>Banheiro</Link>
            <Link to="https://google.com.br" target="_blank" rel='noopener noreferrer' className='btn'>Cozinha</Link>
            <Link to="https://google.com.br" target="_blank" rel='noopener noreferrer' className='btn'>Quarto</Link>
            <Link to="https://google.com.br" target="_blank" rel='noopener noreferrer' className='btn'>Sala</Link>
            <Link to="https://google.com.br" target="_blank" rel='noopener noreferrer' className='btn'>Varanda/Sacada</Link>
          </div>
          <img src={Bg} className='bgOne' alt="background" />
        </main>
    </div>
  )
}

export default RequestPage