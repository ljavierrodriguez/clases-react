import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {

    const navigate = useNavigate();

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12 text-center">
                    <div className="alert alert-danger" role="alert">
                        <span className="display-3">
                            Sorry, Page Not Found (404)
                        </span>
                    </div>
                    <button className="btn btn-warning" onClick={() => navigate(-1)}>
                        Regresar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NotFound