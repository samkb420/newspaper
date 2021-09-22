import React from 'react'
import Progress from './Progress'

function ImageContainer() {
    return (
        <div className="mt-4">
            <h1>Coronavirus</h1>
            <img src="https://hs.mediadelivery.fi/img/658/848ca24379206916612ff9cc73ff4606.jpg.webp" class="img-fluid" alt="..."/>

            <h3 className="mt-2">Coronavirus |something something something something something something something something </h3>

            <p>Tags goes here <span class="badge bg-secondary">New</span><span class="badge bg-secondary">New</span><span class="badge bg-secondary">New</span> </p>

            <Progress/>
        </div>
    )
}

export default ImageContainer
