import SProductCardWidget from "./styles/SProductCardWidget.styled";
import { ProductCardEntity } from "../../../entities";
import getProducts from "../../../services/getProducts";

import { ProductModel } from "../../../entities/ProductCardEntity/model/ProductModel";
import { useEffect, useState } from "react";

const ProductCardWidget = () => {
    const [products, setProducts] = useState<ProductModel[] | null>(null);

    useEffect(() => {
        const fetchProduct = async () => {
            const data = await getProducts();
            setProducts(data);
        };
        fetchProduct();
    }, []);

    if (!products) return <div>Загрузка...</div>;

    return (
        <SProductCardWidget>
            {products.map((product) => (
                <ProductCardEntity key={product.id} product={product} />
            ))}
        </SProductCardWidget>
    );
};

export default ProductCardWidget;