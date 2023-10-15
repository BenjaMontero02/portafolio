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
import tailwind from '../../public/svg/tailwind.svg'
import bootstrap from '../../public/svg/bootstrap.svg'
import spring from '../../public/svg/spring.svg'
import docker from '../../public/svg/docker.svg'


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
            <p>Hola! Soy Benjamin Montero y soy un apasionado desarrollador Full Stack con una gran preferencia por el backend. Tengo 21 años de edad, actualmente estoy finalizando mi carrera en TUDAI en la Facultad de Exactas, Tandil.<br/>
            Mi interés por el backend no solo se limita a la escritura de código, sino también a entender cómo las aplicaciones pueden ser mas eficientes, seguras y escalables que no solo cumplan con los requisitos.<br/>
            Además de mi dedicación a la programación, disfruto aprendiendo sobre nuevas tecnologías y explorando formas innovadoras de resolver problemas, creo firmemente en el aprendizaje continuo y estoy comprometido a mejorar mis habilidades y conocimientos para seguir siendo relevante en un campo tan dinámico como el desarrollo web.</p>
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
            <Image src={tailwind}/>
            <h4>TailwindCSS</h4>
          </div>
          <div className='card-skills'>
            <Image src={bootstrap}/>
            <h4>Bootstrap</h4>
          </div>
          <div className='card-skills'>
            <Image src={java}/>
            <h4>Java</h4>
          </div>
          <div className='card-skills'>
            <i class="devicon-spring-plain colored" width="32px" height="32px"></i>
            <h4>Spring</h4>
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
            <Image src={docker}/>
            <h4>Docker</h4>
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
