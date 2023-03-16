import React from 'react'
import './Header.scss'
import logo from '../../assets/img/Logo.svg'
function Header() {
    return (
        <header className='container-me'>
            <div>
                <img src={logo} alt="" />
                <ul className='head__list'>
                    <li><a href="/">THE STUDIO</a></li>
                    <li><a href="/">PROJECTS</a></li>
                    <li><a href="/">architecture</a></li>
                    <li><a href="/">Blog</a></li>
                </ul>
            </div>
            <button>Contact</button>
        </header>
    )
}

export default Header