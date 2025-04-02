import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import products from "../data/products";

export default function Product() {
    const [product, setProduct] = useState(null)
    const navigate = useNavigate()
    const { id } = useParams() // qui estraggo l'id del singolo prodotto tramite il descruturing

    useEffect(() => {
        const foundProduct = products.find(p => p.id === parseInt(id))
        if (foundProduct) {
            setProduct(foundProduct)
            console.log(foundProduct);


        } else {
            setProduct('Non è stato trovato il prodotto corrispondente')
        }
    }, [id])
    return (
        <>
            <main>
                {
                    !product ? ('Ci dispiace ma al momento il sito è offline per manutenzione') : (
                        <>
                            <div className="container">
                                <div className="gap-5 d-flex">
                                    <div className="col-12 col-md-5">
                                        <img src={product.image} alt="" className="img-fluid my-2" />
                                    </div>
                                    <div className="my-4 py-4">
                                        <button className="back btn btn-primary" onClick={() => navigate(-1)}>
                                            Back
                                        </button>
                                        <div className="card-body">
                                            <h4 className="card-title">{product.name}</h4>
                                            <p className="card-text">{product.description}</p>
                                            <p className="price fw-bold">{product.price}&euro;</p>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </>
                    )
                }
            </main>
        </>
    )
}