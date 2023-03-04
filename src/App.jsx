import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import About from "./pages/About";
import AboutUs from "./pages/Content1";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ServiceDetail from "./pages/ServiceDetail";
import Services from "./pages/Services";
import Content1 from "./pages/Content1";
import Content2 from "./pages/Content2";
import Content3 from "./pages/Content3";

export default function App() {
    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path="/services/:id" element={<ServiceDetail />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />}>
                    <Route path="content1" element={<Content1 />} />
                    <Route path="content2" element={<Content2 />} />
                    <Route path="content3" element={<Content3 />} />
                </Route>
                <Route path="/" element={<Home />}/>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}