import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/c21-logo.png';

function AsideBar() {
  return (
    <aside className='aside-container'>
        <div className='aside-title'>
            <h2>Bem-vindo!</h2>
            <p>Sua melhor experiência imobiliária!</p>
        </div>
        <Link to="/">
            <img src={Logo} alt="Century logo"/>
        </Link>
    </aside>
  )
}

export default AsideBar