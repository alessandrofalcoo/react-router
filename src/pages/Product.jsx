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
                            <div className="card my-4 py-4">
                                <div className="card-body">
                                    <h4 className="card-title">{product.name}</h4>
                                    <p className="card-text">{product.description}</p>
                                    <p className="price fw-bold">{product.price}&euro;</p>
                                </div>
                            </div>

                        </>
                    )
                }
            </main>
        </>
    )
}