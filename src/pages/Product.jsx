import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function Product() {
    const [product, setProduct] = useState(null)
    const { id } = useParams()
    return (
        <>
            <main>
                {
                    !product ? ('Loading...') : (
                        <>

                        </>
                    )
                }
            </main>
        </>
    )
}