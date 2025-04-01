export default function Homepage() {
    return (
        <>
            <header>
                <nav
                    class="navbar navbar-expand-sm navbar-light bg-light"
                >
                    <div class="container">
                        <a class="navbar-brand" href="#"><i class="fa fa-long-arrow-down" aria-hidden="true"></i>LOGO</a>
                        <button
                            class="navbar-toggler d-lg-none"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapsibleNavId"
                            aria-controls="collapsibleNavId"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="collapsibleNavId">
                            <ul class="navbar-nav me-auto mt-2 mt-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link active" href="#" aria-current="page"
                                    >Homepage
                                        <span class="visually-hidden">(current)</span></a
                                    >
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" href="#">Products</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" href="#">Contacts</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </header >
            <main>
                <div class="row">
                    <div class="col-4">
                        <div class="card">
                            <div class="card-body">
                                <h3 class="card-title">Card 1</h3>
                                <p class="card-text">Hello card 1</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="card">
                            <div class="card-body">
                                <h3 class="card-title">Card 2</h3>
                                <p class="card-text">Hello card 2</p>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </>
    )
}