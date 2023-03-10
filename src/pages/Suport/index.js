import React from 'react';
import { Link } from 'react-router-dom';
import AsideBar from '../components/AsideBar';
import './styles.scss';
import Bg from '../../assets/bg-1.png';

function SuportPage() {
  return (
    <div className='suport-page'>
      <AsideBar />
      <main className='suport-page-content'>
        <h2>Certo, o qual tipo de suporte?</h2>
        <div className='suport-page-content-bottom'>
          <Link to="/solicitacoes" className='btn'>Suporte para locatário</Link>
          <Link to="/solicitacoes" className='btn'>Suporte para o proprietário</Link>
          <Link to="/solicitacoes" className='btn'>Suporte para prestador de serviço</Link>
          <Link to="/solicitacoes" className='btn'>Suporte para corretor C21</Link>
        </div>
        <img src={Bg} className='bgOne' alt="background" />
      </main>
    </div>
  )
}

export default SuportPage