import React from 'react';
import ReactLoading from "react-loading";

export default function Loading() {
    return (
        <section className='loading-container'>
            <h2>Loading...</h2>
            <ReactLoading type="spokes" color="#0000FF"
                height={200} width={100} />
        </section>
    )
}
