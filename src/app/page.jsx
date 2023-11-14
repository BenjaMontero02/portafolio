
import Image from 'next/image'
import React from 'react'
import mysql from '../../public/svg/mysql.svg'
import nextjs from '../../public/svg/nextjs.svg'
import node from '../../public/svg/node.svg'
import postgres from '../../public/svg/postgres.svg'
import tailwind from '../../public/svg/tailwind.svg'
import gimnasia from '../../public/img/gimnasia.png'
import springboot from '../../public/svg/springboot.svg'
import java from '../../public/svg/java.svg'
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
              <h3>App Monopatines - Arquitecturas Web</h3>
              <p>Este proyecto representó el trabajo final de la materia Arquitecturas Web, 
                enfocándose en la aplicación práctica de los conocimientos adquiridos en 
                Spring Boot. Se desarrolló una aplicación con una arquitectura basada en microservicios,
                implementando Spring Cloud Gateway junto con Spring Security + JWT. 
                <br /><br />
                El proyecto se centra en una aplicación dedicada a la gestión de monopatines, donde los usuarios tienen la capacidad de utilizar estos vehículos. 
                La aplicación cuenta con una sólida lógica de negocios que opera en segundo plano. 
                En este caso, el enfoque se limitó al backend.
                <br /><br />
                El sistema consta de cuatro microservicios, siendo el gateway el punto de entrada que se comunica con el microservicio de autenticación (auth). 
                Tras la validación exitosa, redirige las solicitudes al microservicio correspondiente, ya sea para gestionar usuarios o monopatines. 
                La implementación integral y la colaboración efectiva de nuestro equipo permitieron alcanzar un notable resultado en este proyecto
              </p>
            </div>
            <div className='tecnologies'>
              <p>Se utilizo: </p><Image src={postgres} alt='postgres'/> <Image src={mysql} alt='mysql'/> <Image src={java} alt='java'/> <Image src={springboot} alt='springboot'/>
            </div>
          </div>
        </div>
        <div className='card-proyect'>
          <div className='card-proyect-content'>
            <div>
              <h3>Torneo Gimnasia - Club Rivadavia</h3>
              <p>Este proyecto fue desarrollado para facilitar y automatizar el proceso de registro de puntajes por parte de las juezas en un torneo de gimnasia artística. 
                Anteriormente, la carga de puntajes se realizaba manualmente en papel durante otros torneos, lo que implicaba un proceso mas dificil y con limitaciones de tiempo. <br />
                <br /> En la nueva aplicación, las juezas pueden cargar fácilmente los puntajes asignados a cada gimnasta en distintos aparatos, filtradas por categoría y nivel. 
                Una vez completada la evaluación en una categoría, la aplicación realiza automáticamente el cálculo de puntajes y la determinación de los podios. <br />
                <br />Esta nueva aplicacion ha mejorado significativamente la eficiencia del proceso, eliminando la necesidad de sumar los puntajes manualmente y proporcionando resultados más rápidos y precisos. 
                La aplicación ha sido implementada y seguirá siendo utilizada en los torneos organizados por el Club Rivadavia en la disciplina de Gimnasia Artística, mejorando la experiencia tanto para las juezas como para los participantes en el evento.
              </p>
            </div>
            <div className='tecnologies'>
              <p>Se utilizo: </p><Image src={postgres} alt='postgres'/> <Image src={tailwind} alt='tailwind'/> <Image src={nextjs} alt='nextjs'/> <Image src={node} alt='node'/>
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
              <h3>Comercio - Web 2</h3>
              <p>Este proyecto, presentado como trabajo final de la materia Web 2, fue realizado con el propósito de aplicar y poner en práctica los conocimientos adquiridos 
                durante el desarrollo de la misma. Enfocándonos en lo basico de la POO y la comprensión de los conceptos claves de la arquitectura MVC... 
                Se llevó a cabo la creación de un sistema diseñado para gestionar información sobre productos y categorías en un entorno de almacenamiento/mercado. <br />
                <br/>Una parte esencial de este proyecto fue la implementación de una API que realiza operaciones CRUD sobre las entidades de productos y categorías.
                <br />En el aspecto del frontend, se optó por utilizar Smarty como motor de plantillas
              </p>
            </div>
            <div className='tecnologies'>
              <p>Se utilizo: </p><Image src={postgres} alt='postges'/> <Image src={mysql} alt='mysql'/>
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
