import Footer from './components/shared/Footer';
import Menu from './components/shared/Menu';
import Header from './components/shared/Header';
import Home from './pages/Home';

import './App.css';
import Form from './components/Form';
import { useState } from 'react';

export default function App() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [register, setRegister] = useState({
        name: '',
        username: '',
        password: '',
        rut: ''
    });

    const onMouseOver = (evento, dato) => {
        console.log(evento.type);
        console.log(dato);
    }

    const funcOne = (evento) => {
        console.log(evento.target);
    }

    const funcTwo = (evento) => {
        console.log(evento.clientX)
        console.log(evento.clientY)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(register)
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name,'=',value);
        setRegister((prevState) => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }


    return (
        <>
            {/* Navigation*/}
            <Menu />
            {/* Header*/}
            <Header title={"Shop in style"} subtitle={"With this shop hompeage template"} />
            {/* Section*/}
            {/* <Home /> */}

            {/* <div className="box"
                onClick={(evento) => {
                    funcOne(evento);
                    funcTwo(evento);
                }}

                //onMouseOver={onMouseOver}

                onMouseOver={(evento) => onMouseOver(evento, "dato") }

                onMouseOut={(evento) => {
                    console.log(evento.type);
                }}

            >

            </div> */}

            {/* <Form onSubmit={handleSubmit}>

                <div className="form-group mb-3">
                    <label htmlFor="username" className="form-label">Username:</label>
                    <input type="text" id="username" name="username" value={username} className="form-control" placeholder='johndoe'
                        onChange={(evento) => setUsername(evento.target.value)}
                    />
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="password" className="form-label">Password:</label>
                    <input type="password" id="password" name="password" value={password} className="form-control" placeholder='********'
                        onChange={(evento) => setPassword(evento.target.value)}
                    />
                </div>

                <button className="btn btn-success w-100">Login</button>
            </Form> */}

            <Form onSubmit={handleSubmit}>

                <div className="form-group mb-3">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input type="text" id="name" name="name" value={register.name} className="form-control" placeholder='johndoe'
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="username" className="form-label">Username:</label>
                    <input type="email" id="username" name="username" value={register.username} className="form-control" placeholder='johndoe@gmail.com'
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="password" className="form-label">Password:</label>
                    <input type="password" id="password" name="password" value={register.password} className="form-control" placeholder='********'
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="rut" className="form-label">Rut:</label>
                    <input type="text" id="rut" name="rut" value={register.rut} className="form-control" placeholder='********'
                        onChange={handleChange}
                    />
                </div>

                <button className="btn btn-primary w-100">Register</button>
            </Form>

            {/* Footer*/}
            <Footer />
        </>

    )
}