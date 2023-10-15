'use client'
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
import gimnasia from '../../public/img/gimnasia.png'

import { useEffect, useState } from 'react';

export default function page() {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const proyectsSection = document.querySelector('.proyects');
      const sectionPosition = proyectsSection.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;

      if (sectionPosition < screenHeight * 0.75) {
        setIsVisible(true);
      }
    };

    document.addEventListener('scroll', handleScroll);

    // Limpia el evento de scroll cuando el componente se desmonta
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []); // El segundo argumento [] asegura que el efecto solo se ejecute una vez al montar el componente








  


  return (
    <main>
      <section className='bannerMe'>
          <div className='my-img'></div>
        <div>
          <div className='my'>
            <h1>BENJAMIN MONTERO</h1>
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
            <i className="devicon-spring-plain colored" width="32px" height="32px"></i>
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
        </div>
        <div className='otherSkills'>
          <div>
            <h4>Other Skills:</h4>
            <p>Scrum - MicroServices - UX/UI</p>
          </div>
        </div>
      </section>
      <div className='fix'><h1 id="proyects">Proyects</h1></div>
      <section className='proyects'>
        <div className='card-proyect'>
          <div className='card-proyect-img'>
            <Image src={gimnasia} alt='torneo' className='img-proyect'/>
            git or web
          </div>
          <div className='card-proyect-content'>
            <div>
              <h3>Torneo Gimnasia - Club Rivadavia</h3>
              <p>Este proyecto fue para un familiar, en el cual se buscaba automatizar la carga de puntaje de las juezas en un torneo de
                gimnasia artistica, las juezas cargaban el puntaje de cada aparato en el cual pasaban las gimnastas por categoria y nivel,
                para luego al finaliazar la pasada, sacar los puntajes y los podios de las mismas.
                Ademas se realizo un CRUD de gimnastas, utilizando NodeJS con SequelizeORM, sobre una db en PostgreSQL
              </p>
            </div>
            <div className='tecnologies'>
              <p>Se utilizo: </p><Image src={postgres}/> <Image src={tailwind}/> <Image src={nextjs}/> <Image src={node}/>
            </div>
          </div>
        </div>
        <div className='card-proyect'>
          <div className='card-proyect-img'>
            <Image src={gimnasia} alt='torneo' className='img-proyect'/>
            git or web
          </div>
          <div className='card-proyect-content'>
            <div>
              <h3>Torneo Gimnasia - Club Rivadavia</h3>
              <p>Este proyecto fue para un familiar, en el cual se buscaba automatizar la carga de puntaje de las juezas en un torneo de
                gimnasia artistica, las juezas cargaban el puntaje de cada aparato en el cual pasaban las gimnastas por categoria y nivel,
                para luego al finaliazar la pasada, sacar los puntajes y los podios de las mismas.
                Ademas se realizo un CRUD de gimnastas, utilizando NodeJS con SequelizeORM, sobre una db en PostgreSQL
              </p>
            </div>
            <div className='tecnologies'>
              <p>Se utilizo: </p><Image src={postgres}/> <Image src={tailwind}/> <Image src={nextjs}/> <Image src={node}/>
            </div>
          </div>
        </div>
        <div className='card-proyect'>
          <div className='card-proyect-img'>
            <Image src={gimnasia} alt='torneo' className='img-proyect'/>
            git or web
          </div>
          <div className='card-proyect-content'>
            <div>
              <h3>Torneo Gimnasia - Club Rivadavia</h3>
              <p>Este proyecto fue para un familiar, en el cual se buscaba automatizar la carga de puntaje de las juezas en un torneo de
                gimnasia artistica, las juezas cargaban el puntaje de cada aparato en el cual pasaban las gimnastas por categoria y nivel,
                para luego al finaliazar la pasada, sacar los puntajes y los podios de las mismas.
                Ademas se realizo un CRUD de gimnastas, utilizando NodeJS con SequelizeORM, sobre una db en PostgreSQL
              </p>
            </div>
            <div className='tecnologies'>
              <p>Se utilizo: </p><Image src={postgres}/> <Image src={tailwind}/> <Image src={nextjs}/> <Image src={node}/>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
