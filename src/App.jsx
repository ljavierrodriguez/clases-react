import Footer from './components/shared/Footer';
import Menu from './components/shared/Menu';
import Header from './components/shared/Header';
import Home from './pages/Home';

export default function App() {

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