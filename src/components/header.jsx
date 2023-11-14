'use client'

import React from 'react'
import Image from 'next/image'
import menu from '../../public/svg/menu.svg'
import close from '../../public/svg/close.svg'

export default function Header() {

  const btnOpen = () => {
    let header = document.getElementById('header');
    let btnOpenId = document.getElementById('btnOpen');
    let btnCloseId = document.getElementById('btnClose');
    let overlay = document.getElementById('overlay');
    btnOpenId.style.display = 'none';
    overlay.style.display = "block";
    header.style.display = 'block';
    btnCloseId.style.display = 'block';
  }

  const btnClose = () => {
    let header = document.getElementById('header');
    let btnOpenId = document.getElementById('btnOpen');
    let btnCloseId = document.getElementById('btnClose');
    let overlay = document.getElementById('overlay');
    header.style.display = 'none';
    overlay.style.display = "none";
    btnCloseId.style.display = 'none';
    btnOpenId.style.display = 'block';
  }

  return (
    <>
    <button className='btn-burger' onClick={btnOpen} id='btnOpen'><Image src={menu}/></button>
    <button className='btn-burger-close' onClick={btnClose} id='btnClose'><Image src={close}/></button>
    <header className="header" id='header'>
      <nav>
        <ul className='navBar' id='navBar'>
          <a href="#about-me"><li className="hover" onClick={btnClose}>ABOUT ME</li></a>
          <li className='barra'>|</li>
          <a href='#skills'><li className="hover" onClick={btnClose}>SKILLS</li></a>
          <li className='barra'>|</li>
          <a href='#proyects'><li className="hover" onClick={btnClose}>PROYECTS</li></a>
          <li className='barra'>|</li>
          <a href='#contact'><li className="hover" onClick={btnClose}>CONTACT</li></a>
          <button>CV</button>
        </ul>
      </nav>
    </header><div className='overlay' id='overlay'></div></>
  )
}
