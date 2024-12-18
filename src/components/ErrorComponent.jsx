import React from 'react'

export default function ErrorComponent({ message }) {
    return (
        <div>
            <h1>Error</h1>
            <p>{message}</p>
        </div>
    )
}
