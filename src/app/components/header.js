import React from 'react'

export default function Header() {
  return (
    <header className="header">
        <nav>
          <ul className='navBar'>
            <a href='#aboutMe'><li className="hover">ABOUT ME</li></a>
            <li>|</li>
            <a href='#skills'><li className="hover">SKILLS</li></a>
            <li>|</li>
            <a><li className="hover">PROYECTS</li></a>
            <li>|</li>
            <a href=''><li className="hover">CONTACT</li></a>
            <button>CV</button>
          </ul>
        </nav>
    </header>
  )
}
