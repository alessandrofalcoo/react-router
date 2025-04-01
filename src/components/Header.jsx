import { NavLink } from "react-router";

export default function Header() {
    return (
        <>
            <header className="m-4">
                <nav
                    className="navbar navbar-expand-sm navbar-light bg-light"
                >
                    <div className="container">
                        <a className="navbar-brand" href="#"><i className="fa fa-long-arrow-down" aria-hidden="true"></i>LOGO</a>
                        <button
                            className="navbar-toggler d-lg-none"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapsibleNavId"
                            aria-controls="collapsibleNavId"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavId">
                            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to={"/"}>Home</NavLink>

                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to={"/products"}>Products</NavLink>

                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to={"/contacts"}>Contacts</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </header >
            <main>
                <h1>Hello World</h1>
            </main>
        </>
    )
}