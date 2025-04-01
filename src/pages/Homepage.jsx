export default function Homepage() {
    return (
        <>
            <header className="container d-flex justify-content-center">
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
                                    <a className="nav-link active" href="#" aria-current="page"
                                    >Homepage
                                        <span className="visually-hidden">(current)</span></a
                                    >
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="#">Products</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="#">Contacts</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </header >
            <main>
                <div className="row">
                    <div className="col-4">
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title">Card 1</h3>
                                <p className="card-text">Hello card 1</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title">Card 2</h3>
                                <p className="card-text">Hello card 2</p>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
            <footer>
                <ul className="list-group">
                    <li
                        className="list-group-item d-flex justify-content-between align-items-center active"
                    >
                        Item 1
                        <span className="badge bg-secondary badge-pill">pill1</span>
                    </li>
                    <li
                        className="list-group-item d-flex justify-content-between align-items-center"
                    >
                        Item 2
                        <span className="badge bg-secondary badge-pill">pill2</span>
                    </li>
                    <li
                        className="list-group-item d-flex justify-content-between align-items-center"
                    >
                        Item 3
                        <span className="badge bg-secondary badge-pill">pill3</span>
                    </li>
                </ul>

            </footer>
        </>
    )
}