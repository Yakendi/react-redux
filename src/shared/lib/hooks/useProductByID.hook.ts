import { ProductModel } from "../../../model/ProductModel";
import getProductByID from "../../../services/getProductByID";
import { useState } from "react";

const useProductByID = () => {
    const [product, setProduct] = useState<ProductModel | undefined>(undefined);

    const fetchProductByID = async (id: string) => {
        try {
            const data = await getProductByID(id);
            setProduct(data);
        } catch (error) {
            if (error instanceof Error) {
                console.error(`Something went wrong: ${error.message}`);
            }
        }
    };

    return { product, fetchProductByID };
}

export default useProductByID;