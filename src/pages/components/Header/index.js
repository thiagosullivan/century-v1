import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../../assets/c21-logo.png';
import Comment from '../../../assets/comment.png';
import Bell from '../../../assets/bell.png';
import Contract from '../../../assets/contract.png';
import ArrowDown from '../../../assets/arrow-down.png';
import './styles.scss';

function Header() {
  return (
    <header>
        <div className='header-content'>
            <Link to="/">
                <img src={Logo} alt="Century Logo" />
                <p>A maior franquia imobiliária do mundo</p>
            </Link>
            <div className='user-custom-data'>
                <h2>Olá, Jorge!</h2>
                <div className='user-custom-icons'>
                    <Link to="/">
                        <img src={Comment} alt="icon" />
                    </Link>
                    <Link to="/">
                        <img src={Bell} alt="icon" />
                    </Link>
                    <Link to="/">
                        <img src={Contract} alt="icon" />
                    </Link>
                </div>
                <p>Gerenciar contratos
                    <img src={ArrowDown} alt="icon" />
                </p>
            </div>
        </div>
    </header>
  )
}

export default Header