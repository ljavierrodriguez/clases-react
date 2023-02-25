import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'; // import css de bootstrap
import 'bootstrap/dist/js/bootstrap.bundle'; // importar libria de bootstrap
import Footer from './components/shared/Footer';
import Menu from './components/shared/Menu';
import Header from './components/shared/Header';
import Home from './pages/Home';

function App() {

    return (
        <>
            {/* Navigation*/}
            <Menu />
            {/* Header*/}
            <Header title={"Shop in style"} subtitle={"With this shop hompeage template"}/>
            {/* Section*/}
            <Home />
            {/* Footer*/}
            <Footer />
        </>

    )
}

ReactDOM.createRoot(document.querySelector('#root')).render(<App />);