import Image from 'next/image'
import React from 'react'
import html from '../../public/svg/html.svg'
import css from '../../public/svg/css.svg'
import git from '../../public/svg/git.svg'
import java from '../../public/svg/java.svg'
import js from '../../public/svg/js.svg'
import mysql from '../../public/svg/mysql.svg'
import nextjs from '../../public/svg/nextjs.svg'
import node from '../../public/svg/node.svg'
import php from '../../public/svg/php.svg'
import react from '../../public/svg/react.svg'
import postgres from '../../public/svg/postgres.svg'

export default function page() {
  return (
    <main>
      <section className='bannerMe' id='aboutMe'>
          <div className='my-img'></div>
        <div>
          <div className='my'>
            <h1>Benjamin Montero</h1>
            <h3 className='h3'>Full Stack</h3>
          </div>
          <div className='aboutMe'>
            <p>Hi, I'm Benjamin Montero and I'm a passionate Full Stack developer with a strong preference for the backend. I'm 21 years old, I'm currently finishing my degree at TUDAI in the Faculty of Exactas, Tandil.<br/>
            My interest in the backend is not only limited to writing code, but also to understand how applications can be more efficient, secure and scalable that not only meet requirements.<br/>
            In addition to my dedication to programming, I enjoy learning about new technologies and exploring innovative ways to solve problems, I strongly believe in continuous learning and I am committed to improve my skills and knowledge to remain relevant in such a dynamic field as web development.</p>
          </div>
        </div>
      </section>

      <section className='skills' id='skills'>
        <h1>Skills</h1>
        <div className='skills-content'>
          <div className='card-skills'>
            <Image src={html}/>
            <h4>HTML</h4>
          </div>
          <div className='card-skills'>
            <Image src={css}/>
            <h4>CSS</h4>
          </div>
          <div className='card-skills'>
            <Image src={js}/>
            <h4>JavaScript</h4>
          </div>
          <div className='card-skills'>
            <Image src={react}/>
            <h4>React</h4>
          </div>
          <div className='card-skills'>
            <Image src={nextjs}/>
            <h4>NextJs</h4>
          </div>
          <div className='card-skills'>
            <Image src={html}/>
            <h4>TailwindCSS</h4>
          </div>
          <div className='card-skills'>
            <Image src={html}/>
            <h4>BootStrap</h4>
          </div>
          <div className='card-skills'>
            <Image src={java}/>
            <h4>Java</h4>
          </div>
          <div className='card-skills'>
            <Image src={html}/>
            <h4>SpringBoot</h4>
          </div>
          <div className='card-skills'>
            <Image src={php}/>
            <h4>PHP</h4>
          </div>
          <div className='card-skills'>
            <Image src={node}/>
            <h4>Node + Express</h4>
          </div>
          <div className='card-skills'>
            <Image src={postgres}/>
            <h4>PostgreSQL</h4>
          </div>
          <div className='card-skills'>
            <Image src={mysql}/>
            <h4>MySQL</h4>
          </div>
          <div className='card-skills'>
            <Image src={git}/>
            <h4>Git</h4>
          </div>
          <div className='card-skills'>
            <Image src={html}/>
            <h4>Scrum</h4>
          </div>
          <div className='card-skills'>
            <Image src={html}/>
            <h4>UX/UI</h4>
          </div>
        </div>
      </section>
    </main>
  )
}
