import React from 'react'

export default function Email(props) {
    return (
        <div>
            <h1>{props.email}</h1>
            <h3>{props.subject}</h3>
            <p>{props.message}</p>
        </div>
    )
}
