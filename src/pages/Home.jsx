import React, { useState } from 'react'
import ProductCard from '../components/ProductCard'
import ProductCardBody from '../components/ProductCard/ProductCardBody'
import ProductCardFooter from '../components/ProductCard/ProductCardFooter'
import ProductCardHeader from '../components/ProductCard/ProductCardHeader'
import ProductCardImage from '../components/ProductCard/ProductCardImage'
import ProductCardTitle from '../components/ProductCard/ProductCardTitle'

const Home = () => {
    // object, array, string, number, boolean, null, undefined
    // useState
    // const [value, setValue] = useState(initialValue); // [value, function]

    const [name, setName] = useState("John Doe")
    const [age, setAge] = useState(0);

    const [person, setPerson] = useState({
        name: 'Luis',
        lastname: 'Rodriguez'
    })

    const [notas, setNotas] = useState([
        10, 32, 8, 40, 19, 5, 88, 3
    ])

    const [products, setProducts] = useState([
        { id: 1, title: 'Fancy Product 1', price: '$40.00 - $80.00', url: 'https://picsum.photos/id/233/450/300' },
        { id: 2, title: 'Fancy Product 2', price: '$40.00 - $80.00', url: 'https://picsum.photos/id/237/450/300' },
        { id: 3, title: 'Fancy Product 3', price: '$40.00 - $80.00', url: 'https://picsum.photos/id/503/450/300' },
        { id: 4, title: 'Fancy Product 4', price: '$40.00 - $80.00', url: 'https://picsum.photos/id/290/450/300' },
        { id: 5, title: 'Fancy Product 5', price: '$40.00 - $80.00', url: 'https://picsum.photos/id/120/450/300' },
        { id: 6, title: 'Fancy Product 6', price: '$40.00 - $80.00', url: 'https://picsum.photos/id/98/450/300' },
        { id: 7, title: 'Fancy Product 7', price: '$40.00 - $80.00', url: 'https://picsum.photos/id/765/450/300' },
        { id: 8, title: 'Fancy Product 8', price: '$40.00 - $80.00', url: 'https://picsum.photos/id/768/450/300' },
    ])

    const [categories, setCategories] = useState([
        { id: 1, category: 'Category 1', url: 'https://picsum.photos/id/233/450/300' },
        { id: 2, category: 'Category 2', url: 'https://picsum.photos/id/237/450/300' },
        { id: 3, category: 'Category 3', url: 'https://picsum.photos/id/503/450/300' },
        { id: 4, category: 'Category 4', url: 'https://picsum.photos/id/290/450/300' },
        { id: 5, category: 'Category 5', url: 'https://picsum.photos/id/120/450/300' },
        { id: 6, category: 'Category 6', url: 'https://picsum.photos/id/98/450/300' },
        { id: 7, category: 'Category 7', url: 'https://picsum.photos/id/765/450/300' },
        { id: 8, category: 'Category 8', url: 'https://picsum.photos/id/768/450/300' },
    ])


    const [errors, setErrors] = useState(false);


    const [isAuthenticated, setIsAuthenticated] = useState(true);


    const login = e => {
        e.preventDefault();

        setIsAuthenticated(true);
    }

    if (!isAuthenticated) {
        return (
            <section className="py-5" >
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row">
                        <div className="col-md-12">
                            <h1>No esta autenticado, por favor inicie sesion, haciendo click <a href='#!' onClick={login}>aqui</a></h1>
                        </div>
                    </div>
                </div>
            </section>
        )
    }


    return (
        <>

            {
                errors && (
                    <div className="alert alert-danger" role="alert">
                        A simple danger alert—check it out!
                    </div>
                )
            }

            <button onClick={() => setErrors(!errors)} className={"btn btn-" + (errors ? "success" : "danger")}>
                {errors ? "No hubo" : "Hubo"} Errores
            </button>

            <section className="py-5" >
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row">
                        <div className="col-md-12">
                            {name}
                            <button className="btn btn-primary btn-sm" onClick={() => {
                                setName('Jane Doe')
                            }}>Cambiar Nombre</button>
                            {age}
                            <input type="number" onChange={e => setAge(e.target.value)} min={0} max={10} value={age} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <button className="btn btn-primary" onClick={() => setPerson((prevState) => {
                                return {
                                    ...prevState,
                                    name: 'John'
                                }
                            })}>
                                Asignar Nombre
                            </button>
                            <button className="btn btn-primary" onClick={() => setPerson((prevState) => {
                                return {
                                    ...prevState,
                                    lastname: 'Doe'
                                }
                            })}>
                                Asignar Apellido
                            </button>
                            <button className="btn btn-primary" onClick={() => {

                                //setNotas(notas.concat(Math.floor(Math.random() * 100))) ;

                                //setNotas([...notas, Math.floor(Math.random() * 100)])

                                setNotas((prevState) => [...prevState, Math.floor(Math.random() * 100)])

                            }}>
                                Añadir Nota
                            </button>
                        </div>
                    </div>
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        {
                            products.length > 0 &&
                            products.map(({ id, title, price, url }) => {
                                return (
                                    <div className="col mb-5" key={id}>
                                        {/* <ProductCard title={"Fancy Product 1"} price={"$40.00 - $80.00"} url={"https://picsum.photos/id/233/450/300"} className={"card h-100 shadow"}/> */}
                                        <ProductCard className={"card h-100 shadow"}>
                                            {/* Product image*/}
                                            <ProductCardImage url={url} />
                                            {/* Product details*/}
                                            <ProductCardBody>
                                                <ProductCardTitle title={title} price={price} />
                                            </ProductCardBody>
                                            {/* Product actions*/}
                                            <ProductCardFooter />
                                        </ProductCard>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </section >
            <section className="py-5" >
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        {
                            categories.length > 0 ?
                                categories.map((item) => {
                                    return (
                                        <div className="col mb-5" key={item.id}>
                                            {/* <ProductCard title={"Fancy Product 1"} price={"$40.00 - $80.00"} url={"https://picsum.photos/id/233/450/300"} className={"card h-100 shadow"}/> */}
                                            <ProductCard className={"card h-100 shadow"}>
                                                <ProductCardHeader>{item.category}</ProductCardHeader>
                                                {/* Product image*/}
                                                <ProductCardImage url={item.url} />
                                            </ProductCard>
                                        </div>
                                    )
                                })

                                : (
                                    <div className="col-md-12">
                                        No hay categorias
                                    </div>
                                )
                        }
                    </div>
                </div>
            </section >

        </>
    )
}

export default Home