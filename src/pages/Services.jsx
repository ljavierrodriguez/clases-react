import React, { useState } from 'react'
import ServiceCard from '../components/ServiceCard'

const Services = () => {

    const [services, setServices] = useState([
        { id: 1, title: 'Service 1', image: 'https://picsum.photos/id/100/800/400'},
        { id: 2, title: 'Service 2', image: 'https://picsum.photos/id/101/800/400'},
        { id: 3, title: 'Service 3', image: 'https://picsum.photos/id/102/800/400'},
    ])
  return (
    <div className="container mt-5">
        <div className="row">
            {
                services.map(({ id, title, image }) => {
                    return (
                        <div className="col-md-4" key={id}>
                            <ServiceCard id={id} title={title} image={image} />
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Services