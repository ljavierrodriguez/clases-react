import React from 'react'

const ServiceDetailCard = ({ title, image }) => {

    return (
        <div className="card shadow">
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis cumque repellendus vitae quos eos nam tempora doloremque nulla, nisi reiciendis assumenda iste, eligendi amet velit molestias aspernatur. Asperiores, perspiciatis earum?</p>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis cumque repellendus vitae quos eos nam tempora doloremque nulla, nisi reiciendis assumenda iste, eligendi amet velit molestias aspernatur. Asperiores, perspiciatis earum?</p>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis cumque repellendus vitae quos eos nam tempora doloremque nulla, nisi reiciendis assumenda iste, eligendi amet velit molestias aspernatur. Asperiores, perspiciatis earum?</p>
            </div>
        </div>
    )
}

export default ServiceDetailCard