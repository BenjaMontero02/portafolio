import React from 'react'
import { useForm } from 'react-hook-form'
import Email from './email';
const axios = require('axios');


export default function Contact() {

    const {register, handleSubmit, 
        formState: {errors}
    } = useForm();

    const onSubmit = handleSubmit(async (data) => {
        console.log(data);
        axios.post("/api/send", {
            email: data.email,
            subject: data.subject,
            messageText: data.messageText
        }).then(function (response) {
            console.log(response);
        })
    })

    return (
        <>
        <div className='contact-head'><h1>Contact</h1></div><section className='contact'>
            <div>
                github linkedin whatsapp email
            </div>
            <div>
                <form className='form' onSubmit={onSubmit}>
                    <div>
                        <label htmlFor='email' >Email:</label>
                        <input type='email' {...register("email", {
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
                        <input type='text' {...register("subject", {
                            required: true
                        })}></input>
                        {errors.subject && <span className='error'>Subject is required</span>}
                    </div>
                    <div>
                        <label htmlFor='messageText'>Message:</label>
                        <input type='text' className='input-text' {...register("messageText", {
                            required: true
                        })}></input>
                        {errors.messageText && <span className='error'>message is required</span>}
                    </div>
                    <button type='submit'>SEND</button>
                </form>
            </div>
        </section>
    </>
    )
}
