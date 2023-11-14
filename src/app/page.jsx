
import Image from 'next/image'
import React from 'react'
import mysql from '../../public/svg/mysql.svg'
import nextjs from '../../public/svg/nextjs.svg'
import node from '../../public/svg/node.svg'
import postgres from '../../public/svg/postgres.svg'
import tailwind from '../../public/svg/tailwind.svg'
import gimnasia from '../../public/img/gimnasia.png'
import Contact from '../components/contact'

export default function Page() {


  return (
    <main>
      <section className='bannerMe'>
          <div className='my-img' id='my-img'></div>
        <div>
          <div className='my'>
            <h1 id='about-me'>BENJAMIN MONTERO</h1>
            <h3 className='h3'>Full Stack</h3>
          </div>
          <div className='aboutMe'>
            <p>Hola! Soy Benjamin Montero y soy un apasionado desarrollador Full Stack con una gran preferencia por el backend. Tengo 21 años de edad, actualmente estoy finalizando mi carrera en TUDAI en la Facultad de Exactas, Tandil.
            Mi interés por el backend no solo se limita a la escritura de código, sino también a entender cómo las aplicaciones pueden ser mas eficientes, seguras y escalables que no solo cumplan con los requisitos.
            Además de mi dedicación a la programación, disfruto aprendiendo sobre nuevas tecnologías y explorando formas innovadoras de resolver problemas, creo firmemente en el aprendizaje continuo y estoy comprometido a mejorar mis habilidades y conocimientos para seguir siendo relevante en un campo tan dinámico como el desarrollo web.</p>
          </div>
        </div>
      </section>

      <section className='skills' id='skills'>
        <h1>Skills</h1>
        <div className='skills-content'>
          <div className='skills-card'>
              <h3>FrontEnd</h3>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>  
                <li>UX/UI</li>  
              </ul> 
          </div>
          <div className='skills-card'>
              <h3>BackEnd</h3>
              <ul>
                <li>Java</li>
                <li>PHP</li>  
                <li>Node.js + Express</li>  
              </ul> 
          </div>
          <div className='skills-card'>
              <h3>Bases de Datos</h3>
              <ul>
                <li>PostgreSQL</li>
                <li>MySQL</li>    
              </ul> 
          </div>
          <div className='skills-card'>
              <h3>Arquitecturas y Patrones</h3>
              <ul>
                <li>Microservicios</li>
                <li>MVC</li>
                <li>POO</li>    
              </ul> 
          </div>
          <div className='skills-card'>
              <h3>Frameworks</h3>
              <ul>
                <li>React</li>
                <li>Nextjs</li>
                <li>Spring</li> 
                <li>Spring Boot</li>       
              </ul> 
          </div>
          <div className='skills-card'>
              <h3>Herramientas</h3>
              <ul>
                <li>Git</li>
                <li>Docker</li>  
                <li>Figma</li>   
              </ul> 
          </div>
          <div className='skills-card'>
              <h3>Metodologias agiles</h3>
              <ul>
                <li>Scrum</li>        
              </ul> 
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
              <p>Se utilizo: </p><Image src={postgres} alt='postgres'/> <Image src={tailwind} alt='tailwind'/> <Image src={nextjs} alt='nextjs'/> <Image src={node} alt='node'/>
            </div>
          </div>
        </div>
        <div className='card-proyect'>
          <div className='card-proyect-content'>
            <div>
              <h3>Comercio - Web 2</h3>
              <p>En este proyecto se realizo como entrega final de la materia Web 2, en la cual se hizo un CRUD de productos y categorias, donde tambien
                se hizo un Sistema de Usuarios con roles(admin y user). Esto se realizo con PHP, MySQL y Smarty como motor de plantilla.
              </p>
            </div>
            <div className='tecnologies'>
              <p>Se utilizo: </p><Image src={postgres} alt='postges'/> <Image src={mysql} alt='mysql'/>
            </div>
          </div>
          <div className='card-proyect-img'>
            <Image src={gimnasia} alt='torneo' className='img-proyect'/>
            git or web
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
              <p>Se utilizo: </p><Image src={postgres} alt='postgres'/> <Image src={tailwind} alt='tailwind'/> <Image src={nextjs} alt='nextjs'/> <Image src={node} alt='node'/>
            </div>
          </div>
        </div>
      </section>
      <Contact/>
      <footer>
        <p></p>
        <h4>&lt; Benjamin Montero /&gt;</h4>
      </footer>
    </main>
  )
}
