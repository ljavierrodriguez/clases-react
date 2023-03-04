import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const About = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12">
                    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="https://picsum.photos/id/100/900/400" class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src="https://picsum.photos/id/101/900/400" class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src="https://picsum.photos/id/110/900/400" class="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <h1>About</h1>
                    <ul class="nav nav-tabs">
                        <li class="nav-item">
                            <Link to="/about/content1" className='nav-link'>Content 1</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/about/content2" className='nav-link'>Content 2</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/about/content3" className='nav-link'>Content 3</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <Outlet />
            </div>
        </div>
    )
}

export default About