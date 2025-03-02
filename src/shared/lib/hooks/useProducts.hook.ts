import { useState, useEffect } from "react";
import { ProductModel } from "../../../entities/ProductCardEntity/model/ProductModel";
import getProducts from "../../../services/getProducts";
const useProduct = () => {
    const [products, setProducts] = useState<ProductModel[]>([]);
    const [error, setError] = useState<string| null>(null);

    useEffect(() => {
        fetchProduct();
    }, []);

    const fetchProduct = async () => {
        try {
            const data = await getProducts();
            setProducts(data);
        } catch (error) {
            if (error instanceof Error) {
                setError(`Something went wrong: ${error.message}`);
            }
        }
    };

    return { products, error };
}

export default useProduct;