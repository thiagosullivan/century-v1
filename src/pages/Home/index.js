import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import Bg from '../../assets/bg-1.png';
import AsideBar from '../components/AsideBar';

function Home() {
  return (
    <div className='home-container'>
        <AsideBar />
        <main className='home-content'>
            <h3>Como podemos te ajudar hoje?</h3>
            <Link to="/suporte" className='btn'>Preciso de suporte</Link>
            <p>ou</p>
            <Link to="/locacao" className='btn'>Quero iniciar uma locação</Link>
            <Link to="/venda" className='btn'>Quero iniciar uma venda</Link>
            <img src={Bg} className='bgOne' alt="background" />
        </main>
    </div>
  )
}

export default Home