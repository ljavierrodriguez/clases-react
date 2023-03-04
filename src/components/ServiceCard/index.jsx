import React from 'react'
import { Link } from 'react-router-dom'

const ServiceCard = ({ id, title, image }) => {
    return (
        <div className="card shadow">
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <Link to={"/services/" + id} className="btn btn-primary">Read More</Link>
            </div>
        </div>
    )
}

export default ServiceCard