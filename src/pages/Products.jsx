import { Link } from "react-router"
import products from "../data/products"

export default function Products() {
    return (
        <>
            <main className="m-4">
                <div className="row">
                    {products.map(product => (
                        <div className="col-4" key={product.id}>
                            <div className="card m-3 p-3">
                                <div className="card-body">
                                    <h3 className="card-title">{product.name}</h3>
                                    <p className="price">{product.price}&euro;</p>
                                    <p className="card-text">{product.description}</p>
                                    <Link to={'/products/ ' + product.id} type="button"
                                        className="btn btn-primary">
                                        Seleziona
                                    </Link>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </main>


        </>
    )
}