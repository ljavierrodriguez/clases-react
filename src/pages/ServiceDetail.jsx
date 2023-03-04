import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ServiceDetailCard from '../components/ServiceDetailCard'

const ServiceDetail = () => {
    const [services, setServices] = useState([
        { id: 1, title: 'Service 1', image: 'https://picsum.photos/id/100/800/400' },
        { id: 2, title: 'Service 2', image: 'https://picsum.photos/id/101/800/400' },
        { id: 3, title: 'Service 3', image: 'https://picsum.photos/id/102/800/400' },
    ])

    const [service, setService] = useState(null);

    const { id } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        // componentDidMount
        console.log('Cargando componente Service Detail...');

        setService(services.find((item) => item.id == id));

        return () => {
            // componentWillUnmount
            console.log('Eliminando component Service Detail...');

        }


    }, []);

    useEffect(() => {
        console.log('ha cambiado el id');
        setService(services.find((item) => item.id == id));
    }, [id])


    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <ServiceDetailCard title={service?.title} image={service?.image} />
                    <button className='btn btn-info btn-sm mx-1 mt-2' onClick={() => navigate('/services/'+(Math.floor(Math.random() * 3)+1))}>Ir a otro servicio</button>
                    <button className='btn btn-info btn-sm mx-1 mt-2' onClick={() => navigate('/services/1')}>Ir al servicio 1</button>
                    <button className='btn btn-info btn-sm mx-1 mt-2' onClick={() => navigate('/services/2')}>Ir al servicio 2</button>
                    <button className='btn btn-info btn-sm mx-1 mt-2' onClick={() => navigate('/services/3')}>Ir al servicio 3</button>
                </div>
            </div>
        </div>
    )
}

export default ServiceDetail