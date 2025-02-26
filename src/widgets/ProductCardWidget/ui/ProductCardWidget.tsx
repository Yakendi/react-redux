import SProductCardWidget from "./styles/SProductCardWidget.styled";
import { ProductCardEntity } from "../../../entities";
import getProducts from "../../../services/getProducts";

import { ProductModel } from "../../../entities/ProductCardEntity/model/ProductModel";
import { useEffect, useState } from "react";

const ProductCardWidget = () => {
    const [product, setProduct] = useState<ProductModel | null>(null);

    useEffect(() => {
        const fetchProduct = async () => {
            const data = await getProducts();
            setProduct(data);
        };
        fetchProduct();
    }, []);

    if (!product) return <div>Загрузка...</div>;

    return (
        <SProductCardWidget>
            <ProductCardEntity product={product}/>
            <ProductCardEntity product={product} />
        </SProductCardWidget>
    );
};

export default ProductCardWidget;