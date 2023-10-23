import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import "./index.css"
import Avtorizacia from "./components/Avtorizacia";
import Home from "./components/Home";
import Registracia from "./components/Registracia";

class App extends React.Component {
    render() {
        return (

            <BrowserRouter>
                <header>
                    <Layout />
                </header>
                <Routes>
                    <Route index path="/" element={<Home />} />
                    <Route path="/Avtorizacia" element={<Avtorizacia />} />
                    <Route path="/Registracia" element={<Registracia />} />
                </Routes>
                <footer style={{ height: "70px", width: "100%", backgroundColor: "black", color: "#FFF" }}
                    className="d-flex justify-content-center align-items-center ">
                    <h4>© Copyright</h4>
                </footer>
            </BrowserRouter>
        )
    }
}

var root = document.getElementById("root")
ReactDOM.createRoot(root).render(<App />)