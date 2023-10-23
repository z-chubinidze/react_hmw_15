import { Link, Outlet } from "react-router-dom";
import logo from "../logo.jpg"
function Layout() {
    return (
        <div >
           
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid d-lg-flex align-items-center justify-content-between">
                    <Link className="navbar-brand ps-3 text-light" to={"/"}><img src={logo} alt="logo" className="me-3" /> NAVBAR </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="oi oi-menu">MENU</span>
                    </button>
                    <div className="collapse navbar-collapse ms-auto" id="navbarTogglerDemo02">
                        <ul className="navbar-nav   me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link text-light link-1 p-3 p-lg-0 me-4" to={"/Avtorizacia"}>SIGN IN</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light link-1 p-3 p-lg-0" to={"/Registracia"}>REGISTRAION</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

            <Outlet />
        </div>
    )
}

export default Layout