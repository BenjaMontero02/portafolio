'use client'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
const axios = require('axios');
import Image from 'next/image'
import wsp from "../../public/svg/wsp.svg"
import linkedin from "../../public/svg/in.svg"
import github from "../../public/svg/github.svg"



export default function Contact() {

    const [submit, setSubmit] = useState(false);

    const {register, handleSubmit, 
        formState: {errors}, reset
    } = useForm();

    const onSubmit = handleSubmit(async (data) => {

        axios.post("/api/send", {
            email: data.email,
            subject: data.subject,
            messageText: data.messageText
        })

        setSubmit(true);
        setTimeout(() => {setSubmit(false)}, 3000);
        document.getElementById("send").classList.add("success");
        document.getElementById("email").value = ""
        document.getElementById("subject").value = ""
        document.getElementById("message").value = ""
        

    })

    const sendMessageWsp = () => {
        const phoneNumber = '+5492494208260';
        const whatsappLink = `https://wa.me/${phoneNumber}`;
        window.open(whatsappLink, '_blank');
    }

    const linkToIn = () => {
        const whatsappLink = `https://www.linkedin.com/in/benjaminmontero/`;
        window.open(whatsappLink, '_blank');
    }

    const linkToGh = () => {
        const whatsappLink = `https://github.com/BenjaMontero02`;
        window.open(whatsappLink, '_blank');
    }

    return (
        <>
        <div className='contact-head'><h1 id='contact'>Contact</h1></div>
        <section className='contact'>
            <div className='contact-details'>
                <p>Si llegaste hasta aca espero que te haya gustado conocerme un poco. No dudes en contactarme!</p>
                <p>Te dejo mis redes sociales y un formulario donde podras enviarme un mail.</p>
                <div>
                    <button onClick={linkToIn}><Image src={linkedin} alt='linkedin'/></button>
                    <button onClick={sendMessageWsp}><Image src={wsp} alt='whatsapp'/></button>
                    <button className='gh' onClick={linkToGh}><div className='blank'></div><Image src={github} alt='github'/></button>
                </div>
            </div>
            <div className='form-content'>
                <form className='form' onSubmit={onSubmit}>
                    <div>
                        {submit && <h3 className='submit-message'>Enviado!</h3>}
                        <label htmlFor='email' >Email:</label>
                        <input type='email' id='email' {...register("email", {
                            required: {
                                value: true,
                                message: "Email is required"
                            },
                            pattern: {
                                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                message: "Email is invalid"
                            }
                        })}></input>
                        {errors.email && <span className='error'>{errors.email.message}</span>}
                    </div>
                    <div>
                        <label htmlFor='subject'>Subject:</label>
                        <input type='text' id='subject' {...register("subject", {
                            required: true
                        })}></input>
                        {errors.subject && <span className='error'>Subject is required</span>}
                    </div>
                    <div>
                        <label htmlFor='messageText'>Message:</label>
                        <textarea id='message' className='input-text' {...register("messageText", {
                            required: true
                        })}>
                        </textarea>
                        {errors.messageText && <span className='error'>message is required</span>}
                    </div>
                    
                    <button type='submit' id='send'>SEND</button>
                    
                </form>
            </div>
        </section>
    </>
    )
}
